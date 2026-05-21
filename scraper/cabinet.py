"""
Scrapes cabinet ministers from https://www.tn.gov.in/minister_list.php

HTML structure (inside div#changable_content):
  <div class="... minister_col_description">
    <h4 class="mb-2 mt-0">Thiru C. Joseph Vijay</h4>
    <h4>Honourable Chief Minister</h4>
    <p class="p_tag">Portfolio text...</p>
  </div>
  Sibling div.minister_col_img contains:
    <img src="https://cms.tn.gov.in/.../photo.jpg">
"""

import requests
from .utils import fetch, clean_text, make_id, absolute_url

MINISTER_URL = "https://www.tn.gov.in/minister_list.php"
TN_BASE = "https://www.tn.gov.in"
CMS_BASE = "https://cms.tn.gov.in"


def scrape() -> list[dict]:
    session = requests.Session()
    soup = fetch(MINISTER_URL, session)
    if not soup:
        return []

    ministers = _parse(soup)
    for i, m in enumerate(ministers, 1):
        m["id"] = make_id("", i)
    return ministers


def _parse(soup) -> list[dict]:
    ministers = []

    # Each minister row has a parent flex div containing:
    # .minister_col_number | .minister_col_img | .minister_col_description
    for desc_div in soup.select(".minister_col_description"):
        h4_tags = desc_div.find_all("h4")
        if not h4_tags:
            continue

        name = clean_text(h4_tags[0].get_text())
        role = clean_text(h4_tags[1].get_text()) if len(h4_tags) > 1 else ""

        portfolio_tag = desc_div.select_one("p.p_tag")
        portfolio = clean_text(portfolio_tag.get_text()) if portfolio_tag else ""
        # lxml splits <p class="p_tag"><p>text</p></p> into two sibling <p>s.
        # If p_tag is empty, the portfolio text landed in the next sibling <p>.
        if not portfolio and portfolio_tag:
            sibling = portfolio_tag.find_next_sibling("p")
            if sibling:
                portfolio = clean_text(sibling.get_text())
        if not portfolio:
            # Last resort: grab any <p> inside desc_div
            for p in desc_div.find_all("p"):
                t = clean_text(p.get_text())
                if len(t) > 10:
                    portfolio = t
                    break
        portfolio = " ".join(portfolio.split())

        # Photo: look for the sibling .minister_col_img div in the same row
        row_div = desc_div.parent
        img_div = row_div.select_one(".minister_col_img") if row_div else None
        img_tag = img_div.find("img") if img_div else None
        photo = ""
        if img_tag and img_tag.get("src"):
            src = img_tag["src"]
            photo = src if src.startswith("http") else absolute_url(TN_BASE, src)

        is_cm = "chief minister" in role.lower() or "chief minister" in name.lower()

        ministers.append({
            "name": name,
            "role": "Chief Minister" if is_cm else "Cabinet Minister",
            "title": role,
            "portfolio": portfolio,
            "party": "TVK",
            "photo": photo,
            "highlight": is_cm,
        })

    return ministers
