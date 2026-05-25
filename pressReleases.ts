/**
 * pressReleases.ts — Official Government Press Releases from tn.gov.in / cms.tn.gov.in
 * Agent Last Updated: May 23, 2026
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
  dept: string[];
  date: string;     // "May 16, 2026"
  title: string;
  summary: string;
  imageUrls?: string[];
  pdfUrls?: string[];
  dateValue: string; // "YYYY-MM-DD"
  highlight?: boolean; // true for major company / foreign investor meetings with CM
}

export const pressReleases: PressRelease[] = [
  {
    id: 20260510001,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Establishment of Singa Pen Sirappu Athiradi Padai",
    summary: "All-women special task force established statewide for enhanced women's security. Special facilities and dedicated officers covering all districts and commissionerates.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260510002,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Free Electricity — 200 Units for Eligible Households",
    summary: "Households consuming ≤500 units/bimonthly eligible for 200 free units. Above 500 units: 100 units free. Auto-adjusted in TNPDCL bills, effective immediately.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260510003,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "65 Anti-Narcotic Task Force Stations — District-wise Rollout",
    summary: "37 stations at district HQs (one per district) + 28 across 9 police commissionerates. Goal: drug-free Tamil Nadu with focus on synthetic narcotics.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260510004,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Governor of Tamil Nadu administered the Oath of Office and Oath of Secrecy to Thiru C. Joseph Vijay as the Honble Chief Minister of Tamil Nadu",
    summary: "Swearing-in Ceremony of Thiru C. Joseph Vijay as Chief Minister, held at Nehru Indoor Stadium, Chennai, with the Governor administering the oath.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510005,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "The Chief Secretary extended warm welcome to Thiru C. Joseph Vijay, Honble Chief Minister designate",
    summary: "The Chief Secretary welcomed the new Chief Minister designate upon his arrival for the Swearing-in Ceremony.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510006,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister received an enthusiastic welcome from the general public upon his arrival to the Secretariat",
    summary: "The newly sworn-in Chief Minister was greeted by members of the public upon his first arrival at the Secretariat.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526r.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510007,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Thiru Rahul Gandhi was extended warm welcome by the Honble Chief Minister designate",
    summary: "Leader of the Opposition in Lok Sabha, Thiru Rahul Gandhi, was welcomed by the Chief Minister designate at the swearing-in ceremony.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526i.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510008,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Governor took group photo with the Honble Chief Minister and newly inducted Ministers",
    summary: "A group photograph of the Governor, Chief Minister, and the new Council of Ministers with Thiru Rahul Gandhi.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526u.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510009,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Governor administered Oath of Office to Thiru Karuppaiah as Pro-tem Speaker",
    summary: "The Governor administered the oath of office to the Pro-tem Speaker of the Tamil Nadu Legislative Assembly in the presence of the Chief Minister.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526_za.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510010,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister called on the Dravidar Kazhagam President Thiru K. Veeramani",
    summary: "The new Chief Minister paid a visit to the Dravidar Kazhagam President at Periyar Thidal, Chennai.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526_zd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510011,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister paid floral tributes at Thanthai Periyar Memorial",
    summary: "The Chief Minister paid respects at the Thanthai Periyar Memorial.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526_ze.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510012,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister signed Government Orders for free electricity scheme and other initiatives",
    summary: "Upon assuming office, the CM signed G.O.s for a free electricity scheme, the formation of 'Singa Pen' special force, and anti-narcotics units.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526_cs.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510013,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister chaired a meeting on the status of Law and Order",
    summary: "The Chief Minister reviewed the prevailing law and order situation in the state.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526x.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510014,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Honble Chief Minister signed three significant Government orders to fulfill election manifesto promises",
    summary: "The Chief Minister's first official actions included signing G.O.s for key electoral promises.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526o.jpg"],
    pdfUrls: []
  },
  {
    id: 20260510015,
    dept: ["CMO"],
    date: "May 10, 2026",
    dateValue: "2026-05-10",
    title: "Inaugural address of Thiru. C. Joseph Vijay after being sworn in as the Honble Chief Minister",
    summary: "The text and summary of the new Chief Minister's first address after taking the oath of office.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr100526j.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511001,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "The Pro-tem Speaker administered oath to the Honble Chief Minister as Member of the Legislative Assembly",
    summary: "The Chief Minister took oath as an MLA from the Pro-tem Speaker.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511002,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Nominations for Assembly Speaker and Deputy Speaker posts were filed in the presence of Honble Chief Minister",
    summary: "Nominations for the key legislative positions were filed in the Chief Minister's presence.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511003,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Honble Chief Minister called on former Chief Minister Thiru M.K. Stalin",
    summary: "The new Chief Minister called on and exchanged greetings with the former Chief Minister.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_f.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511004,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Honble Chief Minister called on Thiru Vaiko, General Secretary, MDMK",
    summary: "The Chief Minister met with the MDMK general secretary.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511005,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Honble Chief Minister called on Dr. Anbumani Ramadoss, President, PMK",
    summary: "The Chief Minister met with the PMK president.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_i.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511006,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Honble Chief Minister called on Thiru Seeman, Chief Coordinator, Naam Tamilar Katchi",
    summary: "The Chief Minister met with the Naam Tamilar Katchi chief coordinator.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_j.jpg"],
    pdfUrls: []
  },
  {
    id: 20260511007,
    dept: ["CMO"],
    date: "May 11, 2026",
    dateValue: "2026-05-11",
    title: "Honble Chief Minister received a petition from Thiru P. Ayyakannu regarding pending dues",
    summary: "The Chief Minister met with a farmers' association president who submitted a petition on pending dues.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr110526_k.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512001,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister delivered felicitation address on the assumption of Office by the Speaker and Deputy Speaker",
    summary: "The Chief Minister spoke at the ceremony where the new Speaker and Deputy Speaker of the Assembly assumed office.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512002,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Thiru J.C.D. Prabhakar assumed office as Speaker of the Tamil Nadu Legislative Assembly",
    summary: "The newly elected Speaker took office in the presence of the Chief Minister.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512003,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister called on Professor Kader Mohideen, National President, IUML",
    summary: "The Chief Minister met with the national president of the Indian Union Muslim League.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512004,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister felicitated Thiru M. Ravishankar on his assumption as Deputy Speaker",
    summary: "The Chief Minister congratulated the new Deputy Speaker of the Assembly.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526i.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512005,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister felicitated Thiru J.C.D. Prabhakar on his assumption as Speaker",
    summary: "The Chief Minister congratulated the new Speaker of the Assembly.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526_j.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512006,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister called on Thiru Thol. Thirumavalavan, President, VCK",
    summary: "The Chief Minister met with the Viduthalai Chiruthaigal Katchi president.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526k.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512007,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister called on Thiru K. Selvaperunthagai, President, TNCC",
    summary: "The Chief Minister met with the Tamil Nadu Congress Committee president.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526l.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512008,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister called on AIADMK legislators",
    summary: "The Chief Minister met with several AIADMK legislators.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526m.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512009,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister chaired a review meeting on Municipal and Rural Development Departments",
    summary: "The Chief Minister reviewed the functioning of key infrastructure and rural development departments.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526g.jpg"],
    pdfUrls: []
  },
  {
    id: 20260512010,
    dept: ["CMO"],
    date: "May 12, 2026",
    dateValue: "2026-05-12",
    title: "Honble Chief Minister ordered closure of 717 liquor retail shops located near sensitive places",
    summary: "A major policy decision to close liquor shops located near places of worship, educational institutions, and bus stands within two weeks.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr120526_007.PDF"]
  },
  {
    id: 20260513001,
    dept: ["CMO"],
    date: "May 13, 2026",
    dateValue: "2026-05-13",
    title: "Honble Chief Minister delivered felicitation address after winning the vote of confidence",
    summary: "The Chief Minister's address to the Legislative Assembly after successfully proving his majority.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr130526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260513002,
    dept: ["CMO"],
    date: "May 13, 2026",
    dateValue: "2026-05-13",
    title: "Statement by the Honble Chief Minister urging the Union Government to cancel NEET",
    summary: "The Chief Minister released a formal statement requesting the central government to abolish NEET and base medical admissions on Class 12 marks.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr130526_e_016.pdf"]
  },
  {
    id: 20260514001,
    dept: ["CMO"],
    date: "May 14, 2026",
    dateValue: "2026-05-14",
    title: "Honble Chief Minister chaired a review meeting on the financial position of the State",
    summary: "The Chief Minister met with Finance Department officials to review the state's financial health.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr140526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260514002,
    dept: ["CMO"],
    date: "May 14, 2026",
    dateValue: "2026-05-14",
    title: "Honble Chief Minister chaired review meeting on the functioning of the Industries Department",
    summary: "A review meeting on the performance and functioning of the Industries, Investment Promotion and Commerce Department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr140526b.jpg"],
    pdfUrls: []
  },
  {
    id: 20260514003,
    dept: ["CMO"],
    date: "May 14, 2026",
    dateValue: "2026-05-14",
    title: "Text of the D.O. Letter of the Hon'ble Chief Minister regarding import duty on cotton",
    summary: "The text of a letter from the Chief Minister to the Prime Minister urging the withdrawal of import duty on cotton.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr140526_020.pdf"]
  },
  {
    id: 20260514004,
    dept: ["CMO"],
    date: "May 14, 2026",
    dateValue: "2026-05-14",
    title: "Honble Chief Minister announced increase in dearness allowance for Government Employees",
    summary: "The Chief Minister announced a hike in dearness allowance for state government employees and teachers from 58% to 60%.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr140526_019.pdf"]
  },
  {
    id: 20260514005,
    dept: ["CMO"],
    date: "May 14, 2026",
    dateValue: "2026-05-14",
    title: "Honble Chief Minister facilitated early credit of Kalaignar Magalir Urimai Thogai for May 2026",
    summary: "The Chief Minister announced the early disbursement of a monthly financial assistance scheme to beneficiaries' bank accounts.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr140526_018.pdf"]
  },
  {
    id: 20260515001,
    dept: ["Chief Electoral Officer"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "TN Legislative Assembly General Election 2026 — Completion of Counting of Votes (English)",
    summary: "Official release from the Chief Electoral Officer and Principal Secretary to Government on the completion of vote counting for the General Election to Tamil Nadu Legislative Assembly, 2026.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_033_CEO.pdf"]
  },
  {
    id: 20260515002,
    dept: ["Chief Electoral Officer"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "TN Legislative Assembly General Election 2026 — Completion of Counting of Votes (Tamil)",
    summary: "Tamil version of the official release from the Chief Electoral Officer on completion of vote counting for the General Election to Tamil Nadu Legislative Assembly, 2026.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_t_033_CEO.pdf"]
  },
  {
    id: 20260515003,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "Chairperson & MD of TAFE and Vice Chairperson called on the Hon'ble Chief Minister",
    summary: "The Chairperson and Managing Director of TAFE along with the Vice Chairperson held a meeting with Chief Minister Vijay at the Secretariat.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526b.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260515004,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "Chairman, CII Southern Region and Team called on the Hon'ble Chief Minister",
    summary: "The Chairman of the Confederation of Indian Industry (CII) Southern Region and team met with Chief Minister Vijay to discuss investment and industry collaboration.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260515005,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "Managing Director of BMW Group called on the Hon'ble Chief Minister",
    summary: "The Managing Director of BMW Group held discussions with Chief Minister Vijay, exploring potential automotive investment and expansion opportunities in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526c.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260515006,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "Mr. Jim Aota, Chairman of Yamaha Motor India and Team, called on the Hon'ble Chief Minister",
    summary: "Mr. Jim Aota, Chairman of Yamaha Motor India, and his team called on Chief Minister Vijay to discuss manufacturing expansion and investment plans in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526d.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260515007,
    dept: ["CMO / Agriculture"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "CM chaired Review Meeting on Kuruvai Paddy Cultivation and Water Storage Levels in Major Dams",
    summary: "Chief Minister Vijay presided over a high-level review meeting focused on Kuruvai paddy cultivation prospects and current water storage levels across major dams in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260515008,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "IAS officers called on CM with LEADS 2025 'Exemplar State' Award conferred on Tamil Nadu",
    summary: "IAS officers of the concerned departments called on Chief Minister Vijay to present the LEADS 2025 'Exemplar State' Award conferred on Tamil Nadu by the Union Government.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526f.jpg"],
    pdfUrls: []
  },
  {
    id: 20260515009,
    dept: ["Finance Dept"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "From Finance Department (English)",
    summary: "Official press release from the Finance Department of Tamil Nadu Government — English version.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_027.pdf"]
  },
  {
    id: 20260515010,
    dept: ["Finance Dept"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "From Finance Department (Tamil)",
    summary: "Official press release from the Finance Department of Tamil Nadu Government — Tamil version.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_t_027.pdf"]
  },
  {
    id: 20260515011,
    dept: ["SDAT"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "From Sports Development Authority of Tamil Nadu (English)",
    summary: "Official press release from the Sports Development Authority of Tamil Nadu — English version.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_026.pdf"]
  },
  {
    id: 20260515012,
    dept: ["EDII-TN"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "EDII-TN — Admissions for One-Year Certificate Course in Entrepreneurship and Innovation (CPEI-2026)",
    summary: "Entrepreneurship Development and Innovation Institute (EDII-TN) announces admissions for the one-year certificate course in Entrepreneurship and Innovation (CPEI-2026).",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr150526_e_025.pdf"]
  },
  {
    id: 20260515013,
    dept: ["Social Welfare / Higher Education"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "CM's Statement on Kalaignar Magalir Urimai Thittam — Restructuring Underway, ₹1,000 for May to be Credited Soon",
    summary: "CM Vijay stated the government requires time to restructure the Kalaignar Magalir Urimai Thittam (KMUT). May 2026 assistance of ₹1,000 will be credited directly to beneficiaries' bank accounts shortly. TVK has promised to raise the monthly amount to ₹2,500. Separately, ₹1,000 each was deposited to ~6 lakh students under Tamil Pudhalvan and Pudhumai Penn schemes.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260515014,
    dept: ["CMO"],
    date: "May 15, 2026",
    dateValue: "2026-05-15",
    title: "CM's Statement on Petroleum Product Price Hike by Public Sector Oil Companies",
    summary: "Statement of Hon'ble Chief Minister Vijay regarding the price hike of petroleum products by Public Sector Oil Companies, urging the Union Government to roll back the hike to ease the burden on common people.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pn150526_001.pdf"]
  },
  {
    id: 20260516001,
    dept: ["Lok Bhavan"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Governor Approves Cabinet Portfolio Allocation",
    summary: "Governor Rajendra Arlekar approved all portfolios recommended by CM Vijay. Finance → KA Sengottaiyan. Health → KG Arunraj. Industries → S. Keerthana. Energy/Law → R. Nirmalkumar.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260516002,
    dept: ["Dept of Information"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Dr A. Arun Thamburaj IAS joined duty as Director of Information and Public Relations",
    summary: "Dr A. Arun Thamburaj IAS officially assumed charge as the new Director of Information and Public Relations, Tamil Nadu Government.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260516003,
    dept: ["Tamil Development & Info Dept"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Minister for School Education chaired review meeting of Tamil Development and Information Department",
    summary: "Hon'ble Minister for School Education, Tamil Development, Information and Publicity presided over a comprehensive review meeting of the Tamil Development and Information Department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260516004,
    dept: ["TN Legislative Assembly"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Speaker conducted public grievance inspection in Thousand Lights Legislative Assembly Constituency",
    summary: "Hon'ble Speaker of the Tamil Nadu Legislative Assembly conducted an on-ground inspection for public grievances redressal in the Thousand Lights Legislative Assembly Constituency.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526_sp1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260516005,
    dept: ["Municipal Admin"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Minister Thiru P. Venkataramanan inspected renovation works at Nageswara Rao Park, Mylapore",
    summary: "Hon'ble Minister Thiru P. Venkataramanan conducted an inspection of the ongoing renovation and infrastructure development works at Nageswara Rao Park, Mylapore.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr160526a1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260516006,
    dept: ["Energy & Law Dept"],
    date: "May 16, 2026",
    dateValue: "2026-05-16",
    title: "Press meeting of the Hon'ble Minister for Energy Resources and Law",
    summary: "Hon'ble Minister for Energy Resources and Law addressed a press conference covering key departmental updates and policy announcements.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pn160526_002.pdf"]
  },
  {
    id: 20260518001,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "The Chairman of Federation of Indian Chambers of Commerce and Industry (FICCI) Tamil Nadu State Council called on the Honble Chief Minister",
    summary: "The Chairman of Federation of Indian Chambers of Commerce and Industry (FICCI) Tamil Nadu State Council met with Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526a.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260518002,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Representatives of Students' Federation of India, Tamil Nadu called on the Honble Chief Minister",
    summary: "Representatives of the Students' Federation of India, Tamil Nadu called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260518003,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Representatives of Tamil film active producers association called on the Honble Chief Minister and contributed Rs.10 Lakh to the Chief Minister's Public Relief Fund",
    summary: "Representatives of the Tamil film active producers association called on Chief Minister Vijay and contributed Rs.10 Lakh to the Chief Minister's Public Relief Fund.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526i.jpg"],
    pdfUrls: []
  },
  {
    id: 20260518004,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Honble Chief Minister announced renovation and modernisation of Amma Unavagams",
    summary: "Chief Minister Vijay announced the renovation and modernisation of Amma Unavagams across Tamil Nadu.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526_040.pdf"]
  },
  {
    id: 20260518005,
    dept: ["CMO / Energy Dept"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Honble Chief Minister chaired a review meeting of Energy Department",
    summary: "Chief Minister Vijay chaired a high-level review meeting of the Energy Department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260518006,
    dept: ["Labour Dept"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Tamil Nadu Institute of Labour Studies announced last date for submission of applications for UG, PG and Diploma Courses in Labour Management (English)",
    summary: "Tamil Nadu Institute of Labour Studies announced the last date for submission of applications for UG, PG and Diploma Courses in Labour Management — English version.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526_e_038.pdf"]
  },
  {
    id: 20260518007,
    dept: ["Labour Dept"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Tamil Nadu Institute of Labour Studies announced last date for submission of applications for UG, PG and Diploma Courses in Labour Management (Tamil)",
    summary: "Tamil Nadu Institute of Labour Studies announced the last date for submission of applications for UG, PG and Diploma Courses in Labour Management — Tamil version.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526_t_038.pdf"]
  },
  {
    id: 20260518008,
    dept: ["Public Works & Sports Dept"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "Honble Minister for Public Works and Sports Development stated that initiatives would be taken to prepare olympic medal winners from Tamil Nadu and promote a healthy society through sports",
    summary: "The Hon'ble Minister for Public Works and Sports Development stated that initiatives would be taken to prepare Olympic medal winners from Tamil Nadu and promote a healthy society through sports.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526_pwsd1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260518009,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "The Chief Executive Officer and Senior Officials of Renault Group, India called on the Honble Chief Minister",
    summary: "The Chief Executive Officer and Senior Officials of Renault Group, India called on Chief Minister Vijay to discuss investment and expansion opportunities in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526d.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260518010,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "The Chairman of Ramco Group called on the Honble Chief Minister",
    summary: "The Chairman of Ramco Group called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526c.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260518011,
    dept: ["CMO"],
    date: "May 18, 2026",
    dateValue: "2026-05-18",
    title: "The President, Vice President and General Secretary of Madras Chamber of Commerce and Industry (MCCI) called on the Honble Chief Minister",
    summary: "The President, Vice President and General Secretary of Madras Chamber of Commerce and Industry (MCCI) called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr180526b.jpg"],
    pdfUrls: []
  },
  {
    id: 20260519001,
    dept: ["CMO"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "IAS Officer Trainees allotted to Tamil Nadu for the year 2025 called on the Honble Chief Minister",
    summary: "IAS Officer Trainees allotted to Tamil Nadu for the year 2025 called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260519002,
    dept: ["CMO"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Representatives of associations for Differently Abled Persons called on the Honble Chief Minister",
    summary: "Representatives of associations for Differently Abled Persons called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526b.jpg"],
    pdfUrls: []
  },
  {
    id: 20260519003,
    dept: ["CMO"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Executive Vice Chairperson, Managing Director and Officials of Apollo Hospitals called on the Honble Chief Minister",
    summary: "Executive Vice Chairperson, Managing Director and Officials of Apollo Hospitals called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526c.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260519004,
    dept: ["School Education"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity launched State-Level Orientation Training for new textbooks and released teachers’ handbook for classes I to III",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity launched State-Level Orientation Training for new textbooks and released teachers' handbook for classes I to III.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526_sedu.jpg"],
    pdfUrls: []
  },
  {
    id: 20260519005,
    dept: ["CMO"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Rights activists from the transgender community and social workers called on the Honble Chief Minister",
    summary: "Rights activists from the transgender community and social workers called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260519006,
    dept: ["CMO / Relief"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Condolence message and relief assistance to the families of the deceased and injured in the accident at a private restaurant in Thanjavur District",
    summary: "Chief Minister Vijay issued a condolence message and announced relief assistance to the families of the deceased and injured in the accident at a private restaurant in Thanjavur District.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526_045.pdf"]
  },
  {
    id: 20260519007,
    dept: ["Public Works & Sports Dept"],
    date: "May 19, 2026",
    dateValue: "2026-05-19",
    title: "Honble Minister for Public Works and Sports Development chaired review meeting with sports department officials and inspected sports facilities at Jawaharlal Nehru Stadium",
    summary: "Honble Minister for Public Works and Sports Development chaired a review meeting with sports department officials and inspected sports facilities at Jawaharlal Nehru Stadium.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr190526_pwsd1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520001,
    dept: ["School Education"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity released SSLC Public Examination Results for March 2026",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity released SSLC Public Examination Results for March 2026.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_sedu.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520002,
    dept: ["School Education"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity inaugurated the newly renovated 450-seat auditorium at Anna Centenary Library",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity inaugurated the newly renovated 450-seat auditorium at Anna Centenary Library.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_sedu1.JPG"],
    pdfUrls: []
  },
  {
    id: 20260520003,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Chief Minister flagged Off 40 new vehicles for the use of the Directorate of Medical and Rural Health Services",
    summary: "Honble Chief Minister Vijay flagged off 40 new vehicles for the use of the Directorate of Medical and Rural Health Services.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520004,
    dept: ["Public Works & Sports Dept"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Minister for Public Works and Sports Development stated that sportspersons must complete higher education and extended wishes to Tamil Nadu Junior Basketball Teams",
    summary: "Honble Minister for Public Works and Sports Development stated that sportspersons must complete higher education and extended wishes to Tamil Nadu Junior Basketball Teams.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_pwsd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520005,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Chief Minister paid floral tribute to the portrait of Dravidian Luminary Pandithar Ayothidasar on his 181st birth anniversary",
    summary: "Honble Chief Minister Vijay paid floral tribute to the portrait of Dravidian Luminary Pandithar Ayothidasar on his 181st birth anniversary.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm_1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520006,
    dept: ["Public Works & Sports Dept"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Minister for Public Works and Sports Development facilitated direct interaction with sportspersons and sports associations",
    summary: "Honble Minister for Public Works and Sports Development facilitated direct interaction with sportspersons and sports associations.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_049.pdf"]
  },
  {
    id: 20260520007,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Representatives of Tamil Nadu Small and Tiny Industries Association (TANSTIA) called on the Honble Chief Minister",
    summary: "Representatives of Tamil Nadu Small and Tiny Industries Association (TANSTIA) called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm4.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520008,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Representatives of Tamil Nadu Cauvery Farmers Association called on the Honble Chief Minister",
    summary: "Representatives of Tamil Nadu Cauvery Farmers Association called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm6.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520009,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Representatives of Textile Industry Associations called on the Honble Chief Minister and discussed Textile Sector Development",
    summary: "Representatives of Textile Industry Associations called on Chief Minister Vijay and discussed Textile Sector Development.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm8.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520010,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Tamil Nadu State Election Commissioner called on the Honble Chief Minister",
    summary: "Tamil Nadu State Election Commissioner called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm9.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520011,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Representatives of ACMA Southern Region called on the Honble Chief Minister and discussed Auto Components Sector Development",
    summary: "Representatives of ACMA Southern Region called on Chief Minister Vijay and discussed Auto Components Sector Development.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_cm10.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520012,
    dept: ["CMO"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Chief Minister chaired a review meeting on granting permission to extract alluvial soil from water bodies for the benefit of farmers",
    summary: "Chief Minister Vijay chaired a review meeting on granting permission to extract alluvial soil from water bodies for the benefit of farmers.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526r.jpg"],
    pdfUrls: []
  },
  {
    id: 20260520013,
    dept: ["School Education"],
    date: "May 20, 2026",
    dateValue: "2026-05-20",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity inspected facilities at Anna Centenary Library Complex",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity inspected facilities at Anna Centenary Library Complex.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr200526_sedu2.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521001,
    dept: ["Energy Dept / TNEB"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals (Release No. 056)",
    summary: "TNEB initiated formal action over alleged irregularities in the approval process for Green Energy projects in Tamil Nadu.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_056.pdf"]
  },
  {
    id: 20260521002,
    dept: ["CMO"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "State General Secretary and National Secretary of Indian Union Muslim League called on the Honble Chief Minister",
    summary: "The State General Secretary and National Secretary of the Indian Union Muslim League (IUML) called on Chief Minister Vijay.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526c.JPG"],
    pdfUrls: []
  },
  {
    id: 20260521003,
    dept: ["CMO"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Chief Minister with the Honble Governor and members of the new Council of Ministers – Group Photograph",
    summary: "Official group photograph of Chief Minister Vijay with Governor Rajendra Vishwanath Arlekar and all members of the newly expanded Council of Ministers following the May 21 cabinet swearing-in.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526cm.JPG"],
    pdfUrls: []
  },
  {
    id: 20260522001,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Governor administered Oath of Office and Secrecy to Ministers in the presence of the Honble Chief Minister",
    summary: "The Governor administered the oath of office and secrecy to newly appointed ministers — VCK's Vanni Arasu and IUML's A.M. Shahjahan — in the presence of Chief Minister Vijay, completing the coalition cabinet expansion.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522002,
    dept: ["Public Works and Sports Development"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Public Works and Sports Development chaired consultative meeting with sports association representatives at Nehru Indoor Stadium",
    summary: "The Minister for Public Works and Sports Development held a consultative meeting with sports association representatives to discuss development initiatives.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_pwsd1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522003,
    dept: ["Human Resources Management"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Human Resources Management chaired review meeting on department schemes",
    summary: "The Minister for Human Resources Management reviewed the schemes and functioning of the department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_hr1.JPG"],
    pdfUrls: []
  },
  {
    id: 20260522004,
    dept: ["School Education, Tamil Development, Information and Publicity"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Representatives of Tamil Nadu Theatre and Multiplex Owners Association called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "The Minister met with representatives from the theatre and multiplex owners association to discuss relevant matters.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_sedu.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522005,
    dept: ["Health and Family Welfare"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Representatives of Tamil Nadu Government Doctors Association and Chennai Medical College Alumni Welfare Association called on the Honble Minister for Health and Family Welfare",
    summary: "The Health Minister met with doctors' association representatives to discuss healthcare issues.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_hfw1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522006,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Chairman of Kothari Industrial Corporation called on the Honble Chief Minister",
    summary: "The Chairman of Kothari Industrial Corporation met with the Chief Minister for discussions.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526f.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260522007,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "The Chairman and Managing Director of MRF Limited called on the Honble Chief Minister",
    summary: "The CMD of MRF Limited met with the Chief Minister for discussions.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526e.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260522008,
    dept: ["Forests"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Forests chaired review meeting on schemes implemented by the Forest Department",
    summary: "The Forest Minister reviewed the implementation of various schemes by the Forest Department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_fst1.jpeg"],
    pdfUrls: []
  },
  {
    id: 20260522009,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Ministers newly inducted into the Council called on the Honble Chief Minister",
    summary: "Newly inducted ministers — VCK's Vanni Arasu (Social Justice) and IUML's A.M. Shahjahan (Minorities Welfare) — met with Chief Minister Vijay after joining the Council, completing the TVK-led coalition cabinet.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522010,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "President of Viduthalai Chiruthaigal Katchi and Member of Parliament called on Honble Chief Minister",
    summary: "The VCK President and MP met with the Chief Minister for discussions.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526c.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522011,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Congress joins Tamil Nadu Government after 59 years — S. Rajesh Kumar and P. Viswanathan inducted as Ministers",
    summary: "For the first time since 1967, the Indian National Congress is part of the Tamil Nadu government. S. Rajesh Kumar (Killiyoor) takes charge as Tourism Minister and P. Viswanathan (Melur) as Higher Education Minister, marking a historic return of Congress to power in TN after 59 years.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260522012,
    dept: ["CMO / VCK"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "VCK's Vanni Arasu sworn in as Minister for Social Justice, Adi Dravidar Welfare and Hill Tribes",
    summary: "Vanni Arasu, Deputy General Secretary of Viduthalai Chiruthaigal Katchi (VCK) and MLA from Tindivanam, was sworn in as Minister for Social Justice, Adi Dravidar Welfare and Hill Tribes, marking VCK's entry into the Vijay-led coalition cabinet.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260522013,
    dept: ["CMO / IUML"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "IUML's A.M. Shahjahan sworn in as Minister for Minorities Welfare and Wakf Board",
    summary: "A.M. Shahjahan, Indian Union Muslim League MLA from Papanasam (Thanjavur district), was sworn in as Minister for Minorities Welfare and Wakf Board, completing the coalition power-sharing arrangement with TVK, Congress, VCK, and IUML all represented in the cabinet.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260522014,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Malaysian Prime Minister Anwar Ibrahim holds telephone conversation with Hon'ble Chief Minister Vijay",
    summary: "Prime Minister Anwar Ibrahim called Chief Minister Vijay to congratulate him on assuming office. The two leaders discussed strengthening cultural and economic ties between Malaysia and Tamil Nadu. PM Anwar also expressed hope to visit Tamil Nadu during his visit to India in September 2026.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260523001,
    dept: ["CMO"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Hon'ble Chief Minister Vijay departs on first official visit to New Delhi",
    summary: "Chief Minister Vijay is scheduled to embark on his first official trip to the national capital since taking office to meet with Prime Minister Narendra Modi, President Droupadi Murmu, and other Union ministers.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260523002,
    dept: ["CMO"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Chief Minister Vijay tables comprehensive memorandum to Prime Minister Modi seeking pending central funds",
    summary: "During his first official visit to New Delhi, Chief Minister Vijay submitted a comprehensive memorandum to Prime Minister Narendra Modi, requesting the release of pending central funds for Tamil Nadu and support for key state developmental projects.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260523003,
    dept: ["PWD"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Minister Aadhav Arjuna guarantees job security and redeployment for closed TASMAC shop workers",
    summary: "Hon'ble Minister for Public Works and Sports Development Aadhav Arjuna assured that no TASMAC employee will lose their livelihood due to the closure of 717 liquor outlets, stating the government is working on redeploying affected staff to vacant positions in other state departments.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260523004,
    dept: ["Transport"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Honble Minister for Transport travelled in a Government Bus from Saidapet to the Guindy Race Course Bus Stop and interacted with the public",
    summary: "The Minister for Transport personally travelled in a government bus from Saidapet to Guindy Race Course Bus Stop to experience public transport conditions first-hand and interact directly with commuters, reinforcing the government's commitment to improving state bus services.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526g.JPG"],
    pdfUrls: []
  },
  {
    id: 20260523005,
    dept: ["Prohibition & Excise"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Honble Minister for Prohibition and Excise chaired a meeting to review the activities of the Department",
    summary: "The Minister for Prohibition and Excise chaired a comprehensive review meeting on the activities and ongoing functions of the Prohibition and Excise department.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526_072.pdf"]
  },
  {
    id: 20260523006,
    dept: ["Prohibition & Excise"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Honble Minister for Prohibition and Excise chaired a meeting in connection with the closing of 717 TASMAC Liquor Shops",
    summary: "The Minister for Prohibition and Excise chaired a dedicated meeting to review the implementation progress for closing 717 TASMAC liquor outlets across Tamil Nadu, in line with the Vijay government's election pledge on partial prohibition.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526_071.pdf"]
  },
  {
    id: 20260523007,
    dept: ["CMO"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Social Media Post of the Honble Chief Minister regarding the tragedy that befell a 10-year-old girl in Coimbatore",
    summary: "Chief Minister Vijay took to social media to express grief and outrage over the brutal sexual assault and killing of a 10-year-old girl in Coimbatore, demanding swift justice and directing the police to take the strictest action against the accused.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526_070.pdf"]
  },
  {
    id: 20260523008,
    dept: ["Health"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Sports Development Authority of Tamil Nadu invites online applications from meritorious sportspersons to fill 3 vacancies for the post of Ophthalmic Assistant in the Tamil Nadu Medical Subordinate Service under the 3 percent sports reservation quota",
    summary: "Sports Development Authority of Tamil Nadu (SDTA) has invited online applications from meritorious sportspersons to fill 3 vacancies for the post of Ophthalmic Assistant in the Tamil Nadu Medical Subordinate Service under the 3 percent sports reservation quota.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526_068.pdf"]
  },
  {
    id: 20260523009,
    dept: ["Electricity"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Honble Minister for Energy Resources and Law inaugurated the 80th Annual Day celebrations of the Tamil Nadu Electricity Board Engineers Association",
    summary: "The Minister for Energy Resources and Law inaugurated the 80th Annual Day celebrations of the Tamil Nadu Electricity Board (TNEB) Engineers Association, marking a significant milestone in the history of TNEB's workforce.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr230526e.jpeg"],
    pdfUrls: []
  },
  {
    id: 20260523010,
    dept: ["Home / Police"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "TN Police arrest 844 rowdies in 3-day state-wide crackdown; drugs worth ₹1.43 crore seized",
    summary: "Acting on CM Vijay's directives, Tamil Nadu Police conducted a state-wide anti-rowdy operation over 3 days — 15,349 rowdies identified and examined; 3,246 apprehended; 844 (488 history-sheeters + 356 non-history-sheeters) remanded to judicial custody. Additionally, 294 NDPS cases registered, 419 drug offenders arrested, and 267.756 kg ganja + 2,476 narcotic tablets worth ₹1.43 crore seized.",
    imageUrls: ["https://www.tn.gov.in/press_release.php"],
    pdfUrls: []
  },
  {
    id: 20260522001,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Governor administered Oath of Office and Secrecy to Ministers in the presence of the Honble Chief Minister",
    summary: "Honble Governor administered Oath of Office and Secrecy to Ministers in the presence of the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526a.jpg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526b.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522002,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "President of Viduthalai Chiruthaigal Katchi and Member of Parliament called on Honble Chief Minister",
    summary: "President of Viduthalai Chiruthaigal Katchi and Member of Parliament called on Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526c.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522003,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Ministers newly inducted into the Council called on the Honble Chief Minister",
    summary: "Ministers newly inducted into the Council called on the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522004,
    dept: ["Forests"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Forests chaired review meeting on schemes implemented by the Forest Department",
    summary: "Honble Minister for Forests chaired review meeting on schemes implemented by the Forest Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_fst1.JPG","https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_fst2.JPG"],
    pdfUrls: []
  },
  {
    id: 20260522005,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "The Chairman and Managing Director of MRF Limited called on the Honble Chief Minister",
    summary: "The Chairman and Managing Director of MRF Limited called on the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522006,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Chairman of Kothari Industrial Corporation called on the Honble Chief Minister",
    summary: "Chairman of Kothari Industrial Corporation called on the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526f.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522007,
    dept: ["Health"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Representatives of Tamil Nadu Government Doctors Association and Chennai Medical College Alumni Welfare Association called on the Honble Minister for Health and Family Welfare",
    summary: "Representatives of Tamil Nadu Government Doctors Association and Chennai Medical College Alumni Welfare Association called on the Honble Minister for Health and Family Welfare",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_hfw1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522008,
    dept: ["Education"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Representatives of Tamil Nadu Theatre and Multiplex Owners Association called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Representatives of Tamil Nadu Theatre and Multiplex Owners Association called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_sedu.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522009,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Fisheries and Fishermen Welfare chaired review meeting of the Department",
    summary: "Honble Minister for Fisheries and Fishermen Welfare chaired review meeting of the Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522010,
    dept: ["Information and Publicity"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister forArtificial Intelligence, Information Technology and Digital Services chaired a review meeting of the Department",
    summary: "Honble Minister forArtificial Intelligence, Information Technology and Digital Services chaired a review meeting of the Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526g.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522011,
    dept: ["Revenue"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Revenue and Disaster Management chaired a review meeting of the department and inspected the State Emergency Operations Centre, Ezhilagam, Chennai",
    summary: "Honble Minister for Revenue and Disaster Management chaired a review meeting of the department and inspected the State Emergency Operations Centre, Ezhilagam, Chennai",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526l.jpg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526k.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522012,
    dept: ["Food and Civil Supplies"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Food and Civil Supplies chaired a meeting at Tamil Nadu Civil Supplies Corporation",
    summary: "Honble Minister for Food and Civil Supplies chaired a meeting at Tamil Nadu Civil Supplies Corporation",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526m.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522013,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Agriculture - Farmers Welfare chaired a review meeting of the department",
    summary: "Honble Minister for Agriculture - Farmers Welfare chaired a review meeting of the department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526n.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_067.pdf"]
  },
  {
    id: 20260522014,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Natural Resources has ordered inspections of all stone quarries operating across the State",
    summary: "Honble Minister for Natural Resources has ordered inspections of all stone quarries operating across the State",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_066.pdf"]
  },
  {
    id: 20260522015,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Transport chaired an advisory meeting at the Secretariat to discuss the implementation of AIS-140 VLTD with GPS capabilities in passenger and public service vehicles in Tamil Nadu",
    summary: "Honble Minister for Transport chaired an advisory meeting at the Secretariat to discuss the implementation of AIS-140 VLTD with GPS capabilities in passenger and public service vehicles in Tamil Nadu",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_065.pdf"]
  },
  {
    id: 20260522016,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Chief Minister has issued an official order appointing Thiru K. P. Krishnan as the Chairman of the Tamil Nadu Urban Habitat Development Board (TNUHDB)",
    summary: "Honble Chief Minister has issued an official order appointing Thiru K. P. Krishnan as the Chairman of the Tamil Nadu Urban Habitat Development Board (TNUHDB)",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_064.pdf"]
  },
  {
    id: 20260522017,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Social Justice assumed office at the Secretariat and signed files approving the release of funds for the important departmental initiatives",
    summary: "Honble Minister for Social Justice assumed office at the Secretariat and signed files approving the release of funds for the important departmental initiatives",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_063.pdf"]
  },
  {
    id: 20260522018,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Human Resources Management chaired review meeting on department schemes",
    summary: "Honble Minister for Human Resources Management chaired review meeting on department schemes",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_hr1.JPG","https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_hr2.JPG"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_062.pdf"]
  },
  {
    id: 20260522019,
    dept: ["Public Works"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Public Works and Sports Development chaired consultative meeting with sports association representatives at Nehru Indoor Stadium",
    summary: "Honble Minister for Public Works and Sports Development chaired consultative meeting with sports association representatives at Nehru Indoor Stadium",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_pwsd1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_061.pdf"]
  },
  {
    id: 20260524001,
    dept: ["Electricity"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "Honble Minister for Energy Resources and Law conducted a comprehensive inspection of the Puzhal Central Prison to review the operations and infrastructure of the Prisons Department",
    summary: "Honble Minister for Energy Resources and Law conducted a comprehensive inspection of the Puzhal Central Prison to review the operations and infrastructure of the Prisons Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_3.jpg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_2.jpg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_077.pdf"]
  },
  {
    id: 20260524002,
    dept: ["General"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "Honble Minister for Hindu Religious and Charitable Endowments conducted inspection at various temples in Tiruchirappalli district",
    summary: "Honble Minister for Hindu Religious and Charitable Endowments conducted inspection at various temples in Tiruchirappalli district",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce1.jpeg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce2.jpeg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce3.jpeg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce4.jpeg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce5.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_076.pdf"]
  },
  {
    id: 20260524003,
    dept: ["Public Works"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "The Tamil Nadu players who won the Squash World Cup called on the Honble Minister for Public Works and Sports at the Secretariat",
    summary: "The Tamil Nadu players who won the Squash World Cup called on the Honble Minister for Public Works and Sports at the Secretariat",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd1.jpeg","https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd2.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_075.pdf"]
  },
  {
    id: 20260521001,
    dept: ["CMO"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Chief Minister with the Honble Governor and members of the new Council of Ministers – Group Photograph",
    summary: "Honble Chief Minister with the Honble Governor and members of the new Council of Ministers – Group Photograph",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526cm.JPG"],
    pdfUrls: []
  },
  {
    id: 20260521002,
    dept: ["CMO"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "State General Secretary and National Secretary of Indian Union Muslim League called on the Honble Chief Minister",
    summary: "State General Secretary and National Secretary of Indian Union Muslim League called on the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526c.JPG"],
    pdfUrls: []
  },
  {
    id: 20260521003,
    dept: ["Revenue"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Revenue and Disaster Management chaired review meeting on department schemes and activities",
    summary: "Honble Minister for Revenue and Disaster Management chaired review meeting on department schemes and activities",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_rd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521004,
    dept: ["Food and Civil Supplies"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Senior Officials of the Cooperation, Food and Consumer Protection Department called on the Honble Minister for Co-operation",
    summary: "Senior Officials of the Cooperation, Food and Consumer Protection Department called on the Honble Minister for Co-operation",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_co.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521005,
    dept: ["Labour"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Labour Welfare and Skill Development reviewed the functioning of the labour department at the Labour Commissionerate, Anna Nagar",
    summary: "Honble Minister for Labour Welfare and Skill Development reviewed the functioning of the labour department at the Labour Commissionerate, Anna Nagar",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_lwsd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521006,
    dept: ["Education"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Adi Dravidar and Tribal Welfare Schools - High pass percentage in SSLC public examination 2025–26",
    summary: "Adi Dravidar and Tribal Welfare Schools - High pass percentage in SSLC public examination 2025–26",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_060.pdf"]
  },
  {
    id: 20260521007,
    dept: ["Health"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Health, Medical Education and Family Welfare chaired State-Level review meeting of Joint Directors of Health Services",
    summary: "Honble Minister for Health, Medical Education and Family Welfare chaired State-Level review meeting of Joint Directors of Health Services",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_059.pdf"]
  },
  {
    id: 20260521008,
    dept: ["Housing"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Housing and Urban Development inspected TNHB commercial complex construction works at Royapettah",
    summary: "Honble Minister for Housing and Urban Development inspected TNHB commercial complex construction works at Royapettah",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_hud.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_058.pdf"]
  },
  {
    id: 20260521009,
    dept: ["Education"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Government School Students and Teacher selec ted for the Sakura Science High School Exchange Programme called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Government School Students and Teacher selec ted for the Sakura Science High School Exchange Programme called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_sedu.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_057.pdf"]
  },
  {
    id: 20260521010,
    dept: ["Electricity"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals",
    summary: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_056.pdf"]
  }
];
