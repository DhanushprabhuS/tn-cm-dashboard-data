"""
update_june26.py — Batch update Firestore with verified June 2026 announcements.

Updates:
  1. manifesto    — Gold Ring Scheme (new), Financial White Paper (new), Govt Jobs update
  2. schemes      — Financial White Paper (PENDING→ACTIVE), Gold Ring Scheme (new),
                    TNEB 20449 Jobs (new), TNEB White Paper (new)
  3. assemblyCalendar — Financial White Paper entry updated, new assembly session entry
  4. assemblyLog  — June 18 second session added
  5. newsFeed     — Jun 16–25 entries
  6. ticker       — New ticker items

Sources:
  - Financial White Paper: June 16, 2026 — Finance Min. N Marie Wilson
  - Assembly 2nd Session:  June 18, 2026 — Governor Arlekar address
  - Thaimaaman Gold Ring:  June 22, 2026 GO issued (effective date)
  - TNEB 20,449 jobs:      June 24, 2026 — Energy Min. CTR Nirmal Kumar in Assembly
  - TNEB White Paper:      June 25, 2026 — Energy Min. CTR Nirmal Kumar
"""

import json
import os
import sys

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

import firebase_admin
from firebase_admin import credentials, firestore

# ── Firebase init ─────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CRED_PATH = os.path.join(SCRIPT_DIR, "..", "cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json")

with open(CRED_PATH, encoding="utf-8-sig") as f:
    cred_data = json.loads(f.read().replace(" ", " "))

if not firebase_admin._apps:
    firebase_admin.initialize_app(credentials.Certificate(cred_data))
db = firestore.client()


def batch_set(collection: str, docs: list[tuple[str, dict]]):
    CHUNK = 400
    for i in range(0, len(docs), CHUNK):
        batch = db.batch()
        for doc_id, data in docs[i:i+CHUNK]:
            batch.set(db.collection(collection).document(doc_id), data)
        batch.commit()
        print(f"  ✓ {collection}: committed {min(i+CHUNK, len(docs))}/{len(docs)}")


def batch_update(collection: str, updates: list[tuple[str, dict]]):
    CHUNK = 400
    for i in range(0, len(updates), CHUNK):
        batch = db.batch()
        for doc_id, data in updates[i:i+CHUNK]:
            batch.update(db.collection(collection).document(doc_id), data)
        batch.commit()
        print(f"  ✓ {collection}: updated {min(i+CHUNK, len(updates))}/{len(updates)}")


# ══════════════════════════════════════════════════════════════════════════════
# 1. MANIFESTO
# ══════════════════════════════════════════════════════════════════════════════
print("\n[1/6] Updating manifesto…")

# New documents
manifesto_new = [
    ("20260616001", {
        "id": "20260616001",
        "icon": "📄",
        "title": "State Financial White Paper",
        "amount": "Published",
        "status": "✅ Published — Jun 16",
        "progress": "100%",
        "color": "var(--saffron)",
    }),
    ("20260622001", {
        "id": "20260622001",
        "icon": "💍",
        "title": "Thaimaaman Gold Ring for Newborns",
        "amount": "1g Gold Ring",
        "status": "✅ GO Issued — Jun 22",
        "progress": "100%",
        "color": "var(--saffron)",
    }),
]
batch_set("manifesto", manifesto_new)

# Update existing — Govt Jobs progress (TNEB 20,449 vacancies announced)
manifesto_updates = [
    ("20260510005", {
        "status": "⏳ In Progress — TNEB: 20,449 jobs announced Jun 24",
        "progress": "8%",
    }),
]
batch_update("manifesto", manifesto_updates)


# ══════════════════════════════════════════════════════════════════════════════
# 2. SCHEMES
# ══════════════════════════════════════════════════════════════════════════════
print("\n[2/6] Updating schemes…")

