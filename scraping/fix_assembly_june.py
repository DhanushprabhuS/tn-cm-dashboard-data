"""
fix_assembly_june.py — Fix assemblyLog and assemblyCalendar with correct First Session data.

Corrections:
  - DELETE wrong entries: 20260618001, 20260624001, 20260625001 (wrong dates / wrong content)
  - DELETE wrong assemblyCalendar entry 20260618001 ("2nd Session" was incorrect)
  - ADD correct June phase entries: Jun 19 (Day 10), Jun 20 (Day 11), Jun 22 (Day 12), Jun 23 (Day 13/Final)

Source: Tamil Nadu Legislative Assembly First Session (11 May – 23 June 2026)
Data: The Federal, The Week, DTNext, NewKerala, ANI, Organiser, India.com, TNLA eVidhan
"""

import json
import os
import sys

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    sys.stdout.reconfigure(encoding="utf-8")

import firebase_admin
from firebase_admin import credentials, firestore

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CRED_PATH = os.path.join(SCRIPT_DIR, "..", "cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json")

with open(CRED_PATH, encoding="utf-8-sig") as f:
    cred_data = json.loads(f.read().replace(" ", " "))

if not firebase_admin._apps:
    firebase_admin.initialize_app(credentials.Certificate(cred_data))
db = firestore.client()


# ── Step 1: Delete wrong entries ──────────────────────────────────────────────
print("\n[1/3] Deleting wrong entries…")

to_delete = {
    "assemblyLog": ["20260618001", "20260624001", "20260625001"],
    "assemblyCalendar": ["20260618001"],
}

batch = db.batch()
for collection, doc_ids in to_delete.items():
    for doc_id in doc_ids:
        ref = db.collection(collection).document(doc_id)
        batch.delete(ref)
        print(f"  - Queued delete: {collection}/{doc_id}")
batch.commit()
print("  ✓ Deletions committed.")


# ── Step 2: Add correct assemblyLog entries ───────────────────────────────────
print("\n[2/3] Adding correct assemblyLog entries…")

# First Session: 11 May – 23 June 2026
# Known sitting days:
#   May 10 = Pre-session  (Pro-tem Speaker sworn in — already in DB)
#   May 11 = Day 1        (Inaugural, MLA oath taking — already in DB)
#   May 12 = Day 2        (Speaker election — already in DB)
#   May 13 = Day 3        (Trust vote — already in DB)
#   Days 4–9 = May/early June sitting days (not individually sourced)
#   June 19 = Day 10
#   June 20 = Day 11
#   June 22 = Day 12
#   June 23 = Day 13 (FINAL DAY — session closed)

