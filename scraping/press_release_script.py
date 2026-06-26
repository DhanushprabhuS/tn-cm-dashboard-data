import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime, timedelta
import re
import argparse
import base64
import os

def scrape_tn_press_releases(target_date=None):
    """
    Scrape press releases from Tamil Nadu government website for a given date (defaults to today)
    """
    today = datetime.now()
    dt = today
    is_today = True

    if target_date:
        try:
            dt = datetime.strptime(target_date, "%Y-%m-%d")
            today_date_str = dt.strftime("%B %d ,%Y")
            if dt.date() != today.date():
                is_today = False
        except ValueError:
            today_date_str = target_date
            try:
                dt = datetime.strptime(target_date, "%B %d ,%Y")
                if dt.date() != today.date():
                    is_today = False
            except ValueError:
                pass
    else:
        today_date_str = today.strftime("%B %d ,%Y")

    if is_today:
        url = "https://www.tn.gov.in/press_release.php"
    else:
        month_str = dt.strftime("%m")
        year_str = dt.strftime("%Y")
        month_b64 = base64.b64encode(month_str.encode('utf-8')).decode('utf-8')
        year_b64 = base64.b64encode(year_str.encode('utf-8')).decode('utf-8')
        url = f"https://www.tn.gov.in/press_release_archieves.php?field_press_month_value={month_b64}&field_press_date_value={year_b64}"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')
        press_releases = []
        pr_items = soup.find_all('li', class_='pr-list-group-item')

        for item in pr_items:
            date_span = item.find('span', class_='tag-label')
            if not date_span:
                continue

            date_text = date_span.get_text(strip=True)

            if today_date_str in date_text:
                press_release = extract_press_release(item, today_date_str)
                if press_release:
                    press_releases.append(press_release)

        return {
            "status": "success",
            "date": today_date_str,
            "total_releases": len(press_releases),
            "press_releases": press_releases
        }

    except requests.RequestException as e:
        return {
            "status": "error",
            "message": f"Failed to fetch data: {str(e)}",
            "press_releases": []
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"An unexpected error occurred: {str(e)}",
            "press_releases": []
        }


def scrape_date_range(start_date_str, end_date_str=None):
    """
    Scrape all press releases for a date range by fetching each month's archive once.
    start_date_str: YYYY-MM-DD
    end_date_str: YYYY-MM-DD (defaults to today)
    """
    start_dt = datetime.strptime(start_date_str, "%Y-%m-%d")
    end_dt = datetime.strptime(end_date_str, "%Y-%m-%d") if end_date_str else datetime.now()

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    # Build set of (year, month) pairs to fetch
    months_to_fetch = set()
    cursor = start_dt.replace(day=1)
    while cursor <= end_dt:
        months_to_fetch.add((cursor.year, cursor.month))
        # advance to next month
        if cursor.month == 12:
            cursor = cursor.replace(year=cursor.year + 1, month=1)
        else:
            cursor = cursor.replace(month=cursor.month + 1)

    all_releases = []

    for (year, month) in sorted(months_to_fetch):
        month_str = f"{month:02d}"
        year_str = str(year)
        month_b64 = base64.b64encode(month_str.encode()).decode()
        year_b64 = base64.b64encode(year_str.encode()).decode()
        url = f"https://www.tn.gov.in/press_release_archieves.php?field_press_month_value={month_b64}&field_press_date_value={year_b64}"

        print(f"Fetching archive for {year}-{month_str} from {url}")

        try:
            response = requests.get(url, headers=headers, timeout=30)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')
            pr_items = soup.find_all('li', class_='pr-list-group-item')

            for item in pr_items:
                date_span = item.find('span', class_='tag-label')
                if not date_span:
                    continue

                date_text = date_span.get_text(strip=True)
                item_dt = parse_site_date(date_text)
                if item_dt is None:
                    continue

                if start_dt.date() <= item_dt.date() <= end_dt.date():
                    date_label = item_dt.strftime("%B %d ,%Y")
                    press_release = extract_press_release(item, date_label)
                    if press_release:
                        press_release["parsed_date"] = item_dt.strftime("%Y-%m-%d")
                        all_releases.append(press_release)

        except requests.RequestException as e:
            print(f"Error fetching {url}: {e}")
        except Exception as e:
            print(f"Unexpected error processing {year}-{month_str}: {e}")

    # Sort by date ascending
    all_releases.sort(key=lambda x: x.get("parsed_date", ""))

    return {
        "status": "success",
        "start_date": start_date_str,
        "end_date": end_dt.strftime("%Y-%m-%d"),
        "total_releases": len(all_releases),
        "press_releases": all_releases
    }


