import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { cases } from "@/content/seed";

describe("Case study data & assets integrity", () => {
  it("contains exactly 5 case studies", () => {
    expect(cases.length).toBe(5);
  });

  it("verifies all evidence screenshots exist on disk", () => {
    const publicCasesDir = path.resolve(process.cwd(), "public/media/cases");
    expect(fs.existsSync(publicCasesDir)).toBe(true);

    cases.forEach((study) => {
      expect(study.evidence.length).toBeGreaterThan(0);
      study.evidence.forEach((ev) => {
        const filePath = path.join(publicCasesDir, ev.filename);
        expect(
          fs.existsSync(filePath),
          `Missing evidence file: ${ev.filename} for case ${study.slug}`
        ).toBe(true);
      });
    });
  });

  it("verifies the authentic portrait exists on disk", () => {
    const portraitPath = path.resolve(process.cwd(), "public/media/portrait/bilal-shahid.png");
    expect(fs.existsSync(portraitPath)).toBe(true);
  });

  it("verifies the authentic resume PDF exists on disk", () => {
    const resumePath = path.resolve(process.cwd(), "public/docs/bilal-shahid-resume.pdf");
    expect(fs.existsSync(resumePath)).toBe(true);
  });

  it("ensures each case study has required fields", () => {
    cases.forEach((study) => {
      expect(study.slug).toBeTruthy();
      expect(study.sector).toBeTruthy();
      expect(study.headlineOutcome).toBeTruthy();
      expect(study.period.label).toBeTruthy();
      expect(study.metrics.length).toBeGreaterThanOrEqual(4);
    });
  });

  it("keeps affiliate revenue share distinct from post rate", () => {
    const sportsNutrition = cases.find((study) => study.slug === "sports-nutrition-affiliate-first");
    const affiliateShare = sportsNutrition?.metrics.find((metric) => metric.label === "Affiliate Revenue Share");

    expect(affiliateShare?.metricType).toBe("affiliate_revenue_share");
  });
});
