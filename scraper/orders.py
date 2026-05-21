"""
Scrapes Government Schemes from https://www.tn.gov.in/scheme_wise.php (A-Z list)
and Government Orders from the whatsnew table (which includes GO PDFs).

Used for the /api/schemes endpoint.
"""

import re
import requests
from .utils import fetch, clean_text, normalize_date, make_id, absolute_url

TN_BASE = "https://www.tn.gov.in"
SCHEME_WISE_URL = f"{TN_BASE}/scheme_wise.php"
# whatsnew AJAX endpoint (2026 = MjAyNg==)
WHATSNEW_URL = f"{TN_BASE}/test-paginate.php?year=MjAyNg=="

STATUS_KEYWORDS = {
    "ACTIVE": ["active", "in force", "current", "launched", "inaugurated", "implemented"],
    "PENDING": ["pending", "draft", "proposed", "under", "announce"],
}


def scrape(max_schemes: int = 50) -> list[dict]:
    session = requests.Session()
    results: list[dict] = []

    # --- Schemes from scheme_wise.php ---
    soup = fetch(SCHEME_WISE_URL, session)
    if soup:
        for a in soup.select("a[href*='scheme_details']"):
            title = clean_text(a.get_text())
            if not title or len(title) < 5:
                continue
            href = absolute_url(TN_BASE, a.get("href", ""))
            dept = _infer_department(title)
            results.append({
                "title": title,
                "date": "",          # schemes don't have a listed date
                "goNumber": "",
                "department": dept,
                "status": "ACTIVE",
                "statusClass": "status-active",
                "link": href,
                "source": "tn.gov.in",
                "type": "Scheme",
            })
            if len(results) >= max_schemes:
                break

    # --- Government Orders from whatsnew feed ---
    soup_wn = fetch(WHATSNEW_URL, session)
    if soup_wn:
        for row in soup_wn.select("tr.table_row"):
            tds = row.find_all("td", class_="table_data")
            if len(tds) < 2:
                continue
            raw_date = clean_text(tds[0].get_text())
            a_tag = tds[1].find("a")
            title = clean_text(a_tag.get_text()) if a_tag else clean_text(tds[1].get_text())
            href = a_tag["href"] if a_tag and a_tag.get("href") else ""

            # Only include rows that are clearly GOs
            if not _is_go(title):
                continue

            go_num = _extract_go_number(title)
            dept = _infer_department_from_go(title)
            results.append({
                "title": title,
                "date": normalize_date(raw_date),
                "goNumber": go_num,
                "department": dept,
                "status": "ACTIVE",
                "statusClass": "status-active",
                "link": href,
                "source": "tn.gov.in",
                "type": "Government Order",
            })

    # Deduplicate by title
    seen: set[str] = set()
    unique = []
    for item in results:
        key = item.get("title", "")[:80]
        if key and key not in seen:
            seen.add(key)
            unique.append(item)

    for i, item in enumerate(unique, 1):
        item["id"] = make_id(item.get("date", ""), i)

    return unique


def _is_go(title: str) -> bool:
    t = title.lower()
    return bool(re.search(r"\bg\.?\s*o\.?s?\b", t))


def _extract_go_number(title: str) -> str:
    m = re.search(r"G\.?\s*O\.?\s*(?:Ms|Rt|D)?\.?\s*No\.?\s*(\d+)", title, re.IGNORECASE)
    if m:
        return m.group(0)
    return ""


def _infer_department(title: str) -> str:
    DEPTS = [
        "Adi Dravidar", "Agriculture", "BC, MBC", "Co-operation", "Finance",
        "Handlooms", "Labour", "MSME", "Revenue", "Health", "Education",
        "Home", "Highways", "Power", "Water", "Municipal", "Industries",
        "Social Welfare", "Forest", "Fisheries", "Housing", "Tourism",
        "Sports", "IT", "Public Works",
    ]
    t = title.lower()
    for dept in DEPTS:
        if dept.lower() in t:
            return dept
    return "General"


def _infer_department_from_go(title: str) -> str:
    DEPTS = {
        "finance": "Finance",
        "public": "Public",
        "home": "Home",
        "health": "Health",
        "revenue": "Revenue",
        "education": "Education",
        "agriculture": "Agriculture",
        "highways": "Highways",
        "power": "Power",
        "water": "Water Resources",
        "municipal": "Municipal Administration",
        "industries": "Industries",
        "labour": "Labour",
        "social welfare": "Social Welfare",
    }
    t = title.lower()
    for kw, dept in DEPTS.items():
        if kw in t:
            return dept
    return ""
