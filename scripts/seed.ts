import { cases, services, operatingSystemSteps, heroProof, careerTimeline, site } from "../src/content/seed";

async function main() {
  console.log("==========================================");
  console.log("Bilal Shahid Portfolio — Seed Data Audit");
  console.log("==========================================");
  console.log(`Site: ${site.name} — ${site.title}`);
  console.log(`Cases Loaded: ${cases.length}`);
  cases.forEach((c, idx) => {
    console.log(` [${idx + 1}] ${c.sector} (${c.period.label}): ${c.headlineOutcome}`);
    console.log(`     Evidence files: ${c.evidence.map((e) => e.filename).join(", ")}`);
    console.log(`     Metrics count: ${c.metrics.length}`);
  });

  console.log(`Services Loaded: ${services.length}`);
  console.log(`Methodology Steps: ${operatingSystemSteps.length}`);
  console.log(`Career Roles: ${careerTimeline.length}`);
  console.log(`Hero Proof Items: ${heroProof.length}`);
  console.log("==========================================");
  console.log("Seed verification completed successfully.");
}

main().catch((err) => {
  console.error("Seed verification failed:", err);
  process.exit(1);
});
