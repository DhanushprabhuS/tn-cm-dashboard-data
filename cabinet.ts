/**
 * cabinet.ts — Cabinet Council: CM and Ministers with official portfolios.
 *
 * HOW TO UPDATE:
 *   - When a minister is added: append a new CabinetMinister entry at the bottom.
 *   - When portfolios change: update the `depts` array and `title` of the minister.
 *   - When a minister is removed: delete their entry from the array.
 *   - id format: YYYYMMDD### (date of appointment / portfolio change)
 *   - colorClass cycles: "color-a" | "color-b" | "color-c" | "color-d"
 *   - variant: "highlight" triggers a special saffron visual treatment in the UI.
 *     Use for notable appointments (e.g. first woman minister, youngest minister).
 */

export interface CabinetCM {
  name: string;
  constituency: string;
  party: string;
  portfolios: string[];      // List of CM-held departments
  photoPath: string;         // Path relative to /public e.g. "/Honble CM photo.jpg"
  approvedDate: string;      // "May 16, 2026"
  approvedSource: string;    // "Source: Lok Bhavan Press Release"
}

export interface CabinetMinister {
  id: number;                                           // YYYYMMDD###
  initials: string;                                     // 2-letter initials e.g. "NA"
  colorClass: 'color-a' | 'color-b' | 'color-c' | 'color-d';
  name: string;
  constituency: string;
  title: string;                                        // Portfolio headline
  depts: string[];                                      // Department tag labels
  bio: string;
  note?: string;                                        // e.g. "Only Woman Minister"
  variant?: 'highlight';                                // Triggers saffron accent UI
}

export const cabinetCM: CabinetCM = {
  name: "C. Joseph Vijay",
  constituency: "Perambur",
  party: "TVK",
  portfolios: [
    "Home & Police",
    "Public Administration",
    "General Administration",
    "Women & Youth Welfare",
    "Children, Elderly & Differently Abled",
    "Municipal Administration",
    "Urban & Rural Water Supply",
    "IAS · IPS · IFS Services",
  ],
  photoPath: "/Honble CM photo.jpg",
  approvedDate: "May 16, 2026",
  approvedSource: "Source: Lok Bhavan Press Release",
};

export const cabinetMinisters: CabinetMinister[] = [
  {
    id: 20260516001,
    initials: "NA",
    colorClass: "color-a",
    name: "N. Anand",
    constituency: "T. Nagar",
    title: "Rural Development & Water Resources",
    depts: ["Rural Dev", "Panchayats", "Water Resources"],
    bio: "Vijay's closest aide, Bussy Anand led Vijay Rasigar Mandram in Puducherry. TVK General Secretary & founding office-bearer.",
  },
  {
    id: 20260516002,
    initials: "AA",
    colorClass: "color-b",
    name: "Aadhav Arjuna",
    constituency: "Villivakkam",
    title: "Public Works, Sports & Youth Development",
    depts: ["PWD", "Highways", "Sports"],
    bio: "Basketball Federation of India President. Former Arise Capital MD. Youngest cabinet member background in sports.",
  },
  {
    id: 20260516003,
    initials: "KA",
    colorClass: "color-c",
    name: "KG Arunraj",
    constituency: "Tiruchengodu",
    title: "Health & Family Welfare",
    depts: ["Health", "Family Welfare", "Medical"],
    bio: "Former IRS officer & doctor. Voluntarily retired from Income Tax Dept. TVK General Secretary for Propaganda & Policy.",
  },
  {
    id: 20260516004,
    initials: "KS",
    colorClass: "color-d",
    name: "KA Sengottaiyan",
    constituency: "Thousand Lights",
    title: "Finance & Pensions",
    depts: ["Finance", "Pensions", "Pension Allowances"],
    bio: "78-year-old veteran. Former School Education & Transport Minister under Jayalalithaa. Leader of the House in Assembly.",
  },
  {
    id: 20260516005,
    initials: "PV",
    colorClass: "color-a",
    name: "P. Venkataramanan",
    constituency: "Mylapore",
    title: "Food, Civil Supplies & Consumer Affairs",
    depts: ["Food", "Civil Supplies", "Consumer Affairs"],
    bio: "TVK Party Treasurer. Won Mylapore with 70,070 votes. Post-graduate, no criminal cases declared. Assets ₹5.4 crore.",
  },
  {
    id: 20260516006,
    initials: "RN",
    colorClass: "color-b",
    name: "R. Nirmalkumar",
    constituency: "TVK MLA",
    title: "Energy & Law",
    depts: ["Energy", "Electricity", "Law"],
    bio: "Handles critical dual portfolio of power infrastructure and legal affairs for the state.",
  },
  {
    id: 20260516007,
    initials: "RA",
    colorClass: "color-c",
    name: "Rajmohan A.",
    constituency: "Egmore",
    title: "School Education, Tamil Dev & Information",
    depts: ["School Education", "Tamil Dev", "Info & Publicity", "Archaeology"],
    bio: "Media figure, emerged from Put Chutney YouTube platform. Played key role in TVK's millennial & Gen Z digital outreach.",
  },
  {
    id: 20260516008,
    initials: "TK",
    colorClass: "color-d",
    name: "TK Prabhu",
    constituency: "Karaikudi",
    title: "Natural Resources & Environment",
    depts: ["Natural Resources", "Minerals & Mines", "Environment"],
    bio: "Dentist by profession. Assets ₹11.4 crore. Annual income ₹54.6 lakh declared. No pending criminal cases.",
  },
  {
    id: 20260516009,
    initials: "SK",
    colorClass: "color-a",
    name: "S. Keerthana",
    constituency: "Sivakasi",
    title: "Industries & Investment Promotion",
    depts: ["Industries", "Investment Promotion"],
    bio: "M.Sc Statistics. Defeated sitting Congress MLA by 11,000+ votes. One of youngest female cabinet members in TN history. Assets ₹22.6 lakh.",
    note: "Only Woman Minister",
    variant: "highlight",
  },
];
