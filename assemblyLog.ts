/**
 * assemblyLog.ts — 17th Tamil Nadu Legislative Assembly session log.
 *
 * HOW TO UPDATE:
 *   - Append new session entries at the bottom with a new id (YYYYMMDD001).
 *   - dateValue: "YYYY-MM-DD" proper date value for UI filtering.
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
  dateValue: string;             // "YYYY-MM-DD"
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
    dateValue: "2026-05-10",
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
    dateValue: "2026-05-11",
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
    dateValue: "2026-05-12",
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
    dateValue: "2026-05-13",
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
  {
    id: 20260619001,
    date: "June 19, 2026",
    dateValue: "2026-06-19",
    dayNum: 19,
    month: "June 2026",
    badgeLabel: "Day 10",
    badgeClass: "",
    title: "🏛️ Governor's Address + Unanimous Mekedatu Resolution",
    highlights: [
      "<strong>Governor Rajendra Vishwanath Arlekar</strong> delivered the full policy address for the First Session — the government's first comprehensive statement of intent since the trust vote.",
      "Announced <strong>'Vetri Thamizhagam'</strong> long-term development blueprint; described the 2026 election as a 'historic political transformation' for Tamil Nadu.",
      "<strong>Two-language policy</strong> firmly reaffirmed — opposed NEP 2020's three-language formula; recalled the 1968 resolution under Annadurai supporting Tamil &amp; English. Criticised Centre for withholding ₹3,458 crore in Samagra Shiksha Abhiyan funds as leverage for NEP adoption.",
      "<strong>Social Justice Survey</strong> to be conducted after Union Government completes national caste enumeration.",
      "Demanded permission to use Tamil in <strong>Madras High Court proceedings</strong> and called for a permanent <strong>Supreme Court Bench in Chennai</strong>.",
      "<strong>Cauvery &amp; Mekedatu:</strong> Declared TN has time-immemorial rights to Cauvery water and is taking legal steps to block Karnataka's Mekedatu dam. Mullaperiyar — vowed to oppose Kerala's new dam push.",
      "<strong>Unanimous Resolution against Mekedatu Dam</strong> moved by CM Vijay and passed by the full House. DMK's Udhayanidhi Stalin proposed an amendment calling for a dedicated tribunal under the Inter-State River Water Disputes Act 1956; CM Vijay accepted it on the floor. AIADMK initially supported the resolution, presenting a rare moment of cross-party unity.",
      "Live telecast of Assembly proceedings began; opposition later alleged an abrupt cut of the livestream mid-debate.",
    ],
  },
  {
    id: 20260620001,
    date: "June 20, 2026",
    dateValue: "2026-06-20",
    dayNum: 20,
    month: "June 2026",
    badgeLabel: "Day 11",
    badgeClass: "",
    title: "🎙️ Motion of Thanks Debate — Livestream Row",
    highlights: [
      "Motion of Thanks debate on the Governor's Address began. Opposition parties took turns responding to the government's policy vision.",
      "<strong>DMK MLA SS Sivasankar</strong> alleged the Governor's address cut-and-pasted DMK-era achievements into TVK's speech: 'Director Atlee makes films by editing scenes; this is exactly like that.'",
      "<strong>DMK MLA Austin</strong> mocked CM Vijay's silence on major issues: 'Whatever happens, the one who created a historic revolution will not open his mouth.' DMK benches chanted <strong>'Speak up CM'</strong> demanding Vijay address the House directly.",
      "<strong>Education Minister Rajmohan Arumugam</strong> replied on the government's behalf, claiming all election promises were being fulfilled.",
      "<strong>Livestream controversy:</strong> Opposition alleged the live broadcast of the Motion of Thanks debate was abruptly halted. BJP state president Nainar Nagenthran called it 'a violation of democratic traditions.' TVK maintained full coverage ran from 9:30–11:00 AM.",
      "<strong>AIADMK's Palaniswami</strong> raised a procedural objection — alleged the amended Mekedatu resolution (June 19) was passed without informing the House of other states' concurrence, calling it a procedural violation.",
    ],
  },
  {
    id: 20260622001,
    date: "June 22, 2026",
    dateValue: "2026-06-22",
    dayNum: 22,
    month: "June 2026",
    badgeLabel: "Day 12",
    badgeClass: "",
    title: "⚠️ Ammonia Gas Tragedy Statement — AIADMK Walkout",
    highlights: [
      "Session opened with uproar over two issues: the <strong>Tiruvallur ammonia gas leak tragedy</strong> (five women workers killed) and AIADMK's Mekedatu procedural objection.",
      "<strong>Labour Welfare Minister J. Mohamed Farvas</strong> read the official government statement on the Tiruvallur ammonia gas tragedy under Assembly Rule 110. Both DMK and AIADMK demanded the Speaker allow full discussion before the statement was read; Speaker declined.",
      "<strong>AIADMK's Palaniswami</strong> sought Zero Hour discussion on the Mekedatu procedural dispute, arguing the amended resolution was passed without informing the House of other basin states' concurrence. Speaker Prabhakar refused: <em>'Had he had any differences, he should have raised his hand on Friday.'</em>",
      "<strong>AIADMK staged a walkout</strong> after the Speaker rejected both demands and warned members against sloganeering in the corridor. AIADMK's stance on Mekedatu now reversed — Palaniswami declared AIADMK does not support the amended resolution.",
    ],
  },
  {
    id: 20260623001,
    date: "June 23, 2026",
    dateValue: "2026-06-23",
    dayNum: 23,
    month: "June 2026",
    badgeLabel: "Day 13 · Final",
    badgeClass: "",
    title: "🎤 CM Vijay's Maiden Full Assembly Speech — DMK Walkout — Session Closes",
    highlights: [
      "<strong>CM C. Joseph Vijay</strong> delivered his first major floor speech — a ~45-minute reply to the Motion of Thanks on the Governor's Address — described by analysts as a 'masterclass in populist positioning', blending cinematic rhetoric with political substance.",
      "Opened by invoking <strong>C.N. Annadurai and M.G.R.</strong> as ideological icons, positioning TVK as the true heir to the original Dravidian promise — deliberately bypassing the DMK-AIADMK duopoly era.",
      "Declared the government a <strong>'government of the most ordinary people'</strong>: 'We know how to serve the people, but we don't know how to siphon off public money. We don't know how to loot temple funds, transfer government revenue to personal coffers, or promote drug culture.'",
      "<strong>TASMAC allegation:</strong> Accused the previous DMK administration of using TASMAC outlets to collect party funds — mixing state revenue with party machinery.",
      "Blamed the DMK for law and order failures, power cuts, the drug menace, crimes against women, and leaving the state without a DGP for <strong>10 months</strong>.",
      "Delivered a pointed <strong>'kutty story'</strong> (short story) — a direct rhetorical attack on former CM M.K. Stalin — which triggered desk-thumping from TVK benches and a ruckus from DMK.",
      "After DMK staged a walkout, <strong>mimicked M.K. Stalin's viral 'all settled' hand gesture</strong> with Speaker's permission — hijacking the DMK's own symbol to signal their political era was finished. Concluded with his trademark cinematic gesture, which went viral.",
      "<strong>DMK Udhayanidhi Stalin</strong> immediately demanded CM produce evidence for the party-funds allegation. DMK members walked out after Vijay's speech.",
      "<strong>First Session officially closed.</strong> Session statistics: 13 sitting days · 13 bills introduced · 629 questions listed · 245 papers laid · 228 members participated.",
    ],
  },
];
