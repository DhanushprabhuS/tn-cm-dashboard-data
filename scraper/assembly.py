"""
Scrapes Tamil Nadu assembly information from:
  - https://www.tnlegislature.tn.gov.in/  (session log)
  - https://www.tnlegislature.tn.gov.in/assmbly.php
  - https://www.tnlegislature.tn.gov.in/business.php  (upcoming business)

Falls back to tn.gov.in whatsnew for assembly-related entries.
"""

import re
import requests
from .utils import fetch, clean_text, normalize_date, make_id, absolute_url

LEG_BASE = "https://www.tnlegislature.tn.gov.in"
TN_BASE = "https://www.tn.gov.in"
WHATSNEW_URL = f"{TN_BASE}/test-paginate.php?year=MjAyNg=="

ASSEMBLY_URLS = [
    f"{LEG_BASE}/assmbly.php",
    f"{LEG_BASE}/",
    f"{LEG_BASE}/business.php",
]

ASSEMBLY_KEYWORDS = ["assembly", "session", "legislature", "bill", "mla", "speaker", "trust vote"]


def scrape_sessions() -> list[dict]:
    session = requests.Session()
    results: list[dict] = []

    # Try legislature site first
    for url in ASSEMBLY_URLS:
        soup = fetch(url, session)
        if not soup:
            continue
        items = _parse_session_table(soup, url)
        if items:
            results.extend(items)
            break

    # Fallback: extract assembly entries from whatsnew
    if not results:
        soup = fetch(WHATSNEW_URL, session)
        if soup:
            for row in soup.select("tr.table_row"):
                tds = row.find_all("td", class_="table_data")
                if len(tds) < 2:
                    continue
                raw_date = clean_text(tds[0].get_text())
                a_tag = tds[1].find("a")
                text = clean_text(a_tag.get_text()) if a_tag else clean_text(tds[1].get_text())
                href = a_tag["href"] if a_tag and a_tag.get("href") else ""

                if not _is_assembly(text):
                    continue

                results.append({
                    "title": text,
                    "date": normalize_date(raw_date),
                    "sessionNumber": _extract_session_number(text),
                    "details": "",
                    "link": href,
                    "source": "tn.gov.in",
                })

    for i, item in enumerate(results, 1):
        item["id"] = make_id(item.get("date", ""), i)

    return results


def scrape_calendar() -> list[dict]:
    session = requests.Session()
    results: list[dict] = []

    for url in ASSEMBLY_URLS:
        soup = fetch(url, session)
        if not soup:
            continue
        items = _parse_calendar(soup)
        if items:
            results.extend(items)
            break

    for i, item in enumerate(results, 1):
        item["id"] = make_id(item.get("date", ""), i)

    return results


# ---------------------------------------------------------------------------
# Parsers
# ---------------------------------------------------------------------------

def _parse_session_table(soup, base_url: str) -> list[dict]:
    items = []
    for row in soup.select("table tr"):
        cols = row.find_all(["td"])
        if len(cols) < 2:
            continue
        texts = [clean_text(c.get_text()) for c in cols]
        title = texts[0]
        if not title or len(title) < 5:
            continue
        date_str = _find_date(texts)
        a_tag = row.find("a", href=True)
        href = absolute_url(base_url, a_tag["href"]) if a_tag else ""
        items.append({
            "title": title,
            "date": normalize_date(date_str),
            "sessionNumber": _extract_session_number(title),
            "details": texts[-1] if len(texts) > 2 else "",
            "link": href,
            "source": "tnlegislature.tn.gov.in",
        })

    if not items:
        for card in soup.select("article, .session-item, li"):
            h = card.find(["h2", "h3", "h4", "a"])
            if not h:
                continue
            title = clean_text(h.get_text())
            if len(title) < 5:
                continue
            date_tag = card.find(["time", "span"], class_=lambda c: c and "date" in (c or "").lower())
            date_str = clean_text(date_tag.get_text()) if date_tag else ""
            a_tag = card.find("a", href=True)
            href = absolute_url(base_url, a_tag["href"]) if a_tag else ""
            items.append({
                "title": title,
                "date": normalize_date(date_str),
                "sessionNumber": _extract_session_number(title),
                "details": "",
                "link": href,
                "source": "tnlegislature.tn.gov.in",
            })

    return items


def _parse_calendar(soup) -> list[dict]:
    items = []
    for row in soup.select("table tr"):
        cols = row.find_all(["td"])
        if len(cols) < 2:
            continue
        texts = [clean_text(c.get_text()) for c in cols]
        title = texts[0]
        if not title or len(title) < 5:
            continue
        date_str = _find_date(texts)
        items.append({
            "event": title,
            "date": normalize_date(date_str),
            "type": _classify_event(title),
            "status": "Upcoming",
            "source": "tnlegislature.tn.gov.in",
        })
    return items


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _find_date(texts: list[str]) -> str:
    pat = re.compile(r"\d{1,2}[./-]\d{1,2}[./-]\d{2,4}|\d{4}-\d{2}-\d{2}|[A-Z][a-z]+ \d{1,2},? \d{4}")
    for t in texts:
        m = pat.search(t)
        if m:
            return m.group()
    return ""


def _is_assembly(text: str) -> bool:
    t = text.lower()
    return any(kw in t for kw in ASSEMBLY_KEYWORDS)


def _extract_session_number(title: str) -> str:
    m = re.search(r"(\d+)(?:st|nd|rd|th)?\s+session", title, re.IGNORECASE)
    return m.group(1) if m else ""


def _classify_event(title: str) -> str:
    t = title.lower()
    if "budget" in t:
        return "Budget"
    if "bill" in t:
        return "Legislation"
    if "session" in t:
        return "Session"
    if "holiday" in t or "recess" in t:
        return "Recess"
    return "General"