# Update existing — Financial White Paper PENDING → ACTIVE
schemes_updates = [
    ("20260510004", {
        "tag": "PUBLISHED",
        "status": "ACTIVE",
        "statusClass": "",
        "desc": (
            "Finance Minister N Marie Wilson released Tamil Nadu's financial white paper on June 16, 2026, "
            "exposing the state's fiscal position inherited from the previous DMK administration. "
            "Key findings: direct debt nearly ₹10 lakh crore (doubled in 5 years from ₹4.8L cr); "
            "revenue deficit at a record ₹78,324 crore; total liabilities including off-budget borrowings "
            "at ₹13.18 lakh crore; debt-to-GSDP ratio of 28.2%; 22.8 paise per rupee earned goes to "
            "interest payments alone; per-capita debt burden of ₹1.28 lakh. "
            "The white paper fulfils CM Vijay's campaign promise to expose the inherited debt burden."
        ),
        "date": "Published: June 16, 2026 · Finance Department",
        "dateValue": "2026-06-16",
        "color": "#FFB800",
        "name": "📄 State Financial White Paper",
    }),
]
batch_update("schemes", schemes_updates)

# New scheme documents
schemes_new = [
    ("20260622001", {
        "id": "20260622001",
        "tag": "GO · JUN 22",
        "name": "💍 Thaimaaman Thanga Mothira Thittam (Gold Ring Scheme)",
        "status": "ACTIVE",
        "statusClass": "",
        "desc": (
            "Every child born in a Tamil Nadu government hospital to a family permanently residing in "
            "the state receives a 1-gram gold ring as part of the Thaimaaman Thanga Mothira Thittam. "
            "The scheme is rooted in the Tamil cultural tradition of 'Thaimaaman Seer', where the "
            "maternal uncle welcomes a newborn with gifts and blessings — the state assumes this role "
            "for all government-hospital births. Annual budget: ₹755.83 crore. Effective from "
            "June 22, 2026; formal public launch by CM Vijay on September 15, 2026 "
            "(Perarignar Anna's birth anniversary). Fulfils TVK's pre-poll welfare promise."
        ),
        "date": "GO Issued: June 22, 2026 · Health & Family Welfare Department",
        "dateValue": "2026-06-22",
        "color": "#FFB800",
    }),
    ("20260624001", {
        "id": "20260624001",
        "tag": "GO · JUN 24",
        "name": "⚡ TNEB Mega Recruitment — 20,449 Posts",
        "status": "ACTIVE",
        "statusClass": "",
        "desc": (
            "Energy Minister CTR Nirmal Kumar announced in the Assembly on June 24, 2026 that "
            "20,449 vacancies will be filled in Tamil Nadu's electricity utilities in FY 2026-27. "
            "Breakdown: 15,058 new posts (Assistant Engineers, Technical Assistants, Junior Assistants, "
            "Multi-Purpose Field Assistants across TANTRANSCO: 7,851 posts; TANGEDCO: 3,075 posts; "
            "TNGECL: 1,420 posts and others) + 5,391 Gangman posts from the 2021 selection whose "
            "appointments were pending due to delayed Finance Department approval. Official cadre "
            "recruitment notification expected in July 2026 via the TN government portal. "
            "Marking one of the largest power-sector recruitment drives in TN's history."
        ),
        "date": "Announced: June 24, 2026 · Assembly · Energy Department",
        "dateValue": "2026-06-24",
        "color": "#FF6B00",
    }),
    ("20260625001", {
        "id": "20260625001",
        "tag": "GO · JUN 25",
        "name": "⚡ TNEB White Paper — Debt Exposed, No Tariff Hike",
        "status": "ACTIVE",
        "statusClass": "",
        "desc": (
            "Energy Minister CTR Nirmal Kumar released a comprehensive white paper on June 25, 2026 "
            "covering the infrastructure, finances, human resources, logistics, ongoing projects, "
            "revenue, and expenditure of Tamil Nadu Electricity Board (TNEB) and its subsidiaries. "
            "Key disclosures: power sector total debt of ₹2,47,130 crore — constituting 77.6% of "
            "Tamil Nadu's entire public sector undertaking debt. "
            "Commitments: (1) No electricity tariff hike for 2026; (2) Free electricity for farmers "
            "will continue; (3) Smart meters to be installed in all government buildings; "
            "(4) 20,449 TNEB vacancies to be filled in FY 2026-27."
        ),
        "date": "Released: June 25, 2026 · Energy Department / TNEB",
        "dateValue": "2026-06-25",
        "color": "#FF6B00",
    }),
]
batch_set("schemes", schemes_new)


