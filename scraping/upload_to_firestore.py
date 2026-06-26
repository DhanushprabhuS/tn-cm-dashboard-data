"""
Upload scraped Tamil Nadu press releases (results.json) to Firestore pressReleases collection.

Document ID format: YYYYMMDD### (e.g. 20260611001)
Duplicate check: skips docs where dateValue + title already exist in Firestore.
"""

import json
import os
import sys

# Force UTF-8 stdout on Windows so checkmarks/arrows print correctly
if sys.stdout.encoding != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

try:
    import firebase_admin
    from firebase_admin import credentials, firestore
except ImportError:
    print("firebase-admin not found. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "firebase-admin"])
    import firebase_admin
    from firebase_admin import credentials, firestore

from datetime import datetime

# ── Init Firebase ─────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CRED_PATH = os.path.join(SCRIPT_DIR, "..", "cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json")
RESULTS_PATH = os.path.join(SCRIPT_DIR, "results.json")

# The credentials file uses non-breaking spaces (\xC2\xA0 / U+00A0) for indentation
# instead of regular spaces, which JSON rejects. Replace them before parsing.
with open(CRED_PATH, encoding="utf-8-sig") as f:
    raw = f.read().replace(" ", " ")
cred_data = json.loads(raw)
cred = credentials.Certificate(cred_data)
firebase_admin.initialize_app(cred)
db = firestore.client()

# ── Helpers ───────────────────────────────────────────────────────────────────

def format_human_date(dt: datetime) -> str:
    """Returns 'June 11, 2026' (no leading zero on day)."""
    return f"{dt.strftime('%B')} {dt.day}, {dt.strftime('%Y')}"


def split_dept(dept_str: str) -> list:
    """'CMO / Relief' → ['CMO', 'Relief'], 'General' → ['General']."""
    if not dept_str:
        return ["General"]
    parts = [p.strip() for p in dept_str.split("/") if p.strip()]
    return parts if parts else ["General"]


def generate_summary(title: str) -> str:
    """Generate a basic 1-sentence summary from the title when none is provided."""
    return f"Official press release from the Tamil Nadu government regarding: {title}."


def get_max_seq_for_date(date_key: str, date_value: str) -> int:
    """
    Query Firestore for all docs with this dateValue and find the highest
    3-digit sequence suffix on the document ID.
    """
    docs = db.collection("pressReleases").where("dateValue", "==", date_value).stream()
    max_seq = 0
    prefix = date_key  # 8 chars e.g. "20260611"
    for doc in docs:
        doc_id = doc.id
        if doc_id.startswith(prefix) and len(doc_id) == len(prefix) + 3:
            try:
                seq = int(doc_id[len(prefix):])
                max_seq = max(max_seq, seq)
            except ValueError:
                pass
    return max_seq


def title_exists(date_value: str, title: str) -> bool:
    """Return True if a doc with this dateValue+title already exists."""
    docs = (
        db.collection("pressReleases")
        .where("dateValue", "==", date_value)
        .where("title", "==", title)
        .limit(1)
        .stream()
    )
    return any(True for _ in docs)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    with open(RESULTS_PATH, encoding="utf-8") as f:
        data = json.load(f)

    raw_releases = data["press_releases"]
    print(f"Loaded {len(raw_releases)} press releases from results.json")

    # Group by date key (YYYYMMDD), preserving source order within each day
    by_date: dict[str, list] = {}
    for pr in raw_releases:
        date_value = pr.get("parsed_date")  # "2026-06-11" from scraper
        if not date_value:
            print(f"  Warning: no parsed_date for '{pr.get('title', '')}', skipping")
            continue
        dt = datetime.strptime(date_value, "%Y-%m-%d")
        date_key = dt.strftime("%Y%m%d")
        by_date.setdefault(date_key, []).append((dt, pr))

    # Process dates in ascending order
    sorted_dates = sorted(by_date.keys())
    print(f"Dates to process: {sorted_dates}\n")

    # Pre-fetch highest existing sequence per date (one Firestore read per date)
    print("Checking existing Firestore sequences per date...")
    seq_map: dict[str, int] = {}
    for date_key in sorted_dates:
        date_value = f"{date_key[:4]}-{date_key[4:6]}-{date_key[6:]}"
        seq_map[date_key] = get_max_seq_for_date(date_key, date_value)
        print(f"  {date_key}: max existing seq = {seq_map[date_key]}")

    # Build upload list — check duplicates per press release
    print("\nBuilding upload list (checking for duplicates)...")
    upload_list: list[tuple[str, dict]] = []
    skipped = 0

    for date_key in sorted_dates:
        items = by_date[date_key]
        next_seq = seq_map[date_key]

        for dt, pr in items:
            title = pr.get("title", "No title").strip()
            date_value = dt.strftime("%Y-%m-%d")

            if title_exists(date_value, title):
                print(f"  SKIP (dup): {date_key} - {title[:70]}")
                skipped += 1
                continue

            next_seq += 1
            doc_id = f"{date_key}{next_seq:03d}"

            # Department — always an array
            dept = split_dept(pr.get("dept", "General"))

            # URLs — deduplicate image list
            links = pr.get("all_links", {})
            image_urls = list(dict.fromkeys(links.get("images", [])))
            pdf_urls = links.get("pdfs", [])

            doc = {
                "id": doc_id,
                "date": format_human_date(dt),
                "dateValue": date_value,
                "dept": dept,
                "title": title,
                "summary": generate_summary(title),
                "imageUrls": image_urls,
                "pdfUrls": pdf_urls,
            }

            upload_list.append((doc_id, doc))

    print(f"\n  -> {len(upload_list)} new records to upload, {skipped} duplicates skipped")

    if not upload_list:
        print("Nothing to upload. Done.")
        return

    # Batch upload (400 ops per batch — safely under Firestore 500 limit)
    CHUNK = 400
    print("\nUploading to Firestore pressReleases collection...")
    for i in range(0, len(upload_list), CHUNK):
        batch = db.batch()
        chunk = upload_list[i : i + CHUNK]
        for doc_id, doc in chunk:
            ref = db.collection("pressReleases").document(doc_id)
            batch.set(ref, doc)
        batch.commit()
        print(f"  ✓ Committed {min(i + CHUNK, len(upload_list))}/{len(upload_list)}")

    print("\n✅ Upload complete.")
    print(f"   Uploaded : {len(upload_list)}")
    print(f"   Skipped  : {skipped}")


if __name__ == "__main__":
    main()
