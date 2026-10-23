import { describe, it, expect } from "vitest";
import { siteRoutes } from "@/content/navigation";
import {
  professionalProfile,
  aboutPageContent,
  verifiedExperience,
  selectedAchievements,
  coreCompetencies,
  verifiedEducation,
  additionalProjects,
  contactFAQs,
  serviceOptions,
  getSelectedService,
  buildContactUrl,
} from "@/content/profile-data";
import { contactFormSchema } from "@/features/leads/schema";
import {
  getProfessionalProfile,
  getAboutContent,
  getVerifiedExperience,
  getSelectedAchievements,
  getCoreCompetencies,
  getVerifiedEducation,
  getAdditionalProjects,
  getContactFAQs,
} from "@/features/content/queries";

describe("Phase 5 — About, Résumé & Contact Lead Qualification", () => {
  describe("A — Canonical Profile & Verified Groundwork", () => {
    it("has verified professional profile identity and URLs", async () => {
      const profile = await getProfessionalProfile();
      expect(profile.name).toBe("Bilal Shahid");
      expect(profile.headline).toBe("TikTok Shop Growth & Creator Affiliate Specialist");
      expect(profile.email).toBe("bilalshahid1609@gmail.com");
      expect(profile.linkedinUrl).toContain("linkedin.com/in/mbilalshahid");
      expect(profile.resumePdfUrl).toBe("/docs/bilal-shahid-resume.pdf");
      expect(profile.portraitSrc).toBe("/media/portrait/bilal-shahid.png");
    });

    it("presents verified employment in reverse-chronological order", async () => {
      const exp = await getVerifiedExperience();
      expect(exp.length).toBeGreaterThanOrEqual(3);

      expect(exp[0].employer).toBe("Technisia");
      expect(exp[0].period).toBe("Mar 2025 – Sep 2026");

      expect(exp[1].employer).toBe("Blue Star Manufacturing");
      expect(exp[1].period).toBe("Jan 2022 – Feb 2025");

      expect(exp[2].employer).toBe("iKara E Solution");
      expect(exp[2].period).toBe("Aug 2020 – Dec 2021");
    });

    it("verifies COMSATS MBA and BS degrees", async () => {
      const edu = await getVerifiedEducation();
      expect(edu).toHaveLength(2);

      expect(edu[0].degree).toContain("Master of Business Administration (MBA)");
      expect(edu[0].institution).toContain("COMSATS University");
      expect(edu[0].period).toBe("2019 – 2021");

      expect(edu[1].degree).toContain("Bachelor of Science in Business Administration");
      expect(edu[1].institution).toContain("COMSATS University");
    });
  });

  describe("B — About Page Architecture (7 Sections)", () => {
    it("defines all seven sections in About content", async () => {
      const about = await getAboutContent();
      expect(about.hero.headline).toBe(
        "Building Better Creator Commerce Systems for Growing Brands."
      );
      expect(about.hero.paragraphs).toHaveLength(3);
      expect(about.hero.primaryCTA.href).toBe(siteRoutes.results);
      expect(about.hero.secondaryCTA.href).toBe(siteRoutes.contact);

      // Snapshot: 4 pillars
      expect(about.snapshot.pillars).toHaveLength(4);

      // Journey
      expect(about.journey.paragraphs.length).toBeGreaterThanOrEqual(2);

      // Expertise: 6 capability areas
      expect(about.expertise.items).toHaveLength(6);

      // Growth approach: 5 steps
      expect(about.growthApproach.frameworkSteps).toHaveLength(5);
      expect(about.growthApproach.cta.href).toBe(siteRoutes.process);

      // Credentials: links to resume & PDF
      expect(about.credentials.primaryCTA.href).toBe(siteRoutes.resume);
      expect(about.credentials.secondaryCTA.href).toBe(siteRoutes.resumePdf);

      // Final CTA
      expect(about.finalCTA.buttonHref).toBe(siteRoutes.contact);
    });
  });

  describe("C — Résumé Page Architecture (9 Sections)", () => {
    it("defines 3 grouped core competency domains", async () => {
      const comps = await getCoreCompetencies();
      expect(comps).toHaveLength(3);

      const domains = comps.map((c) => c.category);
      expect(domains).toEqual([
        "TikTok Shop Operations",
        "Creator Affiliate Management",
        "Analytics & Business Operations",
      ]);
    });

    it("verifies professional experience contains no fixed ROI targets", async () => {
      const exp = await getVerifiedExperience();
      const allText = JSON.stringify(exp);
      expect(allText).not.toMatch(/5x[–-]15x\s*ROAS/i);
      expect(allText).not.toMatch(/5x[–-]15x\s*ROI/i);
    });

    it("links selected achievements directly to case study dossiers", async () => {
      const ach = await getSelectedAchievements();
      expect(ach).toHaveLength(3);

      expect(ach[0].caseStudySlug).toBe("contemporary-apparel-q4");
      expect(ach[0].metric).toContain("$616.8K");

      expect(ach[1].caseStudySlug).toBe("sports-nutrition-affiliate-first");
      expect(ach[1].metric).toContain("95.47%");

      expect(ach[2].caseStudySlug).toBe("premium-apparel-lean-sampling");
      expect(ach[2].metric).toContain("3.3M");
    });

    it("condenses additional academic projects to 1-line descriptions", async () => {
      const projects = await getAdditionalProjects();
      expect(projects).toHaveLength(3);
      const names = projects.map((p) => p.name);
      expect(names).toEqual(["BeepWell", "Hostbreak", "Daniel Mart"]);
    });
  });

  describe("D — Contact Lead Qualification & Query Preselection", () => {
    it("maps query parameters from Phase 4 package CTAs to canonical service values", () => {
      // Launch package
      expect(getSelectedService("service=TikTok+Shop+Launch+%26+Setup")).toBe("launch");
      expect(getSelectedService("service=launch")).toBe("launch");

      // Affiliate Growth package
      expect(getSelectedService("service=Creator+Affiliate+Growth")).toBe("affiliate_growth");
      expect(getSelectedService("service=affiliate_growth")).toBe("affiliate_growth");

      // Full Management package
      expect(getSelectedService("service=Full+TikTok+Shop+Growth+Management")).toBe("full_management");
      expect(getSelectedService("service=full_management")).toBe("full_management");

      // Unknown or missing query parameter defaults to not_sure
      expect(getSelectedService("service=unknown_service_xyz")).toBe("not_sure");
      expect(getSelectedService("")).toBe("not_sure");
      expect(getSelectedService("foo=bar")).toBe("not_sure");
    });

    it("generates correct service contact URLs", () => {
      expect(buildContactUrl("launch")).toBe("/contact?service=launch");
      expect(buildContactUrl("affiliate_growth")).toBe("/contact?service=affiliate_growth");
      expect(buildContactUrl("full_management")).toBe("/contact?service=full_management");
    });

    it("provides seven approved FAQ questions matching Phase 4 terms", async () => {
      const faqs = await getContactFAQs();
      expect(faqs).toHaveLength(7);

      const allAnswers = faqs.map((f) => f.answer).join(" ");
      expect(allAnswers).toContain("No. TikTok Shop performance depends on product-market fit");
      expect(allAnswers).toContain("Launch & Setup is positioned as a one-time engagement");
      expect(allAnswers).toContain("normally separate from the professional service fee");
    });
  });

  describe("E — Form Validation & Backend Contract", () => {
    it("accepts a submission with the four required fields", () => {
      const valid = {
        fullName: "Sarah Founder",
        email: "sarah@growthbrand.com",
        brandName: "Growth Brand Co",
        goals: "We need an organized affiliate outreach program for our US TikTok Shop launch.",
      };

      const result = contactFormSchema.safeParse(valid);
      expect(result.success).toBe(true);
    });

    it("accepts optional fields without requiring monthly GMV", () => {
      const validWithOptions = {
        fullName: "Marcus Vance",
        email: "marcus@apparel.co.uk",
        brandName: "Vance Activewear",
        websiteUrl: "https://vanceactive.com",
        service: "Creator Affiliate Growth",
        targetMarket: "UK",
        goals: "Looking to recruit fitness creators and manage sample fulfillment tracking.",
        websiteHoneypot: "",
      };

      const result = contactFormSchema.safeParse(validWithOptions);
      expect(result.success).toBe(true);
    });

    it("rejects missing full name", () => {
      const invalid = {
        fullName: " ",
        email: "sarah@brand.com",
        brandName: "Brand Co",
        goals: "We need creator outreach.",
      };

      const result = contactFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it("rejects invalid email address", () => {
      const invalid = {
        fullName: "Sarah Founder",
        email: "not-an-email",
        brandName: "Brand Co",
        goals: "We need creator outreach.",
      };

      const result = contactFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it("rejects missing brand name", () => {
      const invalid = {
        fullName: "Sarah Founder",
        email: "sarah@brand.com",
        brandName: "",
        goals: "We need creator outreach.",
      };

      const result = contactFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it("rejects goals shorter than 10 characters", () => {
      const invalid = {
        fullName: "Sarah Founder",
        email: "sarah@brand.com",
        brandName: "Brand Co",
        goals: "Help me",
      };

      const result = contactFormSchema.safeParse(invalid);
      expect(result.success).toBe(false);
    });

    it("rejects non-empty honeypot (bot detection)", () => {
      const botSubmission = {
        fullName: "Bot User",
        email: "bot@spam.com",
        brandName: "Spam Brand",
        goals: "Automated spam message requesting backlinks.",
        websiteHoneypot: "https://spamlink.com",
      };

      const result = contactFormSchema.safeParse(botSubmission);
      expect(result.success).toBe(false);
    });
  });
});
