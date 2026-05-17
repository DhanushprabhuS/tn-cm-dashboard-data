/**
 * schemes.ts — Government Orders (GOs) and Active Schemes.
 * Agent Last Updated: May 17, 2026
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - status: "ACTIVE" | "PENDING" — statusClass: "" | "pending"
 *   - date: descriptive string like "Signed: May 10, 2026 · Dept Name"
 *     The app extracts the date portion for Latest/Historic sorting.
 *   - color: hex color for the card's left accent border.
 */

export interface Scheme {
  id: number;         // YYYYMMDD### — date the GO was signed / announced
  tag: string;        // e.g. "GO · DAY 1" | "UPCOMING"
  name: string;
  status: 'ACTIVE' | 'PENDING';
  statusClass: '' | 'pending';
  desc: string;
  date: string;       // "Signed: May 10, 2026 · Dept" — used for sorting
  color: string;      // CSS hex
}

export const schemes: Scheme[] = [
  {
    id: 20260510001,
    tag: "GO · DAY 1",
    name: "⚡ Free Electricity Expansion Scheme",
    status: "ACTIVE", statusClass: "",
    desc: "Households consuming up to 500 units/bimonthly get 200 units free. Households consuming above 500 units continue to get 100 units free. Auto-adjusted in TNPDCL bills — no application required. Effective from May 10, 2026 via Energy (D3) Dept order.",
    date: "Signed: May 10, 2026 · Energy Department (D3)",
    color: "#FF6B00"
  },
  {
    id: 20260510002,
    tag: "GO · DAY 1",
    name: "👮‍♀️ Singa Pen Sirappu Athiradi Padai",
    status: "ACTIVE", statusClass: "",
    desc: "Elite all-women special task force established statewide to address women's security concerns with faster complaint resolution. Equipped with modern facilities and dedicated officers. Covers all districts and commissionerates.",
    date: "Signed: May 10, 2026 · Home Department",
    color: "#FF4757"
  },
  {
    id: 20260510003,
    tag: "GO · DAY 1",
    name: "💊 Anti-Narcotic Task Force Expansion",
    status: "ACTIVE", statusClass: "",
    desc: "65 dedicated Anti-Narcotic Task Force police stations established — 37 in district HQs (one per district) + 28 across 9 police commissionerates. Goal: Drug-free Tamil Nadu. Focus on synthetic narcotics and pharmaceutical abuse.",
    date: "Signed: May 10, 2026 · Home Department",
    color: "#00C9A7"
  },
  {
    id: 20260512001,
    tag: "GO · DAY 3",
    name: "🍺 717 TASMAC Shops Ordered Shut",
    status: "ACTIVE", statusClass: "",
    desc: "CM Vijay ordered the closure of 717 retail liquor shops within two weeks for public welfare. This comprises 276 shops near places of worship, 186 near educational institutions, and 255 near bus stands.",
    date: "Signed: May 12, 2026 · Prohibition & Excise Department",
    color: "#1A73E8"
  },
  {
    id: 20260510004,
    tag: "UPCOMING",
    name: "📄 State Financial White Paper",
    status: "PENDING", statusClass: "pending",
    desc: "CM Vijay announced plans to release a Financial White Paper exposing the inherited debt burden. Tamil Nadu's debt stands at ₹9.52 lakh crore (revised 2025-26 estimates), projected to reach ₹10.71 lakh crore by March 2027.",
    date: "Announced: May 10, 2026 · Finance Department",
    color: "#FFB800"
  },
];
