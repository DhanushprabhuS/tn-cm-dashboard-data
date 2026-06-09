# TN Dashboard — Agent Search & Update Skill

This file tells the AI agent **what to search**, **where to search it**, and **exactly how to update each data file** in this repository. Read this before every run.

---

## Step -1 — Run the Press Release Scraper First

Before any manual searching, run the automated scraper to fetch today's official press releases from `tn.gov.in`.

**Command (Windows CMD):**
```
python c:\PROJECT\others\data\scraping\press_release_script.py
```

**What it returns:** A JSON object with all press releases for today's date, including title, image/PDF links, and auto-detected department.

**How to use the output:**
1. Check each scraped entry against existing `pressReleases.ts` entries for today's date
2. For any entry NOT already in `pressReleases.ts`, add it using this mapping:

| Scraper field | pressReleases.ts field |
|---|---|
| `title` | `title` |
| `primary_link` | `url` (use this — it picks PDF over image automatically) |
| `dept` | `dept` (cross-check with Dept Name Standardization table below) |
| `date` (scraper format `"May 22 ,2026"`) | `date` (reformat to `"May 22, 2026"`) |

> ⚠️ The scraper's `dept` field is a rough guess. Always verify against the title and use the **Dept Name Standardization** table at the bottom of this file.

> ⚠️ The scraper only catches official `tn.gov.in` releases. Still run Steps 1–5 for news, GOs, manifesto updates, and cabinet changes.

**If scraper returns `status: "error"`:** Fall back to manually browsing `https://www.tn.gov.in/press_release.php`.

---

## Step 0 — Determine the Last Updated Date

Before searching anything, read the last updated date from the data files to avoid duplicates.

**How to find it:**
```
1. Open pressReleases.ts
2. Find the entry with the HIGHEST id number (it is at the bottom)
3. Read its `date` field — this is the last date data was added
4. All searches below should look for content AFTER this date
```

**Current last entry as of this writing:** `id: 20260604009`, `date: "June 04, 2026"`

> ⚠️ Never add entries with dates earlier than the last entry's date in pressReleases.ts — those already exist.

---

## Step 1 — Search for CM Joseph Vijay Orders, Bills & Statements

### What to search
CM Vijay's direct orders, Government Orders (GOs), Bills tabled in Assembly, and personal statements.

### Where to search
| Source | URL | What to look for |
|---|---|---|
| CMO Official Site | `https://www.cms.tn.gov.in` | Press releases tagged CMO |
| TN Govt Portal | `https://www.tn.gov.in/press_release.php` | Releases with "Chief Minister" in title |
| TN Gazette | `https://www.tn.gov.in/tngazette/` | Government Orders (G.O. Ms. No.) |
| Google News | `site:thehindu.com OR site:thenewsminute.com "Vijay" "Chief Minister" Tamil Nadu` | News after [LAST DATE] |
| The Hindu | `https://www.thehindu.com/tag/tamil-nadu/` | CM orders, statements |
| The News Minute | `https://www.thenewsminute.com/tamil-nadu` | CM activities |

### Search queries to use
```
"CM Vijay" "Government Order" Tamil Nadu [AFTER LAST DATE]
"C. Joseph Vijay" statement bill Tamil Nadu assembly [AFTER LAST DATE]
"Chief Minister Vijay" signed order Tamil Nadu [AFTER LAST DATE]
"TVK" "government order" Tamil Nadu [AFTER LAST DATE]
```

### Files to update

**`schemes.ts`** — Add a new entry if a new GO or scheme is signed:
```typescript
{
  id: YYYYMMDD001,              // date GO was signed
  tag: "GO · [DAY N]",         // or "GO · [Date]" if not a day number
  name: "[emoji] [Scheme Name]",
  status: "ACTIVE",             // or "PENDING" if announced not yet signed
  statusClass: "",              // "" for ACTIVE, "pending" for PENDING
  desc: "Full description of what the scheme does. Who benefits, how to avail, departments involved.",
  date: "Signed: [Month DD, YYYY] · [Department Name]",
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  color: "#FF6B00"              // pick a color: #FF6B00 | #FF4757 | #00C9A7 | #1A73E8 | #FFB800
},
```

