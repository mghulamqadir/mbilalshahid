import { describe, it, expect } from "vitest";
import {
  resultsListingHero,
  featuredResultsHighlights,
  metricDefinitions,
  canonicalDossiers,
} from "@/content/case-studies-data";
import { siteRoutes, caseStudyRoutes } from "@/content/navigation";

describe("Phase 3 — Case Studies & Results Optimization", () => {
  describe("Task A: Routes & Canonical Data Source", () => {
    it("confirms all six Results routes and preserves existing slugs", () => {
      expect(siteRoutes.results).toBe("/results");
      expect(caseStudyRoutes.length).toBe(5);

      const expectedSlugs = [
        "contemporary-apparel-q4",
        "sports-nutrition-affiliate-first",
        "premium-apparel-lean-sampling",
        "fine-jewellery-aesthetic-pipeline",
        "beauty-brand-ramp-up",
      ];

      expectedSlugs.forEach((slug) => {
        expect(canonicalDossiers[slug]).toBeDefined();
        expect(canonicalDossiers[slug].slug).toBe(slug);
      });
    });

    it("verifies single canonical data source covers all 5 dossiers", () => {
      const keys = Object.keys(canonicalDossiers);
      expect(keys.length).toBe(5);

      keys.forEach((k) => {
        const d = canonicalDossiers[k];
        expect(d.title).toBeTruthy();
        expect(d.sector).toBeTruthy();
        expect(d.periodLabel).toBeTruthy();
        expect(d.headlineOutcome).toBeTruthy();
        expect(d.snapshotMetrics.length).toBe(4);
        expect(d.challenge).toBeTruthy();
        expect(d.roleOwnership.personalManagement.length).toBeGreaterThan(0);
        expect(d.strategy.length).toBeGreaterThanOrEqual(2);
        expect(d.keyLearnings.length).toBeGreaterThanOrEqual(2);
        expect(d.evidence.length).toBeGreaterThanOrEqual(1);
        expect(d.relatedSlugs.length).toBe(2);
      });
    });
  });

  describe("Task B: Results Listing Page & Components", () => {
    it("implements revised hero copy and dual CTAs", () => {
      expect(resultsListingHero.eyebrow).toBe("CREATOR COMMERCE · CAMPAIGN PERFORMANCE");
      expect(resultsListingHero.title).toContain("TikTok Shop Case Studies & Results");
      expect(resultsListingHero.subtitle).toContain("Explore selected TikTok Shop campaigns");
      expect(resultsListingHero.primaryCTA.href).toBe("#case-studies-grid");
      expect(resultsListingHero.secondaryCTA.href).toBe(siteRoutes.contact);
    });

    it("creates strictly 3 featured results highlights", () => {
      expect(featuredResultsHighlights.length).toBe(3);
      const [feat1, feat2, feat3] = featuredResultsHighlights;

      expect(feat1.slug).toBe("contemporary-apparel-q4");
      expect(feat1.primaryMetric.value).toBe("$616.8K");
      expect(feat1.primaryMetric.label).toBe("Creator-Attributed GMV");

      expect(feat2.slug).toBe("sports-nutrition-affiliate-first");
      expect(feat2.primaryMetric.value).toBe("95.47%");
      expect(feat2.primaryMetric.label).toBe("Affiliate Revenue Share");

      expect(feat3.slug).toBe("premium-apparel-lean-sampling");
      expect(feat3.primaryMetric.value).toBe("3.3M");
      expect(feat3.primaryMetric.label).toBe("Reported Video Views");
    });

    it("includes educational metric definitions explaining attribution", () => {
      expect(metricDefinitions.length).toBe(4);
      expect(metricDefinitions.some((m) => m.title.includes("Total Shop GMV vs. Affiliate GMV"))).toBe(true);
      expect(metricDefinitions.some((m) => m.title.includes("Revenue vs. GMV vs. Net Profit"))).toBe(true);
      expect(metricDefinitions.some((m) => m.title.includes("Video Count vs. Creator Count"))).toBe(true);
      expect(metricDefinitions.some((m) => m.title.includes("Sampling & Posting Rate Calculation"))).toBe(true);
    });
  });

  describe("Task C & D: Individual Dossiers, Metrics & Linking Matrix", () => {
    it("verifies Contemporary Apparel attribution & scope", () => {
      const apparel = canonicalDossiers["contemporary-apparel-q4"];
      expect(apparel.headlineOutcome).toContain("$616.8K");
      expect(apparel.headlineMetricType).toContain("Creator-Attributed GMV");
      expect(apparel.snapshotMetrics[0].value).toBe("$616,780.87");
      expect(apparel.snapshotMetrics[1].value).toBe("1,661");
      expect(apparel.snapshotMetrics[2].value).toBe("210");
    });

    it("verifies Sports Nutrition revenue & 95.47% share", () => {
      const nutrition = canonicalDossiers["sports-nutrition-affiliate-first"];
      expect(nutrition.headlineOutcome).toContain("95.47%");
      expect(nutrition.snapshotMetrics[0].value).toBe("$91,030.00");
      expect(nutrition.snapshotMetrics[1].value).toBe("95.47%");
      expect(nutrition.snapshotMetrics[2].value).toBe("475");
    });

    it("distinguishes $129K total GMV from $22.4K affiliate GMV on Premium Apparel", () => {
      const premium = canonicalDossiers["premium-apparel-lean-sampling"];
      expect(premium.snapshotMetrics.some((m) => m.value === "$129,000" && m.label === "Total Shop GMV")).toBe(true);
      expect(premium.snapshotMetrics.some((m) => m.value === "$22,400" && m.label === "Affiliate-Attributed GMV")).toBe(true);
      expect(premium.snapshotMetrics.some((m) => m.value === "3.3M")).toBe(true);
      expect(premium.snapshotMetrics.some((m) => m.value === "57.60%")).toBe(true);
    });

    it("verifies Fine Jewellery 389 creator videos and 464 samples", () => {
      const jewellery = canonicalDossiers["fine-jewellery-aesthetic-pipeline"];
      expect(jewellery.snapshotMetrics.some((m) => m.value === "389" && m.label === "Reported Creator Videos")).toBe(true);
      expect(jewellery.snapshotMetrics.some((m) => m.value === "464" && m.label === "Samples Fulfilled")).toBe(true);
      expect(jewellery.snapshotMetrics.some((m) => m.value === "52.37%")).toBe(true);
      expect(jewellery.snapshotMetrics.some((m) => m.value === "$14,700")).toBe(true);
    });

    it("verifies Beauty $7.5K total GMV, 188 samples, and 70.4K reached", () => {
      const beauty = canonicalDossiers["beauty-brand-ramp-up"];
      expect(beauty.snapshotMetrics.some((m) => m.value === "221" && m.label === "Creator Videos Posted")).toBe(true);
      expect(beauty.snapshotMetrics.some((m) => m.value === "70,400")).toBe(true);
      expect(beauty.snapshotMetrics.some((m) => m.value === "188")).toBe(true);
      expect(beauty.snapshotMetrics.some((m) => m.value === "$7,500")).toBe(true);
    });

    it("enforces the approved internal linking matrix across all 5 dossiers", () => {
      expect(canonicalDossiers["contemporary-apparel-q4"].relatedSlugs).toEqual([
        "premium-apparel-lean-sampling",
        "sports-nutrition-affiliate-first",
      ]);
      expect(canonicalDossiers["sports-nutrition-affiliate-first"].relatedSlugs).toEqual([
        "contemporary-apparel-q4",
        "beauty-brand-ramp-up",
      ]);
      expect(canonicalDossiers["premium-apparel-lean-sampling"].relatedSlugs).toEqual([
        "contemporary-apparel-q4",
        "fine-jewellery-aesthetic-pipeline",
      ]);
      expect(canonicalDossiers["fine-jewellery-aesthetic-pipeline"].relatedSlugs).toEqual([
        "premium-apparel-lean-sampling",
        "beauty-brand-ramp-up",
      ]);
      expect(canonicalDossiers["beauty-brand-ramp-up"].relatedSlugs).toEqual([
        "fine-jewellery-aesthetic-pipeline",
        "sports-nutrition-affiliate-first",
      ]);
    });
  });

  describe("Task E: SEO Metadata Specification", () => {
    it("specifies unique, descriptive page titles matching requirements", () => {
      expect(canonicalDossiers["contemporary-apparel-q4"].seoTitle).toBe(
        "Apparel TikTok Shop Growth Case Study | Bilal Shahid"
      );
      expect(canonicalDossiers["sports-nutrition-affiliate-first"].seoTitle).toBe(
        "Sports Nutrition Affiliate Case Study | Bilal Shahid"
      );
      expect(canonicalDossiers["premium-apparel-lean-sampling"].seoTitle).toBe(
        "Premium Apparel Creator Campaign | Bilal Shahid"
      );
      expect(canonicalDossiers["fine-jewellery-aesthetic-pipeline"].seoTitle).toBe(
        "Jewellery Creator Sampling Case Study | Bilal Shahid"
      );
      expect(canonicalDossiers["beauty-brand-ramp-up"].seoTitle).toBe(
        "Beauty TikTok Shop Creator Campaign | Bilal Shahid"
      );
    });
  });
});