correct_log_entries = [
    ("20260619001", {
        "id": "20260619001",
        "date": "June 19, 2026",
        "dateValue": "2026-06-19",
        "dayNum": 19,
        "month": "June 2026",
        "badgeLabel": "Day 10",
        "badgeClass": "",
        "title": "🏛️ Governor's Address + Unanimous Mekedatu Resolution",
        "highlights": [
            "<strong>Governor Rajendra Vishwanath Arlekar</strong> delivered the full policy address for the First Session — the government's first comprehensive statement of intent since the trust vote.",
            "Announced <strong>'Vetri Thamizhagam'</strong> long-term development blueprint; described the 2026 election as a 'historic political transformation' for Tamil Nadu.",
            "<strong>Two-language policy</strong> firmly reaffirmed — opposed NEP 2020's three-language formula; recalled the 1968 resolution under Annadurai supporting Tamil &amp; English. Criticised Centre for withholding ₹3,458 crore in Samagra Shiksha Abhiyan funds as leverage for NEP adoption.",
            "<strong>Social Justice Survey</strong> to be conducted after Union Government completes national caste enumeration.",
            "Demanded permission to use Tamil in <strong>Madras High Court proceedings</strong> and called for a permanent <strong>Supreme Court Bench in Chennai</strong>.",
            "<strong>Cauvery &amp; Mekedatu:</strong> Declared TN has time-immemorial rights to Cauvery water and is taking legal steps to block Karnataka's Mekedatu dam. Mullaperiyar — vowed to oppose Kerala's new dam push.",
            "<strong>Unanimous Resolution against Mekedatu Dam</strong> moved by CM Vijay and passed by the full House. DMK's Udhayanidhi Stalin proposed an amendment calling for a dedicated tribunal under the Inter-State River Water Disputes Act 1956; CM Vijay accepted it on the floor. AIADMK initially supported the resolution, presenting a rare moment of cross-party unity.",
            "Live telecast of Assembly proceedings began; opposition later alleged an abrupt cut of the livestream mid-debate.",
        ],
    }),
    ("20260620001", {
        "id": "20260620001",
        "date": "June 20, 2026",
        "dateValue": "2026-06-20",
        "dayNum": 20,
        "month": "June 2026",
        "badgeLabel": "Day 11",
        "badgeClass": "",
        "title": "🎙️ Motion of Thanks Debate — Livestream Row",
        "highlights": [
            "Motion of Thanks debate on the Governor's Address began. Opposition parties took turns responding to the government's policy vision.",
            "<strong>DMK MLA SS Sivasankar</strong> alleged the Governor's address cut-and-pasted DMK-era achievements into TVK's speech: 'Director Atlee makes films by editing scenes; this is exactly like that.'",
            "<strong>DMK MLA Austin</strong> mocked CM Vijay's silence on major issues: 'Whatever happens, the one who created a historic revolution will not open his mouth.' DMK benches chanted <strong>'Speak up CM'</strong> demanding Vijay address the House directly.",
            "<strong>Education Minister Rajmohan Arumugam</strong> replied on the government's behalf, claiming all election promises were being fulfilled.",
            "<strong>Livestream controversy:</strong> Opposition alleged the live broadcast of the Motion of Thanks debate was abruptly halted. BJP state president Nainar Nagenthran called it 'a violation of democratic traditions.' TVK maintained full coverage ran from 9:30–11:00 AM.",
            "<strong>AIADMK's Palaniswami</strong> raised a procedural objection — alleged the amended Mekedatu resolution (June 19) was passed without informing the House of other states' concurrence, calling it a procedural violation.",
        ],
    }),
    ("20260622001", {
        "id": "20260622001",
        "date": "June 22, 2026",
        "dateValue": "2026-06-22",
        "dayNum": 22,
        "month": "June 2026",
        "badgeLabel": "Day 12",
        "badgeClass": "",
        "title": "⚠️ Ammonia Gas Tragedy Statement — AIADMK Walkout",
        "highlights": [
            "Session opened with uproar over two issues: the <strong>Tiruvallur ammonia gas leak tragedy</strong> (five women workers killed) and AIADMK's Mekedatu procedural objection.",
            "<strong>Labour Welfare Minister J. Mohamed Farvas</strong> read the official government statement on the Tiruvallur ammonia gas tragedy under Assembly Rule 110. Both DMK and AIADMK demanded the Speaker allow full discussion before the statement was read; Speaker declined.",
            "<strong>AIADMK's Palaniswami</strong> sought Zero Hour discussion on the Mekedatu procedural dispute, arguing the amended resolution was passed without informing the House of other basin states' concurrence. Speaker Prabhakar refused: <em>'Had he had any differences, he should have raised his hand on Friday.'</em>",
            "<strong>AIADMK staged a walkout</strong> after the Speaker rejected both demands and warned members against sloganeering in the corridor. AIADMK's stance on Mekedatu now reversed — Palaniswami declared AIADMK does not support the amended resolution.",
        ],
    }),
    ("20260623001", {
        "id": "20260623001",
        "date": "June 23, 2026",
        "dateValue": "2026-06-23",
        "dayNum": 23,
        "month": "June 2026",
        "badgeLabel": "Day 13 · Final",
        "badgeClass": "",
        "title": "🎤 CM Vijay's Maiden Full Assembly Speech — DMK Walkout — Session Closes",
        "highlights": [
            "<strong>CM C. Joseph Vijay</strong> delivered his first major floor speech — a ~45-minute reply to the Motion of Thanks on the Governor's Address — described by analysts as a 'masterclass in populist positioning', blending cinematic rhetoric with political substance.",
            "Opened by invoking <strong>C.N. Annadurai and M.G.R.</strong> as ideological icons, positioning TVK as the true heir to the original Dravidian promise — deliberately bypassing the DMK-AIADMK duopoly era.",
            "Declared the government a <strong>'government of the most ordinary people'</strong>: 'We know how to serve the people, but we don't know how to siphon off public money. We don't know how to loot temple funds, transfer government revenue to personal coffers, or promote drug culture.'",
            "<strong>TASMAC allegation:</strong> Accused the previous DMK administration of using TASMAC outlets to collect party funds — mixing state revenue with party machinery.",
            "Blamed the DMK for law and order failures, power cuts, the drug menace, crimes against women, and leaving the state without a DGP for <strong>10 months</strong>.",
            "Delivered a pointed <strong>'kutty story'</strong> (short story) — a direct rhetorical attack on former CM M.K. Stalin — which triggered desk-thumping from TVK benches and a ruckus from DMK.",
            "After DMK staged a walkout, <strong>mimicked M.K. Stalin's viral 'all settled' hand gesture</strong> with Speaker's permission — hijacking the DMK's own symbol to signal their political era was finished. Concluded with his trademark cinematic gesture, which went viral.",
            "<strong>DMK Udhayanidhi Stalin</strong> immediately demanded CM produce evidence for the party-funds allegation. DMK members walked out after Vijay's speech.",
            "<strong>First Session officially closed.</strong> Session statistics: 13 sitting days · 13 bills introduced · 629 questions listed · 245 papers laid · 228 members participated.",
        ],
    }),
]

