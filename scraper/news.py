"""
Scrapes What's New / News updates from:
  https://www.tn.gov.in/test-paginate.php?year=MjAyNg==  (AJAX endpoint)

HTML structure (table):
  <tr class="table_row">
    <td class="table_data">May 21, 2026</td>
    <td class="table_data"><a href="...">Title text</a></td>
  </tr>
"""

import requests
from datetime import datetime
from .utils import fetch, clean_text, normalize_date, make_id, absolute_url

# Base64-encoded years for the API
YEARS = {
    "2026": "MjAyNg==",
    "2025": "MjAyNQ==",
}

PAGINATE_URL = "https://www.tn.gov.in/test-paginate.php?year={year_enc}"
TN_BASE = "https://www.tn.gov.in"

CATEGORY_KEYWORDS = {
    "GO": ["g. os", "g.o", "government order"],
    "Meeting": ["called on", "meeting", "met ", "delegation", "conference"],
    "Policy": ["scheme", "policy", "launched", "inaugurated", "announced"],
    "Assembly": ["assembly", "session", "legislature", "bill", "passed"],
    "Announcement": ["press release", "notification", "circular"],
}


def scrape(years: list[str] = None) -> list[dict]:
    if years is None:
        current_year = str(datetime.today().year)
        years = [current_year]

    session = requests.Session()
    results = []

    for year in years:
        enc = YEARS.get(year, "")
        if not enc:
            continue
        url = PAGINATE_URL.format(year_enc=enc)
        soup = fetch(url, session)
        if not soup:
            continue
        results.extend(_parse(soup, year))

    # Deduplicate by title
    seen: set[str] = set()
    unique = []
    for item in results:
        key = item.get("text", "")[:80]
        if key and key not in seen:
            seen.add(key)
            unique.append(item)

    for i, item in enumerate(unique, 1):
        item["id"] = make_id(item["date"], i)

    return unique


def _parse(soup, year: str) -> list[dict]:
    items = []
    for row in soup.select("tr.table_row"):
        tds = row.find_all("td", class_="table_data")
        if len(tds) < 2:
            continue

        raw_date = clean_text(tds[0].get_text())
        link_tag = tds[1].find("a")
        text = clean_text(link_tag.get_text()) if link_tag else clean_text(tds[1].get_text())
        href = link_tag["href"] if link_tag and link_tag.get("href") else ""
        if href and not href.startswith("http"):
            href = absolute_url(TN_BASE, href)

        if not text or len(text) < 5:
            continue

        items.append({
            "text": text,
            "date": normalize_date(raw_date),
            "link": href,
            "category": _categorize(text),
            "source": "tn.gov.in",
        })

    return items


def _categorize(text: str) -> str:
    t = text.lower()
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(kw in t for kw in keywords):
            return cat
    return "General"
