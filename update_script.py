import json
import re

# Update pressReleases.ts
with open(r'c:\PROJECT\others\data\pressReleases.ts', 'r', encoding='utf-8') as f:
    pr_content = f.read()

pr_content = re.sub(r'Agent Last Updated: May \d+, 2026', 'Agent Last Updated: May 26, 2026', pr_content)

new_prs = """  },
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
    dept: ["General"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Honble Minister for Hindu Religious and Charitable Endowments chaired review meeting on department schemes, activities and ongoing works",
    summary: "Honble Minister for Hindu Religious and Charitable Endowments chaired review meeting on department schemes, activities and ongoing works",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_093.pdf"]
  },
  {
    id: 20260526009,
    dept: ["CMO"],
    date: "May 26, 2026",
    dateValue: "2026-05-26",
    title: "Text of the D.O. Letter of the Honble Chief Minister to the Honble Prime Minister regarding the proposed Mekedatu Dam bhoomi pooja and safeguarding Tamil Nadu's rights",
    summary: "Text of the D.O. Letter of the Honble Chief Minister to the Honble Prime Minister regarding the proposed Mekedatu Dam bhoomi pooja and safeguarding Tamil Nadu's rights",
    imageUrls: [],
    pdfUrls: ["https://cms.tn.gov.in/cms_migrated/document/press_release/pr260526_092.pdf"]
  }
];"""

pr_content = re.sub(r'  }\n\];', new_prs, pr_content)
with open(r'c:\PROJECT\others\data\pressReleases.ts', 'w', encoding='utf-8') as f:
    f.write(pr_content)

# Update newsFeed.ts
with open(r'c:\PROJECT\others\data\newsFeed.ts', 'r', encoding='utf-8') as f:
    nf_content = f.read()

nf_content = re.sub(r'Agent Last Updated: May \d+, 2026', 'Agent Last Updated: May 26, 2026', nf_content)

new_nf = """  },
  { id: 20260526001, date: "May 26, 2026", dateValue: "2026-05-26", text: "Prince of Arcot called on the Honble Chief Minister with Family Members.", source: "Source: CMO Press Release", color: "#00C9A7" },
  { id: 20260526002, date: "May 26, 2026", dateValue: "2026-05-26", text: "Chairman of Ashok Leyland called on the Honble Chief Minister.", source: "Source: CMO Press Release", color: "#1A73E8", highlight: true },
  { id: 20260526003, date: "May 26, 2026", dateValue: "2026-05-26", text: "Chief Minister Vijay writes D.O. Letter to PM Modi regarding the proposed Mekedatu Dam bhoomi pooja and safeguarding Tamil Nadu's rights.", source: "Source: CMO Press Release", color: "#FF4757" }
];"""

nf_content = re.sub(r'  }\n\];', new_nf, nf_content)
with open(r'c:\PROJECT\others\data\newsFeed.ts', 'w', encoding='utf-8') as f:
    f.write(nf_content)

# Update ticker.ts
with open(r'c:\PROJECT\others\data\ticker.ts', 'r', encoding='utf-8') as f:
    tk_content = f.read()

tk_content = re.sub(r'Agent Last Updated: May \d+, 2026', 'Agent Last Updated: May 26, 2026', tk_content)

new_tk = """  },
  { id: 20260526001, tag: "WATER RIGHTS", tagIcon: "💧", text: "CM Vijay writes to PM Modi opposing Mekedatu Dam bhoomi pooja to safeguard Tamil Nadu's rights" }
];"""

tk_content = re.sub(r'  }\n\];', new_tk, tk_content)
with open(r'c:\PROJECT\others\data\ticker.ts', 'w', encoding='utf-8') as f:
    f.write(tk_content)

print("Done")