"""
CLI script to trigger scraping manually.

Usage:
  python scrape.py              — scrape all sections
  python scrape.py press_releases
  python scrape.py schemes
  python scrape.py cabinet
  python scrape.py news_feed
  python scrape.py assembly_log
  python scrape.py assembly_calendar
"""

import sys
from scraper import runner


def main():
    if len(sys.argv) == 1:
        print("Scraping all sections...")
        results = runner.run_all()
        for section, items in results.items():
            count = len(items) if isinstance(items, list) else 1
            print(f"  {section}: {count} items saved")
    else:
        section = sys.argv[1]
        print(f"Scraping section: {section}")
        data = runner.run_section(section)
        count = len(data) if isinstance(data, list) else 1
        print(f"  {section}: {count} items saved to data/{section}.json")


if __name__ == "__main__":
    main()
