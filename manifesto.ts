/**
 * manifesto.ts — TVK Manifesto Promise Tracker.
 *
 * HOW TO UPDATE:
 *   - When a promise is implemented, update:
 *       status: "✅ Implemented — [Month DD]"
 *       progress: "100%"
 *       color: "var(--saffron)"
 *   - progress: CSS percentage string e.g. "5%" | "50%" | "100%"
 *   - color: "var(--saffron)" for implemented, "var(--gold)" for pending
 */

export interface ManifestoPromise {
  id: number;       // YYYYMMDD### — date promise was made / confirmed
  icon: string;
  title: string;
  amount: string;
  status: string;   // "✅ Implemented — May 10" | "⏳ Pending implementation"
  progress: string; // CSS % e.g. "100%" | "5%"
  color: string;    // "var(--saffron)" | "var(--gold)"
}

export const manifesto: ManifestoPromise[] = [
  { id: 20260510001, icon: "⚡",  title: "Free Electricity",       amount: "200 Units",    status: "✅ Implemented — May 10",       progress: "100%", color: "var(--saffron)" },
  { id: 20260510002, icon: "👮‍♀️", title: "Women Safety Force",    amount: "Singa Pen",    status: "✅ Established — May 10",       progress: "100%", color: "var(--saffron)" },
  { id: 20260510003, icon: "💰",  title: "Women Monthly Aid",      amount: "₹2,500/mo",    status: "⏳ Pending implementation",     progress: "5%",   color: "var(--gold)"    },
  { id: 20260510004, icon: "🍳",  title: "Free LPG Cylinders",     amount: "6 / Year",     status: "⏳ Pending implementation",     progress: "5%",   color: "var(--gold)"    },
  { id: 20260510005, icon: "💼",  title: "Government Jobs",        amount: "5 Lakh",       status: "⏳ To be rolled out",           progress: "3%",   color: "var(--gold)"    },
  { id: 20260510006, icon: "🏥",  title: "Family Health Insurance",amount: "₹25 Lakh",     status: "⏳ Announced, pending rollout", progress: "5%",   color: "var(--gold)"    },
  { id: 20260510007, icon: "🎓",  title: "Education Dropout Aid",  amount: "₹15,000/yr",   status: "⏳ Pending implementation",     progress: "5%",   color: "var(--gold)"    },
  { id: 20260510008, icon: "👴",  title: "Senior Citizen Pension", amount: "₹3,000/mo",    status: "⏳ Pending rollout",            progress: "5%",   color: "var(--gold)"    },
  { id: 20260510009, icon: "🌾",  title: "Crop Loan Waiver",       amount: "Small Farmers", status: "⏳ Budget allocated — May 27",            progress: "60%",   color: "var(--gold)"    },
  { id: 20260521001, icon: "🤖",  title: "AI & IT Department",     amount: "Dedicated Ministry", status: "✅ Established — May 21",   progress: "100%", color: "var(--saffron)" },
  { id: 20260604001, icon: "🏦",  title: "TNSIA — Strategic Investment Authority", amount: "Rs. 50,000 Crore", status: "⏳ In Progress — Jun 04", progress: "20%", color: "var(--gold)" },
  { id: 20260604002, icon: "💼",  title: "10 Lakh New Jobs in 5 Years", amount: "10 Lakh Jobs",  status: "⏳ In Progress — Jun 04",  progress: "5%",  color: "var(--gold)" },
  { id: 20260607001, icon: "📋",  title: "Anywhere Registration System", amount: "24/7 Online", status: "✅ Implemented — Jun 07", progress: "100%", color: "var(--saffron)" },
  { id: 20260608001, icon: "💧",  title: "24x7 Drinking Water Supply", amount: "5-Year Plan", status: "⏳ In Progress — Jun 08", progress: "15%", color: "var(--gold)" },
];
