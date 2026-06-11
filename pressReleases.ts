/**
 * pressReleases.ts — Official Government Press Releases from tn.gov.in / cms.tn.gov.in
 * Agent Last Updated: May 27, 2026
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
    imageUrls: [],
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
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260522012,
    dept: ["CMO / VCK"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "VCK's Vanni Arasu sworn in as Minister for Social Justice, Adi Dravidar Welfare and Hill Tribes",
    summary: "Vanni Arasu, Deputy General Secretary of Viduthalai Chiruthaigal Katchi (VCK) and MLA from Tindivanam, was sworn in as Minister for Social Justice, Adi Dravidar Welfare and Hill Tribes, marking VCK's entry into the Vijay-led coalition cabinet.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260522013,
    dept: ["CMO / IUML"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "IUML's A.M. Shahjahan sworn in as Minister for Minorities Welfare and Wakf Board",
    summary: "A.M. Shahjahan, Indian Union Muslim League MLA from Papanasam (Thanjavur district), was sworn in as Minister for Minorities Welfare and Wakf Board, completing the coalition power-sharing arrangement with TVK, Congress, VCK, and IUML all represented in the cabinet.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260522014,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Malaysian Prime Minister Anwar Ibrahim holds telephone conversation with Hon'ble Chief Minister Vijay",
    summary: "Prime Minister Anwar Ibrahim called Chief Minister Vijay to congratulate him on assuming office. The two leaders discussed strengthening cultural and economic ties between Malaysia and Tamil Nadu. PM Anwar also expressed hope to visit Tamil Nadu during his visit to India in September 2026.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260523001,
    dept: ["CMO"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Hon'ble Chief Minister Vijay departs on first official visit to New Delhi",
    summary: "Chief Minister Vijay is scheduled to embark on his first official trip to the national capital since taking office to meet with Prime Minister Narendra Modi, President Droupadi Murmu, and other Union ministers.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260523002,
    dept: ["CMO"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Chief Minister Vijay tables comprehensive memorandum to Prime Minister Modi seeking pending central funds",
    summary: "During his first official visit to New Delhi, Chief Minister Vijay submitted a comprehensive memorandum to Prime Minister Narendra Modi, requesting the release of pending central funds for Tamil Nadu and support for key state developmental projects.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260523003,
    dept: ["PWD"],
    date: "May 23, 2026",
    dateValue: "2026-05-23",
    title: "Minister Aadhav Arjuna guarantees job security and redeployment for closed TASMAC shop workers",
    summary: "Hon'ble Minister for Public Works and Sports Development Aadhav Arjuna assured that no TASMAC employee will lose their livelihood due to the closure of 717 liquor outlets, stating the government is working on redeploying affected staff to vacant positions in other state departments.",
    imageUrls: [],
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
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260522015,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Fisheries and Fishermen Welfare chaired review meeting of the Department",
    summary: "Honble Minister for Fisheries and Fishermen Welfare chaired review meeting of the Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522016,
    dept: ["Information and Publicity"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister forArtificial Intelligence, Information Technology and Digital Services chaired a review meeting of the Department",
    summary: "Honble Minister forArtificial Intelligence, Information Technology and Digital Services chaired a review meeting of the Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526g.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522017,
    dept: ["Revenue"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Revenue and Disaster Management chaired a review meeting of the department and inspected the State Emergency Operations Centre, Ezhilagam, Chennai",
    summary: "Honble Minister for Revenue and Disaster Management chaired a review meeting of the department and inspected the State Emergency Operations Centre, Ezhilagam, Chennai",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526l.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526k.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522018,
    dept: ["Food and Civil Supplies"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Food and Civil Supplies chaired a meeting at Tamil Nadu Civil Supplies Corporation",
    summary: "Honble Minister for Food and Civil Supplies chaired a meeting at Tamil Nadu Civil Supplies Corporation",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526m.jpg"],
    pdfUrls: []
  },
  {
    id: 20260522019,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Agriculture - Farmers Welfare chaired a review meeting of the department",
    summary: "Honble Minister for Agriculture - Farmers Welfare chaired a review meeting of the department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526n.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_067.pdf"]
  },
  {
    id: 20260522020,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Natural Resources has ordered inspections of all stone quarries operating across the State",
    summary: "Honble Minister for Natural Resources has ordered inspections of all stone quarries operating across the State",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_066.pdf"]
  },
  {
    id: 20260522021,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Transport chaired an advisory meeting at the Secretariat to discuss the implementation of AIS-140 VLTD with GPS capabilities in passenger and public service vehicles in Tamil Nadu",
    summary: "Honble Minister for Transport chaired an advisory meeting at the Secretariat to discuss the implementation of AIS-140 VLTD with GPS capabilities in passenger and public service vehicles in Tamil Nadu",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_065.pdf"]
  },
  {
    id: 20260522022,
    dept: ["CMO"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Chief Minister has issued an official order appointing Thiru K. P. Krishnan as the Chairman of the Tamil Nadu Urban Habitat Development Board (TNUHDB)",
    summary: "Honble Chief Minister has issued an official order appointing Thiru K. P. Krishnan as the Chairman of the Tamil Nadu Urban Habitat Development Board (TNUHDB)",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_064.pdf"]
  },
  {
    id: 20260522023,
    dept: ["General"],
    date: "May 22, 2026",
    dateValue: "2026-05-22",
    title: "Honble Minister for Social Justice assumed office at the Secretariat and signed files approving the release of funds for the important departmental initiatives",
    summary: "Honble Minister for Social Justice assumed office at the Secretariat and signed files approving the release of funds for the important departmental initiatives",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr220526_063.pdf"]
  },
  {
    id: 20260524001,
    dept: ["Electricity"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "Honble Minister for Energy Resources and Law conducted a comprehensive inspection of the Puzhal Central Prison to review the operations and infrastructure of the Prisons Department",
    summary: "Honble Minister for Energy Resources and Law conducted a comprehensive inspection of the Puzhal Central Prison to review the operations and infrastructure of the Prisons Department",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_3.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_2.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_077.pdf"]
  },
  {
    id: 20260524002,
    dept: ["General"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "Honble Minister for Hindu Religious and Charitable Endowments conducted inspection at various temples in Tiruchirappalli district",
    summary: "Honble Minister for Hindu Religious and Charitable Endowments conducted inspection at various temples in Tiruchirappalli district",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce1.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce2.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce3.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce4.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_hrce5.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_076.pdf"]
  },
  {
    id: 20260524003,
    dept: ["Public Works"],
    date: "May 24, 2026",
    dateValue: "2026-05-24",
    title: "The Tamil Nadu players who won the Squash World Cup called on the Honble Minister for Public Works and Sports at the Secretariat",
    summary: "The Tamil Nadu players who won the Squash World Cup called on the Honble Minister for Public Works and Sports at the Secretariat",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd1.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_sd2.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr240526_075.pdf"]
  },
  {
    id: 20260521004,
    dept: ["Revenue"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Revenue and Disaster Management chaired review meeting on department schemes and activities",
    summary: "Honble Minister for Revenue and Disaster Management chaired review meeting on department schemes and activities",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_rd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521005,
    dept: ["Food and Civil Supplies"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Senior Officials of the Cooperation, Food and Consumer Protection Department called on the Honble Minister for Co-operation",
    summary: "Senior Officials of the Cooperation, Food and Consumer Protection Department called on the Honble Minister for Co-operation",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_co.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521006,
    dept: ["Labour"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Labour Welfare and Skill Development reviewed the functioning of the labour department at the Labour Commissionerate, Anna Nagar",
    summary: "Honble Minister for Labour Welfare and Skill Development reviewed the functioning of the labour department at the Labour Commissionerate, Anna Nagar",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_lwsd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260521007,
    dept: ["Education"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Adi Dravidar and Tribal Welfare Schools - High pass percentage in SSLC public examination 2025–26",
    summary: "Adi Dravidar and Tribal Welfare Schools - High pass percentage in SSLC public examination 2025–26",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_060.pdf"]
  },
  {
    id: 20260521008,
    dept: ["Health"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Health, Medical Education and Family Welfare chaired State-Level review meeting of Joint Directors of Health Services",
    summary: "Honble Minister for Health, Medical Education and Family Welfare chaired State-Level review meeting of Joint Directors of Health Services",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_059.pdf"]
  },
  {
    id: 20260521009,
    dept: ["Housing"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Honble Minister for Housing and Urban Development inspected TNHB commercial complex construction works at Royapettah",
    summary: "Honble Minister for Housing and Urban Development inspected TNHB commercial complex construction works at Royapettah",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_hud.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_058.pdf"]
  },
  {
    id: 20260521010,
    dept: ["Education"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Government School Students and Teacher selec ted for the Sakura Science High School Exchange Programme called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Government School Students and Teacher selec ted for the Sakura Science High School Exchange Programme called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_sedu.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_057.pdf"]
  },
  {
    id: 20260521011,
    dept: ["Electricity"],
    date: "May 21, 2026",
    dateValue: "2026-05-21",
    title: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals",
    summary: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr210526_056.pdf"]
  },
  {
    id: 20260525001,
    dept: ["Education"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity issued appointment orders to six tailoring teachers selec ted through the Teachers Recruitment Board",
    summary: "Honble Minister for School Education, Tamil Development, Information and Publicity issued appointment orders to six tailoring teachers selec ted through the Teachers Recruitment Board",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_sedu.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525002,
    dept: ["Public Works"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Public Works and Sports Development presented financial assistance to aspiring olympians and interacted with young athletes at Nehru Indoor Stadium",
    summary: "Honble Minister for Public Works and Sports Development presented financial assistance to aspiring olympians and interacted with young athletes at Nehru Indoor Stadium",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd2.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd3.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd4.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_pwsd5.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_080.pdf"]
  },
  {
    id: 20260525003,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Chief Minister directed immediate legal action and strict punishment against heinous crimes",
    summary: "Honble Chief Minister directed immediate legal action and strict punishment against heinous crimes",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526a.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526b.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_079.pdf"]
  },
  {
    id: 20260526001,
    dept: ["CMO"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Prince of Arcot called on the Honble Chief Minister with Family Members",
    summary: "Prince of Arcot called on the Honble Chief Minister with Family Members",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526002,
    dept: ["CMO"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Chairman of Ashok Leyland called on the Honble Chief Minister",
    summary: "Chairman of Ashok Leyland called on the Honble Chief Minister",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526b.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260526003,
    dept: ["Housing"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Housing and Urban Development chaired review meeting on development works of various departments and agencies",
    summary: "Honble Minister for Housing and Urban Development chaired review meeting on development works of various departments and agencies",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_hud.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526004,
    dept: ["General"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Social Justice chaired review meeting on TAHDCO schemes and projects",
    summary: "Honble Minister for Social Justice chaired review meeting on TAHDCO schemes and projects",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_sj.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526005,
    dept: ["Co-operation"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Cooperative Election Commissioner called on the Honble Minister for Cooperation",
    summary: "Cooperative Election Commissioner called on the Honble Minister for Cooperation",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_co.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526006,
    dept: ["Food and Civil Supplies"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Food and Civil Supplies inspected public distribution scheme warehouses and amudham fair price shops in Chennai",
    summary: "Honble Minister for Food and Civil Supplies inspected public distribution scheme warehouses and amudham fair price shops in Chennai",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_fcs.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526007,
    dept: ["Information and Publicity"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services chaired review meeting on TANFINET operations and future plans",
    summary: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services chaired review meeting on TANFINET operations and future plans",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_it.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526008,
    dept: ["HR & CE"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Hindu Religious and Charitable Endowments chaired review meeting on department schemes, activities and ongoing works",
    summary: "The HR&CE Minister chaired a review of departmental schemes, temple administration activities, and ongoing infrastructure works under the Hindu Religious and Charitable Endowments department.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_093.pdf"]
  },
  {
    id: 20260526009,
    dept: ["CMO"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Text of the D.O. Letter of the Honble Chief Minister to the Honble Prime Minister regarding the proposed Mekedatu Dam bhoomi pooja and safeguarding Tamil Nadu's rights",
    summary: "CM Vijay wrote to PM Modi opposing the proposed bhoomi pooja for the Mekedatu dam project, urging the Centre to reject Karnataka's DPR and protect Tamil Nadu's Cauvery water rights as guaranteed by the Supreme Court.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_092.pdf"]
  },
  {
    id: 20260525004,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Chairman and Managing Director of TVS Motor Company called on the Honble Chief Minister",
    summary: "The CMD of TVS Motor Company met with the Chief Minister, likely to discuss investment and industrial cooperation in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526d.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260525005,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Chairperson and representatives of M.S. Swaminathan Research Foundation called on the Honble Chief Minister",
    summary: "The Chairperson and representatives of M.S. Swaminathan Research Foundation met with the Chief Minister, likely to discuss agricultural research and rural development initiatives.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525006,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Representatives of Tamil Nadu Hotels Association and Chennai Hotels Association called on the Honble Chief Minister",
    summary: "Leaders of the Tamil Nadu Hotels Association and Chennai Hotels Association met with the Chief Minister to discuss issues and opportunities in the hospitality sector.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526f.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525007,
    dept: ["Information and Publicity"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services chaired review meeting on ELCOT operations and future plans",
    summary: "The Minister for AI, IT and Digital Services chaired a comprehensive review of ELCOT's current operations and future roadmap to strengthen Tamil Nadu's digital infrastructure.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_it.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525008,
    dept: ["Education"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Singapore consulate officials held discussions with Honble Minister for School Education, Tamil Development, Information and Publicity on new initiatives and innovative schemes in Tamil Nadu School Education Department",
    summary: "Officials from the Singapore Consulate met with the School Education Minister to explore collaboration on innovative educational initiatives and schemes being implemented in Tamil Nadu schools.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_sedu1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525009,
    dept: ["Electricity"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Energy Resources and Law held discussions with power distribution companies and contractors at Kalaivanar Arangam, Chennai",
    summary: "The Energy Resources and Law Minister convened a meeting with power distribution companies and contractors at Kalaivanar Arangam to review operations and address sector challenges.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_engy.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525010,
    dept: ["General"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Commercial Taxes and Registration chaired a review meeting with senior officials of the Commercial Taxes and Registration Department",
    summary: "The Commercial Taxes and Registration Minister held a review meeting with senior departmental officials to assess revenue performance and streamline registration processes.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_ctax.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525011,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Chairman of Tamil Nadu Urban Habitat Development Board called on the Honble Chief Minister",
    summary: "The Chairman of the Tamil Nadu Urban Habitat Development Board called on the Chief Minister, likely to discuss urban housing and habitat development projects across the state.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526g.jpg"],
    pdfUrls: []
  },
  {
    id: 20260525012,
    dept: ["General"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Minister for Natural Resources ordered temporary closure of 18 stone quarries operating in violation of rules in Tenkasi District",
    summary: "The Natural Resources Minister ordered the immediate temporary closure of 18 stone quarries in Tenkasi District found to be operating in violation of regulatory norms.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_082.pdf"]
  },
  {
    id: 20260525013,
    dept: ["CMO"],
    date: "May 25, 2026",
    dateValue: "2026-05-25",
    title: "Honble Chief Minister reviewed legal measures on the proposed Mekedatu dam project",
    summary: "Chief Minister reviewed the legal strategy and measures being pursued by Tamil Nadu regarding the proposed Mekedatu dam project on the Cauvery river, reaffirming the state's opposition.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526c.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr250526_081.pdf"]
  },
  {
    id: 20260526010,
    dept: ["Co-operation"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Cooperation chaired review meeting on Cooperation Department activities and schemes",
    summary: "The Cooperation Minister chaired a review meeting assessing the department's activities, cooperative society performance, and ongoing welfare schemes.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_co1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260526011,
    dept: ["Backward Classes Welfare"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Backward Classes Welfare inspected social justice women's college hostels and the newly constructed hostel building",
    summary: "The Backward Classes Welfare Minister inspected hostels at social justice women's colleges, including a newly constructed hostel building, to review student facilities and accommodation standards.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_bw1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_bw2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260526012,
    dept: ["Transport"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Transport held review meeting on vehicle registration auctions, women and child safety, real-time vehicle monitoring and road safety measures",
    summary: "The Transport Minister reviewed vehicle registration auctions, women and child safety initiatives in public transport, real-time vehicle monitoring systems, and road safety measures.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_transport.png"],
    pdfUrls: []
  },
  {
    id: 20260526013,
    dept: ["Water Resources"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "From Water Resources department - Flood warning issued for residents along the south pennaiyar river following increased inflow into Krishnagiri dam",
    summary: "The Water Resources Department issued a flood warning for residents living along the South Pennaiyar river following a significant increase in inflow into the Krishnagiri dam.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_104.pdf"]
  },
  {
    id: 20260526014,
    dept: ["Prohibition & Excise"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Prohibition and Excise requested TASMAC employees to resume duty",
    summary: "The Prohibition and Excise Minister formally requested TASMAC employees to return to duty, following disruptions related to the closure of 717 liquor shops near sensitive locations.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_103.pdf"]
  },
  {
    id: 20260526015,
    dept: ["Minorities Welfare"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Minorities Welfare and Waqf Board chaired review meeting on department activities and schemes",
    summary: "The Minorities Welfare and Waqf Board Minister chaired a review of departmental activities and welfare schemes benefiting minority communities across Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_mwwb.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_102.pdf"]
  },
  {
    id: 20260526016,
    dept: ["Natural Resources"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Natural Resources ordered temporary closure of 23 stone quarries for violations in Virudhunagar district",
    summary: "The Natural Resources Minister ordered the immediate temporary closure of 23 stone quarries in Virudhunagar district found to be operating in violation of regulatory norms, as part of the government's crackdown on illegal mining.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_101.pdf"]
  },
  {
    id: 20260526017,
    dept: ["Natural Resources"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Natural Resources inaugurated anganwadi centre constructed under district mineral foundation fund in Virudhunagar district",
    summary: "The Natural Resources Minister inaugurated a new anganwadi centre built using district mineral foundation funds in Virudhunagar district, supporting early childhood care and nutrition in the region.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_100.pdf"]
  },
  {
    id: 20260526018,
    dept: ["Industries"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Industries, Investment Promotion and Commerce inspected Manapparai SIPCOT Industrial Park and Mega Food Park in Tiruchirappalli District",
    summary: "The Industries Minister inspected the Manapparai SIPCOT Industrial Park and Mega Food Park in Tiruchirappalli to assess infrastructure, ongoing projects, and investment prospects.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_indu1.jpeg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_indu2.jpeg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_indu3.jpeg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_indu4.jpeg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_indu5.jpeg"
    ],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_099.pdf"]
  },
  {
    id: 20260526019,
    dept: ["Water Resources"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "From Water Resources Department - 51st meeting of the Cauvery Water Management Authority",
    summary: "Tamil Nadu representatives attended the 51st meeting of the Cauvery Water Management Authority (CWMA), reviewing inter-state water sharing compliance and reservoir levels.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_wrd.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_098.pdf"]
  },
  {
    id: 20260526020,
    dept: ["Animal Husbandry"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Animal Husbandry chaired review meeting with Senior Officials on department activities, schemes and public services",
    summary: "The Animal Husbandry Minister chaired a review meeting with senior officials to assess the department's activities, veterinary services, and welfare schemes for livestock farmers.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_an.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_097.pdf"]
  },
  {
    id: 20260526021,
    dept: ["Education"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "From School Education Department - All Schools in Tamil Nadu to reopen uniformly for classes I to XII on 4th June 2026",
    summary: "The School Education Department announced that all schools across Tamil Nadu will uniformly reopen for classes I to XII on June 4, 2026, for the new academic year.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_096.pdf"]
  },
  {
    id: 20260526022,
    dept: ["CMO"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Chief Minister chaired review meeting on safeguarding 69 percent reservation in student admissions and Government employment in Tamil Nadu",
    summary: "Chief Minister Vijay chaired a high-level review meeting on strategies to safeguard and implement the 69% reservation policy in student admissions and state government employment.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526c.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_095.pdf"]
  },
  {
    id: 20260526023,
    dept: ["Rural Development"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Rural Development and Water Resources held review meeting on development works and schemes in T. Nagar Constituency",
    summary: "The Rural Development and Water Resources Minister held a review meeting on development works and welfare schemes being implemented in the T. Nagar constituency.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_094.pdf"]
  },
  {
    id: 20260526024,
    dept: ["Labour"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Labour Welfare and Skill Development inspected Government Industrial Training Institute at Ambattur, Chennai",
    summary: "The Labour Welfare and Skill Development Minister inspected the Government ITI at Ambattur, Chennai, reviewing training infrastructure, courses offered, and student facilities.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_lwsd1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_lwsd2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260526025,
    dept: ["Agriculture"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Agriculture and Farmers Welfare chaired review meeting on the functioning of Agricultural Engineering Department, TNAU and Seed Certification Directorate",
    summary: "The Agriculture Minister reviewed the functioning of the Agricultural Engineering Department, Tamil Nadu Agricultural University (TNAU), and the Seed Certification Directorate to assess farm support services.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_agri.jpg"],
    pdfUrls: []
  },
  {
    id: 20260527001,
    dept: ["CMO"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Chief Minister received at Tamil Nadu House in New Delhi by Senior Officials and accorded ceremonial guard of honour",
    summary: "Chief Minister Vijay was received at Tamil Nadu House in New Delhi by senior state officials and accorded a ceremonial guard of honour, ahead of his official meetings with PM Modi, President Murmu, and Union Ministers.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526c.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526a.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526b.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260527002,
    dept: ["AI & IT"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services inspected operations of TACTV head control room in Chennai",
    summary: "The AI, IT and Digital Services Minister inspected the operations of the Tamil Arasu Cable TV (TACTV) head control room in Chennai, reviewing broadcast quality and operational systems.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_it.jpg"],
    pdfUrls: []
  },
  {
    id: 20260527003,
    dept: ["Rural Development"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Rural Development and Water Resources chaired review meeting on key schemes implemented by the Rural Development and Panchayat Raj Department",
    summary: "The Rural Development and Water Resources Minister chaired a review of key schemes under the Rural Development and Panchayat Raj Department, assessing implementation progress and fund utilisation.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_rd.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_112.pdf"]
  },
  {
    id: 20260527004,
    dept: ["Energy Dept"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Energy Resources and Law chaired review meeting on Law department activities",
    summary: "The Energy Resources and Law Minister chaired a review meeting on Law department activities, covering pending cases, departmental performance, and legal reforms.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_enrgy.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_111.pdf"]
  },
  {
    id: 20260527005,
    dept: ["Tourism"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Tourism chaired review meeting on Tourism Department and Tamil Nadu Tourism Development Corporation Activities",
    summary: "The Tourism Minister chaired a review of the Tourism Department and Tamil Nadu Tourism Development Corporation (TTDC), covering destination promotion, revenue, and infrastructure.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_tour.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_110.pdf"]
  },
  {
    id: 20260527006,
    dept: ["Education"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity inspected construction works of the Bharat Scouts and Guides Headquarters building in Chennai and appreciated the talents of students in Cuddalore district",
    summary: "The School Education Minister inspected construction of the Bharat Scouts and Guides Headquarters in Chennai and visited Cuddalore district to appreciate student talent and educational achievements.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_sedu.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_sedu1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_sedu2.jpg"
    ],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_109.pdf"]
  },
  {
    id: 20260527007,
    dept: ["Milk & Dairy"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Milk and Dairy Development chaired review meeting on department activities and schemes",
    summary: "The Milk and Dairy Development Minister chaired a review of departmental activities and schemes, including milk procurement, farmer support, and Aavin cooperative operations.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_md.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_108.pdf"]
  },
  {
    id: 20260527008,
    dept: ["CMO"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Greetings message from Honble Chief Minister on the occasion of Bakrid",
    summary: "Chief Minister Vijay extended warm greetings to the people of Tamil Nadu, particularly the Muslim community, on the occasion of Bakrid (Eid al-Adha).",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_107.pdf"]
  },
  {
    id: 20260527009,
    dept: ["Public Works"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Public Works and Sports Development provided financial assistance to chess player Vaishali for International Chess Tournaments",
    summary: "The Public Works and Sports Development Minister sanctioned financial assistance to Indian chess player Vaishali to participate in upcoming International Chess Tournaments, supporting Tamil Nadu's sporting excellence.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_pwsd1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_106.pdf"]
  },
  {
    id: 20260527010,
    dept: ["Natural Resources"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Natural Resources inspected quarry sites at Puliyooran village in Aruppukottai taluk, Virudhunagar district",
    summary: "The Natural Resources Minister T.K. Prabhu personally inspected quarry sites at Puliyooran village in Aruppukottai taluk, Virudhunagar district, as part of the government's ongoing crackdown on illegal and violating quarry operations.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_105.pdf"]
  },
  {
    id: 20260527011,
    dept: ["Agriculture"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Agriculture and Farmers Welfare inspected Semmozhi Poonga and Kalaignar Centenary Park in Chennai",
    summary: "The Agriculture and Farmers Welfare Minister inspected Semmozhi Poonga and Kalaignar Centenary Park in Chennai, reviewing horticulture maintenance and public green space upkeep.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_agri1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_agri2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260527012,
    dept: ["Public Works & Sports Dept", "Education"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Ministers for Public Works and Sports Development and School Education, Tamil Development, Information and Publicity chaired review meeting on joint scientific training initiatives for student well-being and drug abuse prevention",
    summary: "The Ministers for Public Works and Sports Development and for School Education, Tamil Development, Information and Publicity jointly chaired a review meeting on scientific training initiatives aimed at student well-being and drug abuse prevention.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_pwsd2.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_114.pdf"]
  },
  {
    id: 20260527013,
    dept: ["Industries Dept"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Industries, Investment Promotion and Commerce chaired review meeting on the activities of Tamil Nadu Cements Corporation and Guidance of Tamil Nadu",
    summary: "The Industries, Investment Promotion and Commerce Minister chaired a review meeting on the activities of Tamil Nadu Cements Corporation and the Guidance of Tamil Nadu investment facilitation body, assessing operational performance and investor outreach.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_indu.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_113.pdf"]
  },
  {
    id: 20260527014,
    dept: ["CMO"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Chief Minister called on and held discussions with the Honble Prime Minister of India in New Delhi",
    summary: "Chief Minister Vijay called on Prime Minister Narendra Modi at Seva Teerth in New Delhi and held discussions on key Tamil Nadu priorities including the Mekedatu dam, Tamil fishermen, Tamil Thai Vazhthu, pending central funds, and DRDO project allocations.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_115.pdf"]
  },
  {
    id: 20260527015,
    dept: ["CMO", "Finance Dept"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Chief Minister called on and held discussions with the Honble Union Minister of Finance in New Delhi",
    summary: "Chief Minister Vijay met Union Finance Minister Nirmala Sitharaman in New Delhi and discussed pending central funds for Tamil Nadu's welfare schemes, state infrastructure projects, and fiscal support requests.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_116.pdf"]
  },
  {
    id: 20260527016,
    dept: ["Energy Dept"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Energy Resources and Law visited the families of lightning strike victims and presented them with relief cheques under the State Disaster Response Fund",
    summary: "The Minister for Energy Resources and Law visited the families of lightning strike victims and distributed relief cheques under the State Disaster Response Fund (SDRF), offering condolences and financial assistance to the affected families.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_117.pdf"]
  },
  {
    id: 20260527017,
    dept: ["Housing"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Housing and Urban Development chaired review meeting on various ongoing development works undertaken by the Housing and Urban Development Department",
    summary: "The Housing and Urban Development Minister chaired a review of ongoing development works by the department, covering TNHB projects, urban housing scheme progress, and infrastructure development across Tamil Nadu.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_118.pdf"]
  },
  {
    id: 20260527018,
    dept: ["CMO"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Text of the letter of the Honble Chief Minister addressed to the Honble Prime Minister of India regarding Tamil Thai Vazhthu",
    summary: "Chief Minister Vijay&apos;s formal letter to PM Modi requesting Central Government clarification that Tamil Thai Vazhthu may be rendered before Vande Mataram at all Tamil Nadu state government events, resolving a longstanding protocol dispute.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_119.pdf"]
  },
  {
    id: 20260527019,
    dept: ["Transport"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "As per the orders of the Honble Chief Minister, the Honble Minister for Transport conducted a review meeting at the Secretariat on the functioning of the Tamil Nadu State Transport Corporations",
    summary: "The Transport Minister conducted a Secretariat review meeting on the functioning of Tamil Nadu State Transport Corporations (TNSTC), covering operational performance, route rationalisation, revenue generation, and passenger safety improvements.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_120.pdf"]
  },
  {
    id: 20260527020,
    dept: ["Forests"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "A regional level review meeting of the Forest Department was held under the chairmanship of the Honble Minister for Forests",
    summary: "The Forests Minister chaired a regional-level review meeting of the Forest Department, assessing forest conservation programmes, wildlife protection, anti-encroachment drives, and departmental scheme implementation across regions.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_121.pdf"]
  },
  {
    id: 20260527021,
    dept: ["Finance Dept"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "From Finance (Ways and Means-II) Department",
    summary: "Official press release from the Finance (Ways and Means-II) Department on state treasury and fiscal management matters.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr270526_122.pdf"]
  },
  {
    id: 20260527022,
    dept: ["AI & IT"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services chaired a meeting on the functioning and the future plans of iTNT Hub",
    summary: "The AI, IT and Digital Services Minister R. Kumar chaired a review meeting on the functioning and future plans of iTNT Hub — Tamil Nadu&apos;s IT and innovation startup ecosystem, covering incubatee performance, funding, and expansion goals.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260527023,
    dept: ["Education"],
    date: "May 27, 2026",
    dateValue: "2026-05-27",
    title: "Thiru S. Karthigaichelvan, Chief News Editor, News18 Tamil Nadu Television called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Thiru S. Karthigaichelvan, Chief News Editor of News18 Tamil Nadu Television, paid a courtesy call on the School Education, Tamil Development, Information and Publicity Minister.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260528001,
    dept: ["CMO"],
    date: "May 28, 2026",
    dateValue: "2026-05-28",
    title: "Honble Chief Minister was extended warm send off at Tamil Nadu House, New Delhi with the ceremonial guard of honour",
    summary: "Chief Minister Vijay was accorded a warm send-off with a ceremonial guard of honour at Tamil Nadu House, New Delhi, as he concluded his maiden official Delhi visit and returned to Chennai.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr280526a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529001,
    dept: ["CMO"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "State Chief Information Commissioner and State Information Commissioners called on the Honble Chief Minister",
    summary: "The State Chief Information Commissioner and State Information Commissioners paid a courtesy call on Chief Minister Vijay at the Secretariat.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_cm1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529002,
    dept: ["CMO"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Chairman (Automotive Business) of Mahindra and Mahindra called on the Honble Chief Minister",
    summary: "The Chairman (Automotive Business) of Mahindra and Mahindra met Chief Minister Vijay to discuss automotive sector growth and potential investment opportunities in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_cm2.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260529003,
    dept: ["CMO"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "CEO, Managing Director and Head – Human Resources of Saint-Gobain India Private Limited called on the Honble Chief Minister",
    summary: "Top executives from Saint-Gobain India met Chief Minister Vijay at the Secretariat to discuss their ongoing projects and future expansion plans in the state.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_cm3.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260529004,
    dept: ["Education"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Managing Director of DCCL, Director of News Tamil, Associate Editor and Chief Reporter called on the Honble Minister for School Education",
    summary: "Senior media representatives from News Tamil and DCCL paid a courtesy call on the Minister for School Education, Tamil Development, Information and Publicity.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529005,
    dept: ["Education"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for School Education inaugurated student admissions for the academic year 2026–2027 and distributed educational materials",
    summary: "Minister for School Education inaugurated the 2026-27 student admissions and distributed educational materials at Dhanakoti Middle School, Chintadripet, Chennai.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526f.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526g.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526h.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529006,
    dept: ["AI & IT"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for AI and IT chaired a review meeting on the activities and future plans of the ITNT Hub at Anna University",
    summary: "The Minister for Artificial Intelligence and Information Technology chaired a review of the ITNT Hub at Anna University, focusing on startup incubation and future innovation goals.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526i.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529007,
    dept: ["Public Works"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Public Works and Sports Development chaired meeting on sustainable value-capture financing models for highways",
    summary: "The PWD and Sports Development Minister chaired a meeting on developing world-class highways using sustainable value-capture financing models.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_pwsd_3.JPG"],
    pdfUrls: []
  },
  {
    id: 20260529008,
    dept: ["AI & IT"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for AI and IT chaired review meeting on Tamil Nadu Virtual Academy activities",
    summary: "The Minister for Artificial Intelligence and Information Technology reviewed the activities and future plans of the Tamil Nadu Virtual Academy.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_it.jpg"],
    pdfUrls: []
  },
  {
    id: 20260529009,
    dept: ["Transport"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Transport informed goods vehicle operators to use Tamil Nadu Suraksha Mitra Portal",
    summary: "The Transport Minister directed national permit goods vehicle operators to utilize the Tamil Nadu Suraksha Mitra Portal for tracking device approvals.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_transport.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_133.pdf"]
  },
  {
    id: 20260529010,
    dept: ["Transport"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Transport announced free bus travel for students from school reopening day",
    summary: "The Transport Minister announced that free bus travel for students will be available starting from the day schools reopen for the new academic year.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_132.pdf"]
  },
  {
    id: 20260529011,
    dept: ["Education"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "World Tamil Research Institute – Applications invited for 2026 admissions to Postgraduate Tamil Programmes",
    summary: "The World Tamil Research Institute has invited applications for its 2026 postgraduate Tamil programmes.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_131.pdf"]
  },
  {
    id: 20260529012,
    dept: ["Agriculture"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Agriculture addressed the Kharif Campaign 2026 – National Agriculture Conference in New Delhi",
    summary: "The Agriculture Minister participated in and addressed the Kharif Campaign 2026 National Agriculture Conference held in New Delhi.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_agri1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_agri2.JPG", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_agri3.JPG"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_e_130.pdf", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_t_130.pdf"]
  },
  {
    id: 20260529013,
    dept: ["Natural Resources"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Natural Resources orders Statewide inspection of quarries and enforcement action",
    summary: "The Natural Resources Minister ordered a comprehensive statewide inspection of quarries to enforce mining regulations and take action against violators.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_129.pdf"]
  },
  {
    id: 20260529014,
    dept: ["Health"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "From the Commissioner for the Welfare of Persons with Disabilities",
    summary: "Official release regarding welfare initiatives for persons with disabilities.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_128.pdf"]
  },
  {
    id: 20260529015,
    dept: ["Education"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Minister for Higher Education announced reopening of online portal for Government Arts and Science College admissions",
    summary: "The Higher Education Minister announced that the online application portal for Government Arts and Science College admissions will reopen on June 1st, 2026.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_127.pdf"]
  },
  {
    id: 20260529016,
    dept: ["Health", "Water Resources"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Rural Development and Water Resources inspected construction of Urban Primary Health Centre in Kodambakkam",
    summary: "The Minister for Rural Development and Water Resources inspected the ongoing construction of an Urban Primary Health Centre in Kodambakkam.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_rd.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_126.pdf"]
  },
  {
    id: 20260529017,
    dept: ["Electricity"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Energy Resources and Law distributed appointment orders to 50 persons",
    summary: "The Energy Resources and Law Minister distributed appointment orders to 45 Assistant Pleaders and 5 Treasurers for Government Law Colleges.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526a.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526b.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526c.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526d.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_125.pdf"]
  },
  {
    id: 20260529018,
    dept: ["CMO", "Public Works"],
    date: "May 29, 2026",
    dateValue: "2026-05-29",
    title: "Honble Minister for Public Works and Sports Development distributed allotment orders to 495 SDAT hostel students",
    summary: "As directed by the Chief Minister, the PWD and Sports Development Minister distributed allotment orders to 495 students enrolled in SDAT hostels.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_pwsd1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_pwsd2.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr290526_124.pdf"]
  },
  {
    id: 20260530001,
    dept: ["Water Resources"],
    date: "May 30, 2026",
    dateValue: "2026-05-30",
    title: "Release of water from Papanasam, Servalar and Manimuthar Reservoirs for irrigation",
    summary: "Water Resources Department announced the release of water from Papanasam, Servalar, and Manimuthar reservoirs to support irrigation needs.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr300526_136.pdf"]
  },
  {
    id: 20260530002,
    dept: ["Water Resources"],
    date: "May 30, 2026",
    dateValue: "2026-05-30",
    title: "Release of water from Pechiparai, Perunchani and Chittar dams for irrigation in Kanniyakumari",
    summary: "Water from Pechiparai, Perunchani, and Chittar dams has been released for irrigation in the Kanniyakumari district.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr300526_135.pdf"]
  },
  {
    id: 20260530003,
    dept: ["CMO"],
    date: "May 30, 2026",
    dateValue: "2026-05-30",
    title: "Condolence message from the Honble Chief Minister on the demise of Tmt Mohini Ammaiyar",
    summary: "Chief Minister Vijay expressed his condolences on the passing of Tmt Mohini Ammaiyar, the mother of actor Ajith Kumar.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr300526_134.pdf"]
  },
  {
    id: 20260601001,
    dept: ["Energy Dept"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Newly appointed Senior Officials called on the Honble Minister for Energy Resources and Law",
    summary: "The newly appointed senior officials of the Energy and Law departments met with the Minister for Energy Resources and Law.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_enrgy1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_enrgy2.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_enrgy3.jpg"],
    pdfUrls: []
  },
  {
    id: 20260601002,
    dept: ["Govt of TN"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Honble Minister for Social Justice chaired review meeting on Adi Dravidar Welfare Department schemes and projects",
    summary: "A review meeting was held to assess the progress of schemes and projects under the Adi Dravidar and Tribal Welfare Department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_sj.jpg"],
    pdfUrls: []
  },
  {
    id: 20260601003,
    dept: ["Tamil Development & Info Dept"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services inspected IIT Madras Research Park",
    summary: "The Minister for AI, IT and Digital Services reviewed the role of IIT Madras Research Park in innovation and startup development.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_it1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_it2.jpg"],
    pdfUrls: []
  },
  {
    id: 20260601004,
    dept: ["School Education Dept"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Honble Minister for Higher Education announced three new courses and 3,570 additional seats in Polytechnic Colleges",
    summary: "The Higher Education Minister announced the introduction of three new courses and an increase of 3,570 seats in Polytechnic Colleges for the academic year 2026-27.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_hedu.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_143.pdf"]
  },
  {
    id: 20260601005,
    dept: ["Govt of TN"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "EDII-TN training programme on You Too Can Be an Entrepreneur - English Version",
    summary: "Entrepreneurship Development and Innovation Institute (EDII-TN) announced a five-day training programme for aspiring entrepreneurs.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_e_142.pdf"]
  },
  {
    id: 20260601006,
    dept: ["Govt of TN"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "EDII-TN training programme on You Too Can Be an Entrepreneur - Tamil Version",
    summary: "The Tamil version of the five-day entrepreneurship training programme was announced by EDII-TN.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_t_142.pdf"]
  },
  {
    id: 20260601007,
    dept: ["CMO"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Honble Chief Minister paid floral tribute to freedom fighter Anjalai Ammal on her 137th birth anniversary",
    summary: "Chief Minister Vijay paid his respects to the late freedom fighter Anjalai Ammal on the occasion of her 137th birth anniversary.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626a.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_141.pdf"]
  },
  {
    id: 20260601008,
    dept: ["Govt of TN"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Thayumanavar Scheme - Doorstep delivery of PDS commodities on 2nd and 3rd June 2026",
    summary: "Announcement regarding the doorstep delivery of PDS commodities under the Thayumanavar Scheme for eligible beneficiaries on June 2nd and 3rd.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_140.pdf"]
  },
  {
    id: 20260601009,
    dept: ["CMO"],
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    title: "Social media post of the Honble Chief Minister congratulating Tmt. Venkita Subramani Mohana on her appointment as Supreme Court Judge",
    summary: "Chief Minister Vijay shared a social media message congratulating Tmt. Venkita Subramani Mohana on her elevation to the Supreme Court as a Judge.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr010626_139.pdf"]
  },
  {
    id: 20260602001,
    dept: ["CMO", "Municipal Admin"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Hon'ble Chief Minister signed MoU with Union Government for Jal Jeevan Mission 2.0 (Uyir Neer Iyakkam)",
    summary: "CM Vijay signed a Memorandum of Understanding with the Union Government via video conferencing to implement Jal Jeevan Mission 2.0, securing ₹2,177.27 crore initial funding for state water infrastructure.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260602002,
    dept: ["CMO"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Member of Parliament P. Chidambaram called on the Honble Chief Minister",
    summary: "Former Union Minister and MP P. Chidambaram met with Chief Minister Vijay at the Secretariat to discuss state and national administrative matters.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626a.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602003,
    dept: ["CMO"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "General Officer Commanding, Dakshin Bharat Area, called on the Honble Chief Minister",
    summary: "Major General rank officer commanding the Dakshin Bharat Area paid a courtesy call to the Chief Minister at the Secretariat.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626c.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602004,
    dept: ["CMO"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Chairman and Managing Director of LMW, called on the Honble Chief Minister",
    summary: "The CMD of Lakshmi Machine Works (LMW) met with CM Vijay to discuss industrial development and manufacturing growth in the state.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626d.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602005,
    dept: ["Transport"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Representatives of Tamil Nadu Omni Bus Owners Association called on the Honble Chief Minister",
    summary: "Representatives of the Omni Bus Owners Association met with the Chief Minister to discuss regulatory frameworks and sector challenges.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626e.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602006,
    dept: ["Adi Dravidar and Tribal Welfare"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Honble Minister for Social Justice chaired review meeting on tribal welfare department schemes and projects",
    summary: "The Minister for Social Justice, Adi Dravidar and Tribal Welfare reviewed the progress of ongoing development schemes for tribal communities.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_sj1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602007,
    dept: ["AI & IT Dept"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Honble Minister for Artificial Intelligence, Information Technology and Digital Services inspected ICT Academy",
    summary: "Minister R. Kumar inspected the ICT Academy and reviewed its skill development programs and employment generation initiatives for the youth.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_ai1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260602008,
    dept: ["Public Works"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Honble Minister for Public Works and Sports Development presented Tamil Nadu’s road infrastructure proposals to the Union Minister for Road Transport and Highways",
    summary: "Minister Aadhav Arjuna met Union Minister Nitin Gadkari in New Delhi to present proposals for key road infrastructure projects in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_pw1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_156.pdf"]
  },
  {
    id: 20260602009,
    dept: ["Food and Civil Supplies"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Honble Minister for Food and Civil Supplies reviewed the functioning of the Tamil Nadu Food Commission",
    summary: "The Food and Civil Supplies Minister reviewed the performance of the State Food Commission and measures to ensure food security.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_155.pdf"]
  },
  {
    id: 20260602010,
    dept: ["CMO"],
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    title: "Birthday greetings of the Honble Chief Minister to Isaignani Ilaiyaraaja on his 83rd birthday",
    summary: "Chief Minister Vijay extended warm birthday wishes to legendary music composer Isaignani Ilaiyaraaja, hailing his contribution to music and culture.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr020626_144.pdf"]
  },
  {
    id: 20260603001,
    dept: ["Education Dept", "Information & Publicity"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Hon'ble Minister for School Education paid floral tribute to Muthamizh Arignar Kalaignar on his 103rd birth anniversary",
    summary: "On the occasion of the 103rd birth anniversary of Muthamizh Arignar Kalaignar, the Minister for School Education, Tamil Development, Information and Publicity paid floral tributes at his memorial.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626_sedu1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260603002,
    dept: ["CMO"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Managing Director and Chief Executive Officer of Hyundai Motor India called on the Honble Chief Minister",
    summary: "The MD and CEO of Hyundai Motor India met with CM Vijay at the Secretariat to discuss the company's continued operations and potential growth in the state's automotive sector.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626a.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260603003,
    dept: ["CMO"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Representatives of CODISSIA, COINTEC and CDIIC called on the Honble Chief Minister",
    summary: "Representatives from Coimbatore-based industrial associations met with the Chief Minister to discuss MSME development and upcoming industrial exhibitions.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626b.jpg"],
    pdfUrls: []
  },
  {
    id: 20260603004,
    dept: ["Education Dept", "Information & Publicity"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Representatives of Tamil News Readers Association called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "The Tamil News Readers Association met with the Minister to discuss welfare measures and professional development for media professionals.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626_sedu3.jpg"],
    pdfUrls: []
  },
  {
    id: 20260603005,
    dept: ["CMO"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Representatives of Leap Green Energy and Brookfield called on the Honble Chief Minister",
    summary: "Major investors from Leap Green Energy and Brookfield Asset Management met CM Vijay to discuss renewable energy investments and sustainable infrastructure projects in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626c.JPG"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260603006,
    dept: ["CMO"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Representatives of CREDAI Chennai, CREDAI Tamil Nadu and CREDAI National called on the Honble Chief Minister",
    summary: "The Confederation of Real Estate Developers' Associations of India (CREDAI) representatives met with the CM to discuss urban planning, affordable housing, and real estate sector growth.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626d.JPG"],
    pdfUrls: []
  },
  {
    id: 20260603007,
    dept: ["CMO"],
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    title: "Social media post of Honble Chief Minister on the 103rd birth anniversary of Muthamizh Arignar Kalaignar, former Chief Minister",
    summary: "Chief Minister Vijay shared a poignant message on social media paying tribute to the legacy and contributions of former CM Kalaignar Karunanidhi on his birth anniversary.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr030626_158.pdf"]
  },
  {
    id: 20260604001,
    dept: ["CMO"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Social media post of the Honble Chief Minister greeting students on the reopening of schools",
    summary: "Chief Minister Vijay posted a warm greeting on social media to students across Tamil Nadu as schools reopened for the 2026–27 academic year on June 4, urging them to nurture lofty dreams and work hard. Schools had been delayed from June 1 due to the extreme summer heat.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_166.pdf"]
  },
  {
    id: 20260604002,
    dept: ["CMO"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Chairman and Managing Director of Thiagarajar Mills called on the Honble Chief Minister",
    summary: "The Chairman and Managing Director of Thiagarajar Mills called on Chief Minister Vijay at the Secretariat to discuss the textile sector's growth and opportunities in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626b.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260604003,
    dept: ["CMO"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Director of Indian Institute of Technology and faculty members called on the Honble Chief Minister",
    summary: "The Director of IIT and faculty members called on Chief Minister Vijay to discuss academic collaboration, research partnerships, and the state's role in supporting higher technical education.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626c.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604004,
    dept: ["Energy Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Director General of Prisons and Correctional Services called on the Honble Minister for Energy Resources and Law",
    summary: "The Director General of Prisons and Correctional Services met with the Minister for Energy Resources and Law to discuss matters concerning the correctional services and prison administration in Tamil Nadu.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_enrgy.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604005,
    dept: ["Labour Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Ministers for Labour Welfare and Skill Development and Non-Resident Tamils Welfare visited injured workers at Rajalakshmi Medical College Hospital",
    summary: "The Ministers for Labour Welfare and Skill Development and Non-Resident Tamils Welfare visited workers injured in a workplace accident at Rajalakshmi Medical College Hospital, expressing the government's concern and assuring all possible support.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_lwsd.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604006,
    dept: ["Labour Dept", "Industries Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Ministers for Labour Welfare and Skill Development and Non-Resident Tamils Welfare inspected Hyundai's Irungattukottai Facility in Kanchipuram District",
    summary: "The Ministers for Labour Welfare and Non-Resident Tamils Welfare inspected Hyundai's manufacturing facility at Irungattukottai in Kanchipuram District to review labour conditions, skill development initiatives, and employment practices at the plant.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_lwsd1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604007,
    dept: ["School Education Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for School Education distributed educational kits, inaugurated digital smart boards and presented awards to students for the academic year 2026–2027",
    summary: "On the occasion of school reopening, the Minister for School Education, Tamil Development, Information and Publicity distributed educational kits, inaugurated digital smart boards, and presented awards to outstanding students to mark the start of the 2026–27 academic year.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_sedu1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_sedu2.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_sedu3.JPG"],
    pdfUrls: []
  },
  {
    id: 20260604008,
    dept: ["CMO", "Social Welfare"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Social Welfare and Women Empowerment inspected the Chief Minister's Breakfast Scheme at Schools in Aminjikarai and Subbarayan Street, Chennai",
    summary: "The Minister for Social Welfare and Women Empowerment inspected the implementation of the Chief Minister's Breakfast Scheme at schools in Aminjikarai and Subbarayan Street, Chennai, to review quality and reach of the flagship nutritional programme.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe2.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_168.pdf"]
  },
  {
    id: 20260604009,
    dept: ["CMO", "Industries Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Chief Minister witnessed the signing of MoU with Larsen and Toubro — ₹18,600 Crore Investment in Tamil Nadu",
    summary: "Chief Minister Vijay witnessed the signing of a landmark MoU between the Tamil Nadu Government and Larsen & Toubro (L&T) for a total investment of ₹18,600 crore across three mega projects: a ₹15,000 crore Hyperscale & Edge AI Data Centre in Kancheepuram, a ₹2,500 crore Electronics & Electrical Systems Manufacturing facility in Coimbatore, and a ₹1,100 crore Shipyard Expansion at Kattupalli, Tiruvallur. The deal is expected to generate approximately 8,200 jobs and is the first major industrial MoU signed by the Vijay government.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626a.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_167.pdf"],
    highlight: true
  },
  {
    id: 20260604010,
    dept: ["CMO"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Chief Minister witnessed the signing of MoU with Larsen and Toubro",
    summary: "Chief Minister Vijay witnessed the signing of a significant MoU with Larsen and Toubro for major investment in Tamil Nadu's industrial and technology sectors.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626a.jpg"],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260604011,
    dept: ["Social Welfare"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Social Welfare and Women Empowerment inspected the Chief Minister's Breakfast Scheme at Schools in Aminjikarai and Subbarayan Street, Chennai",
    summary: "The Minister for Social Welfare and Women Empowerment inspected the implementation of the Chief Minister's Breakfast Scheme at schools in Aminjikarai and Subbarayan Street, Chennai.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe2.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe3.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe4.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_swwe5.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_168.pdf"]
  },
  {
    id: 20260604012,
    dept: ["CMO", "Natural Resources"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Chief Minister chaired a review meeting on the activities of Natural Resources department",
    summary: "Chief Minister Vijay chaired a comprehensive review meeting on the activities and performance of the Natural Resources department.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626d.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_169.pdf"]
  },
  {
    id: 20260604013,
    dept: ["Finance Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "From Finance (Ways and Means-II) Department - English Version",
    summary: "Finance Department (Ways and Means-II) official release in English language.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_e_170.pdf"]
  },
  {
    id: 20260604014,
    dept: ["Finance Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "From Finance (Ways and Means-II) Department - Tamil Version",
    summary: "Finance Department (Ways and Means-II) official release in Tamil language.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_t_170.pdf"]
  },
  {
    id: 20260604015,
    dept: ["Commercial Taxes and Registration"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Commercial Taxes and Registration inspected Sub-Registrar offices in Madurai district",
    summary: "The Minister for Commercial Taxes and Registration conducted an inspection of Sub-Registrar offices across Madurai district to review administrative functioning and citizen services.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_ctax1.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_ctax2.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_ctax3.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_171.pdf"]
  },
  {
    id: 20260604016,
    dept: ["Food and Civil Supplies"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Food and Civil Supplies inspected Government direct paddy procurement centres in Kanchipuram district",
    summary: "The Minister for Food and Civil Supplies inspected Government direct paddy procurement centres across Kanchipuram district to ensure efficient procurement and farmer support.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_fcs1.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_172.pdf"]
  },
  {
    id: 20260604017,
    dept: ["Food and Civil Supplies"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Food and Civil Supplies chaired a review meeting on the activities of the department",
    summary: "The Minister for Food and Civil Supplies chaired a comprehensive review meeting to assess departmental activities, food security initiatives, and procurement operations.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_fcs.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604018,
    dept: ["Fisheries"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Fisheries and Fishermen Welfare provided relief assistance to the family of a deceased fisherman in Chennai",
    summary: "The Minister for Fisheries and Fishermen Welfare visited a family in Chennai to provide relief assistance following the death of a fisherman.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_ffw.jpg"],
    pdfUrls: []
  },
  {
    id: 20260604019,
    dept: ["School Education Dept"],
    date: "June 04, 2026",
    dateValue: "2026-06-04",
    title: "Honble Minister for Human Resources Management distributed free textbooks and uniforms to school students at East Tambaram",
    summary: "The Minister for Human Resources Management distributed free textbooks and school uniforms to students at East Tambaram as part of the government's education support initiatives.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_hrm1.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_hrm2.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr040626_hrm3.jpeg"],
    pdfUrls: []
  },
  {
    id: 20260605001,
    dept: ["Electricity"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Tamil Nadu Legislative Assembly Secretary called on the Honble Minister for Energy Resources and Law",
    summary: "The Tamil Nadu Legislative Assembly Secretary met with the Minister for Energy Resources and Law to discuss administrative coordination between the assembly and energy ministry.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_enrgy.jpg"],
    pdfUrls: []
  },
  {
    id: 20260605002,
    dept: ["Housing"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Minister for Housing and Urban Development chaired a review meeting on CMDA development works",
    summary: "The Minister for Housing and Urban Development conducted a comprehensive review meeting on the progress and performance of CMDA (Chennai Metropolitan Development Authority) development projects.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_hud.JPG"],
    pdfUrls: []
  },
  {
    id: 20260605003,
    dept: ["CMO"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Hon'ble Chief Minister chaired the 1st Cabinet meeting at the Secretariat",
    summary: "Chief Minister Vijay chaired the first formal cabinet meeting at the Secretariat to address key government business and policy matters.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_cm1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260605004,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change participated in World Environment Day celebrations at Guindy",
    summary: "The Ministers for Forests, Environment and Climate Change participated in World Environment Day celebrations held at Guindy to promote environmental awareness and conservation.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_fst1.jpg"],
    pdfUrls: []
  },
  {
    id: 20260605005,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the book \"Coral Reef Restoration in Tamil Nadu\" at the World Environment Day celebration",
    summary: "The Ministers for Forests, Environment and Climate Change released the book \"Coral Reef Restoration in Tamil Nadu\" during the World Environment Day celebration to highlight marine conservation efforts.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_fst2.jpg"],
    pdfUrls: []
  },
  {
    id: 20260605006,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "From the Department of Environment, Climate Change and Forests - Tamil Nadu Launches India's First State-Level Standard Operating Procedure (SOP) for Cool Roof Coating - English Version",
    summary: "Tamil Nadu Environment, Climate Change and Forests Department released the English version of SOP for Cool Roof Coating, a first in India at the state level for environmental sustainability.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_e_183.pdf"]
  },
  {
    id: 20260605007,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "From the Department of Environment, Climate Change and Forests - Tamil Nadu Launches India's First State-Level Standard Operating Procedure (SOP) for Cool Roof Coating - Tamil Version",
    summary: "Tamil Nadu Environment, Climate Change and Forests Department released the Tamil version of SOP for Cool Roof Coating as India's first state-level initiative for eco-friendly cooling solutions.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_t_183.pdf"]
  },
  {
    id: 20260605008,
    dept: ["Agriculture"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Minister for Agriculture and Farmers Welfare chaired a review meeting on the activities of the department",
    summary: "The Minister for Agriculture and Farmers Welfare chaired a comprehensive review meeting to assess departmental performance, farmer welfare schemes, and agricultural development initiatives.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_agri.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_182.pdf"]
  },
  {
    id: 20260605009,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the report of the Third Synchronised Survey for Population Estimation of Nilgiri Tahr - English Version",
    summary: "The Ministers for Forests, Environment and Climate Change released the English version of the Third Synchronised Survey report on Nilgiri Tahr population estimation for wildlife conservation.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_e_181.pdf"]
  },
  {
    id: 20260605010,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the report of the Third Synchronised Survey for Population Estimation of Nilgiri Tahr - Tamil Version",
    summary: "The Ministers for Forests, Environment and Climate Change released the Tamil version of the Third Synchronised Survey report on Nilgiri Tahr population for wildlife biodiversity assessment.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_t_181.pdf"]
  },
  {
    id: 20260605011,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the First Comprehensive State-Wide Raptor Assessment report on World Environment Day - English Version",
    summary: "The Ministers released the English version of the First Comprehensive State-Wide Raptor Assessment report, documenting bird of prey populations across Tamil Nadu on World Environment Day.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_e_180.pdf"]
  },
  {
    id: 20260605012,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the First Comprehensive State-Wide Raptor Assessment report on World Environment Day - Tamil Version",
    summary: "The Ministers released the Tamil version of the First Comprehensive State-Wide Raptor Assessment report documenting raptor populations for environmental conservation awareness.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_t_180.pdf"]
  },
  {
    id: 20260605013,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the Tamil Nadu Synchronised Bird Survey 2025–2026 reports on World Environment Day - English Version",
    summary: "The Ministers released the English version of the Tamil Nadu Synchronised Bird Survey 2025–2026 reports documenting avian biodiversity across the state.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_e_179.pdf"]
  },
  {
    id: 20260605014,
    dept: ["Forests"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Ministers for Forests, Environment and Climate Change released the Tamil Nadu Synchronised Bird Survey 2025–2026 reports on World Environment Day - Tamil Version",
    summary: "The Ministers released the Tamil version of the Tamil Nadu Synchronised Bird Survey 2025–2026 reports for comprehensive bird population assessment.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_t_179.pdf"]
  },
  {
    id: 20260605015,
    dept: ["CMO"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Condolence Message of the Honble Chief Minister on the death of a worker in borewell collapse incident in Thiruvidaimarudur, Thanjavur District",
    summary: "Chief Minister Vijay expressed his condolences to the family of a worker who died in a borewell collapse incident in Thiruvidaimarudur, Thanjavur District.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_178.pdf"]
  },
  {
    id: 20260605016,
    dept: ["Tamil Development"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "World Tamil Research Institute - Summer training programme on Epigraphy and Manuscriptology",
    summary: "The World Tamil Research Institute announced a summer training programme focusing on Epigraphy and Manuscriptology for scholars and researchers interested in Tamil cultural studies.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_177.pdf"]
  },
  {
    id: 20260605017,
    dept: ["CMO"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Chief Minister chaired the meeting of the Tamil Nadu Disaster Management Authority",
    summary: "Chief Minister Vijay chaired a meeting of the Tamil Nadu Disaster Management Authority to review disaster preparedness and emergency response protocols.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626d.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_176.pdf"]
  },
  {
    id: 20260605018,
    dept: ["Fire and Rescue Services"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Tamil Nadu Fire and Rescue Services Department to conduct Come and Learn fire safety awareness programme across the state - English Version",
    summary: "The Tamil Nadu Fire and Rescue Services Department announced a statewide \"Come and Learn\" fire safety awareness programme in English to promote public safety education.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_e_175.pdf"]
  },
  {
    id: 20260605019,
    dept: ["Fire and Rescue Services"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Tamil Nadu Fire and Rescue Services Department to conduct Come and Learn fire safety awareness programme across the state - Tamil Version",
    summary: "The Tamil Nadu Fire and Rescue Services Department announced a statewide \"Come and Learn\" fire safety awareness programme in Tamil to enhance public safety awareness.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_t_175.pdf"]
  },
  {
    id: 20260605020,
    dept: ["CMO"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Social media post of Honble Chief Minister on the occasion of World Environment Day",
    summary: "Chief Minister Vijay shared a social media message on World Environment Day emphasizing the importance of environmental conservation and sustainable development.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_174.pdf"]
  },
  {
    id: 20260605021,
    dept: ["CMO"],
    date: "June 05, 2026",
    dateValue: "2026-06-05",
    title: "Honble Chief Minister paid floral tributes at the memorial of Quaid-e-Millath on the occasion of his 131st birth anniversary",
    summary: "Chief Minister Vijay paid floral tributes at the memorial of Quaid-e-Millath to commemorate the 131st birth anniversary of the historic leader.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626a.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626b.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr050626_173.pdf"]
  },
  {
    id: 20260606001,
    dept: ["Agriculture"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "District Collector of Thanjavur called on the Honble Minister for Agriculture and Farmers Welfare at Kumbakonam",
    summary: "The District Collector of Thanjavur met with the Minister for Agriculture and Farmers Welfare at Kumbakonam to discuss agricultural development and farmer welfare initiatives.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri1.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri2.jpg"],
    pdfUrls: []
  },
  {
    id: 20260606002,
    dept: ["CMO"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Under the directions of the Honble Chief Minister, promotion orders issued to 300 Power Utility Engineers for the first time",
    summary: "Chief Minister Vijay directed the issuance of promotion orders to 300 Power Utility Engineers, marking a historic first-time promotion initiative for this cadre.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_189.pdf"]
  },
  {
    id: 20260606003,
    dept: ["CMO"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Social media post of Honble Chief Minister congratulating Savitha Shri Bhaskar on winning gold at the Asian Women's Chess Championship",
    summary: "Chief Minister Vijay congratulated Savitha Shri Bhaskar on her gold medal victory at the Asian Women's Chess Championship through a social media message.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_188.pdf"]
  },
  {
    id: 20260606004,
    dept: ["Electricity"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Honble Minister for Energy Resources and Law chaired a meeting with Officials of all departments on development works in the district",
    summary: "The Minister for Energy Resources and Law chaired an inter-departmental meeting with officials from all departments to review and coordinate development works across the district.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_enrgy.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_187.pdf"]
  },
  {
    id: 20260606005,
    dept: ["Agriculture"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Honble Minister for Agriculture and Farmers Welfare inspected aquatic weed removal and canal desilting works in Kumbakonam",
    summary: "The Minister for Agriculture and Farmers Welfare inspected ongoing aquatic weed removal and canal desilting operations in Kumbakonam to ensure improved water management for irrigation.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri3.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri4.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri5.jpg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_agri6.jpg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_186.pdf"]
  },
  {
    id: 20260606006,
    dept: ["Natural Resources", "Forests"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Honble Minister for Natural Resources launched a mega tree plantation drive, distributed safety equipment and inaugurated district mineral foundation fund projects on World Environment Day",
    summary: "The Minister for Natural Resources launched a large-scale tree plantation drive, distributed safety equipment to workers, and inaugurated district mineral foundation projects to mark World Environment Day.",
    imageUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_nr1.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_nr2.jpeg", "https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_nr3.jpeg"],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_185.pdf"]
  },
  {
    id: 20260606007,
    dept: ["CMO"],
    date: "June 06, 2026",
    dateValue: "2026-06-06",
    title: "Social media post of the Honble Chief Minister congratulating Chess Grandmaster Praggnanandhaa on winning Norway Chess 2026",
    summary: "Chief Minister Vijay congratulated Chess Grandmaster Praggnanandhaa on his victory at the Norway Chess 2026 tournament through a social media post.",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr060626_184.pdf"]
  },
  {
    id: 20260608001,
    dept: ["Minorities Welfare"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Honble Minister for Minorities Welfare welcomed Hajj Pilgrims returning to Chennai on their holy pilgrimage",
    summary: "The Minister for Minorities Welfare extended a warm welcome to Hajj pilgrims returning to Chennai after completing their holy pilgrimage to Mecca.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626d_mw1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626d_mw2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260608002,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Chairperson of the Tamil Nadu State Human Rights Commission called on the Honble Chief Minister",
    summary: "The Chairperson of the Tamil Nadu State Human Rights Commission met with Chief Minister Vijay to discuss human rights protection and institutional initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626c.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260608003,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Chairman of the Sanmar Group called on the Honble Chief Minister",
    summary: "The Chairman of the Sanmar Group, a major industrial conglomerate, met with Chief Minister Vijay to discuss business collaboration and economic growth initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626d.jpg"
    ],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260608004,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Representatives of the South Indian Sugar Mills Association and Sugar Manufacturing Companies called on the Honble Chief Minister",
    summary: "Representatives of the South Indian Sugar Mills Association and major sugar manufacturing companies met with Chief Minister Vijay to discuss sugar industry support and welfare measures.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626e.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260608005,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Chairman and Managing Director of NLC India Limited called on the Honble Chief Minister",
    summary: "The Chairman and Managing Director of NLC India Limited, a major public sector energy undertaking, met with Chief Minister Vijay to discuss energy security and industrial collaboration.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626f.jpg"
    ],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260608006,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Honble Minister for Commercial Taxes and Registration called on the Honble Chief Minister on the occasion of his birthday",
    summary: "The Minister for Commercial Taxes and Registration met with Chief Minister Vijay on the occasion of his birthday to extend warm wishes.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626g.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260608007,
    dept: ["CMO"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Honble Chief Minister felicitated Grandmaster Praggnanandhaa for his historic Norway Chess 2026 achievement",
    summary: "Chief Minister Vijay felicitated Chess Grandmaster Praggnanandhaa for his historic victory at the Norway Chess 2026 tournament in recognition of his outstanding achievement.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626a.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626b.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr080626_191.pdf"
    ]
  },
  {
    id: 20260609001,
    dept: ["CMO"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "President of the Pattali Makkal Katchi and Member of Parliament called on the Honble Chief Minister",
    summary: "The President of the Pattali Makkal Katchi (PMK) and Member of Parliament met with Chief Minister Vijay to discuss coalition matters and political coordination.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626a.jpg"
    ],
    pdfUrls: [],
  },
  {
    id: 20260609002,
    dept: ["CMO"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Representatives of the Centre of Indian Trade Unions called on the Honble Chief Minister",
    summary: "Representatives of the Centre of Indian Trade Unions (CITU) met with Chief Minister Vijay to discuss labor welfare policies and workers' rights initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_b.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609003,
    dept: ["Labour"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Labour Welfare and Skill Development chaired review meeting with department officials",
    summary: "The Minister for Labour Welfare and Skill Development held a review meeting with department officials to assess ongoing labor welfare programs and skill development initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_lwsd3.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609004,
    dept: ["Electricity"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Energy Resources and Law inaugurated the Green Power, Renewable Energy Conference and released a Technical Publication",
    summary: "The Minister for Energy Resources and Law inaugurated the Green Power and Renewable Energy Conference and released a technical publication on sustainable energy practices.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_enrgy.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609005,
    dept: ["Agriculture"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Agriculture and Farmers Welfare reviewed the activities of the horticulture and plantation crops department",
    summary: "The Minister for Agriculture and Farmers Welfare reviewed the performance and activities of the horticulture and plantation crops department to ensure effective farmer support.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_agri.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609006,
    dept: ["MSME"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Micro, Small and Medium Enterprises reviewed sericulture, handicrafts development activities and inspected handicraft products",
    summary: "The Minister for MSME reviewed sericulture and handicrafts development programs, and inspected handicraft products to promote artisan-based industries and livelihoods.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_msme1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_msme2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609007,
    dept: ["CMO"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Chief Minister at the Singappen Special Task Force Launch Ceremony – Set I",
    summary: "Chief Minister Vijay attended the launch ceremony of the Singappen Special Task Force, part of the government's commitment to enhanced law enforcement and public safety.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_cm1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_cm2.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_cm3.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609008,
    dept: ["CMO"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Chief Minister at the Singappen Special Task Force Launch Ceremony – Set III",
    summary: "Chief Minister Vijay attended the second session of the Singappen Special Task Force launch ceremony, continuing the government's focus on law enforcement modernization.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_cm4.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_cm5.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260609009,
    dept: ["General"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Entrepreneurship Development and Innovation Institute (EDII-TN) – Five-days training programme on Laptop Hardware and Chip-Level Servicing - English Version",
    summary: "EDII-TN announced a five-day training programme on laptop hardware and chip-level servicing in English to equip participants with technical repair and maintenance skills.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_e_199.pdf"
    ]
  },
  {
    id: 20260609010,
    dept: ["General"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Entrepreneurship Development and Innovation Institute (EDII-TN) – Five-days training programme on Laptop Hardware and Chip-Level Servicing - Tamil Version",
    summary: "EDII-TN announced a five-day training programme on laptop hardware and chip-level servicing in Tamil to make technical skills accessible to Tamil-speaking participants.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_t_199.pdf"
    ]
  },
  {
    id: 20260609011,
    dept: ["General"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Entrepreneurship Development and Innovation Institute (EDII-TN) – Three-days training programme on E-Commerce - English Version",
    summary: "EDII-TN launched a three-day e-commerce training programme in English to develop entrepreneurship skills and digital business competency among aspiring entrepreneurs.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_e_198.pdf"
    ]
  },
  {
    id: 20260609012,
    dept: ["General"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Entrepreneurship Development and Innovation Institute (EDII-TN) – Three-days training programme on E-Commerce - Tamil Version",
    summary: "EDII-TN launched a three-day e-commerce training programme in Tamil to promote digital entrepreneurship and online business skills among Tamil-speaking communities.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_t_198.pdf"
    ]
  },
  {
    id: 20260609013,
    dept: ["Labour"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Labour Welfare and Skill Development inaugurated Industrial Training Institute admission counselling and issued admission orders",
    summary: "The Minister for Labour Welfare and Skill Development inaugurated the ITI admission counselling process and issued admission orders to qualified candidates for vocational training.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_lwsd1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_lwsd2.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_197.pdf"
    ]
  },
  {
    id: 20260609014,
    dept: ["General"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Commercial Taxes and Registration chaired the first performance review meeting of registration department officials",
    summary: "The Minister for Commercial Taxes and Registration chaired the inaugural performance review meeting with registration department officials to assess departmental efficiency and service delivery.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_ctax.JPG"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_196.pdf"
    ]
  },
  {
    id: 20260609015,
    dept: ["Public Works"],
    date: "Jun 09, 2026",
    dateValue: "2026-06-09",
    title: "Honble Minister for Public Works and Sports Development presented financial assistance and sports equipment to Para Athletes and Sportspersons",
    summary: "The Minister for Public Works and Sports Development distributed financial assistance and sports equipment to para athletes and sportspersons to support their training and competition efforts.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_pwsd1.JPG",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_pwsd2.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr090626_195.pdf"
    ]
  },
  {
    id: 20260610001,
    dept: ["Electricity"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Energy Resources and Law chaired a review meeting on the prisons and correctional services department",
    summary: "The Minister for Energy Resources and Law chaired a comprehensive review meeting on the functioning and operations of the prisons and correctional services department.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_enrgy.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610002,
    dept: ["Agriculture"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Agriculture and Farmers Welfare inspected research facilities and crop varieties at Tamil Nadu Agricultural University",
    summary: "The Minister for Agriculture and Farmers Welfare conducted an inspection of research facilities and reviewed crop varieties being developed at Tamil Nadu Agricultural University.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_agri1.jpeg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_agri2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610003,
    dept: ["General"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Human Resources Management chaired a review meeting on the activities of the Ex-Servicemen Welfare Department and Ex-Servicemen Corporation",
    summary: "The Minister for Human Resources Management chaired a review meeting to assess the activities and performance of the Ex-Servicemen Welfare Department and Ex-Servicemen Corporation.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_hrm.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610004,
    dept: ["CMO"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Chief Minister called on the Honble President of India",
    summary: "The Chief Minister paid an official visit to meet with the President of India to discuss matters of state importance.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626c.jpg"
    ],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260610005,
    dept: ["CMO"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Chief Minister called on the Honble Vice President of India",
    summary: "The Chief Minister met with the Vice President of India to discuss state-level policies and development initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626i.JPG",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626g.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626h.JPG",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626j.jpg"
    ],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260610006,
    dept: ["Electricity"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Energy Resources and Law paid floral tributes to Director Bharathiraja",
    summary: "The Minister for Energy Resources and Law paid floral tributes to renowned film director Bharathiraja as a mark of respect and honor.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_enrgy2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610007,
    dept: ["Education"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Actor and Public Speaker Thiru Erode Mahesh called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Actor and public speaker Thiru Erode Mahesh met with the Minister for School Education, Tamil Development, Information and Publicity to discuss cultural and educational initiatives.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu1.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610008,
    dept: ["Education"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Music artist and lyricist Vedan called on the Honble Minister for School Education, Tamil Development, Information and Publicity",
    summary: "Music artist and lyricist Vedan met with the Minister for School Education, Tamil Development, Information and Publicity to discuss cultural and artistic promotion.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu2.jpg"
    ],
    pdfUrls: []
  },
  {
    id: 20260610009,
    dept: ["CMO"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Chief Minister called on Thiru Rahul Gandhi, leader of opposition in the Lok Sabha",
    summary: "The Chief Minister met with Thiru Rahul Gandhi, the opposition leader in the Lok Sabha, to discuss national and state-level matters.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626k.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626l.JPG"
    ],
    pdfUrls: [],
    highlight: true
  },
  {
    id: 20260610010,
    dept: ["Education"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for School Education, Tamil Development, Information and Publicity distributed educational assistance to meritorious students, headmasters and teachers",
    summary: "The Minister for School Education distributed educational assistance to meritorious students as well as financial support to headmasters and teachers under government welfare schemes.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu3.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu4.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu5.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu6.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_sedu7.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_209.pdf"
    ]
  },
  {
    id: 20260610011,
    dept: ["Electricity"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Energy Resources and Law flagged Off monitoring teams and special power restoration patrol vehicles for rapid rectification of power disruptions in chennai and suburban areas",
    summary: "The Minister for Energy Resources and Law flagged off specialized monitoring teams and power restoration patrol vehicles to rapidly address and rectify power disruptions in Chennai and suburban areas.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_enrgy1.jpeg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_208.pdf"
    ]
  },
  {
    id: 20260610012,
    dept: ["General"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Prohibition and Excise Department – Instructions issued to FL2 and FL3 licensed premises for ensuring regulatory compliance - English Version",
    summary: "The Prohibition and Excise Department issued comprehensive instructions to FL2 and FL3 licensed premises to ensure regulatory compliance and proper operational standards.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_e_207.pdf"
    ]
  },
  {
    id: 20260610013,
    dept: ["General"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Prohibition and Excise Department – Instructions issued to FL2 and FL3 licensed premises for ensuring regulatory compliance - Tamil Version",
    summary: "The Prohibition and Excise Department issued comprehensive instructions to FL2 and FL3 licensed premises to ensure regulatory compliance and proper operational standards (Tamil version).",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_t_207.pdf"
    ]
  },
  {
    id: 20260610014,
    dept: ["General"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Public Distribution System - Public grievance redressal camp to be held in 19 zones of Chennai on 13th June 2026",
    summary: "The Public Distribution System announced the organization of a public grievance redressal camp to be held across 19 zones of Chennai on 13th June 2026 to address citizen concerns.",
    imageUrls: [],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_206.pdf"
    ]
  },
  {
    id: 20260610015,
    dept: ["MSME"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Micro, Small and Medium Enterprises reviewed the preparatory works for Government schemes in the Department",
    summary: "The Minister for MSME reviewed the preparatory works and implementation status of various government schemes designed to support micro, small, and medium enterprises.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_msme.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_205.pdf"
    ]
  },
  {
    id: 20260610016,
    dept: ["Housing"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Honble Minister for Housing and Urban Development reviewed the activities of the Directorate of Town and Country Planning and issued appointment orders to assistant directors",
    summary: "The Minister for Housing and Urban Development reviewed the activities of the Directorate of Town and Country Planning and issued appointment orders to newly appointed assistant directors.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_hud1.jpg",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_hud2.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_204.pdf"
    ]
  },
  {
    id: 20260610017,
    dept: ["CMO"],
    date: "Jun 10, 2026",
    dateValue: "2026-06-10",
    title: "Condolence message of Honble Chief Minister on the sad demise of Director, Thiru Bharathiraja",
    summary: "The Chief Minister released a condolence message expressing grief over the passing of renowned film director Thiru Bharathiraja, acknowledging his significant contributions to cinema.",
    imageUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626a.JPG",
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626b.jpg"
    ],
    pdfUrls: [
      "https://cms.tn.gov.in/cms_migrated/document/press_release/pr100626_203.pdf"
    ]
  },
  {
    id: 20260607001,
    dept: ["General"],
    date: "Jun 07, 2026",
    dateValue: "2026-06-07",
    title: "Anywhere Registration System - 24/7 Online Document Registration Service Launched",
    summary: "The Tamil Nadu government launched the Anywhere Registration system enabling 24/7 online document registration without visiting sub-registrar offices. Citizens can create accounts on the Registration Department website to digitally register eligible documents. This service covers first sale deeds, Tamil Nadu Housing Board documents, and bank-related deeds with digitally signed documents delivered via email and WhatsApp.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260608001,
    dept: ["Water Resources"],
    date: "Jun 08, 2026",
    dateValue: "2026-06-08",
    title: "Chief Minister Directs Implementation of 24x7 Drinking Water Supply Across 25 Municipal Corporations",
    summary: "Chief Minister C. Joseph Vijay directed officials to implement a comprehensive five-year plan for uninterrupted 24x7 drinking water supply across all 25 municipal corporations in Tamil Nadu. The plan also mandates a minimum of three hours of daily water supply to 146 municipalities and 479 town panchayats. This is part of the Chief Minister's Integrated Urban Transformation Mission (CMIUTM) targeting infrastructure upgrades by 2031.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260611001,
    dept: ["CMO"],
    date: "Jun 11, 2026",
    dateValue: "2026-06-11",
    title: "Honble Chief Minister attends the 11th NITI Aayog Governing Council meeting in New Delhi",
    summary: "Chief Minister C. Joseph Vijay attended the 11th NITI Aayog Governing Council meeting in New Delhi to press for Tamil Nadu's infrastructure and financial demands before the Union Government.",
    imageUrls: [],
    pdfUrls: []
  },
  {
    id: 20260611002,
    dept: ["CMO"],
    date: "Jun 11, 2026",
    dateValue: "2026-06-11",
    title: "Chief Minister Discusses State Development with Union Ministers and Coalition Partners in New Delhi",
    summary: "During his three-day New Delhi visit, Chief Minister C. Joseph Vijay held meetings with coalition partners, including meetings with Sonia Gandhi and Rahul Gandhi to discuss state governance and political coordination.",
    imageUrls: [],
    pdfUrls: [],
    highlight: true
  }
];
