import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, WriteBatch } from "firebase-admin/firestore";

// ── Init ──────────────────────────────────────────────────────────────────
import serviceAccount from "./cmotn-71d74-firebase-adminsdk-fbsvc-3819210b41.json";
initializeApp({ credential: cert(serviceAccount as ServiceAccount) });
const db = getFirestore();

// ── Helpers ───────────────────────────────────────────────────────────────
async function batchWrite(
    collectionPath: string,
    items: any[],
    getDocId: (item: any) => string
) {
    const CHUNK = 400; // Firestore batch limit is 500
    for (let i = 0; i < items.length; i += CHUNK) {
        const batch: WriteBatch = db.batch();
        items.slice(i, i + CHUNK).forEach((item) => {
            const ref = db.collection(collectionPath).doc(getDocId(item));
            batch.set(ref, item);
        });
        await batch.commit();
        console.log(
            `  ✓ ${collectionPath}: wrote ${Math.min(i + CHUNK, items.length)}/${items.length}`
        );
    }
}

// ── Import each module ────────────────────────────────────────────────────
async function main() {
    const {
        tickerItems,
        statsData,
        schemes,
        manifesto,
        assemblyCalendar,
        assemblyLog,
        cabinetCM,
        cabinetMinisters,
        pressReleases,
        newsFeed,
    } = await import("./index");

    // 1. ticker
    console.log("Importing ticker…");
    await batchWrite("ticker", tickerItems, (i) => String(i.id));

    // 2. stats
    console.log("Importing stats…");
    await batchWrite("stats", statsData, (i) => String(i.id));

    // 3. schemes
    console.log("Importing schemes…");
    await batchWrite("schemes", schemes, (i) => String(i.id));

    // 4. manifesto
    console.log("Importing manifesto…");
    await batchWrite("manifesto", manifesto, (i) => String(i.id));

    // 5. assemblyCalendar
    console.log("Importing assemblyCalendar…");
    await batchWrite("assemblyCalendar", assemblyCalendar, (i) => String(i.id));

    // 6. assemblyLog
    console.log("Importing assemblyLog…");
    await batchWrite("assemblyLog", assemblyLog, (i) => String(i.id));

    // 7. cabinet — CM as single doc, ministers as sub-collection
    console.log("Importing cabinet CM…");
    await db.collection("cabinet").doc("cm").set(cabinetCM);
    console.log("  ✓ cabinet/cm");

    console.log("Importing cabinet ministers…");
    await batchWrite("ministers", cabinetMinisters, (i) => String(i.id));

    // 8. pressReleases — all entries
    console.log("Importing pressReleases…");
    await batchWrite("pressReleases", pressReleases, (i) => String(i.id));

    // 9. newsFeed — last 10 days only (June 2–12, 2026)
    console.log("Importing newsFeed (last 10 days)…");
    const filtered = newsFeed.filter(
        (item: any) => item.dateValue >= "2026-06-02"
    );
    console.log(`  → ${filtered.length} items after filtering`);
    await batchWrite("newsFeed", filtered, (i) => String(i.id));

    console.log("\n✅  All collections imported successfully.");
}

main().catch((err) => {
    console.error("Import failed:", err);
    process.exit(1);
});