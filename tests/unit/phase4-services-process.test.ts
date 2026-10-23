import { describe, it, expect } from "vitest";
import { siteRoutes } from "@/content/navigation";
import {
  servicePackages,
  packageScopeMatrix,
  operationalCapabilities,
  engagementTerms,
  getServiceContactUrl,
  servicesHeroContent,
} from "@/content/services-data";
import {
  processFrameworkSteps,
  retainerRoadmap,
  launchProjectTimeline,
  reportingAreas,
  processHeroContent,
} from "@/content/process-data";
import {
  getCanonicalServices,
  getPackageScopeMatrix,
  getOperationalCapabilities,
  getCanonicalProcessSteps,
  getRetainerRoadmap,
  getLaunchTimeline,
  getReportingAreas,
} from "@/features/content/queries";

describe("Phase 4 — Services & Process Optimization", () => {
  describe("A — Routes & Preparation", () => {
    it("preserves canonical /services and /process routes", () => {
      expect(siteRoutes.services).toBe("/services");
      expect(siteRoutes.process).toBe("/process");
    });
  });

  describe("B — Services Packages & Scope Matrix", () => {
    it("defines exactly three distinct service packages", async () => {
      const pkgs = await getCanonicalServices();
      expect(pkgs).toHaveLength(3);

      const names = pkgs.map((p) => p.name);
      expect(names).toEqual([
        "TikTok Shop Launch & Setup",
        "Creator Affiliate Growth",
        "Full TikTok Shop Growth Management",
      ]);
    });

    it("verifies engagement types and durations for each package", () => {
      const launch = servicePackages.find((p) => p.id === "launch")!;
      const affiliate = servicePackages.find((p) => p.id === "affiliate-growth")!;
      const full = servicePackages.find((p) => p.id === "full-management")!;

      expect(launch.type).toBe("one-time");
      expect(launch.duration).toContain("4–6 weeks");

      expect(affiliate.type).toBe("retainer");
      expect(affiliate.duration).toContain("3-month");

      expect(full.type).toBe("retainer");
      expect(full.duration).toContain("3-month");
    });

    it("formats contact URL query parameters correctly", () => {
      const launch = servicePackages[0];
      const affiliate = servicePackages[1];
      const full = servicePackages[2];

      expect(getServiceContactUrl(launch)).toBe(
        "/contact?service=TikTok+Shop+Launch+%26+Setup"
      );
      expect(getServiceContactUrl(affiliate)).toBe(
        "/contact?service=Creator+Affiliate+Growth"
      );
      expect(getServiceContactUrl(full)).toBe(
        "/contact?service=Full+TikTok+Shop+Growth+Management"
      );
    });

    it("includes stable anchor IDs for all packages", () => {
      servicePackages.forEach((pkg) => {
        expect(pkg.anchorIds.length).toBeGreaterThanOrEqual(1);
      });
      expect(servicePackages[0].anchorIds).toContain("launch");
      expect(servicePackages[0].anchorIds).toContain("launch-setup");
      expect(servicePackages[1].anchorIds).toContain("affiliate-growth");
      expect(servicePackages[1].anchorIds).toContain("creator-affiliate-growth");
      expect(servicePackages[2].anchorIds).toContain("full-management");
      expect(servicePackages[2].anchorIds).toContain("full-growth-management");
    });

    it("defines a 12-capability package scope matrix", async () => {
      const matrix = await getPackageScopeMatrix();
      expect(matrix).toHaveLength(12);

      const capabilities = matrix.map((m) => m.capability);
      expect(capabilities).toContain("Shop readiness assessment");
      expect(capabilities).toContain("Creator ICP and sourcing");
      expect(capabilities).toContain("Personalized outreach");
      expect(capabilities).toContain("Sample coordination");
      expect(capabilities).toContain("Affiliate activation");
      expect(capabilities).toContain("Re-engagement");
      expect(capabilities).toContain("Shop listing operations");
      expect(capabilities).toContain("Promotional campaigns");
      expect(capabilities).toContain("GMV Max coordination");
      expect(capabilities).toContain("LIVE scheduling");
      expect(capabilities).toContain("Reporting");
      expect(capabilities).toContain("Shopify/Amazon integration");
    });

    it("condenses six concise operational capabilities without individual CTAs", async () => {
      const capabilities = await getOperationalCapabilities();
      expect(capabilities).toHaveLength(6);

      const titles = capabilities.map((c) => c.title);
      expect(titles).toEqual([
        "Creator Discovery & Qualification",
        "Personalized Outreach",
        "Sampling & Creator Logistics",
        "Affiliate Activation & Retention",
        "Shop Operations & Promotion",
        "Performance Analysis",
      ]);
    });

    it("does not promise fixed ROI targets in services data", () => {
      const allText = JSON.stringify(servicePackages) + JSON.stringify(operationalCapabilities);
      expect(allText).not.toMatch(/5x[–-]15x\s*ROI/i);
      expect(allText).not.toMatch(/guaranteed sales/i);
    });

    it("includes commercial transparency in engagement terms", () => {
      expect(engagementTerms).toHaveLength(4);
      const combinedTerms = engagementTerms.map((t) => t.description).join(" ");
      expect(combinedTerms).toContain("separate unless expressly included");
      expect(combinedTerms).toContain("Clients retain ownership");
      expect(combinedTerms).toContain("Specific GMV, ROI, sales, or posting outcomes are not guaranteed");
    });
  });

  describe("C — Process Framework & Timelines", () => {
    it("uses the exact five methodology step names established in Phase 2", async () => {
      const steps = await getCanonicalProcessSteps();
      expect(steps).toHaveLength(5);

      const names = steps.map((s) => s.title);
      expect(names).toEqual([
        "Discover & Qualify",
        "Plan Sampling",
        "Activate Affiliates",
        "Align Shop & Promotions",
        "Measure & Optimize",
      ]);

      steps.forEach((step) => {
        expect(step.outputs.length).toBeGreaterThanOrEqual(3);
      });
    });

    it("provides the 30/60/90-day retainer roadmap with 3 milestones", async () => {
      const roadmap = await getRetainerRoadmap();
      expect(roadmap).toHaveLength(3);

      expect(roadmap[0].days).toBe("Days 1–30");
      expect(roadmap[0].theme).toBe("Audit & Build");
      expect(roadmap[1].days).toBe("Days 31–60");
      expect(roadmap[1].theme).toBe("Launch & Optimize");
      expect(roadmap[2].days).toBe("Days 61–90");
      expect(roadmap[2].theme).toBe("Improve & Plan the Next Cycle");
    });

    it("provides a separate 4–6-week launch project timeline", async () => {
      const launchTimeline = await getLaunchTimeline();
      expect(launchTimeline).toHaveLength(4);

      expect(launchTimeline[0].period).toBe("Week 1");
      expect(launchTimeline[1].period).toBe("Week 2");
      expect(launchTimeline[2].period).toBe("Weeks 3–4");
      expect(launchTimeline[3].period).toBe("Weeks 5–6 (when required)");
    });

    it("provides 8 reporting areas with explicit attribution distinctions", async () => {
      const areas = await getReportingAreas();
      expect(areas).toHaveLength(8);

      const areaNames = areas.map((a) => a.area);
      expect(areaNames).toContain("Creator pipeline");
      expect(areaNames).toContain("Sampling");
      expect(areaNames).toContain("Activation");
      expect(areaNames).toContain("Content");
      expect(areaNames).toContain("Posting rate");
      expect(areaNames).toContain("Affiliate commerce");
      expect(areaNames).toContain("Shop performance");
      expect(areaNames).toContain("Advertising");

      const distinctions = areas.map((a) => a.distinction).join(" ");
      expect(distinctions).toContain("Outreach volume is not activation");
      expect(distinctions).toContain("GMV is not profit");
      expect(distinctions).toContain("attribution overlap");
    });
  });

  describe("D — Hero and Copy Consistency", () => {
    it("has approved Services hero headline and eyebrow", () => {
      expect(servicesHeroContent.eyebrow).toBe("TIKTOK SHOP SERVICES · CREATOR COMMERCE");
      expect(servicesHeroContent.headline).toBe("TikTok Shop Growth Services for US & UK Brands");
    });

    it("has approved Process hero headline and eyebrow", () => {
      expect(processHeroContent.eyebrow).toBe("HOW I WORK · THE OPERATING FRAMEWORK");
      expect(processHeroContent.headline).toBe("A Structured Approach to TikTok Shop Growth");
    });

    it("verifies Contact service preselection matches all 3 packages", () => {
      const validOptions = [
        "TikTok Shop Launch & Setup",
        "Creator Affiliate Growth",
        "Full TikTok Shop Growth Management",
        "GMV Max Campaign Management",
        "Creator Sourcing & Scoring Only",
        "Shop Audit & Consultation",
        "Not sure — need advice",
      ];

      servicePackages.forEach((pkg) => {
        expect(validOptions).toContain(pkg.contactValue);
      });
    });
  });
});