**`pressReleases.ts`** — Add every CM order/statement as a press release too:
```typescript
{
  id: YYYYMMDD00N,
  dept: ["CMO"],                // array of departments e.g. ["Energy Dept"]
  date: "Month DD, YYYY",
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  title: "Exact title of the order/statement",
  summary: "1-2 sentence summary of what was decided/announced.",
  imageUrls: [],                // array of image URLs if available
  pdfUrls: [],                  // array of PDF URLs if available
  highlight: true               // set to true ONLY if it is a major industrial / corporate / investor meeting
},
```

**`ticker.ts`** — Add a ticker item if the order is major/newsworthy:
```typescript
{ id: YYYYMMDD00N, tag: "ORDER", tagIcon: "📋", text: "Short one-line summary for the scrolling ticker" },
```

**`newsFeed.ts`** — Add a feed item for CM activities/meetings:
```typescript
{
  id: YYYYMMDD00N,
  date: "Month DD, YYYY",
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  text: "What CM Vijay did — meeting, statement, inspection etc.",
  source: "Source: CMO Press Release",  // or "Source: The Hindu" etc.
  color: "#FF6B00",
  highlight: true               // set to true ONLY if it is a major industrial / corporate / investor meeting
},
```

---

## Step 2 — Search for CMO Press Releases

### What to search
All official press releases published by any TN Government department on cms.tn.gov.in.

### Where to search
| Source | URL |
|---|---|
| **Primary** | `https://cms.tn.gov.in/cms_migrated/document/press_release/` |
| TN Govt Press Portal | `https://www.tn.gov.in/press_release.php` |
| CMO X/Twitter | `https://twitter.com/CMOTamilNadu` |
| CMO Facebook | Search "Chief Minister Office Tamil Nadu" on Facebook |

### URL pattern for press releases
The CMS portal uses a predictable URL pattern:
```
Images: https://cms.tn.gov.in/cms_migrated/document/press_release/pr[DDMMYY][code].jpg
PDFs:   https://cms.tn.gov.in/cms_migrated/document/press_release/pr[DDMMYY][code].pdf
```
Example: `pr160526a.jpg` = press release, May 16, 2026, first image (a).
Try constructing URLs for today's date and check if they exist (HTTP 200 = exists, 404 = skip).

### File to update

**`pressReleases.ts`** — PRIMARY FILE. Append ALL new press releases:
```typescript
{
  id: YYYYMMDD00N,              // N increments: 001, 002, 003 for same date
  dept: ["CMO"],                // Array of exact depts: "CMO", "Home Dept", "Finance Dept",
                                // "Energy Dept", "Health Dept", "TN Legislative Assembly",
                                // "Municipal Admin", "Chief Electoral Officer" etc.
  date: "Month DD, YYYY",       // MUST match this exact format e.g. "May 17, 2026"
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  title: "Title of the press release — match official title closely",
  summary: "1-2 sentences. What happened, who was involved, outcome or significance.",
  imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/prDDMMYY[code].jpg"],
  pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/prDDMMYY[code].pdf"],
  //   ↑ Use actual URLs if found.
  highlight: true               // set to true ONLY if it is a major industrial / corporate / investor meeting
},
```

> **Important:** Check the existing `pressReleases.ts` before adding — if the title is already present, skip it. Never add duplicates.

---

## Step 3 — Search for Manifesto Promise Updates

### What to search
Any news indicating that a TVK manifesto promise has been **implemented, funded, legislated, or progressed**.

### Current manifesto items to track (read from `manifesto.ts`)

