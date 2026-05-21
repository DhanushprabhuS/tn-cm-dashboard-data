"""
Orchestrates all scrapers, writes results to data/*.json.
"""

import json
import os
from datetime import datetime
from pathlib import Path

from . import press_releases, orders, cabinet, news, assembly

DATA_DIR = Path(__file__).parent.parent / "data"


def run_all() -> dict:
    _target_dir().mkdir(parents=True, exist_ok=True)
    results = {}

    scrapers = {
        "press_releases": press_releases.scrape,
        "schemes": orders.scrape,
        "cabinet": cabinet.scrape,
        "news_feed": news.scrape,
        "assembly_log": assembly.scrape_sessions,
        "assembly_calendar": assembly.scrape_calendar,
    }

    for section, scrape_fn in scrapers.items():
        try:
            print(f"[scraper] Scraping {section}...")
            data = scrape_fn()
            results[section] = data
            _save(section, data)
            print(f"[scraper] {section}: {len(data)} items")
        except Exception as e:
            print(f"[scraper] ERROR scraping {section}: {e}")
            results[section] = []

    _save("last_updated", {"timestamp": datetime.utcnow().isoformat() + "Z"})
    return results


def run_section(section: str) -> list | dict:
    _target_dir().mkdir(parents=True, exist_ok=True)
    scraper_map = {
        "press_releases": press_releases.scrape,
        "schemes": orders.scrape,
        "cabinet": cabinet.scrape,
        "news_feed": news.scrape,
        "assembly_log": assembly.scrape_sessions,
        "assembly_calendar": assembly.scrape_calendar,
    }

    if section not in scraper_map:
        raise ValueError(f"Unknown section: {section}. Valid: {list(scraper_map.keys())}")

    data = scraper_map[section]()
    _save(section, data)
    _save("last_updated", {"timestamp": datetime.utcnow().isoformat() + "Z"})
    return data


def _target_dir() -> Path:
    """Returns DATA_DIR — can be overridden by app.py to redirect output (e.g. to /tmp)."""
    return DATA_DIR


def _save(key: str, data) -> None:
    path = _target_dir() / f"{key}.json"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def load(section: str):
    path = _target_dir() / f"{section}.json"
    if path.exists():
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    return None
