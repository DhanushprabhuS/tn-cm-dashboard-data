# TN Governance Tracker — Data Repository

This folder is the **single source of truth** for all dashboard data.
An AI agent monitors official sources and updates these files. The app reads from here.

---

## ID Format — YYYYMMDD### (e.g. `20260510001`)

Every record has a numeric `id` field using this format:
- `YYYYMMDD` = the date the event occurred / was signed / published
- `###` = 3-digit sequence for multiple events on the same day (001, 002, 003…)

**Higher id = newer record.** The app uses `id` to sort Latest ↔ Historic.

To add a new record: use today's date + next available sequence for that day.
Never renumber existing ids — only append new ones.

---

## Files & What to Update

| File | Description | Update Frequency |
|---|---|---|
| `ticker.ts` | Breaking-news ticker scrolling at the top | On major events |
| `stats.ts` | Key stat cards (seats, days, etc.) | Rarely |
| `schemes.ts` | Government Orders & Active Schemes | When new GOs are signed |
| `newsFeed.ts` | Live updates feed (CMO releases, meetings) | Daily |
| `manifesto.ts` | TVK manifesto promise tracker | When promises are implemented |
| `assemblyLog.ts` | Assembly session log (past sessions) | After each session |
| `assemblyCalendar.ts` | Upcoming assembly calendar | When new sessions are scheduled |
| `pressReleases.ts` | Official press releases from tn.gov.in | **Most frequent — daily** |
| `cabinet.ts` | Cabinet ministers & portfolios | When portfolios change |

---

## Rules for the Agent

1. **Never modify `id` of existing records** — only add new records with new ids.
2. **Always append** — put newest entries at the **bottom** of the array. The app sorts by id.
3. **`pressReleases.ts`** is the primary update target. Add new entries daily from `cms.tn.gov.in`.
4. **`date` field** must be `"Month DD, YYYY"` format (e.g. `"May 17, 2026"`) for sort to work.
5. For `status` in `manifesto.ts`: use `"✅ Implemented — [Date]"` or `"⏳ Pending implementation"`.
6. For `schemes.ts` `status`: use `"ACTIVE"` or `"PENDING"` with matching `statusClass: ""` or `"pending"`.

---

## Note on Complex UI (Vote Bars, Charts)

Assembly sessions (`assemblyLog.ts`) support a `voteResult` field that renders a visual vote bar in the app. The app handles the rendering — the agent only provides the data:
```json
"voteResult": { "ayes": 144, "noes": 22, "ayesPercent": "87%" }
```
Future chart types can be added as new optional fields in `assemblyLog.ts` — contact the dev team to register new UI components for new field types.
