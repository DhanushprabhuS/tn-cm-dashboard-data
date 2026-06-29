#!/usr/bin/env python3
"""
daily_pipeline.py — Scrape Tamil Nadu government press releases and upload to Firestore.

Reads Firebase service account credentials from the FIREBASE_SA_KEY environment variable
(full JSON content, not a file path).

Usage:
    python scraping/daily_pipeline.py                   # scrape today
    python scraping/daily_pipeline.py --date 2026-06-29 # scrape a specific date
"""

import argparse
import json
import os
import sys
from datetime import datetime

import firebase_admin
from firebase_admin import credentials, firestore

# ── import the existing scraper ──────────────────────────────────────────────
sys.path.insert(0, os.path.dirname(__file__))
from press_release_script import scrape_tn_press_releases


# ── Firebase initialisation ──────────────────────────────────────────────────

def init_firebase():
    """Initialise Firebase app from the FIREBASE_SA_KEY environment variable."""
    sa_json = os.environ.get("FIREBASE_SA_KEY")
    if not sa_json:
        raise RuntimeError("FIREBASE_SA_KEY environment variable is not set.")

    sa_dict = json.loads(sa_json)
    cred = credentials.Certificate(sa_dict)
    firebase_admin.initialize_app(cred)
    return firestore.client()


# ── Firestore upload ─────────────────────────────────────────────────────────

def upload_press_releases(db, releases):
    """Upload press releases to Firestore, skipping duplicates."""
    collection = db.collection("pressReleases")
    uploaded = 0
    skipped = 0

    for pr in releases:
        # Use primary_link as a stable document ID (base64-encode to make it safe).
        import base64 as b64mod
        doc_id = b64mod.urlsafe_b64encode(
            (pr.get("primary_link") or pr["title"]).encode()
        ).decode().rstrip("=")

        doc_ref = collection.document(doc_id)
        snap = doc_ref.get()

        if snap.exists:
            print(f"  [skip]   {pr['title'][:80]}")
            skipped += 1
        else:
            pr["uploaded_at"] = datetime.utcnow().isoformat() + "Z"
            doc_ref.set(pr)
            print(f"  [upload] {pr['title'][:80]}")
            uploaded += 1

    return uploaded, skipped


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Daily TN press-release pipeline")
    parser.add_argument(
        "--date",
        default="",
        help="Date to scrape in YYYY-MM-DD format. Leave blank for today.",
    )
    args = parser.parse_args()

    target_date = args.date.strip() or None

    # 1. Scrape
    print(f"Scraping press releases for: {target_date or 'today'}")
    result = scrape_tn_press_releases(target_date)
    releases = result.get("press_releases", [])
    print(f"Found {len(releases)} press release(s).")

    if not releases:
        print("Nothing to upload. Exiting.")
        return

    # 2. Upload
    print("Initialising Firebase…")
    db = init_firebase()

    print("Uploading to Firestore collection 'pressReleases'…")
    uploaded, skipped = upload_press_releases(db, releases)
    print(f"Done. uploaded={uploaded}, skipped={skipped}")


if __name__ == "__main__":
    main()