def parse_site_date(date_text):
    """Parse a date string in the format used on the TN website, e.g. 'June 11 ,2026'."""
    date_text = date_text.strip()
    # Remove the day suffix like "11th", "1st", "2nd", "3rd" if present
    date_text = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', date_text)
    for fmt in ("%B %d ,%Y", "%B %d, %Y", "%B %d %Y", "%d %B %Y",
                "%b %d ,%Y", "%b %d, %Y", "%b %d %Y", "%d %b %Y"):
        try:
            return datetime.strptime(date_text, fmt)
        except ValueError:
            continue
    return None


def extract_press_release(item, date_label):
    """Extract press release data from a BeautifulSoup li element."""
    title_elem = item.find('p', class_='list-group-item-text')
    title = title_elem.get_text(strip=True) if title_elem else "No title"

    all_links = item.find_all('a', href=True)
    main_link = None
    pdf_links = []
    additional_links = []

    for link in all_links:
        href = link.get('href')
        if href and 'press_release' in href:
            if href.endswith('.pdf'):
                pdf_links.append(href)
            else:
                additional_links.append(href)
                if not main_link:
                    main_link = href

    primary_link = pdf_links[0] if pdf_links else main_link
    dept = determine_department(title)

    pr_number = None
    pr_number_link = item.find('a', string=re.compile(r'Press Release No:'))
    if pr_number_link:
        pr_number = pr_number_link.get_text(strip=True).replace('Press Release No:', '').strip()

    return {
        "title": title,
        "date": date_label,
        "primary_link": primary_link,
        "all_links": {
            "main": main_link,
            "pdfs": pdf_links,
            "images": additional_links
        },
        "dept": dept,
        "press_release_number": pr_number
    }


def determine_department(title):
    """
    Determine the department based on keywords in the title
    """
    title_lower = title.lower()

    if any(term in title_lower for term in ['chief minister', 'honble chief minister', 'cm ', 'cmo']):
        return "CMO"

    department_keywords = {
        "Health": ['health', 'medical', 'hospital', 'family welfare'],
        "Education": ['school education', 'education', 'sslc', 'library'],
        "Forests": ['forest', 'environment'],
        "Revenue": ['revenue', 'disaster management'],
        "Public Works": ['public works', 'sports development'],
        "Housing": ['housing', 'urban development'],
        "Labour": ['labour', 'skill development', 'employment'],
        "Food and Civil Supplies": ['food', 'civil supplies', 'warehousing'],
        "Co-operation": ['co-operation', 'cooperation'],
        "Water Resources": ['water resources', 'irrigation'],
        "Electricity": ['electricity', 'energy'],
        "Adi Dravidar and Tribal Welfare": ['adi dravidar', 'tribal welfare'],
        "Information and Publicity": ['information', 'publicity', 'tamil development']
    }

    for dept, keywords in department_keywords.items():
        if any(keyword in title_lower for keyword in keywords):
            return dept

    return "General"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Scrape press releases from Tamil Nadu government website.")
    parser.add_argument(
        "--date",
        type=str,
        help="Single date to scrape in format YYYY-MM-DD. Defaults to today.",
        default=None
    )
    parser.add_argument(
        "--start-date",
        type=str,
        help="Start date for range scraping (YYYY-MM-DD). Use with --end-date.",
        default=None
    )
    parser.add_argument(
        "--end-date",
        type=str,
        help="End date for range scraping (YYYY-MM-DD). Defaults to today.",
        default=None
    )
    parser.add_argument(
        "--output",
        type=str,
        help="Output JSON file path. Defaults to results.json when using range mode.",
        default=None
    )
    args = parser.parse_args()

    if args.start_date:
        result = scrape_date_range(args.start_date, args.end_date)
        output_file = args.output or "results.json"
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        print(f"Saved {result['total_releases']} press releases to {output_file}")
    else:
        result = scrape_tn_press_releases(args.date)
        if args.output:
            with open(args.output, "w", encoding="utf-8") as f:
                json.dump(result, f, indent=2, ensure_ascii=False)
            print(f"Saved {result['total_releases']} press releases to {args.output}")
        else:
            print(json.dumps(result, indent=2, ensure_ascii=False))
