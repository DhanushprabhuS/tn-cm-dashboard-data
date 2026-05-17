/**
 * ticker.ts — Breaking-news ticker items scrolling at the top of the dashboard.
 * Agent Last Updated: May 17, 2026
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
];