CHUNK = 400
for i in range(0, len(correct_log_entries), CHUNK):
    batch = db.batch()
    for doc_id, data in correct_log_entries[i:i+CHUNK]:
        batch.set(db.collection("assemblyLog").document(doc_id), data)
    batch.commit()
    print(f"  ✓ assemblyLog: committed {min(i+CHUNK, len(correct_log_entries))}/{len(correct_log_entries)}")


# ── Step 3: Fix assemblyCalendar — remove "2nd Session" entry, keep future items ──
print("\n[3/3] Updating assemblyCalendar with first session close note…")

# Add a "Session Closed" marker and upcoming next session entry
cal_updates = [
    ("20260623001", {
        "id": "20260623001",
        "icon": "✅",
        "date": "Closed: June 23, 2026",
        "title": "First Session Closed — 13 Days, 13 Bills",
        "desc": (
            "The First Session of the 17th Tamil Nadu Legislative Assembly concluded on June 23, 2026 "
            "after 13 sitting days (May 11 – June 23). Key milestones: Trust Vote passed (Day 3), "
            "unanimous Mekedatu resolution (June 19), CM Vijay's maiden full floor speech (June 23). "
            "13 bills introduced · 629 questions listed · 245 papers laid · 228 members participated."
        ),
    }),
]

batch2 = db.batch()
for doc_id, data in cal_updates:
    batch2.set(db.collection("assemblyCalendar").document(doc_id), data)
batch2.commit()
print("  ✓ assemblyCalendar: added First Session close entry.")

print("\n✅ Assembly fix complete.")
print("   Deleted wrong entries: assemblyLog/20260618001, 20260624001, 20260625001 | assemblyCalendar/20260618001")
print("   Added correct entries: assemblyLog/20260619001, 20260620001, 20260622001, 20260623001")
print("   Added: assemblyCalendar/20260623001 (First Session closed marker)")
