/**
 * newsFeed.ts — Live updates feed (meetings, statements, CMO releases).
 *
 * HOW TO UPDATE:
 *   - Append new entries at the bottom with a new id (YYYYMMDD###).
 *   - date: "Month DD, YYYY" or "Upcoming" for unscheduled items.
 *   - source: "Source: CMO Press Release" | "Source: The News Minute" etc.
 *   - color: hex accent for the left border of the feed card.
 */

export interface FeedItem {
  id: number;       // YYYYMMDD### — sort key
  date: string;     // "May 10, 2026" | "Upcoming"
  text: string;
  source: string;
  color: string;    // CSS hex
}

export const newsFeed: FeedItem[] = [
  { id: 20260510001, date: "May 10, 2026", text: "CM Vijay sworn in as 22nd Chief Minister at Nehru Indoor Stadium, Chennai. 9 cabinet ministers also administered oath.", source: "Source: Official CMO Release", color: "#FF6B00" },
  { id: 20260510002, date: "May 10, 2026", text: "Vijay signs first 3 government orders immediately post-oath — electricity, women safety, anti-narcotics.", source: "Source: The News Minute", color: "#FF6B00" },
  { id: 20260510003, date: "May 10, 2026", text: "Vijay vacates Tiruchirappalli (East) seat, retains Perambur constituency as CM constituency.", source: "Source: Wikipedia / CMO", color: "#FFB800" },
  { id: 20260510004, date: "May 10, 2026", text: "Governor Rajendra Arlekar directs new government to prove majority in Assembly by May 13, 2026.", source: "Source: The Federal", color: "#00C9A7" },
  { id: 20260510005, date: "May 10, 2026", text: 'CM addresses state: "Era of real secular social justice begins. You can trust Vijay 100%.\" Promises transparency and minority protection.', source: "Source: The News Minute", color: "#64a8ff" },
  { id: 20260510006, date: "Upcoming",     text: "Speaker election + Trust Vote in Assembly — mandatory constitutional steps before full govt operation.", source: "Status: Pending", color: "#6B6B8A" },
  { id: 20260515001, date: "May 15, 2026", text: "The Chairperson and Managing Director of TAFE and the Vice Chairperson called on Hon'ble Chief Minister Vijay at the Secretariat.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260515002, date: "May 15, 2026", text: "The Chairman of Confederation of Indian Industry (CII) Southern Region and Team met CM Vijay — investment and industry collaboration discussed.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260515003, date: "May 15, 2026", text: "The Managing Director of BMW Group called on Hon'ble Chief Minister — potential automotive investment in Tamil Nadu explored.", source: "Source: CMO Press Release", color: "#1A73E8" },
  { id: 20260515004, date: "May 15, 2026", text: "Mr. Jim Aota, Chairman of Yamaha Motor India and Team, called on CM Vijay to discuss manufacturing expansion plans in Tamil Nadu.", source: "Source: CMO Press Release", color: "#FF6B00" },
  { id: 20260515005, date: "May 15, 2026", text: "CM Vijay chaired a high-level Review Meeting on Kuruvai Paddy Cultivation and Water Storage Levels in Major Dams ahead of the agricultural season.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260515006, date: "May 15, 2026", text: "IAS officers of concerned departments called on CM Vijay to present Tamil Nadu's LEADS 2025 'Exemplar State' Award conferred by the Union Government.", source: "Source: CMO Press Release", color: "#FFB800" },
  { id: 20260515007, date: "May 15, 2026", text: "CM Vijay released a statement opposing the petroleum product price hike by Public Sector Oil Companies, calling for immediate rollback to ease burden on common people.", source: "Source: CMO Press Release", color: "#FF4757" },
];
