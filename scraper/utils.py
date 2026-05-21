import re
import time
import requests
from datetime import datetime
from bs4 import BeautifulSoup
from dateutil import parser as date_parser

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
}

REQUEST_TIMEOUT = 20
RATE_LIMIT_DELAY = 1.5  # seconds between requests


def fetch(url: str, session: requests.Session = None, retries: int = 3) -> BeautifulSoup | None:
    """Fetch a URL and return a BeautifulSoup object, or None on failure."""
    requester = session or requests
    for attempt in range(retries):
        try:
            resp = requester.get(url, headers=HEADERS, timeout=REQUEST_TIMEOUT)
            resp.raise_for_status()
            time.sleep(RATE_LIMIT_DELAY)
            return BeautifulSoup(resp.text, "lxml")
        except Exception as e:
            if attempt == retries - 1:
                print(f"[ERROR] Failed to fetch {url}: {e}")
                return None
            time.sleep(2 ** attempt)
    return None


def normalize_date(raw: str) -> str:
    """Parse various date string formats into 'Month DD, YYYY'."""
    if not raw:
        return datetime.today().strftime("%B %d, %Y")
    raw = raw.strip()
    try:
        dt = date_parser.parse(raw, dayfirst=True)
        return dt.strftime("%B %d, %Y")
    except Exception:
        return raw


def clean_text(text: str) -> str:
    """Strip extra whitespace and normalize unicode spaces."""
    if not text:
        return ""
    return re.sub(r"\s+", " ", text.replace("\xa0", " ")).strip()


def make_id(date_str: str, seq: int) -> str:
    """Generate ID in YYYYMMDD### format from a 'Month DD, YYYY' date string."""
    try:
        dt = datetime.strptime(date_str, "%B %d, %Y")
        return f"{dt.strftime('%Y%m%d')}{seq:03d}"
    except Exception:
        today = datetime.today()
        return f"{today.strftime('%Y%m%d')}{seq:03d}"


def absolute_url(base: str, href: str) -> str:
    """Convert a relative href to an absolute URL."""
    if not href:
        return ""
    if href.startswith("http"):
        return href
    from urllib.parse import urljoin
    return urljoin(base, href)
