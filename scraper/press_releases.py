"""
Scrapes press releases from https://www.tn.gov.in/press_release.php

HTML structure:
  <li class="list-group-item pr-list-group-item clearfix">
    <span class="tag-label">May 21 ,2026</span>
    <p class="list-group-item-text">Title text</p>
    <a href="https://cms.tn.gov.in/...">link</a>
    optionally: <h2><a>Press Release No: 056</a></h2>
  </li>
"""

import re
import requests
from .utils import fetch, clean_text, normalize_date, make_id, absolute_url

BASE_URL = "https://www.tn.gov.in/press_release.php"
SEARCH_URL = "https://www.tn.gov.in/press_release_search.php"
TN_BASE = "https://www.tn.gov.in"


def scrape(max_pages: int = 5) -> list[dict]:
    session = requests.Session()
    results = []

    # Page 1
    soup = fetch(BASE_URL, session)
    if soup:
        results.extend(_parse(soup))

    # Paginated pages (site uses ?page=N or separate form-based pagination)
    for page in range(2, max_pages + 1):
        page_url = f"{BASE_URL}?page={page}"
        soup = fetch(page_url, session)
        if not soup:
            break
        items = _parse(soup)
        if not items:
            break
        results.extend(items)

    # Deduplicate by title
    seen: set[str] = set()
    unique = []
    for item in results:
        key = item.get("title", "")[:80]
        if key and key not in seen:
            seen.add(key)
            unique.append(item)

    for i, item in enumerate(unique, 1):
        item["id"] = make_id(item["date"], i)

    return unique


def _parse(soup) -> list[dict]:
    items = []
    for li in soup.select("li.pr-list-group-item"):
        title_tag = li.select_one("p.list-group-item-text")
        title = clean_text(title_tag.get_text()) if title_tag else ""

        # Fallback: any <a> text that isn't a number
        if not title:
            for a in li.find_all("a"):
                t = clean_text(a.get_text())
                if len(t) > 15 and not t.startswith("Press Release No"):
                    title = t
                    break

        if not title or len(title) < 5:
            continue

        date_tag = li.select_one("span.tag-label")
        raw_date = clean_text(date_tag.get_text()) if date_tag else ""
        raw_date = raw_date.replace("\xa0", " ").strip()

        # PR number (optional)
        pr_num_tag = li.select_one("h2 a")
        pr_number = clean_text(pr_num_tag.get_text()) if pr_num_tag else ""

        # Document link — prefer PDF/image link over generic page link
        link = ""
        for a in li.find_all("a", href=True):
            href = a["href"]
            if href.startswith("http") and ("cms.tn.gov.in" in href or href.endswith(".pdf") or href.endswith(".jpg") or href.endswith(".JPG")):
                link = href
                break
        if not link:
            a_tag = li.find("a", href=True)
            link = absolute_url(TN_BASE, a_tag["href"]) if a_tag else ""

        items.append({
            "title": title,
            "date": normalize_date(raw_date),
            "prNumber": pr_number,
            "link": link,
            "source": "tn.gov.in",
            "category": "Press Release",
        })

    return items