| id | Promise | Amount | Current Status |
|---|---|---|---|
| 20260510001 | Free Electricity | 200 Units | ✅ Implemented |
| 20260510002 | Women Safety Force | Singa Pen | ✅ Established |
| 20260510003 | Women Monthly Aid | ₹2,500/mo | ⏳ Pending |
| 20260510004 | Free LPG Cylinders | 6 / Year | ⏳ Pending |
| 20260510005 | Government Jobs | 5 Lakh | ⏳ To be rolled out |
| 20260510006 | Family Health Insurance | ₹25 Lakh | ⏳ Announced |
| 20260510007 | Education Dropout Aid | ₹15,000/yr | ⏳ Pending |
| 20260510008 | Senior Citizen Pension | ₹3,000/mo | ⏳ Pending |
| 20260510009 | Crop Loan Waiver | Small Farmers | ⏳ Budget allocated — May 27 |
| 20260521001 | AI & IT Department | Dedicated Ministry | ✅ Established — May 21 |
| 20260604001 | TNSIA — Strategic Investment Authority | Rs. 50,000 Crore | ⏳ In Progress — Jun 04 |
| 20260604002 | 10 Lakh New Jobs in 5 Years | 10 Lakh Jobs | ⏳ In Progress — Jun 04 |

### Where to search
```
"₹2500" OR "2500 women" Tamil Nadu government scheme [AFTER LAST DATE]
"free LPG" Tamil Nadu Vijay [AFTER LAST DATE]
"crop loan waiver" Tamil Nadu [AFTER LAST DATE]
"health insurance" "25 lakh" Tamil Nadu [AFTER LAST DATE]
"old pension scheme" Tamil Nadu TVK [AFTER LAST DATE]
"5 lakh jobs" Tamil Nadu government [AFTER LAST DATE]
TVK manifesto implemented Tamil Nadu [AFTER LAST DATE]
```

Sources: The Hindu, The News Minute, Dinamani, Deccan Chronicle Tamil Nadu section.

### File to update

**`manifesto.ts`** — ONLY UPDATE existing entries, DO NOT add new rows:
```
Rules:
- If a promise is implemented: change status to "✅ Implemented — [Month DD]"
  and change progress to "100%" and color to "var(--saffron)"
- If a promise is tabled in budget / partially funded: change progress to "30%" or "50%"
  and status to "⏳ Budget allocated — [Month]"
- If a promise is announced with a timeline: change status to "⏳ Announced — [Month]"
  and progress to "10%"
- NEVER change the id of an existing row
- NEVER add new rows (contact dev team to add new promise items)
```

**Example update for Women Monthly Aid when implemented:**
```typescript
// BEFORE:
{ id: 20260510003, ..., status: "⏳ Pending implementation", progress: "5%", color: "var(--gold)" },
// AFTER:
{ id: 20260510003, ..., status: "✅ Implemented — Jun 15", progress: "100%", color: "var(--saffron)" },
```

Also update **`newsFeed.ts`** with a feed item about the implementation:
```typescript
{ id: YYYYMMDD00N, date: "Month DD, YYYY", dateValue: "YYYY-MM-DD", text: "CM Vijay implements [Promise Name] — [key detail].", source: "Source: [publication]", color: "#00C9A7" },
```

And **`ticker.ts`** with a MANIFESTO tag item:
```typescript
{ id: YYYYMMDD00N, tag: "MANIFESTO", tagIcon: "📊", text: "[Promise Name] — Implemented as of [Date]" },
```

---

## Step 4 — Search for Assembly Session Logs & News

### What to search
Any new Tamil Nadu Legislative Assembly sessions, debates, bills passed, motions, speeches.

### Where to search
| Source | URL |
|---|---|
| TN Assembly Official | `https://assembly.tn.gov.in` |
| Assembly Bulletin | `https://assembly.tn.gov.in/bulletin/` |
| Google News | `Tamil Nadu Legislative Assembly session [AFTER LAST DATE]` |
| The Hindu | `site:thehindu.com "Tamil Nadu assembly"` |
| Deccan Chronicle | `Tamil Nadu assembly session bills passed` |

### Search queries
```
"Tamil Nadu Assembly" session [AFTER LAST DATE]
"17th Tamil Nadu Legislative Assembly" bills
"TN Assembly" debate Vijay government [MONTH YEAR]
Tamil Nadu assembly "passed" OR "tabled" bill [AFTER LAST DATE]
```

