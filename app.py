"""
Flask API server for the TN CM Dashboard.

Endpoints:
  GET  /api/health
  GET  /api/ticker
  GET  /api/stats
  GET  /api/schemes
  GET  /api/news-feed
  GET  /api/manifesto
  GET  /api/assembly-log
  GET  /api/assembly-calendar
  GET  /api/press-releases
  GET  /api/cabinet
  GET  /api/cron              — called by Vercel Cron (or any external cron) every hour
  POST /api/scrape            — manual trigger: run all scrapers
  POST /api/scrape/<section>  — manual trigger: run one section

Data storage strategy
---------------------
- LOCAL  : data/*.json (read-write, also used as seed)
- VERCEL : /tmp/tn-dashboard/*.json (ephemeral per-instance cache)
           Falls back to committed data/*.json when /tmp is cold.

Scheduling
----------
- Local  : APScheduler runs every hour inside the process.
- Vercel : Vercel Cron hits GET /api/cron every hour (configured in vercel.json).
           On Hobby plan the minimum cron interval is 1 day — use an external
           cron service (GitHub Actions, cron-job.org) to hit /api/cron hourly.
"""

import json
import os
import threading
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path

from flask import Flask, jsonify, request
from flask_cors import CORS

# ---------------------------------------------------------------------------
# Detect environment
# ---------------------------------------------------------------------------

IS_VERCEL = bool(os.environ.get("VERCEL"))

# On Vercel: write scraped data to /tmp (ephemeral but shared within one warm
# instance).  Seed / static data is always read from the committed data/ dir.
SEED_DIR = Path(__file__).parent / "data"          # committed, read-only on Vercel
CACHE_DIR = Path("/tmp/tn-dashboard") if IS_VERCEL else SEED_DIR

SCRAPE_INTERVAL_HOURS = 1

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------

app = Flask(__name__)
CORS(app)

STATIC_SECTIONS = {"ticker", "stats", "manifesto"}

SCRAPED_SECTIONS = {
    "schemes": "schemes",
    "news_feed": "news_feed",
    "assembly_log": "assembly_log",
    "assembly_calendar": "assembly_calendar",
    "press_releases": "press_releases",
    "cabinet": "cabinet",
}

_scrape_lock = threading.Lock()

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _load(filename: str):
    """Load a JSON file — checks CACHE_DIR first, then falls back to SEED_DIR."""
    for directory in ([CACHE_DIR, SEED_DIR] if IS_VERCEL else [SEED_DIR]):
        path = directory / f"{filename}.json"
        if path.exists():
            with open(path, encoding="utf-8") as f:
                return json.load(f)
    return None


def _json_response(data, section_name: str = ""):
    if data is None:
        return jsonify({
            "error": "Data not yet available. Call GET /api/cron or POST /api/scrape.",
            "section": section_name,
        }), 404
    return jsonify(data)


def _data_is_stale(max_age_hours: int = SCRAPE_INTERVAL_HOURS) -> bool:
    """Return True if last_updated.json is missing or older than max_age_hours."""
    last = _load("last_updated")
    if not last or "timestamp" not in last:
        return True
    try:
        ts = datetime.fromisoformat(last["timestamp"].replace("Z", "+00:00"))
        return datetime.now(timezone.utc) - ts > timedelta(hours=max_age_hours)
    except Exception:
        return True


def _run_scraper_sync():
    """Run all scrapers synchronously (used by /api/cron and startup)."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    with _scrape_lock:
        try:
            from scraper import runner
            runner.DATA_DIR = CACHE_DIR      # redirect output to correct dir
            runner.run_all()
        except Exception as e:
            print(f"[scraper] ERROR: {e}")
            raise


def _run_scraper_section_sync(section: str):
    """Run one scraper section synchronously."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    with _scrape_lock:
        from scraper import runner
        runner.DATA_DIR = CACHE_DIR
        runner.run_section(section)


def _run_scraper_async(section: str | None = None):
    """Run scraper(s) in a background thread (local dev only)."""
    def _task():
        if section:
            _run_scraper_section_sync(section)
        else:
            _run_scraper_sync()

    t = threading.Thread(target=_task, daemon=True)
    t.start()
    return t


# ---------------------------------------------------------------------------
# Health
# ---------------------------------------------------------------------------

@app.get("/api/health")
def health():
    last_updated = _load("last_updated")
    return jsonify({
        "status": "ok",
        "environment": "vercel" if IS_VERCEL else "local",
        "last_scraped": last_updated.get("timestamp") if last_updated else None,
        "data_is_stale": _data_is_stale(),
        "scrape_interval_hours": SCRAPE_INTERVAL_HOURS,
        "cache_dir": str(CACHE_DIR),
    })


# ---------------------------------------------------------------------------
# Static / seed data endpoints
# ---------------------------------------------------------------------------