# ══════════════════════════════════════════════════════════════════════════════
# 3. ASSEMBLY CALENDAR
# ══════════════════════════════════════════════════════════════════════════════
print("\n[3/6] Updating assemblyCalendar…")

# Update Financial White Paper entry — mark as published
assembly_cal_updates = [
    ("20260510005", {
        "date": "Published: June 16, 2026",
        "desc": (
            "CM Vijay tabled the Financial White Paper on June 16, 2026 via Finance Minister "
            "N Marie Wilson, exposing ₹10 lakh crore direct debt, ₹78,324 crore revenue deficit, "
            "and ₹13.18 lakh crore total liabilities inherited from the DMK government."
        ),
    }),
]
batch_update("assemblyCalendar", assembly_cal_updates)

# New assembly calendar entries
assembly_cal_new = [
    ("20260618001", {
        "id": "20260618001",
        "icon": "🏛️",
        "date": "June 18, 2026",
        "title": "2nd Session of 17th Assembly — Governor's Address",
        "desc": (
            "17th Tamil Nadu Legislative Assembly's second session opened on June 18, 2026. "
            "Governor Rajendra Arlekar delivered the policy address outlining TVK govt programmes: "
            "two-language policy reaffirmed, Social Justice Survey announced, Financial White Paper "
            "tabled, river-interlinking plans, NEP 2020 opposition, drug prevention expansion."
        ),
    }),
    ("20260700001", {
        "id": "20260700001",
        "icon": "💰",
        "date": "Expected: July 2026",
        "title": "Full State Budget 2026–27",
        "desc": (
            "Vijay government's first full annual budget to be tabled in the Assembly. "
            "Expected to cover welfare scheme funding (₹2,500/month for women, LPG cylinders, "
            "pensions), debt management strategy following the Financial White Paper, "
            "capital expenditure, and TNEB financial restructuring."
        ),
    }),
]
batch_set("assemblyCalendar", assembly_cal_new)


# ══════════════════════════════════════════════════════════════════════════════
# 4. ASSEMBLY LOG
# ══════════════════════════════════════════════════════════════════════════════
print("\n[4/6] Updating assemblyLog…")