### Files to update

**`assemblyLog.ts`** — Add new session if Assembly met:
```typescript
{
  id: YYYYMMDD001,              // session date
  date: "Month DD, YYYY",       // "June 15, 2026"
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  dayNum: 15,                   // calendar day number
  month: "June 2026",
  badgeLabel: "Day N",          // increment from last session (e.g. "Day 4")
  badgeClass: "",               // "" for normal | "first" for inaugural | "vote" for any vote
  title: "🏛️ [Session Title]",  // emoji + descriptive title
  highlights: [
    "<strong>[Key person]</strong> [what they did].",
    "[What was debated / passed / announced].",
    // ... list each significant item as a separate HTML string
    // Use <strong> for names and <em> for emphasis
  ],
  // Only add voteResult if a formal vote was held:
  voteResult: {
    ayes: 144,
    noes: 22,
    ayesPercent: "87%",         // calculate: Math.round(ayes/(ayes+noes)*100) + "%"
  },
  // Only add postVoteHighlights if voteResult is present:
  postVoteHighlights: [
    "Breakdown: <strong>[Party (count)] + [Party (count)]</strong>",
  ],
},
```

**`assemblyCalendar.ts`** — Update upcoming sessions:
```
- If a previously "Expected" session now has a confirmed date: update its `date` field
- If a new session is scheduled: append a new entry
- If a session has happened: remove it from assemblyCalendar.ts (it should now be in assemblyLog.ts)
```

Example addition for a confirmed new session:
```typescript
{
  id: 20260615001,
  icon: "💰",
  date: "June 15, 2026",        // confirmed date
  title: "State Budget Session 2026–27",
  desc: "First full budget by Vijay government. Expected to cover welfare scheme funding, debt management, and capital expenditure.",
},
```

**`newsFeed.ts`** — Add feed item for session news:
```typescript
{ id: YYYYMMDD00N, date: "Month DD, YYYY", dateValue: "YYYY-MM-DD", text: "TN Assembly: [what happened in brief].", source: "Source: TN Assembly / The Hindu", color: "#1A73E8" },
```

**`ticker.ts`** — Add for major session events:
```typescript
{ id: YYYYMMDD00N, tag: "ASSEMBLY", tagIcon: "🏛️", text: "TN Assembly [session day]: [key outcome in one line]" },
```

---

## Step 5 — Search for Cabinet Changes

### What to search
Any ministerial reshuffle, new portfolio assignments, minister resignations, or new minister appointments under CM Vijay.

### Where to search
| Source | URL |
|---|---|
| Raj Bhavan Official | `https://rajbhavan-tamilnadu.gov.in` |
| Lok Bhavan | TN Secretariat press releases |
| Google News | `"Tamil Nadu cabinet" reshuffle OR "new minister" [AFTER LAST DATE]` |
| The Hindu | `"Tamil Nadu" minister portfolio [AFTER LAST DATE]` |

### Search queries
```
Tamil Nadu cabinet reshuffle [AFTER LAST DATE]
"CM Vijay" new minister appointment Tamil Nadu
Tamil Nadu minister resign OR portfolio change [AFTER LAST DATE]
"Raj Bhavan" Tamil Nadu minister swear [AFTER LAST DATE]
```

### Files to update

**`cabinet.ts`** — Handle these cases:

**Case A — New minister added:**
```typescript
// Append to cabinetMinisters array:
{
  id: YYYYMMDD001,              // appointment date
  initials: "XY",              // 2 letters from name
  colorClass: "color-a",       // cycle: a → b → c → d → a (based on last minister's class)
  name: "Full Name",
  constituency: "Constituency Name",
  title: "Primary Portfolio & Secondary Portfolio",
  depts: ["Dept 1", "Dept 2", "Dept 3"],
  bio: "Short bio: professional background, previous roles, notable facts.",
  // note and variant only if notable (e.g. first woman, youngest etc.)
},
```

