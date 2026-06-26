"""
daily_pipeline.py — Scrape today's (or any date's) TN press releases and upload to Firestore.

Usage:
  python daily_pipeline.py                  # today
  python daily_pipeline.py --date 2026-06-25  # specific date

Credentials:
  Local  : reads ../cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json
  CI/CD  : reads FIREBASE_SA_KEY env var (JSON string of the service account)
"""

import argparse
import base64
import json
import os
import re
import sys
from datetime import datetime

import requests
from bs4 import BeautifulSoup
import firebase_admin
from firebase_admin import credentials, firestore

# ── Stdout UTF-8 (Windows fix) ────────────────────────────────────────────────
if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

# ── Firebase init ─────────────────────────────────────────────────────────────
def _init_firebase():
    sa_env = os.environ.get("FIREBASE_SA_KEY")
    if sa_env:
        cred_data = json.loads(sa_env)
    else:
        cred_path = os.path.join(
            os.path.dirname(os.path.abspath(__file__)),
            "..",
            "cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json",
        )
        with open(cred_path, encoding="utf-8-sig") as f:
            # File uses non-breaking spaces (U+00A0) as indentation — replace before parsing
            cred_data = json.loads(f.read().replace(" ", " "))
    firebase_admin.initialize_app(credentials.Certificate(cred_data))
    return firestore.client()

db = _init_firebase()

# ── Scraper ───────────────────────────────────────────────────────────────────
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    )
}

def _archive_url(dt: datetime) -> str:
    m = base64.b64encode(dt.strftime("%m").encode()).decode()
    y = base64.b64encode(dt.strftime("%Y").encode()).decode()
    return f"https://www.tn.gov.in/press_release_archieves.php?field_press_month_value={m}&field_press_date_value={y}"

def _parse_site_date(text: str) -> datetime | None:
    text = re.sub(r"(\d+)(st|nd|rd|th)", r"\1", text.strip())
    for fmt in ("%B %d ,%Y", "%B %d, %Y", "%B %d %Y",
                "%b %d ,%Y",  "%b %d, %Y",  "%b %d %Y"):
        try:
            return datetime.strptime(text, fmt)
        except ValueError:
            continue
    return None

def _extract_item(item, date_label: str) -> dict | None:
    title_el = item.find("p", class_="list-group-item-text")
    title = title_el.get_text(strip=True) if title_el else "No title"

    main_link, pdf_links, image_links = None, [], []
    for a in item.find_all("a", href=True):
        href = a["href"]
        if "press_release" not in href:
            continue
        if href.lower().endswith(".pdf"):
            pdf_links.append(href)
        else:
            image_links.append(href)
            if not main_link:
                main_link = href

    return {
        "title": title,
        "date": date_label,
        "parsed_date": None,          # filled by caller
        "dept": _determine_dept(title),
        "all_links": {
            "main": main_link,
            "pdfs": pdf_links,
            "images": image_links,
        },
    }

def _determine_dept(title: str) -> str:
    t = title.lower()
    if any(k in t for k in ["chief minister", "honble chief minister", "cmo"]):
        return "CMO"
    kw = {
        "Health":                      ["health", "medical", "hospital", "family welfare"],
        "Education":                   ["school education", "education", "sslc", "library"],
        "Forests":                     ["forest", "environment"],
        "Revenue":                     ["revenue", "disaster management"],
        "Public Works":                ["public works", "sports development"],
        "Housing":                     ["housing", "urban development"],
        "Labour":                      ["labour", "skill development", "employment"],
        "Food and Civil Supplies":     ["food", "civil supplies", "warehousing"],
        "Co-operation":                ["co-operation", "cooperation"],
        "Water Resources":             ["water resources", "irrigation"],
        "Electricity":                 ["electricity", "energy"],
        "Adi Dravidar and Tribal Welfare": ["adi dravidar", "tribal welfare"],
        "Information and Publicity":   ["information", "publicity", "tamil development"],
    }
    for dept, keys in kw.items():
        if any(k in t for k in keys):
            return dept
    return "General"

def scrape_date(target_dt: datetime) -> list[dict]:
    """Return all press releases for target_dt as raw dicts."""
    today = datetime.now().date()
    is_today = target_dt.date() == today

    if is_today:
        # Live page — filter by today's date label
        url = "https://www.tn.gov.in/press_release.php"
        date_label = f"{target_dt.strftime('%B')} {target_dt.day} ,{target_dt.year}"
    else:
        url = _archive_url(target_dt)
        date_label = None          # will match by parsed date

    print(f"  Fetching: {url}")
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
    except requests.RequestException as e:
        print(f"  ERROR fetching page: {e}")
        return []

    soup = BeautifulSoup(resp.content, "html.parser")
    results = []

    for item in soup.find_all("li", class_="pr-list-group-item"):
        date_span = item.find("span", class_="tag-label")
        if not date_span:
            continue
        raw_date = date_span.get_text(strip=True)
        item_dt = _parse_site_date(raw_date)

        if is_today:
            # Match on label string (live page)
            if date_label not in raw_date:
                continue
            item_dt = target_dt
        else:
            if item_dt is None or item_dt.date() != target_dt.date():
                continue

        pr = _extract_item(item, raw_date)
        if pr:
            pr["parsed_date"] = item_dt.strftime("%Y-%m-%d")
            results.append(pr)

    return results

