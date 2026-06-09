# Repository Guidelines

This repository serves as the **single source of truth** for all dashboard data for the TN Governance Tracker. It is designed to be updated by AI agents monitoring official sources.

## Project Structure & Module Organization

The repository is organized into domain-specific TypeScript files that export data arrays and their respective TypeScript interfaces.

- **Domain Files**: Individual files like `.\pressReleases.ts`, `.\newsFeed.ts`, and `.\schemes.ts` contain the raw data for specific dashboard sections.
- **`.\index.ts`**: A barrel export file that serves as the single entry point for the application to import all data and types.
- **`.\scraping\`**: Contains automation scripts (e.g., `.\scraping\press_release_script.py`) used to fetch data from official government sources.

## Build, Test, and Development Commands

This is a data-only repository and does not include a traditional build or test suite.

- **Fetch Press Releases**: Run the Python scraper to get the latest releases from the official portal.
  ```cmd
  python .\scraping\press_release_script.py
  ```

## Data Conventions & Rules

Strict adherence to these conventions is required to ensure the dashboard functions correctly.

### ID Format (`YYYYMMDD###`)
Every record must have a numeric `id` field:
- `YYYYMMDD`: The date the event occurred or was published.
- `###`: A 3-digit sequence (001, 002, 003...) for multiple events on the same day.
- **Rule**: Higher IDs indicate newer records. Never renumber existing IDs.

### Date Fields
- **`date`**: Must be in `"Month DD, YYYY"` format (e.g., `"May 17, 2026"`).
- **`dateValue`**: A machine-readable string in `"YYYY-MM-DD"` format (e.g., `"2026-05-22"`) for filtering.

### Update Logic
- **Append Only**: Always add new entries to the **bottom** of the array in their respective domain files.
- **Highlights**: In `.\newsFeed.ts` and `.\pressReleases.ts`, set `highlight: true` for major industrial, corporate, or foreign investor meetings with the Chief Minister.
- **Manifesto Status**: Use `"✅ Implemented — [Date]"` or `"⏳ Pending implementation"`.
- **Schemes Status**: Use `"ACTIVE"` or `"PENDING"` with matching `statusClass`.

## Commit Guidelines

While current history is informal, aim for descriptive messages that reflect the date or the specific domain updated (e.g., `data: update press releases for May 31, 2026`).