**Case B — Minister's portfolio changed:**
```typescript
// Find the minister by name, update only:
title: "New Portfolio Title",
depts: ["New Dept 1", "New Dept 2"],
// Keep id, name, constituency, bio unchanged
```

**Case C — Minister removed/resigned:**
```typescript
// Delete the minister's entire entry from the cabinetMinisters array
// Update statsData.ts: change the "10" cabinet ministers count to new number
```

**Case D — CM's own portfolios change:**
```typescript
// Update cabinetCM.portfolios array
// Update cabinetCM.approvedDate to the new date
```

Also update **`pressReleases.ts`**:
```typescript
{
  id: YYYYMMDD001,
  dept: ["Lok Bhavan"],
  date: "Month DD, YYYY",
  dateValue: "YYYY-MM-DD",      // proper machine-readable date e.g. "2026-05-22"
  title: "Governor Approves [New/Revised] Cabinet Portfolio Allocation",
  summary: "[Minister name] appointed as Minister for [portfolio]. [Any other changes].",
  imageUrls: [],
  pdfUrls: [],
  highlight: false
},
```

And **`statsData`** in `stats.ts` if total minister count changes:
```typescript
// Find the entry with desc containing "Cabinet ministers"
// Update its value: e.g. "10" → "11"
```

---

## Step 6 — Final Checks Before Committing

Run through this checklist after making all updates:

```
[ ] All new ids follow YYYYMMDD### format
[ ] No duplicate ids exist in any file
[ ] All new `date` fields are in "Month DD, YYYY" format
[ ] All new entries in newsFeed.ts, pressReleases.ts, assemblyLog.ts, and schemes.ts include the correct `dateValue` in `"YYYY-MM-DD"` format (matching the date in the id)
[ ] pressReleases.ts and newsFeed.ts: new investor/industrial meetings correctly flag `highlight: true`
[ ] pressReleases.ts: new entries are appended at the BOTTOM
[ ] assemblyLog.ts: new sessions are appended at the BOTTOM
[ ] manifesto.ts: only existing entries updated, no new rows added
[ ] cabinet.ts: colorClass cycles a→b→c→d→a for new ministers
[ ] No entries added with dates BEFORE the last entry's date in pressReleases.ts
[ ] All HTML in `highlights[]` uses &apos; for apostrophes and &amp; for ampersands
[ ] Verify: id number is unique across ALL entries in the same file
```

---

## Reference: ID Number Quick Calculator

```
Format: YYYYMMDD + 3-digit sequence

Examples:
  May 17, 2026, first entry  → 20260517001
  May 17, 2026, second entry → 20260517002
  May 17, 2026, third entry  → 20260517003
  June 1, 2026, first entry  → 20260601001
  July 15, 2026, first entry → 20260715001

To find next sequence for a date:
  Look for existing ids starting with YYYYMMDD
  Take the highest, increment the last 3 digits by 1
```

---

## Reference: Dept Name Standardization

Always use these exact strings for `dept` in pressReleases.ts:

| Department | Exact string to use |
|---|---|
| Chief Minister's Office | `"CMO"` |
| Home Department | `"Home Dept"` |
| Finance Department | `"Finance Dept"` |
| Energy Department | `"Energy Dept"` |
| Health Department | `"Health Dept"` |
| Lok Bhavan / Governor | `"Lok Bhavan"` |
| TN Legislative Assembly | `"TN Legislative Assembly"` |
| Municipal Administration | `"Municipal Admin"` |
| Tamil Development & Info | `"Tamil Development & Info Dept"` |
| Sports Development Auth | `"SDAT"` |
| Chief Electoral Officer | `"Chief Electoral Officer"` |
| Rural Development | `"Rural Dev Dept"` |
| Industries | `"Industries Dept"` |
| Public Works Dept | `"PWD"` |
| Agriculture | `"Agriculture Dept"` |
| School Education | `"School Education Dept"` |
| Other / Unknown | `"Govt of TN"` |
