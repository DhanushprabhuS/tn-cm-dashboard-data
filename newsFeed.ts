/**
 * newsFeed.ts — Live updates feed (meetings, statements, CMO releases).
 * Agent Last Updated: June 01, 2026
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - date: "Month DD, YYYY" or "Upcoming" for unscheduled items.
 *   - dateValue: "YYYY-MM-DD" proper date value for UI filtering.
 *   - source: "Source: CMO Press Release" | "Source: The News Minute" etc.
 *   - color: hex accent for the left border of the feed card.
 */

export interface FeedItem {
  id: number;       // YYYYMMDD### — sort key
  date: string;     // "May 10, 2026" | "Upcoming"
  dateValue: string; // "YYYY-MM-DD"
  text: string;
  source: string;
  color: string;    // CSS hex
  highlight?: boolean; // true for major company / foreign investor meetings with CM
  link?: string;
}

export const newsFeed: FeedItem[] = [
  { id: 20260510001, date: "May 10, 2026", dateValue: "2026-05-10", text: "CM Vijay sworn in as 22nd Chief Minister at Nehru Indoor Stadium, Chennai. 9 cabinet ministers also administered oath.", source: "Source: Official CMO Release", color: "#FF6B00" },
  { id: 20260510002, date: "May 10, 2026", dateValue: "2026-05-10", text: "Vijay signs first 3 government orders immediately post-oath — electricity, women safety, anti-narcotics.", source: "Source: The News Minute", color: "#FF6B00" },
  { id: 20260510003, date: "May 10, 2026", dateValue: "2026-05-10", text: "Vijay vacates Tiruchirappalli (East) seat, retains Perambur constituency as CM constituency.", source: "Source: Wikipedia / CMO", color: "#FFB800" },
  { id: 20260510004, date: "May 10, 2026", dateValue: "2026-05-10", text: "Governor Rajendra Arlekar directs new government to prove majority in Assembly by May 13, 2026.", source: "Source: The Federal", color: "#00C9A7" },
  { id: 20260510005, date: "May 10, 2026", dateValue: "2026-05-10", text: 'CM addresses state: "Era of real secular social justice begins. You can trust Vijay 100%.\" Promises transparency and minority protection.', source: "Source: The News Minute", color: "#64a8ff" },
  { id: 20260510006, date: "May 13, 2026", dateValue: "2026-05-13", text: "CM Vijay wins Trust Vote in Assembly. Speaker J.C.D. Prabhakar and Deputy Speaker M. Ravishankar elected on May 12.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260515001, date: "May 15, 2026", dateValue: "2026-05-15", text: "The Chairperson and Managing Director of TAFE and the Vice Chairperson called on Hon'ble Chief Minister Vijay at the Secretariat.", source: "Source: CMO Press Release", color: "#FF6B00", highlight: true },
  { id: 20260515002, date: "May 15, 2026", dateValue: "2026-05-15", text: "The Chairman of Confederation of Indian Industry (CII) Southern Region and Team met CM Vijay — investment and industry collaboration discussed.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260515003, date: "May 15, 2026", dateValue: "2026-05-15", text: "The Managing Director of BMW Group called on Hon'ble Chief Minister — potential automotive investment in Tamil Nadu explored.", source: "Source: CMO Press Release", color: "#1A73E8", highlight: true },
  { id: 20260515004, date: "May 15, 2026", dateValue: "2026-05-15", text: "Mr. Jim Aota, Chairman of Yamaha Motor India and Team, called on CM Vijay to discuss manufacturing expansion plans in Tamil Nadu.", source: "Source: CMO Press Release", color: "#FF6B00", highlight: true },
  { id: 20260515005, date: "May 15, 2026", dateValue: "2026-05-15", text: "CM Vijay chaired a high-level Review Meeting on Kuruvai Paddy Cultivation and Water Storage Levels in Major Dams ahead of the agricultural season.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260515006, date: "May 15, 2026", dateValue: "2026-05-15", text: "IAS officers of concerned departments called on CM Vijay to present Tamil Nadu's LEADS 2025 'Exemplar State' Award conferred by the Union Government.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260515007, date: "May 15, 2026", dateValue: "2026-05-15", text: "CM Vijay released a statement opposing the petroleum product price hike by Public Sector Oil Companies, calling for immediate rollback to ease burden on common people.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260516001, date: "May 16, 2026", dateValue: "2026-05-16", text: "Congress warns CM Vijay against inducting rebel AIADMK MLAs into the Tamil Nadu government.", source: "Source: Times of India", color: "#1A73E8" },
  { id: 20260517001, date: "May 17, 2026", dateValue: "2026-05-17", text: "Rajinikanth breaks silence on Vijay becoming TN CM, expressing he was 'extremely shocked' but defends friendship with MK Stalin.", source: "Source: Times of India", color: "#FFB800" },
  { id: 20260518001, date: "May 18, 2026", dateValue: "2026-05-18", text: "The Chairman of Federation of Indian Chambers of Commerce and Industry (FICCI) Tamil Nadu State Council called on Hon'ble Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#00C9A7", highlight: true },
  { id: 20260518002, date: "May 18, 2026", dateValue: "2026-05-18", text: "CM Vijay demands rollback of petrol and diesel price hike.", source: "Source: Mathrubhumi", color: "#FF6B00" },
  { id: 20260518003, date: "May 18, 2026", dateValue: "2026-05-18", text: "CM Vijay recalls Mullivaikkal genocide, reaffirming solidarity for the rights of Tamils across the world.", source: "Source: Times of India", color: "#FFB800" },
  { id: 20260519001, date: "May 19, 2026", dateValue: "2026-05-19", text: "IAS Officer Trainees allotted to Tamil Nadu for the year 2025 called on Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260519002, date: "May 19, 2026", dateValue: "2026-05-19", text: "CM Vijay met with representatives of Differently Abled Persons and rights activists from the transgender community.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260519003, date: "May 19, 2026", dateValue: "2026-05-19", text: "Executive Vice Chairperson and Officials of Apollo Hospitals called on Hon'ble Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#1A73E8", highlight: true },
  { id: 20260519004, date: "May 19, 2026", dateValue: "2026-05-19", text: "Honble Minister for School Education launched State-Level Orientation Training for new textbooks.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260519005, date: "May 19, 2026", dateValue: "2026-05-19", text: "Honble Minister for Public Works and Sports Development chaired a review meeting with sports department officials.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260519006, date: "May 19, 2026", dateValue: "2026-05-19", text: "CM Vijay skipped Keralam chief minister's swearing-in ceremony.", source: "Source: Times of India", color: "#1A73E8" },
  { id: 20260520001, date: "May 20, 2026", dateValue: "2026-05-20", text: "Honble Minister for School Education released SSLC Public Examination Results for March 2026.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260520002, date: "May 20, 2026", dateValue: "2026-05-20", text: "Honble Minister for School Education inaugurated the newly renovated 450-seat auditorium at Anna Centenary Library.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260520003, date: "May 20, 2026", dateValue: "2026-05-20", text: "Chief Minister Vijay flagged off 40 new vehicles for the use of the Directorate of Medical and Rural Health Services.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260520004, date: "May 20, 2026", dateValue: "2026-05-20", text: "Honble Minister for Public Works and Sports Development stated that sportspersons must complete higher education and extended wishes to TN Junior Basketball Teams.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260520005, date: "May 20, 2026", dateValue: "2026-05-20", text: "Chief Minister Vijay paid floral tribute to the portrait of Dravidian Luminary Pandithar Ayothidasar on his 181st birth anniversary.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260520006, date: "May 20, 2026", dateValue: "2026-05-20", text: "Honble Minister for Public Works and Sports Development facilitated direct interaction with sportspersons and sports associations.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260520007, date: "May 20, 2026", dateValue: "2026-05-20", text: "Chief Minister Vijay writes to PM Modi requesting intervention to ensure uninterrupted fertiliser supply to Tamil Nadu amid Strait of Hormuz crisis.", source: "Source: India Today", color: "#FF4757" },
  { id: 20260520008, date: "May 20, 2026", dateValue: "2026-05-20", text: "CM Vijay confirms two Congress MLAs will be inducted into the cabinet, pausing the induction of AIADMK rebels amid pressure from allies.", source: "Source: Times of India", color: "#1A73E8" },
  { id: 20260520009, date: "May 20, 2026", dateValue: "2026-05-20", text: "Representatives of Tamil Nadu Small and Tiny Industries Association (TANSTIA) called on Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260520010, date: "May 20, 2026", dateValue: "2026-05-20", text: "Representatives of Tamil Nadu Cauvery Farmers Association called on Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260520011, date: "May 20, 2026", dateValue: "2026-05-20", text: "Representatives of Textile Industry Associations called on Chief Minister Vijay and discussed Textile Sector Development.", source: "Source: CMO Press Release", color: "#1A73E8" },
  { id: 20260520012, date: "May 20, 2026", dateValue: "2026-05-20", text: "Tamil Nadu State Election Commissioner called on Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260520013, date: "May 20, 2026", dateValue: "2026-05-20", text: "Representatives of ACMA Southern Region called on Chief Minister Vijay and discussed Auto Components Sector Development.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260520014, date: "May 20, 2026", dateValue: "2026-05-20", text: "Chief Minister Vijay chaired a review meeting on granting permission to extract alluvial soil from water bodies for the benefit of farmers.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260520015, date: "May 20, 2026", dateValue: "2026-05-20", text: "Honble Minister for School Education inspected facilities at Anna Centenary Library Complex.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260521001, date: "May 21, 2026", dateValue: "2026-05-21", text: "Tamil Nadu Electricity Board initiated action over alleged irregularities in Green Energy Approvals (Press Release No. 056).", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260521002, date: "May 21, 2026", dateValue: "2026-05-21", text: "State General Secretary and National Secretary of Indian Union Muslim League called on Chief Minister Vijay.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260521003, date: "May 21, 2026", dateValue: "2026-05-21", text: "Chief Minister Vijay photographed with Governor Rajendra Vishwanath Arlekar and all members of the newly expanded Council of Ministers after swearing-in.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260521004, date: "May 21, 2026", dateValue: "2026-05-21", text: "Tamil Nadu creates a dedicated Artificial Intelligence & IT Ministry — R. Kumar (Velachery) sworn in as Minister for AI, Information Technology & Digital Services. TN joins Kerala as one of the first Indian states to grant AI a standalone cabinet-level ministry.", source: "Source: Times of India / Economic Times", color: "#7C3AED" },
  { id: 20260522001, date: "May 22, 2026", dateValue: "2026-05-22", text: "Governor administers Oath of Office and Secrecy to VCK's Vanni Arasu and IUML's A.M. Shahjahan in the presence of CM Vijay, completing the coalition cabinet expansion to 35 ministers.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260522002, date: "May 22, 2026", dateValue: "2026-05-22", text: "Congress returns to Tamil Nadu government after 59 years (since 1967) — S. Rajesh Kumar (Tourism) and P. Viswanathan (Higher Education) represent INC in the Vijay cabinet.", source: "Source: Times of India", color: "#1A73E8" },
  { id: 20260522003, date: "May 22, 2026", dateValue: "2026-05-22", text: "VCK's Vanni Arasu (Tindivanam MLA, Deputy General Secretary) sworn in as Minister for Social Justice, Adi Dravidar Welfare & Hill Tribes — VCK's first cabinet berth in the Vijay government.", source: "Source: ABP Live / CMO Press Release", color: "#FF4757" },
  { id: 20260522004, date: "May 22, 2026", dateValue: "2026-05-22", text: "IUML's A.M. Shahjahan (Papanasam MLA) sworn in as Minister for Minorities Welfare & Wakf Board — IUML joins the TVK-led coalition completing a four-party power-sharing arrangement.", source: "Source: ABP Live / CMO Press Release", color: "#00C9A7" },
  { id: 20260522005, date: "May 22, 2026", dateValue: "2026-05-22", text: "Minister for Public Works and Sports Development chaired consultative meeting with sports association representatives at Nehru Indoor Stadium.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260522006, date: "May 22, 2026", dateValue: "2026-05-22", text: "Minister for Human Resources Management chaired review meeting on department schemes.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260522007, date: "May 22, 2026", dateValue: "2026-05-22", text: "Chairman of Kothari Industrial Corporation and Chairman & Managing Director of MRF Limited called on Chief Minister Vijay separately at the Secretariat.", source: "Source: CMO Press Release", color: "#00C9A7", highlight: true },
  { id: 20260522008, date: "May 22, 2026", dateValue: "2026-05-22", text: "Minister for Forests chaired review meeting on schemes implemented by the Forest Department.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260522009, date: "May 22, 2026", dateValue: "2026-05-22", text: "President of Viduthalai Chiruthaigal Katchi and Member of Parliament called on Chief Minister Vijay at the Secretariat.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260522010, date: "May 22, 2026", dateValue: "2026-05-22", text: "Vijay govt revokes Goondas Act against YouTuber 'Savukku' Shankar — advisory board found no sufficient cause for continued detention. Shankar released immediately and publicly thanked CM Vijay for restoring freedom to media and journalists in Tamil Nadu.", source: "Source: Mathrubhumi / ABP Tamil", color: "#7C3AED" },
  { id: 20260522011, date: "May 22, 2026", dateValue: "2026-05-22", text: "Madras HC issues notice to Election Commission of India over PIL alleging TVK used children for voter influence and cash distribution during the 2026 TN election campaign. Court seeks ECI response.", source: "Source: Mathrubhumi / Zee News", color: "#FF4757" },
  { id: 20260522012, date: "May 22, 2026", dateValue: "2026-05-22", text: "Tamil Thai Vaazhthu row flares again — controversy erupts as Tamil Thai Vaazhthu was placed last in the song sequence at the VCK-IUML cabinet swearing-in ceremony, with critics demanding it be given precedence over Vande Mataram at all official Tamil Nadu government events.", source: "Source: Mathrubhumi / ABP Live", color: "#FFB800" },
  { id: 20260522013, date: "May 22, 2026", dateValue: "2026-05-22", text: "CM Vijay intensifies demand to abolish NEET following the NEET-UG 2026 paper leak — calls it a 'structural flaw' and urges the Union Government to allow medical admissions based on Class 12 marks alone. CBI has arrested 5 persons in connection with the paper leak.", source: "Source: Times of India / Mathrubhumi / The Wire", color: "#FF4757" },
  { id: 20260522014, date: "May 22, 2026", dateValue: "2026-05-22", text: "Malaysian Prime Minister Anwar Ibrahim held a telephone conversation with Chief Minister Vijay to congratulate him, expressing high hopes for stronger cultural and economic ties between Malaysia and Tamil Nadu.", source: "Source: Bernama / CMO Press Release", color: "#00C9A7" },
  { id: 20260523001, date: "May 23, 2026", dateValue: "2026-05-23", text: "Chief Minister Vijay is visiting New Delhi on his first official trip to the national capital since taking office to meet with Prime Minister Narendra Modi, President Droupadi Murmu, Union Home Minister Amit Shah, and Union Finance Minister Nirmala Sitharaman to discuss developmental projects and the release of pending central funds.", source: "Source: ETV Bharat / CMO", color: "#1A73E8" },
  { id: 20260523002, date: "May 23, 2026", dateValue: "2026-05-23", text: "Minister for Public Works and Sports Development Aadhav Arjuna assured that the government will guarantee alternative employment and job security for all TASMAC workers affected by the closure of the 717 liquor shops, leveraging vacancies across other state government departments.", source: "Source: The Hindu / CMO", color: "#00C9A7" },
  { id: 20260523003, date: "May 23, 2026", dateValue: "2026-05-23", text: "TN Police conducts state-wide anti-rowdy crackdown on CM Vijay's orders — 844 rowdies (488 history-sheeters + 356 non-history-sheeters) sent to judicial custody out of 3,246 apprehended over 3 days. 294 NDPS cases registered; 419 drug offenders arrested; 267.756 kg ganja + 2,476 narcotic tablets worth ₹1.43 crore seized across Tamil Nadu.", source: "Source: DGP Press Release / Tamil Oneindia", color: "#FF4757" },
  { id: 20260523004, date: "May 23, 2026", dateValue: "2026-05-23", text: "Transport Minister personally boarded a government bus from Saidapet to Guindy Race Course Bus Stop to experience commuter conditions first-hand and interact with the public, in a direct public-connect initiative.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260523005, date: "May 23, 2026", dateValue: "2026-05-23", text: "CM Vijay posts on social media condemning the brutal sexual assault and killing of a 10-year-old girl in Coimbatore, expressing grief and demanding the strictest action from police against the accused.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260523006, date: "May 23, 2026", dateValue: "2026-05-23", text: "Minister for Prohibition and Excise chairs dedicated meeting on the closure of 717 TASMAC liquor shops, reviewing implementation progress of the TVK government's partial prohibition pledge.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260524001, date: "May 24, 2026", dateValue: "2026-05-24", text: "Tamil Nadu CM Vijay orders daily law and order reviews; DGP holds meetings with district SPs and city commissioners via video conferencing to ensure public safety.", source: "Source: Tamil Oneindia", color: "#FF4757", link: "https://tamil.oneindia.com/news/tamilnadu/tamil-nadu-cm-vijay-orders-daily-law-order-review-dgp-holds-meetings-with-district-sps-802239.html" },
  { id: 20260524002, date: "May 24, 2026", dateValue: "2026-05-24", text: "CM Vijay assures severe punishment against the accused in the Tamil Nadu minor sexual assault and murder case.", source: "Source: Zee News", color: "#FF4757", link: "https://zeenews.india.com/india/tamil-nadu-minor-sexual-assault-murder-case-cm-vijay-assures-severe-punishment-against-accused-3049941.html" },
  { id: 20260524003, date: "May 24, 2026", dateValue: "2026-05-24", text: "CM Vijay personally spoke with the mother of the 10-year-old victim in the Coimbatore case, assuring her that the government will take strict action and ensure severe punishment for the accused.", source: "Source: Times of India", color: "#FF4757", link: "https://timesofindia.indiatimes.com/city/chennai/coimbatore-minor-girl-murder-cm-vijay-orders-fast-track-probe-vows-strict-punishment/articleshow/131276657.cms" },
  { id: 20260525001, date: "May 25, 2026", dateValue: "2026-05-25", text: "Following the tragic Coimbatore incident, the court has ordered swift proceedings, as CM Vijay demands expeditious trials and severe punishment for the accused.", source: "Source: Mathrubhumi / Zee News", color: "#FF4757" },
  { id: 20260525002, date: "May 25, 2026", dateValue: "2026-05-25", text: "Thousands of rowdies have been remanded to judicial custody following the massive state-wide crackdown by Tamil Nadu Police, acting on CM Vijay's directives.", source: "Source: Asianet Newsable / Tamil Oneindia", color: "#FF4757" },
  { id: 20260525003, date: "May 25, 2026", dateValue: "2026-05-25", text: "Tamil Nadu Transport Minister ordered the mandatory installation of Vehicle Location Tracking Devices (VLTDs) in all public vehicles across the state to enhance passenger safety.", source: "Source: ETAuto / Times of India", color: "#00C9A7" },
  { id: 20260525004, date: "May 25, 2026", dateValue: "2026-05-25", text: "CM Vijay amends Tamil Nadu Cinemas (Regulation) Rules, 1957 — all theatres may now screen five shows per day for newly released Tamil films in their first seven days. Five daily shows also permitted on weekends, public holidays, and local festival days without requiring separate government or police approval.", source: "Source: The Statesman / India Today / Moneycontrol", color: "#FFB800" },
  {
    "id": 20260526003,
    "date": "May 26, 2026",
    "dateValue": "2026-05-26",
    "text": "CM Joseph Vijay heads to Delhi for his first official visit as Chief Minister. Scheduled to meet PM Narendra Modi to discuss state funds, welfare schemes, and Cauvery water dispute.",
    "source": "Source: Recent news updates",
    "color": "#FF0000",
    "highlight": true
  },
  {
    "id": 20260526002,
    "date": "May 26, 2026",
    "dateValue": "2026-05-26",
    "text": "Natural Resources Minister T.K. Prabhu orders immediate closure of multiple stone quarries violating rules. Over 40 quarries (including 18 in Tenkasi and 23 in Virudhunagar) temporarily shut down after inspections and drone surveys revealed excess mining and illegal operations.",
    "source": "Source: The New Indian Express, Polimer News",
    "color": "#FF4500",
    "highlight": false
  },
  {
    "id": 20260526001,
    "date": "May 26, 2026",
    "dateValue": "2026-05-26",
    "text": "Minister T.K. Prabhu vows zero tolerance for corruption in the Natural Resources department and promises public accessibility. He initiates a full statewide audit of over 2,000 quarries to curb illegal mining.",
    "source": "Source: The Hindu",
    "color": "#FF4500",
    "highlight": false
  },
  { id: 20260527001, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay arrives in New Delhi for his first official visit as Chief Minister — meets PM Narendra Modi at 4:30 PM and presents a state memorandum covering pending central funds for welfare schemes, infrastructure project clearances, Cauvery water dispute, and request to reject Karnataka's Mekedatu dam DPR. Also scheduled to call on President Droupadi Murmu and meet Congress leadership.", source: "Source: The Print / Hindustan Times / ETV Bharat / CMO", color: "#1A73E8", highlight: true },
  { id: 20260527002, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay writes to PM Modi urging rejection of Karnataka's Detailed Project Report (DPR) for the Mekedatu dam — calls it a 'clear violation' of Supreme Court judgments protecting Tamil Nadu's Cauvery water rights.", source: "Source: New Indian Express / Times of India", color: "#FF4757" },
  { id: 20260527003, date: "May 27, 2026", dateValue: "2026-05-27", text: "4 AIADMK MLAs — K. Maragatham, D. Jayakumar, V. Sathyabama, and Esakki Subaya — formally resign from the Assembly and join TVK. AIADMK's strength falls to 43 seats. EPS petitions Speaker to reject resignations citing pending anti-defection proceedings; DMK alleges horse-trading.", source: "Source: News18 / The Hindu Business Line / ABP Live / CNBCTV18", color: "#FFB800" },
  { id: 20260527004, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay orders swift, stringent police action in sexual assault cases following public outrage over the Coimbatore minor's case — directs DGP to ensure fast-track investigation and prosecution in all such cases across Tamil Nadu.", source: "Source: Rediff News / CMO Press Release", color: "#FF4757" },
  { id: 20260527005, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay announces crop loan waiver up to ₹50,000 for small and marginal farmers who borrowed from cooperative banks between May 2025 and February 2026 — over 14.22 lakh farmers to benefit; state exchequer to absorb ₹2,044 crore.", source: "Source: Deccan Chronicle / Daily Prabhat", color: "#00C9A7" },
  { id: 20260527006, date: "May 27, 2026", dateValue: "2026-05-27", text: "Chief Minister Vijay received at Tamil Nadu House in New Delhi by senior officials and accorded a ceremonial guard of honour ahead of his official meetings with PM Modi, President Murmu, and Union Ministers.", source: "Source: CMO Press Release", color: "#FF6B00", highlight: true },
  { id: 20260527007, date: "May 27, 2026", dateValue: "2026-05-27", text: "Chief Minister Vijay extends greetings to the people of Tamil Nadu on the occasion of Bakrid (Eid al-Adha).", source: "Source: CMO Press Release No. 107", color: "#00C9A7" },
  { id: 20260527008, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for AI, Information Technology and Digital Services R. Kumar inspected operations of the TACTV (Tamil Arasu Cable TV) head control room in Chennai.", source: "Source: CMO Press Release", color: "#7C3AED" },
  { id: 20260527009, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Rural Development and Water Resources chaired a review meeting on key schemes implemented by the Rural Development and Panchayat Raj Department.", source: "Source: CMO Press Release No. 112", color: "#00C9A7" },
  { id: 20260527010, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Energy Resources and Law chaired a review meeting on Law department activities.", source: "Source: CMO Press Release No. 111", color: "#FF4757" },
  { id: 20260527011, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Tourism chaired a review meeting on Tourism Department and Tamil Nadu Tourism Development Corporation (TTDC) activities.", source: "Source: CMO Press Release No. 110", color: "#00C9A7" },
  { id: 20260527012, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for School Education, Tamil Development, Information and Publicity inspected construction works of the Bharat Scouts and Guides Headquarters building in Chennai, and appreciated the talents of students in Cuddalore district.", source: "Source: CMO Press Release No. 109", color: "#FFB800" },
  { id: 20260527013, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Milk and Dairy Development chaired a review meeting on department activities and schemes.", source: "Source: CMO Press Release No. 108", color: "#FFB800" },
  { id: 20260527014, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Public Works and Sports Development provided financial assistance to chess player Vaishali to participate in International Chess Tournaments.", source: "Source: CMO Press Release No. 106", color: "#FF4757" },
  { id: 20260527015, date: "May 27, 2026", dateValue: "2026-05-27", text: "Minister for Natural Resources T.K. Prabhu personally inspected quarry sites at Puliyooran village in Aruppukottai taluk, Virudhunagar district, continuing the government's crackdown on illegal mining operations.", source: "Source: CMO Press Release No. 105", color: "#FF4500" },
  { id: 20260527016, date: "May 27, 2026", dateValue: "2026-05-27", text: "In his meeting with PM Modi, CM Vijay urged the Centre to officially clarify that Tamil Thai Vazhthu may be rendered first — before Vande Mataram — at all State government events, resolving a long-standing protocol dispute.", source: "Source: New Indian Express", color: "#FFB800" },
  { id: 20260527017, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay raises plight of Tamil Nadu fishermen with PM Modi — 12 Sri Lanka Navy arrest incidents reported in 2026 alone, with 58 fishermen currently in custody and 266 fishing boats seized. Vijay urged the Centre to press Sri Lanka for their immediate release.", source: "Source: New Indian Express", color: "#FF4757" },
  { id: 20260527018, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay pitches Tamil Nadu as home for two major DRDO defence projects — the Centre for Airborne Systems (CABS) and the Advanced Medium Combat Aircraft (AMCA) Design and Development Centre — during his meeting with PM Modi. Discussions on both facilities have been ongoing for several years.", source: "Source: New Indian Express / Republic World", color: "#1A73E8" },
  { id: 20260527019, date: "May 27, 2026", dateValue: "2026-05-27", text: "CM Vijay directly raises Mekedatu dam issue with PM Modi — calls Karnataka Deputy CM's Bhoomi Pooja announcement for the proposed Cauvery reservoir a violation of the Cauvery Water Disputes Tribunal's final award and the Supreme Court's judgment. Urges Union government not to permit the project without consent of Tamil Nadu, Kerala and Puducherry.", source: "Source: New Indian Express / The Hindu Business Line", color: "#FF4757" },
  { id: 20260528001, date: "May 28, 2026", dateValue: "2026-05-28", text: "CM Vijay concludes his maiden official Delhi visit and returns to Chennai — meetings with PM Modi and FM Nirmala Sitharaman held successfully; planned meeting with Sonia and Rahul Gandhi deferred due to scheduling constraints.", source: "Source: India Today / Deccan Chronicle", color: "#1A73E8" },
  { id: 20260528002, date: "May 28, 2026", dateValue: "2026-05-28", text: "Tamil Nadu issues fresh heatwave advisory as temperatures cross 40°C in multiple districts — Chennai recorded 41.1°C. Government increases health facilities at urban primary health centres; vulnerable groups advised to take precautions and stay indoors during peak hours.", source: "Source: New Indian Express", color: "#FF4757" },
  { id: 20260528003, date: "May 28, 2026", dateValue: "2026-05-28", text: "TN Assembly Speaker J.C.D. Prabhakar reviews formal representations from both AIADMK factions following their May 27 truce — EPS and Velumani camps have withdrawn disqualification petitions against each other&apos;s MLAs and declared party unity restored. Speaker&apos;s official decision awaited.", source: "Source: The Hindu / Newspointapp", color: "#FFB800" },
  { id: 20260528004, date: "May 28, 2026", dateValue: "2026-05-28", text: "On World Hunger Day (May 28), CM Vijay orders TVK district secretaries and legislators to distribute free, high-quality meals to at least 3,000 underprivileged people in each of Tamil Nadu's 234 assembly constituencies — over 7 lakh meals served statewide under the pledge that no one in TN goes to sleep hungry.", source: "Source: Athirvu News / ABP Tamil", color: "#00C9A7" },
  { id: 20260529001, date: "May 29, 2026", dateValue: "2026-05-29", text: "Chief Minister Vijay met with top executives from Mahindra & Mahindra and Saint-Gobain India at the Secretariat to discuss industrial expansion and new investment opportunities in Tamil Nadu.", source: "Source: CMO Press Release", color: "#00C9A7", highlight: true },
  { id: 20260529002, date: "May 29, 2026", dateValue: "2026-05-29", text: "Minister for AI and IT R. Kumar chaired a high-level review of the iTNT Hub and Tamil Nadu Virtual Academy, focusing on scaling the state's startup ecosystem and digital education initiatives.", source: "Source: CMO Press Release", color: "#7C3AED" },
  { id: 20260529003, date: "May 29, 2026", dateValue: "2026-05-29", text: "Transport Minister announced free bus travel for all school students from the day of school reopening for the 2026-27 academic year.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260529004, date: "May 29, 2026", dateValue: "2026-05-29", text: "Agriculture Minister addressed the National Agriculture Conference in New Delhi, highlighting Tamil Nadu's strategies for the 2026 Kharif season and water management.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260529005, date: "May 29, 2026", dateValue: "2026-05-29", text: "Minister for Natural Resources T.K. Prabhu ordered a statewide crackdown on illegal mining following drone-based surveys revealing violations in multiple districts.", source: "Source: CMO Press Release", color: "#FF4500" },
  { id: 20260530001, date: "May 30, 2026", dateValue: "2026-05-30", text: "Water Resources Department ordered the release of water from Papanasam, Servalar, Manimuthar, and Kanniyakumari district dams for the benefit of farmers during the irrigation season.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260530002, date: "May 30, 2026", dateValue: "2026-05-30", text: "Chief Minister Vijay expressed profound grief and extended condolences to actor Ajith Kumar on the passing of his mother, Tmt Mohini Ammaiyar.", source: "Source: CMO Press Release", color: "#FF4757" },
  { id: 20260531001, date: "May 31, 2026", dateValue: "2026-05-31", text: "Chief Minister Vijay scheduled to visit Tiruchirappalli on June 1 for his first public address since assuming office, to thank voters for his election victory.", source: "Source: The Hindu BusinessLine / Times of India", color: "#1A73E8", highlight: true },
  {
    id: 20260601001,
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    text: "CM Vijay paid floral tributes to freedom fighter Anjalai Ammal on her 137th birth anniversary.",
    source: "Source: CMO Press Release",
    color: "#FF6B00"
  },
  {
    id: 20260601002,
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    text: "CM Vijay congratulated Tmt. Venkita Subramani Mohana on her appointment as Supreme Court Judge via social media.",
    source: "Source: CMO Press Release",
    color: "#FF6B00"
  },
  {
    id: 20260601003,
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    text: "Thayumanavar Scheme: Doorstep delivery of PDS commodities announced for June 2nd and 3rd for eligible beneficiaries.",
    source: "Source: TN Government Press Release",
    color: "#00C9A7"
  },
  {
    id: 20260601004,
    date: "June 01, 2026",
    dateValue: "2026-06-01",
    text: "Higher Education Minister announced 3,570 new seats and three new courses in Polytechnic Colleges for the 2026-27 academic year.",
    source: "Source: CMO Press Release",
    color: "#FFB800"
  },
  {
    id: 20260602001,
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    text: "CM Vijay signs MoU with Union Government for Jal Jeevan Mission 2.0; ₹2,177.27 crore allocated for TN water infrastructure.",
    source: "Source: The Hindu / CMO",
    color: "#00C9A7"
  },
  {
    id: 20260602002,
    date: "June 02, 2026",
    dateValue: "2026-06-02",
    text: "CM Vijay in Tiruchy: 'Graft-free administration is our priority; we will achieve it step by step.' Attacks DMK on corruption.",
    source: "Source: New Indian Express",
    color: "#FF6B00"
  },
  {
    id: 20260603001,
    date: "June 03, 2026",
    dateValue: "2026-06-03",
    text: "103rd Birth Anniversary of Kalaignar: TN Govt pays floral tributes at Marina memorial.",
    source: "Source: CMO Press Release",
    color: "#FFB800"
  }
];
