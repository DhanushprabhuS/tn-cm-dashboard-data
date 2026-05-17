/**
 * assemblyCalendar.ts — Upcoming Assembly calendar & legislative milestones.
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - date: descriptive expected date string e.g. "Expected: June–July 2026"
 *   - borderColor: optional CSS color for the card border accent (default omit).
 *     Use "rgba(255,71,87,0.2)" for urgent/legal items (red tint).
 */

export interface CalendarItem {
  id: number;          // YYYYMMDD### — earliest expected date
  icon: string;
  date: string;        // Display string e.g. "Expected: June–July 2026"
  title: string;
  desc: string;
  borderColor?: string; // Optional border override e.g. "rgba(255,71,87,0.2)"
}

export const assemblyCalendar: CalendarItem[] = [
  {
    id: 20260601001,
    icon: "💰",
    date: "Expected: June–July 2026",
    title: "Full State Budget 2026–27",
    desc: "Vijay govt's first full budget. Will cover welfare scheme funding (₹2,500/women, LPG, pensions), debt management, and capital expenditure. State debt at ₹9.52 lakh crore inherited from previous govt.",
  },
  {
    id: 20260701001,
    icon: "📜",
    date: "Expected: Q3 2026",
    title: "Legislative Bills — First Session",
    desc: "TVK manifesto bills expected: women's monthly aid scheme, crop loan waiver legislation, OPS (Old Pension Scheme) for govt employees, drug-free TN statutory framework.",
  },
  {
    id: 20260510005,
    icon: "📄",
    date: "Announced — Date TBD",
    title: "Financial White Paper Tabling",
    desc: "CM Vijay to table a white paper on the state's financial position inherited from the DMK govt — exposing debt, treasury status, and forward fiscal plan.",
  },
  {
    id: 20260800001,
    icon: "🏥",
    date: "Expected: 2026",
    title: "Health Insurance Bill — ₹25L Coverage",
    desc: "Legislative backing for the proposed ₹25 lakh family health insurance scheme. Will require Assembly approval and budget allocation.",
  },
  {
    id: 20260513002,
    icon: "⚖️",
    date: "Watch: Madras HC Order",
    title: "Tiruppattur Constituency Case",
    desc: "Madras HC restrained TVK MLA Seenivasa Sethupathi from participating in floor motions over a disputed postal vote. Case ongoing.",
    borderColor: "rgba(255,71,87,0.2)",
  },
];