@app.get("/api/ticker")
def ticker():
    return _json_response(_load("ticker"), "ticker")


@app.get("/api/stats")
def stats():
    return _json_response(_load("stats"), "stats")


@app.get("/api/manifesto")
def manifesto():
    return _json_response(_load("manifesto"), "manifesto")


# ---------------------------------------------------------------------------
# Scraped data endpoints
# ---------------------------------------------------------------------------

@app.get("/api/schemes")
def schemes():
    return _json_response(_load("schemes"), "schemes")


@app.get("/api/news-feed")
def news_feed():
    return _json_response(_load("news_feed"), "news_feed")


@app.get("/api/assembly-log")
def assembly_log():
    return _json_response(_load("assembly_log"), "assembly_log")


@app.get("/api/assembly-calendar")
def assembly_calendar():
    return _json_response(_load("assembly_calendar"), "assembly_calendar")


@app.get("/api/press-releases")
def press_releases():
    data = _load("press_releases")
    if data and isinstance(data, list):
        try:
            limit = int(request.args.get("limit", 50))
            page = int(request.args.get("page", 1))
            start = (page - 1) * limit
            data = data[start: start + limit]
        except ValueError:
            pass
    return _json_response(data, "press_releases")


@app.get("/api/cabinet")
def cabinet():
    return _json_response(_load("cabinet"), "cabinet")


# ---------------------------------------------------------------------------
# Cron endpoint  (GET — compatible with Vercel Cron)
# ---------------------------------------------------------------------------

@app.get("/api/cron")
def cron():
    """
    Vercel Cron hits this endpoint every hour (configured in vercel.json).
    Runs all scrapers synchronously so Vercel can confirm success via 200.
    Protect with CRON_SECRET env var to prevent unauthorised triggering.
    """
    secret = os.environ.get("CRON_SECRET", "")
    if secret and request.headers.get("x-cron-secret", "") != secret:
        return jsonify({"error": "Unauthorized"}), 401

    start = time.time()
    try:
        _run_scraper_sync()
        elapsed = round(time.time() - start, 1)
        return jsonify({
            "status": "ok",
            "message": "All sections scraped successfully.",
            "elapsed_seconds": elapsed,
            "scraped_at": datetime.utcnow().isoformat() + "Z",
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


# ---------------------------------------------------------------------------
# Manual scrape triggers (POST — for local dev / admin use)
# ---------------------------------------------------------------------------

@app.post("/api/scrape")
def scrape_all():
    if IS_VERCEL:
        # On Vercel, background threads die when response is sent — run sync instead
        try:
            _run_scraper_sync()
            return jsonify({
                "status": "ok",
                "message": "All sections scraped.",
                "scraped_at": datetime.utcnow().isoformat() + "Z",
            })
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)}), 500
    else:
        _run_scraper_async()
        return jsonify({
            "status": "started",
            "message": "All scrapers running in background.",
            "started_at": datetime.utcnow().isoformat() + "Z",
        })


@app.post("/api/scrape/<section>")
def scrape_section(section: str):
    valid = set(SCRAPED_SECTIONS.keys())
    if section not in valid:
        return jsonify({"error": f"Unknown section '{section}'", "valid_sections": sorted(valid)}), 400

    if IS_VERCEL:
        try:
            _run_scraper_section_sync(section)
            return jsonify({
                "status": "ok",
                "section": section,
                "scraped_at": datetime.utcnow().isoformat() + "Z",
            })
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)}), 500
    else:
        _run_scraper_async(section)
        return jsonify({
            "status": "started",
            "section": section,
            "started_at": datetime.utcnow().isoformat() + "Z",
        })


# ---------------------------------------------------------------------------
# Local dev entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    SEED_DIR.mkdir(exist_ok=True)

    # Local only: start APScheduler for hourly auto-scrape
    if not IS_VERCEL:
        from apscheduler.schedulers.background import BackgroundScheduler

        scheduler = BackgroundScheduler(daemon=True)
        scheduler.add_job(
            lambda: _run_scraper_async(),
            trigger="interval",
            hours=SCRAPE_INTERVAL_HOURS,
            id="auto_scrape",
        )
        scheduler.start()
        print(f"[scheduler] Auto-scrape every {SCRAPE_INTERVAL_HOURS} hour(s)")

        if _data_is_stale():
            print("[startup] Data is stale — running initial scrape...")
            _run_scraper_async()
        else:
            print("[startup] Cached data is fresh.")

    port = int(os.environ.get("PORT", 5000))
    debug = os.environ.get("FLASK_DEBUG", "0") == "1"
    print(f"Starting TN CM Dashboard API on http://0.0.0.0:{port}")
    app.run(host="0.0.0.0", port=port, debug=debug)
