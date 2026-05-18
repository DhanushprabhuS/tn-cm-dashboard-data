/**
 * pressReleases.ts — Official Government Press Releases from tn.gov.in / cms.tn.gov.in
 * Agent Last Updated: May 17, 2026
 *
 * THIS IS THE PRIMARY FILE THE AI AGENT UPDATES — check daily.
 *
 * HOW TO UPDATE:
 *   - Append new entries at the BOTTOM of the array.
 *   - id format: YYYYMMDD### (e.g. 20260517001 for first release on May 17)
 *   - date: "Month DD, YYYY" (e.g. "May 17, 2026") — used for sorting
 *   - url: direct link to image (jpg/png) or PDF on cms.tn.gov.in
 *     If no specific URL: use "https://www.tn.gov.in/press_release.php"
 *   - Image URLs ending in .jpg/.png will show a thumbnail + lightbox in the app.
 *   - PDF URLs will show a "View on tn.gov.in" link.
 */

export interface PressRelease {
  id: number;       // YYYYMMDD### — sort key
  dept: string;
  date: string;     // "May 16, 2026"
  title: string;
  summary: string;
  url?: string;     // image or PDF link
}

export const pressReleases: PressRelease[] = [
  {
    id: 20260510001,
    dept: "Home Dept",
    date: "May 10, 2026",
    title: "Establishment of Singa Pen Sirappu Athiradi Padai",
    summary: "All-women special task force established statewide for enhanced women's security. Special facilities and dedicated officers covering all districts and commissionerates.",
    url: ""
  },
  {
    id: 20260510002,
    dept: "Energy Dept (D3)",
    date: "May 10, 2026",
    title: "Free Electricity — 200 Units for Eligible Households",
    summary: "Households consuming ≤500 units/bimonthly eligible for 200 free units. Above 500 units: 100 units free. Auto-adjusted in TNPDCL bills, effective immediately.",
    url: ""
  },
  {
    id: 20260510003,
    dept: "Home Dept",
    date: "May 10, 2026",
    title: "65 Anti-Narcotic Task Force Stations — District-wise Rollout",
    summary: "37 stations at district HQs (one per district) + 28 across 9 police commissionerates. Goal: drug-free Tamil Nadu with focus on synthetic narcotics.",
    url: ""
  },
  {
    id: 20260515001,
    dept: "Chief Electoral Officer",
    date: "May 15, 2026",
    title: "TN Legislative Assembly General Election 2026 — Completion of Counting of Votes (English)",
    summary: "Official release from the Chief Electoral Officer and Principal Secretary to Government on the completion of vote counting for the General Election to Tamil Nadu Legislative Assembly, 2026.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_033_CEO.pdf"
  },
  {
    id: 20260515002,
    dept: "Chief Electoral Officer",
    date: "May 15, 2026",
    title: "TN Legislative Assembly General Election 2026 — Completion of Counting of Votes (Tamil)",
    summary: "Tamil version of the official release from the Chief Electoral Officer on completion of vote counting for the General Election to Tamil Nadu Legislative Assembly, 2026.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_t_033_CEO.pdf"
  },
  {
    id: 20260515003,
    dept: "CMO",
    date: "May 15, 2026",
    title: "Chairperson & MD of TAFE and Vice Chairperson called on the Hon'ble Chief Minister",
    summary: "The Chairperson and Managing Director of TAFE along with the Vice Chairperson held a meeting with Chief Minister Vijay at the Secretariat.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526b.jpg"
  },
  {
    id: 20260515004,
    dept: "CMO",
    date: "May 15, 2026",
    title: "Chairman, CII Southern Region and Team called on the Hon'ble Chief Minister",
    summary: "The Chairman of the Confederation of Indian Industry (CII) Southern Region and team met with Chief Minister Vijay to discuss investment and industry collaboration.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526a.jpg"
  },
  {
    id: 20260515005,
    dept: "CMO",
    date: "May 15, 2026",
    title: "Managing Director of BMW Group called on the Hon'ble Chief Minister",
    summary: "The Managing Director of BMW Group held discussions with Chief Minister Vijay, exploring potential automotive investment and expansion opportunities in Tamil Nadu.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526c.jpg"
  },
  {
    id: 20260515006,
    dept: "CMO",
    date: "May 15, 2026",
    title: "Mr. Jim Aota, Chairman of Yamaha Motor India and Team, called on the Hon'ble Chief Minister",
    summary: "Mr. Jim Aota, Chairman of Yamaha Motor India, and his team called on Chief Minister Vijay to discuss manufacturing expansion and investment plans in Tamil Nadu.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526d.jpg"
  },
  {
    id: 20260515007,
    dept: "CMO / Agriculture",
    date: "May 15, 2026",
    title: "CM chaired Review Meeting on Kuruvai Paddy Cultivation and Water Storage Levels in Major Dams",
    summary: "Chief Minister Vijay presided over a high-level review meeting focused on Kuruvai paddy cultivation prospects and current water storage levels across major dams in Tamil Nadu.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526e.jpg"
  },
  {
    id: 20260515008,
    dept: "CMO",
    date: "May 15, 2026",
    title: "IAS officers called on CM with LEADS 2025 'Exemplar State' Award conferred on Tamil Nadu",
    summary: "IAS officers of the concerned departments called on Chief Minister Vijay to present the LEADS 2025 'Exemplar State' Award conferred on Tamil Nadu by the Union Government.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526f.jpg"
  },
  {
    id: 20260515009,
    dept: "Finance Dept",
    date: "May 15, 2026",
    title: "From Finance Department (English)",
    summary: "Official press release from the Finance Department of Tamil Nadu Government — English version.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_027.pdf"
  },
  {
    id: 20260515010,
    dept: "Finance Dept",
    date: "May 15, 2026",
    title: "From Finance Department (Tamil)",
    summary: "Official press release from the Finance Department of Tamil Nadu Government — Tamil version.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_t_027.pdf"
  },
  {
    id: 20260515011,
    dept: "SDAT",
    date: "May 15, 2026",
    title: "From Sports Development Authority of Tamil Nadu (English)",
    summary: "Official press release from the Sports Development Authority of Tamil Nadu — English version.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_026.pdf"
  },
  {
    id: 20260515012,
    dept: "EDII-TN",
    date: "May 15, 2026",
    title: "EDII-TN — Admissions for One-Year Certificate Course in Entrepreneurship and Innovation (CPEI-2026)",
    summary: "Entrepreneurship Development and Innovation Institute (EDII-TN) announces admissions for the one-year certificate course in Entrepreneurship and Innovation (CPEI-2026).",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_025.pdf"
  },
  {
    id: 20260515013,
    dept: "CMO",
    date: "May 15, 2026",
    title: "CM's Statement on Petroleum Product Price Hike by Public Sector Oil Companies",
    summary: "Statement of Hon'ble Chief Minister Vijay regarding the price hike of petroleum products by Public Sector Oil Companies, urging the Union Government to roll back the hike to ease the burden on common people.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pn150526_001.pdf"
  },
  {
    id: 20260516001,
    dept: "Lok Bhavan",
    date: "May 16, 2026",
    title: "Governor Approves Cabinet Portfolio Allocation",
    summary: "Governor Rajendra Arlekar approved all portfolios recommended by CM Vijay. Finance → KA Sengottaiyan. Health → KG Arunraj. Industries → S. Keerthana. Energy/Law → R. Nirmalkumar.",
    url: ""
  },
  {
    id: 20260516002,
    dept: "Dept of Information",
    date: "May 16, 2026",
    title: "Dr A. Arun Thamburaj IAS joined duty as Director of Information and Public Relations",
    summary: "Dr A. Arun Thamburaj IAS officially assumed charge as the new Director of Information and Public Relations, Tamil Nadu Government.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526a.jpg"
  },
  {
    id: 20260516003,
    dept: "Tamil Development & Info Dept",
    date: "May 16, 2026",
    title: "Minister for School Education chaired review meeting of Tamil Development and Information Department",
    summary: "Hon'ble Minister for School Education, Tamil Development, Information and Publicity presided over a comprehensive review meeting of the Tamil Development and Information Department.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526d.jpg"
  },
  {
    id: 20260516004,
    dept: "TN Legislative Assembly",
    date: "May 16, 2026",
    title: "Speaker conducted public grievance inspection in Thousand Lights Legislative Assembly Constituency",
    summary: "Hon'ble Speaker of the Tamil Nadu Legislative Assembly conducted an on-ground inspection for public grievances redressal in the Thousand Lights Legislative Assembly Constituency.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526_sp1.jpg"
  },
  {
    id: 20260516005,
    dept: "Municipal Admin",
    date: "May 16, 2026",
    title: "Minister Thiru P. Venkataramanan inspected renovation works at Nageswara Rao Park, Mylapore",
    summary: "Hon'ble Minister Thiru P. Venkataramanan conducted an inspection of the ongoing renovation and infrastructure development works at Nageswara Rao Park, Mylapore.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526a1.jpg"
  },
  {
    id: 20260516006,
    dept: "Energy & Law Dept",
    date: "May 16, 2026",
    title: "Press meeting of the Hon'ble Minister for Energy Resources and Law",
    summary: "Hon'ble Minister for Energy Resources and Law addressed a press conference covering key departmental updates and policy announcements.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pn160526_002.pdf"
  },
  {
    id: 20260518001,
    dept: "CMO",
    date: "May 18, 2026",
    title: "The Chairman of Federation of Indian Chambers of Commerce and Industry (FICCI) Tamil Nadu State Council called on the Honble Chief Minister",
    summary: "The Chairman of Federation of Indian Chambers of Commerce and Industry (FICCI) Tamil Nadu State Council met with Chief Minister Vijay.",
    url: "https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526a.jpg"
  },
];
