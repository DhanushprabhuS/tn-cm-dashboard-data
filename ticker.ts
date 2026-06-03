/**
 * ticker.ts — Breaking-news ticker items scrolling at the top of the dashboard.
 * Agent Last Updated: June 01, 2026
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - Keep text concise — it scrolls in a single line.
 *   - tag: short label e.g. "DAY 1", "LIVE", "SCHEME", "ORDER", "ASSEMBLY", "MANIFESTO", "UPCOMING"
 */

export interface TickerItem {
  id: number;       // YYYYMMDD### — sort key
  tag: string;
  tagIcon: string;
  text: string;
}

export const tickerItems: TickerItem[] = [
  { id: 20260510001, tag: "LIVE",      tagIcon: "⚡",  text: "CM Vijay sworn in as 22nd Chief Minister of Tamil Nadu on May 10, 2026" },
  { id: 20260510002, tag: "SCHEME",    tagIcon: "📋",  text: "200 units free electricity for households consuming ≤500 units/bimonthly" },
  { id: 20260510003, tag: "ORDER",     tagIcon: "👮‍♀️", text: "Singa Pen Sirappu Athiradi Padai — All-women safety task force established" },
  { id: 20260510004, tag: "ORDER",     tagIcon: "💊",  text: "65 Anti-Narcotic Task Force units across all TN districts" },
  { id: 20260511001, tag: "DAY 1",     tagIcon: "🏛️", text: "May 11: 17th TN Assembly inaugurated — all MLAs administered oath by Pro Tem Speaker MV Karuppaiah" },
  { id: 20260512001, tag: "DAY 2",     tagIcon: "🪑",  text: "May 12: JCD Prabhakar (TVK) elected Speaker unopposed — announces digital, paperless Assembly" },
  { id: 20260513001, tag: "DAY 3",     tagIcon: "✅",  text: "May 13: Trust Vote passed — 144 Ayes vs 22 Noes. DMK + DMDK walked out. 25 AIADMK rebels backed Vijay" },
  { id: 20260513002, tag: "ASSEMBLY",  tagIcon: "🗳️", text: "TVK won 108 seats — First non-Dravidian party govt since 1967" },
  { id: 20260513003, tag: "MANIFESTO", tagIcon: "📊",  text: "₹2,500/month for women below 60 years — Implementation pending" },
  { id: 20260700001, tag: "UPCOMING",  tagIcon: "📋",  text: "First full budget 2026–27 expected June–July 2026" },
  { id: 20260522001, tag: "CABINET",   tagIcon: "👥",  text: "Cabinet expansion complete with 35 ministers from TVK, INC, VCK, and IUML coalition" },
  { id: 20260523001, tag: "DELHI VISIT", tagIcon: "✈️", text: "CM Vijay visits New Delhi for the first time since taking office to meet PM Modi and President Murmu" },
  { id: 20260523002, tag: "WELFARE",     tagIcon: "💼", text: "PWD Minister Aadhav Arjuna guarantees job security and alternative government positions for closed TASMAC shop workers" },
  { id: 20260525004, tag: "POLICY",      tagIcon: "🎬", text: "5 shows/day now allowed for new Tamil films in first 7 days — CM Vijay amends Tamil Nadu Cinemas (Regulation) Rules, 1957" },
  { id: 20260527001, tag: "DELHI",       tagIcon: "✈️", text: "May 27: CM Vijay in New Delhi — meets PM Modi at 4:30 PM; presents state memorandum on funds, welfare schemes, Cauvery & Mekedatu" },
  { id: 20260527002, tag: "ASSEMBLY",    tagIcon: "🗳️", text: "4 AIADMK MLAs (Maragatham, Jayakumar, Sathyabama, Esakki Subaya) join TVK — AIADMK strength falls to 43 seats" },
  { id: 20260527003, tag: "FARMERS",     tagIcon: "🌾", text: "Crop loan waiver up to ₹50,000 — 14.22 lakh small & marginal farmers to benefit; TN govt absorbs ₹2,044 crore" },
  { id: 20260528001, tag: "DELHI",       tagIcon: "✈️", text: "CM Vijay returns to Chennai after maiden Delhi visit — met PM Modi & FM Sitharaman; raised Mekedatu, fishermen, Tamil Thai Vazhthu" },
  { id: 20260601001, tag: "ORDER",     tagIcon: "📋", text: "Higher Education Dept announces 3,570 new seats in Polytechnic Colleges for 2026-27" },
  { id: 20260601002, tag: "SCHEME",    tagIcon: "🚚", text: "Thayumanavar Scheme: Doorstep delivery of PDS commodities on June 2nd and 3rd" },
  { id: 20260602001, tag: "ORDER",     tagIcon: "📋", text: "Jal Jeevan Mission 2.0 MoU signed — ₹2,177 crore secured for TN water projects" },
  { id: 20260603001, tag: "EVENT",     tagIcon: "💐", text: "103rd Birth Anniversary of Kalaignar M. Karunanidhi celebrated across Tamil Nadu" }
];
