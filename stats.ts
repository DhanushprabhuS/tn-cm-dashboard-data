/**
 * stats.ts — Key stat cards shown below the CM profile section.
 *
 * HOW TO UPDATE:
 *   - Update `value` or `desc` when official numbers change.
 *   - colorClass options: "orange" | "gold" | "green" | "blue"
 *   - desc supports inline HTML (e.g. <br>).
 */

export interface StatCard {
  id: number;       // YYYYMMDD### — date stat was confirmed
  value: string;
  desc: string;     // HTML allowed
  colorClass: 'orange' | 'gold' | 'green' | 'blue';
}

export const statsData: StatCard[] = [
  { id: 20260510001, value: "108", desc: "TVK seats won<br>out of 234 total",        colorClass: "orange" },
  { id: 20260510002, value: "144", desc: "MLA support secured<br>coalition majority", colorClass: "gold"   },
  { id: 20260510003, value: "3",   desc: "Government orders<br>signed on Day 1",      colorClass: "green"  },
  { id: 20260516001, value: "10",  desc: "Cabinet ministers<br>including CM Vijay",   colorClass: "blue"   },
];