# ── Firestore helpers ─────────────────────────────────────────────────────────
def _get_max_seq(date_key: str, date_value: str) -> int:
    docs = db.collection("pressReleases").where("dateValue", "==", date_value).stream()
    max_seq = 0
    for doc in docs:
        if doc.id.startswith(date_key) and len(doc.id) == len(date_key) + 3:
            try:
                max_seq = max(max_seq, int(doc.id[len(date_key):]))
            except ValueError:
                pass
    return max_seq

def _title_exists(date_value: str, title: str) -> bool:
    docs = (
        db.collection("pressReleases")
        .where("dateValue", "==", date_value)
        .where("title", "==", title)
        .limit(1)
        .stream()
    )
    return any(True for _ in docs)

# ── Formatters ────────────────────────────────────────────────────────────────
def _human_date(dt: datetime) -> str:
    return f"{dt.strftime('%B')} {dt.day}, {dt.strftime('%Y')}"

def _split_dept(dept_str: str) -> list[str]:
    if not dept_str:
        return ["General"]
    parts = [p.strip() for p in dept_str.split("/") if p.strip()]
    return parts or ["General"]

def _summary(title: str) -> str:
    return f"Official press release from the Tamil Nadu government regarding: {title}."

# ── Upload ────────────────────────────────────────────────────────────────────
def upload(raw_releases: list[dict]) -> tuple[int, int]:
    """Format and upload press releases. Returns (uploaded, skipped)."""
    # Group by date
    by_date: dict[str, list] = {}
    for pr in raw_releases:
        date_value = pr.get("parsed_date")
        if not date_value:
            continue
        dt = datetime.strptime(date_value, "%Y-%m-%d")
        by_date.setdefault(dt.strftime("%Y%m%d"), []).append((dt, pr))

    uploaded, skipped = 0, 0
    upload_list: list[tuple[str, dict]] = []

    for date_key in sorted(by_date):
        date_value = f"{date_key[:4]}-{date_key[4:6]}-{date_key[6:]}"
        next_seq = _get_max_seq(date_key, date_value)
        print(f"  {date_key}: current max seq = {next_seq}")

        for dt, pr in by_date[date_key]:
            title = pr.get("title", "No title").strip()
            if _title_exists(date_value, title):
                print(f"    SKIP (dup): {title[:70]}")
                skipped += 1
                continue

            next_seq += 1
            doc_id = f"{date_key}{next_seq:03d}"
            links = pr.get("all_links", {})

            upload_list.append((doc_id, {
                "id": doc_id,
                "date": _human_date(dt),
                "dateValue": date_value,
                "dept": _split_dept(pr.get("dept", "General")),
                "title": title,
                "summary": _summary(title),
                "imageUrls": list(dict.fromkeys(links.get("images", []))),
                "pdfUrls": links.get("pdfs", []),
            }))

    # Batch write
    CHUNK = 400
    for i in range(0, len(upload_list), CHUNK):
        batch = db.batch()
        for doc_id, doc in upload_list[i : i + CHUNK]:
            batch.set(db.collection("pressReleases").document(doc_id), doc)
        batch.commit()
        uploaded += len(upload_list[i : i + CHUNK])
        print(f"  Committed {min(i + CHUNK, len(upload_list))}/{len(upload_list)}")

    return uploaded, skipped

# ── Entry point ───────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="Scrape TN press releases and upload to Firestore.")
    parser.add_argument("--date", type=str, default=None,
                        help="Date to scrape YYYY-MM-DD (default: today)")
    args = parser.parse_args()

    target_dt = datetime.strptime(args.date, "%Y-%m-%d") if args.date else datetime.now()
    date_str = target_dt.strftime("%Y-%m-%d")

    print(f"\n=== TN Press Release Pipeline — {date_str} ===")
    print("\n[1/2] Scraping...")
    releases = scrape_date(target_dt)
    print(f"  Found {len(releases)} press releases")

    if not releases:
        print("  Nothing to upload.")
        return

    print("\n[2/2] Uploading to Firestore...")
    uploaded, skipped = upload(releases)

    print(f"\nDone. Uploaded: {uploaded} | Skipped (duplicates): {skipped}")

if __name__ == "__main__":
    main()
