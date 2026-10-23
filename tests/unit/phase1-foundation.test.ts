import { describe, it, expect } from "vitest";
import {
  siteRoutes,
  primaryNavigation,
  secondaryNavigation,
  primaryCTA,
  caseStudyRoutes,
} from "@/content/navigation";
import { site, heroProof, operatingSystemSteps, services, careerTimeline } from "@/content/seed";
import { contentOwnershipMap } from "@/content/content-ownership";
import { claimsInventory } from "@/content/claims-inventory";

describe("Phase 1 — Website Foundation & Structure", () => {
  describe("Task 1: Routes & Architecture", () => {
    it("preserves all 13 canonical HTML routes and PDF download route", () => {
      expect(siteRoutes.home).toBe("/");
      expect(siteRoutes.services).toBe("/services");
      expect(siteRoutes.results).toBe("/results");
      expect(siteRoutes.about).toBe("/about");
      expect(siteRoutes.contact).toBe("/contact");
      expect(siteRoutes.process).toBe("/process");
      expect(siteRoutes.resume).toBe("/resume");
      expect(siteRoutes.privacy).toBe("/privacy");
      expect(siteRoutes.resumePdf).toBe("/docs/bilal-shahid-resume.pdf");

      expect(caseStudyRoutes.length).toBe(5);
      const expectedSlugs = [
        "contemporary-apparel-q4",
        "sports-nutrition-affiliate-first",
        "premium-apparel-lean-sampling",
        "fine-jewellery-aesthetic-pipeline",
        "beauty-brand-ramp-up",
      ];
      expectedSlugs.forEach((slug) => {
        const found = caseStudyRoutes.find((c) => c.slug === slug);
        expect(found).toBeDefined();
        expect(found?.path).toBe(`/results/${slug}`);
      });
    });

    it("verifies content ownership rules for all key pages", () => {
      const pages = ["home", "services", "results", "caseStudyDetail", "process", "about", "resume", "contact", "privacy"];
      pages.forEach((pageKey) => {
        const entry = contentOwnershipMap[pageKey];
        expect(entry).toBeDefined();
        expect(entry.ownedTopics.length).toBeGreaterThan(0);
        expect(entry.conversionGoal).toBeTruthy();
      });

      // Confirm Services owns full packages, Process owns 5 steps and 30/60/90 roadmap
      expect(contentOwnershipMap.services.ownedTopics.some((t) => t.includes("All 3 engagement packages"))).toBe(true);
      expect(contentOwnershipMap.process.ownedTopics.some((t) => t.includes("30 / 60 / 90-Day Execution Roadmap"))).toBe(true);
      expect(contentOwnershipMap.process.ownedTopics.some((t) => t.includes("5-step"))).toBe(true);
    });
  });

  describe("Task 2: Navigation & Labels", () => {
    it("contains strictly 5 destinations in primary navigation with correct order", () => {
      expect(primaryNavigation.length).toBe(5);
      expect(primaryNavigation.map((i) => i.label)).toEqual([
        "Home",
        "Services",
        "Case Studies",
        "About",
        "Contact",
      ]);
      expect(primaryNavigation.map((i) => i.href)).toEqual([
        "/",
        "/services",
        "/results",
        "/about",
        "/contact",
      ]);
    });

    it("defines secondary navigation with How I Work, Résumé, and Privacy Policy", () => {
      expect(secondaryNavigation.length).toBe(3);
      expect(secondaryNavigation[0]).toEqual({ label: "How I Work", href: "/process" });
      expect(secondaryNavigation[1]).toEqual({ label: "Résumé", href: "/resume" });
      expect(secondaryNavigation[2]).toEqual({ label: "Privacy Policy", href: "/privacy" });
    });

    it("standardizes primary audit conversion CTA", () => {
      expect(primaryCTA.label).toBe("Request a Growth Audit");
      expect(primaryCTA.href).toBe("/contact");
    });
  });

  describe("Task 3 & 4: Data Consistency & Terminology", () => {
    it("uses official positioning in site metadata", () => {
      expect(site.title).toBe("TikTok Shop Growth & Creator Affiliate Specialist");
    });

    it("replaces 'in-voice personalized messaging' with 'brand-voice personalized outreach'", () => {
      const step3 = operatingSystemSteps.find((s) => s.step === "03");
      expect(step3?.description).toContain("Brand-voice personalized outreach at scale");

      const outreachService = services.find((s) => s.slug === "outreach-sampling-and-pr-gifting");
      expect(
        outreachService?.deliverables.some((d) => d.includes("Brand-voice personalized outreach sequences"))
      ).toBe(true);
    });

    it("clarifies ROAS and growth rates in career timeline and hero proof", () => {
      const technisia = careerTimeline.find((c) => c.company === "Technisia");
      expect(technisia?.highlights.some((h) => h.includes("ROAS targets"))).toBe(true);

      const momHero = heroProof.find((h) => h.number === "30%+");
      expect(momHero?.subtext).toContain("peak scaling cycles");

      const parallelHero = heroProof.find((h) => h.number === "5");
      expect(parallelHero?.subtext).toContain("concurrently in parallel");

      const expHero = heroProof.find((h) => h.number === "4+");
      expect(expHero?.subtext).toContain("4+ years overall e-commerce");
    });

    it("contains an authoritative claims inventory covering all key figures", () => {
      expect(claimsInventory.length).toBeGreaterThanOrEqual(10);
      const claim616k = claimsInventory.find((c) => c.id === "claim-hero-peak-gmv");
      expect(claim616k?.evidenceStatus).toBe("verified_screenshot");

      const claimShare = claimsInventory.find((c) => c.id === "claim-case-02-affiliate-share");
      expect(claimShare?.claimValue).toBe(95.47);
      expect(claimShare?.metricType).toBe("affiliate_revenue_share");
    });
  });
});
