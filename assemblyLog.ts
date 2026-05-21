/**
 * assemblyLog.ts — 17th Tamil Nadu Legislative Assembly session log.
 *
 * HOW TO UPDATE:
 *   - Append new session entries at the bottom with a new id (YYYYMMDD001).
 *   - highlights: array of HTML strings — use <strong> and <em> for emphasis.
 *   - voteResult: optional — when a confidence/no-confidence vote is held.
 *     The app renders this as a visual vote bar automatically.
 *   - postVoteHighlights: optional list shown below the vote bar.
 *
 * NOTE ON UI CHARTS:
 *   The `voteResult` field triggers a visual vote bar rendered by the app.
 *   Future chart types (e.g. attendance graphs, bill vote breakdowns) can be
 *   added as new optional fields — contact the dev team to register the
 *   corresponding UI component. Agent provides only data; app handles visuals.
 */

export interface VoteResult {
  ayes: number;
  noes: number;
  ayesPercent: string;   // CSS width string e.g. "87%"
}

export interface AssemblySession {
  id: number;                    // YYYYMMDD001 — calendar date of the session
  date: string;                  // "May 11, 2026" — used by dateSortFn
  dayNum: number;                // Calendar day e.g. 11
  month: string;                 // "May 2026"
  badgeLabel: string;            // "Day 1"
  badgeClass: '' | 'first' | 'vote';
  title: string;
  highlights: string[];          // HTML strings
  voteResult?: VoteResult;       // If present, app renders a vote bar chart
  postVoteHighlights?: string[]; // Shown below the vote bar (HTML strings)
}

export const assemblyLog: AssemblySession[] = [
  {
    id: 20260510001,
    date: "May 10, 2026",
    dayNum: 10,
    month: "May 2026",
    badgeLabel: "Pre-session",
    badgeClass: "",
    title: "🏛️ Pro-tem Speaker Sworn In",
    highlights: [
      "<strong>Governor Rajendra Arlekar</strong> administered oath of office to <strong>Thiru MV Karuppaiah</strong> as Pro-tem Speaker of the 17th Tamil Nadu Legislative Assembly.",
      "Ceremony held in the presence of <strong>Chief Minister Vijay</strong> at the Raj Bhavan.",
    ],
  },
  {
    id: 20260511001,
    date: "May 11, 2026",
    dayNum: 11,
    month: "May 2026",
    badgeLabel: "Day 1",
    badgeClass: "first",
    title: "🏛️ Inaugural Session — MLA Oath Taking",
    highlights: [
      "<strong>Pro Tem Speaker MV Karuppaiah</strong> administered oath to all newly elected MLAs.",
      "<strong>CM Vijay</strong> took oath as MLA for Perambur constituency (vacated Tiruchirappalli East).",
      "First session of 17th Tamil Nadu Legislative Assembly formally commenced at <strong>9:30 AM, Fort St. George, Chennai.</strong>",
      "TVK&apos;s historic entry into the Assembly — first non-Dravidian party govt since 1967.",
      "Nominations for <strong>Speaker and Deputy Speaker</strong> posts filed in the presence of CM Vijay.",
    ],
  },
  {
    id: 20260512001,
    date: "May 12, 2026",
    dayNum: 12,
    month: "May 2026",
    badgeLabel: "Day 2",
    badgeClass: "",
    title: "🪑 Speaker & Deputy Speaker Election",
    highlights: [
      "<strong>JCD Prabhakar (TVK, Thousand Lights)</strong> elected Speaker — <em>unopposed</em>. CM Vijay proposed, KA Sengottaiyan seconded.",
      "<strong>M. Ravisankar (TVK, Thuraiyur)</strong> elected Deputy Speaker — also unopposed.",
      "Speaker Prabhakar pledged <strong>equal opportunity for all parties</strong> and announced plans to <strong>digitalise the Speaker&apos;s office</strong> for a paperless work culture.",
      "CM Vijay appealed to Opposition for <strong>healthy, constructive debate</strong> irrespective of party strength.",
      "Opposition Leader <strong>Udhayanidhi Stalin (DMK)</strong> called on TN to become a model in governance &amp; public service.",
      "Members demanded <strong>live telecast of Assembly proceedings.</strong>",
      "26+ AIADMK MLAs led by CV Shanmugham announced support to Vijay government minutes before session.",
    ],
  },
  {
    id: 20260513001,
    date: "May 13, 2026",
    dayNum: 13,
    month: "May 2026",
    badgeLabel: "Day 3",
    badgeClass: "vote",
    title: "✅ Trust Vote — Government Wins Confidence",
    highlights: [
      "Government passed <strong>floor test (vote of confidence)</strong> as mandated by S.R. Bommai v. Union of India (1994) Supreme Court ruling.",
      "DMK&apos;s 59 MLAs + 1 DMDK MLA staged <strong>walk-out</strong> before voting.",
      "CM Vijay&apos;s inaugural Assembly speech: framed TVK as a <strong>secular, inclusive force</strong>.",
    ],
    voteResult: {
      ayes: 144,
      noes: 22,
      ayesPercent: "87%",
    },
    postVoteHighlights: [
      "Ayes: <strong>TVK (105) + post-poll allies (13) + 25 AIADMK rebels + 1 AMMK</strong>",
      "Note: Speaker JCD Prabhakar did not vote per convention. Trichy East seat vacant.",
      "AIADMK factional split confirmed — 25 rebels led by SP Velumani (Thondamuthur) backed Vijay.",
      "CM released formal statement urging Union Government to <strong>abolish NEET</strong> and base medical admissions on Class 12 marks.",
    ],
  },
];
