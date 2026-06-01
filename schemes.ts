/**
 * schemes.ts — Government Orders (GOs) and Active Schemes.
 * Agent Last Updated: June 01, 2026
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - status: "ACTIVE" | "PENDING" — statusClass: "" | "pending"
 *   - date: descriptive string like "Signed: May 10, 2026 · Dept Name"
 *   - dateValue: "YYYY-MM-DD" proper date value for UI filtering.
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
  dateValue: string;  // "YYYY-MM-DD" Proper date value
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
    dateValue: "2026-05-10",
    color: "#FF6B00"
  },
  {
    id: 20260510002,
    tag: "GO · DAY 1",
    name: "👮‍♀️ Singa Pen Sirappu Athiradi Padai",
    status: "ACTIVE", statusClass: "",
    desc: "Elite all-women special task force established statewide to address women's security concerns with faster complaint resolution. Equipped with modern facilities and dedicated officers. Covers all districts and commissionerates.",
    date: "Signed: May 10, 2026 · Home Department",
    dateValue: "2026-05-10",
    color: "#FF4757"
  },
  {
    id: 20260510003,
    tag: "GO · DAY 1",
    name: "💊 Anti-Narcotic Task Force Expansion",
    status: "ACTIVE", statusClass: "",
    desc: "65 dedicated Anti-Narcotic Task Force police stations established — 37 in district HQs (one per district) + 28 across 9 police commissionerates. Goal: Drug-free Tamil Nadu. Focus on synthetic narcotics and pharmaceutical abuse.",
    date: "Signed: May 10, 2026 · Home Department",
    dateValue: "2026-05-10",
    color: "#00C9A7"
  },
  {
    id: 20260512001,
    tag: "GO · DAY 3",
    name: "🍺 717 TASMAC Shops Ordered Shut",
    status: "ACTIVE", statusClass: "",
    desc: "CM Vijay ordered the closure of 717 retail liquor shops within two weeks for public welfare. This comprises 276 shops near places of worship, 186 near educational institutions, and 255 near bus stands.",
    date: "Signed: May 12, 2026 · Prohibition & Excise Department",
    dateValue: "2026-05-12",
    color: "#1A73E8"
  },
  {
    id: 20260518001,
    tag: "GO · DAY 9",
    name: "🍽️ Amma Unavagam Renovation & Modernisation",
    status: "ACTIVE", statusClass: "",
    desc: "CM Vijay announced the renovation and modernisation of Amma Unavagams across Tamil Nadu, which had fallen into disrepair under the previous DMK government. The initiative aims to restore and upgrade the subsidised canteens to ensure quality, hygienic affordable meals continue to reach the common people.",
    date: "Signed: May 18, 2026 · CMO",
    dateValue: "2026-05-18",
    color: "#E91E63"
  },
  {
    id: 20260515001,
    tag: "GO · DAY 6",
    name: "🎓 Tamil Pudhalvan & Pudhumai Penn — Continued",
    status: "ACTIVE", statusClass: "",
    desc: "Vijay government continued the DMK-era Tamil Pudhalvan and Pudhumai Penn scholarship schemes without disruption. ₹1,000 each deposited directly into the bank accounts of approximately 6 lakh student beneficiaries on May 15, 2026, signalling welfare continuity across administrations.",
    date: "Signed: May 15, 2026 · Higher Education Department",
    dateValue: "2026-05-15",
    color: "#7C3AED"
  },
  {
    id: 20260515002,
    tag: "UPCOMING",
    name: "👩 Magalir Urimai Thittam — Restructured at ₹2,500/month",
    status: "PENDING", statusClass: "pending",
    desc: "CM Vijay committed to continuing the Kalaignar Magalir Urimai Thittam (KMUT) monthly women's assistance scheme while requesting time to restructure it. May 2026 payment of ₹1,000 to be credited shortly. TVK's manifesto promise: raise the monthly assistance to ₹2,500 per eligible woman household head. Restructuring and eligibility finalisation underway.",
    date: "Announced: May 15, 2026 · Social Welfare Department",
    dateValue: "2026-05-15",
    color: "#D63384"
  },
  {
    id: 20260510004,
    tag: "UPCOMING",
    name: "📄 State Financial White Paper",
    status: "PENDING", statusClass: "pending",
    desc: "CM Vijay announced plans to release a Financial White Paper exposing the inherited debt burden. Tamil Nadu's debt stands at ₹9.52 lakh crore (revised 2025-26 estimates), projected to reach ₹10.71 lakh crore by March 2027.",
    date: "Announced: May 10, 2026 · Finance Department",
    dateValue: "2026-05-10",
    color: "#FFB800"
  },
  {
    id: 20260520003,
    tag: "GO · DAY 11",
    name: "🚑 40 New Vehicles for Medical and Rural Health Services",
    status: "ACTIVE", statusClass: "",
    desc: "Honble Chief Minister Vijay flagged off 40 new vehicles for the use of the Directorate of Medical and Rural Health Services.",
    date: "Signed: May 20, 2026 · CMO",
    dateValue: "2026-05-20",
    color: "#00C9A7"
  },
  {
    id: 20260521002,
    tag: "GO · DAY 12",
    name: "🤖 Dedicated AI & IT Department Established",
    status: "ACTIVE", statusClass: "",
    desc: "Tamil Nadu became one of the first Indian states to create a dedicated Artificial Intelligence department at the cabinet level. Minister R. Kumar (Velachery) appointed to oversee AI, Information Technology & Digital Services. TN joins Kerala as a trailblazer among Indian states granting AI a standalone ministry. The move signals Tamil Nadu's ambition to lead India's AI-driven governance and digital economy.",
    date: "Signed: May 21, 2026 · IT & AI Department",
    dateValue: "2026-05-21",
    color: "#7C3AED"
  },
  {
    id: 20260521001,
    tag: "GO · DAY 12",
    name: "⚡ TNEB Green Energy Corruption Crackdown",
    status: "ACTIVE", statusClass: "",
    desc: "Within 12 days of taking office, CM Vijay's government initiated decisive action against entrenched irregularities at the Tamil Nadu Green Energy Corporation Limited (TNGECL). Energy Minister C.T.R. Nirmalkumar chaired a maiden review meeting at TNEB HQ, uncovering that senior officials had cleared solar and wind energy project approvals — including Letters of Award under the PM-KUSUM scheme — without knowledge of top management and in violation of the Model Code of Conduct during the election period. Action taken: (1) V. Kasi, Chief Finance Controller (Revenue), placed under suspension; (2) P. Chandrasekaran, Chief Engineer (Non-Conventional Energy) and TNGECL Director in-charge, placed under suspension; (3) All pension benefits of retired Director (Technical) S. Mangalanathan withheld pending departmental inquiry. A full audit of green energy approvals and tender processes is underway across TNEB and TNGECL.",
    date: "Signed: May 21, 2026 · Energy Department / TNEB",
    dateValue: "2026-05-21",
    color: "#FF4757"
  },
  {
    id: 20260522001,
    tag: "GO · DAY 13",
    name: "🤝 Coalition Power-Sharing — Congress, VCK & IUML Join Cabinet",
    status: "ACTIVE", statusClass: "",
    desc: "CM Vijay completed the TVK-led coalition power-sharing arrangement on May 22, 2026, with three alliance parties inducted into the Council of Ministers. Congress joins the Tamil Nadu government after 59 years (since 1967): S. Rajesh Kumar (Tourism) and P. Viswanathan (Higher Education). VCK's Vanni Arasu takes charge of Social Justice, Adi Dravidar Welfare & Hill Tribes. IUML's A.M. Shahjahan takes charge of Minorities Welfare & Wakf Board. The expanded 35-member cabinet represents TVK's commitment to an inclusive coalition governance model.",
    date: "Signed: May 22, 2026 · CMO",
    dateValue: "2026-05-22",
    color: "#1A73E8"
  },
{
  id: 20260525001,
  tag: "GO · DAY 13",
  name: "🌾 Cooperative Bank Crop Loan Waiver Scheme — Structured Relief for Farmers",
  status: "ACTIVE",
  statusClass: "",
  desc: "CM Vijay announced a tiered cooperative bank crop loan waiver benefiting 14.22 lakh farmers at ₹2,044 crore total expenditure. Marginal farmers: full waiver up to ₹50,000; loans ₹50k–₹1L get graded relief (₹40k→₹10k). Small farmers: 50% waiver up to ₹50k; graded relief above. Large farmers: flat ₹5,000 relief. Announced at Secretariat review chaired by CM with Agriculture, Cooperation, and Finance Ministers.",
  date: "Signed: May 25, 2026 · CMO · Agriculture & Cooperation Dept",
  dateValue: "2026-05-25",
  color: "#16a34a"
},
{
  id: 20260601001,
  tag: "GO · JUNE 1",
  name: "🚚 Thayumanavar Scheme — Doorstep PDS Delivery",
  status: "ACTIVE",
  statusClass: "",
  desc: "A flagship welfare scheme ensuring doorstep delivery of essential PDS commodities to eligible beneficiaries. The scheme aims to improve accessibility and convenience for senior citizens and differently-abled persons. Doorstep delivery for the month of June scheduled for June 2nd and 3rd.",
  date: "Announced: June 01, 2026 · Civil Supplies & Consumer Protection Dept",
  dateValue: "2026-06-01",
  color: "#00C9A7"
}
];
