import { describe, it, expect } from "vitest";
import {
  homeHeroContent,
  homeCredibilityProof,
  homeFeaturedCases,
  homeServicesPreview,
  homeAboutPreview,
  homeProcessPreview,
  homeFinalCTA,
} from "@/content/homepage";
import { siteRoutes } from "@/content/navigation";

describe("Phase 2 — Homepage Optimization Architecture & Data", () => {
  describe("Section 01: Hero Positioning & CTAs", () => {
    it("defines the exact approved headline and positioning copy", () => {
      expect(homeHeroContent.eyebrow).toBe("TIKTOK SHOP · CREATOR COMMERCE · DTC GROWTH");
      expect(homeHeroContent.headline).toBe("I Help US & UK Brands Scale on TikTok Shop.");
      expect(homeHeroContent.supportingCopy).toContain("I build and manage creator affiliate programs");
      expect(homeHeroContent.primaryCTA).toEqual({
        label: "Request a Growth Audit",
        href: siteRoutes.contact,
      });
      expect(homeHeroContent.secondaryCTA).toEqual({
        label: "Explore Case Studies",
        href: siteRoutes.results,
      });
      expect(homeHeroContent.portraitCaption).toBe(
        "Bilal Shahid — TikTok Shop Growth & Creator Affiliate Specialist"
      );
    });
  });

  describe("Section 02: Credibility & Proof", () => {
    it("features strictly 3 outcome indicators linking directly to published cases", () => {
      expect(homeCredibilityProof.metrics.length).toBe(3);

      const [gmv, share, views] = homeCredibilityProof.metrics;
      expect(gmv.value).toBe("$616.8K");
      expect(gmv.label).toBe("Creator-Attributed GMV");
      expect(gmv.href).toBe("/results/contemporary-apparel-q4");

      expect(share.value).toBe("95.47%");
      expect(share.label).toBe("Affiliate Revenue Share");
      expect(share.href).toBe("/results/sports-nutrition-affiliate-first");

      expect(views.value).toBe("3.3M");
      expect(views.label).toBe("Reported Video Views");
      expect(views.href).toBe("/results/premium-apparel-lean-sampling");
    });

    it("includes attribution and non-guarantee disclosure", () => {
      expect(homeCredibilityProof.disclosure).toContain(
        "Figures represent separate campaigns and reporting periods"
      );
    });
  });

  describe("Section 03: Featured Case Studies", () => {
    it("contains exactly 3 case studies in approved order", () => {
      expect(homeFeaturedCases.cases.length).toBe(3);
      const [case1, case2, case3] = homeFeaturedCases.cases;

      expect(case1.id).toBe("contemporary-apparel");
      expect(case1.title).toBe("Creator-Led Holiday Growth");
      expect(case1.primaryMetric.value).toBe("$616,780");
      expect(case1.href).toBe("/results/contemporary-apparel-q4");

      expect(case2.id).toBe("sports-nutrition");
      expect(case2.title).toBe("Building an Affiliate-Led Revenue Engine");
      expect(case2.primaryMetric.value).toBe("$91,030");
      expect(case2.href).toBe("/results/sports-nutrition-affiliate-first");

      expect(case3.id).toBe("premium-apparel");
      expect(case3.title).toBe("Selective Sampling, Measurable Reach");
      expect(case3.primaryMetric.value).toBe("3.3M");
      expect(case3.href).toBe("/results/premium-apparel-lean-sampling");
    });
  });

  describe("Section 04: Services Preview", () => {
    it("features 3 focused service preview cards linking to /services anchors", () => {
      expect(homeServicesPreview.services.length).toBe(3);
      const [launch, affiliate, full] = homeServicesPreview.services;

      expect(launch.id).toBe("launch-setup");
      expect(launch.cta).toBe("Explore Launch Services");
      expect(launch.href).toBe("/services#launch-setup");

      expect(affiliate.id).toBe("creator-affiliate-growth");
      expect(affiliate.cta).toBe("Explore Affiliate Growth");
      expect(affiliate.href).toBe("/services#creator-affiliate-growth");

      expect(full.id).toBe("full-growth-management");
      expect(full.cta).toBe("Explore Full Management");
      expect(full.href).toBe("/services#full-growth-management");
    });
  });

  describe("Section 05: About Bilal", () => {
    it("contains a concise 3-paragraph introduction and link to /about", () => {
      expect(homeAboutPreview.paragraphs.length).toBe(3);
      expect(homeAboutPreview.cta.href).toBe("/about");
      expect(homeAboutPreview.portraitSrc).toBeTruthy();
    });
  });

  describe("Section 06: How I Work (Operating System)", () => {
    it("features 5 compact operational steps and link to /process", () => {
      expect(homeProcessPreview.steps.length).toBe(5);
      expect(homeProcessPreview.steps.map((s) => s.step)).toEqual([
        "01",
        "02",
        "03",
        "04",
        "05",
      ]);
      expect(homeProcessPreview.cta.href).toBe("/process");
    });
  });

  describe("Section 07: Final Conversion CTA", () => {
    it("features the approved growth audit call to action", () => {
      expect(homeFinalCTA.headline).toBe("Ready to Build a Stronger TikTok Shop Growth Engine?");
      expect(homeFinalCTA.buttonLabel).toBe("Request Your Free Growth Audit");
      expect(homeFinalCTA.buttonHref).toBe(siteRoutes.contact);
    });
  });
});