assembly_log_new = [
    ("20260618001", {
        "id": "20260618001",
        "date": "June 18, 2026",
        "dateValue": "2026-06-18",
        "dayNum": 18,
        "month": "June 2026",
        "badgeLabel": "Session 2",
        "badgeClass": "first",
        "title": "🏛️ 2nd Session — Governor Arlekar Addresses Assembly",
        "highlights": [
            "<strong>Governor Rajendra Vishwanath Arlekar</strong> delivered the policy address for the 2nd Session of the 17th Tamil Nadu Legislative Assembly, outlining the TVK-led government's vision.",
            "<strong>Two-language policy</strong> affirmed — Government will continue the two-language (Tamil and English) education policy; will oppose NEP 2020 and seek transfer of Education from Concurrent to State List.",
            "<strong>Social Justice Survey</strong> announced — TN government will conduct a comprehensive Social Justice Survey after the Union Government completes the national caste enumeration.",
            "<strong>Financial White Paper</strong> tabled in the House — exposing inherited ₹10L crore debt. A resolution to be passed demanding fair tax devolution from the Centre.",
            "<strong>DMK protest</strong> — Opposition DMK legislators entered wearing black badges, demonstrating over alleged deterioration in law &amp; order and crimes against women and children.",
            "River-interlinking projects starting within Tamil Nadu announced; Sustainable Tourism Policy and mangrove/wetland protection initiatives flagged.",
            "Drug prevention force to be established in every district; government reiterated that 717 TASMAC outlets have been closed.",
        ],
    }),
    ("20260624001", {
        "id": "20260624001",
        "date": "June 24, 2026",
        "dateValue": "2026-06-24",
        "dayNum": 24,
        "month": "June 2026",
        "badgeLabel": "Session 2 · Day 5",
        "badgeClass": "",
        "title": "⚡ TNEB 20,449 Vacancies Announced in Assembly",
        "highlights": [
            "<strong>Energy Minister CTR Nirmal Kumar</strong> announced 20,449 vacancies in Tamil Nadu electricity utilities to be filled in FY 2026-27 — one of the largest power-sector recruitment drives in TN history.",
            "Breakdown: <strong>15,058 new posts</strong> including Assistant Engineers, Technical Assistants, Junior Assistants, and Multi-Purpose Field Assistants across TANTRANSCO, TANGEDCO, and TNGECL; plus <strong>5,391 Gangman posts</strong> from 2021 selections whose appointments were long delayed.",
            "<strong>Chief Minister Vijay distributed appointment orders</strong> to newly recruited assistant engineers and accounts officers.",
            "<strong>CM flagged off 300 new buses</strong> from Tamil Nadu State Transport Corporations, expanding public transport fleet statewide.",
        ],
    }),
    ("20260625001", {
        "id": "20260625001",
        "date": "June 25, 2026",
        "dateValue": "2026-06-25",
        "dayNum": 25,
        "month": "June 2026",
        "badgeLabel": "Session 2 · Day 6",
        "badgeClass": "",
        "title": "📊 TNEB White Paper — ₹2.47L Cr Debt, No Tariff Hike",
        "highlights": [
            "<strong>Energy Minister CTR Nirmal Kumar</strong> released a detailed White Paper on TNEB — covering infrastructure, finances, HR, logistics, ongoing projects, and revenue-expenditure position.",
            "Power sector total debt revealed at <strong>₹2,47,130 crore</strong> — representing 77.6% of Tamil Nadu's entire PSU debt.",
            "<strong>No electricity tariff hike</strong> for 2026 — minister committed: 'We will not sign any order for tariff hike this year in Tamil Nadu.'",
            "Free electricity scheme for <strong>farmers will continue</strong>; smart meters to be installed in all government buildings.",
            "<strong>CM Vijay writes to PM Modi</strong> opposing NLC India Limited divestment — seeks protection of workers' interests and Tamil Nadu's coal supply.",
        ],
    }),
]
batch_set("assemblyLog", assembly_log_new)


# ══════════════════════════════════════════════════════════════════════════════
# 5. NEWS FEED
# ══════════════════════════════════════════════════════════════════════════════
print("\n[5/6] Updating newsFeed…")

news_new = [
    ("20260616001", {
        "id": "20260616001",
        "date": "June 16, 2026",
        "dateValue": "2026-06-16",
        "text": (
            "Finance Minister N Marie Wilson releases Tamil Nadu Financial White Paper — "
            "direct debt nearly ₹10 lakh crore (doubled in 5 years), revenue deficit ₹78,324 crore "
            "(record high), total liabilities ₹13.18 lakh crore including off-budget borrowings. "
            "22.8 paise of every rupee earned goes to interest payments."
        ),
        "source": "Source: India TV News / The Federal / CMO",
        "color": "#FFB800",
        "highlight": True,
    }),
    ("20260618001", {
        "id": "20260618001",
        "date": "June 18, 2026",
        "dateValue": "2026-06-18",
        "text": (
            "2nd Session of the 17th Tamil Nadu Assembly opens. Governor Rajendra Arlekar delivers "
            "policy address: two-language policy reaffirmed, Social Justice Survey announced, "
            "Financial White Paper tabled. DMK protests with black badges over law &amp; order concerns."
        ),
        "source": "Source: ANI / WebNewsWire / New Kerala",
        "color": "#1A73E8",
    }),
    ("20260622001", {
        "id": "20260622001",
        "date": "June 22, 2026",
        "dateValue": "2026-06-22",
        "text": (
            "GO issued for Thaimaaman Thanga Mothira Thittam — every newborn in TN government "
            "hospitals receives a 1-gram gold ring. Annual budget: ₹755.83 crore. Effective from "
            "June 22, 2026; formal launch by CM Vijay on September 15 (Perarignar Anna's birth anniversary). "
            "Fulfils TVK's pre-poll promise."
        ),
        "source": "Source: The Print / DT Next",
        "color": "#FFB800",
        "highlight": True,
    }),
    ("20260624001", {
        "id": "20260624001",
        "date": "June 24, 2026",
        "dateValue": "2026-06-24",
        "text": (
            "Energy Minister CTR Nirmal Kumar announces 20,449 TNEB vacancies in Assembly — "
            "15,058 new posts (AEs, Technical Assistants, MPFAs) + 5,391 pending Gangman appointments. "
            "Notification expected July 2026. CM also distributes appointment orders to AEs and flags "
            "off 300 new state transport buses."
        ),
        "source": "Source: NewSX / ProKerala / CMO Press Release",
        "color": "#FF6B00",
        "highlight": True,
    }),
    ("20260625001", {
        "id": "20260625001",
        "date": "June 25, 2026",
        "dateValue": "2026-06-25",
        "text": (
            "TNEB White Paper released by Energy Minister CTR Nirmal Kumar — power sector debt "
            "₹2,47,130 crore (77.6% of all TN PSU debt). No tariff hike for 2026. Free electricity "
            "for farmers continues. Smart meters for govt buildings announced."
        ),
        "source": "Source: ANI / The News Minute / New Kerala",
        "color": "#FF6B00",
    }),
    ("20260625002", {
        "id": "20260625002",
        "date": "June 25, 2026",
        "dateValue": "2026-06-25",
        "text": (
            "CM Vijay writes to PM Modi opposing NLC India Limited divestment, seeking protection "
            "of workers' employment and Tamil Nadu's coal supply security."
        ),
        "source": "Source: CMO Press Release",
        "color": "#FF4757",
    }),
]
batch_set("newsFeed", news_new)


# ══════════════════════════════════════════════════════════════════════════════
# 6. TICKER
# ══════════════════════════════════════════════════════════════════════════════
print("\n[6/6] Updating ticker…")

ticker_new = [
    ("20260616001", {
        "id": "20260616001",
        "tag": "WHITE PAPER",
        "tagIcon": "📄",
        "text": "Jun 16: Financial White Paper — TN debt ₹10L cr, revenue deficit ₹78,324 cr; Finance Min. Marie Wilson exposes DMK-era fiscal damage",
    }),
    ("20260618001", {
        "id": "20260618001",
        "tag": "ASSEMBLY",
        "tagIcon": "🏛️",
        "text": "Jun 18: 2nd Session opens — Governor Arlekar reaffirms two-language policy, announces Social Justice Survey; DMK protests with black badges",
    }),
    ("20260622001", {
        "id": "20260622001",
        "tag": "SCHEME",
        "tagIcon": "💍",
        "text": "Thaimaaman Gold Ring Scheme: every newborn in TN govt hospitals gets 1g gold ring — GO issued Jun 22, ₹755 cr annual budget",
    }),
    ("20260624001", {
        "id": "20260624001",
        "tag": "JOBS",
        "tagIcon": "⚡",
        "text": "TNEB Mega Recruitment: 20,449 vacancies announced in Assembly — 15,058 new posts + 5,391 pending Gangman appointments",
    }),
    ("20260625001", {
        "id": "20260625001",
        "tag": "ENERGY",
        "tagIcon": "⚡",
        "text": "TNEB White Paper: power sector debt ₹2.47L cr — No tariff hike for 2026, free electricity for farmers continues",
    }),
]
batch_set("ticker", ticker_new)


print("\n✅ All updates committed successfully.")
print("   Collections updated: manifesto, schemes, assemblyCalendar, assemblyLog, newsFeed, ticker")
