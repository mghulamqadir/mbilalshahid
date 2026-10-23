import { describe, it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";

vi.mock("next/font/google", () => ({
  Playfair_Display: () => ({ variable: "--font-editorial" }),
  Inter: () => ({ variable: "--font-sans" }),
  Caveat: () => ({ variable: "--font-handwriting" }),
}));

import { metadata as rootMetadata } from "@/app/layout";
import { metadata as homeMetadata } from "@/app/page";
import { metadata as servicesMetadata } from "@/app/services/page";
import { metadata as resultsMetadata } from "@/app/results/page";
import { metadata as processMetadata } from "@/app/process/page";
import { metadata as aboutMetadata } from "@/app/about/page";
import { metadata as resumeMetadata } from "@/app/resume/page";
import { metadata as contactMetadata } from "@/app/contact/layout";
import { metadata as privacyMetadata } from "@/app/privacy/page";
import { generateMetadata as generateCaseStudyMetadata } from "@/app/results/[slug]/page";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { getAllCanonicalDossiers } from "@/features/content/queries";

describe("Phase 6 — Design System, Accessibility & Technical SEO", () => {
  const BASE_URL = "https://mbilalshahid.vercel.app";

  describe("A — Design System Tokens & WCAG 2.2 AA Styles", () => {
    const cssPath = path.resolve(process.cwd(), "src/app/globals.css");
    const cssContent = fs.readFileSync(cssPath, "utf-8");

    it("defines required plum-and-cream design tokens", () => {
      expect(cssContent).toContain("--color-brand: #411b36;");
      expect(cssContent).toContain("--color-background: #fff9f3;");
      expect(cssContent).toContain("--color-surface: #ffffff;");
      expect(cssContent).toContain("--color-border: #e8dde5;");
      expect(cssContent).toContain("--color-text: #411b36;");
    });

    it("implements high-contrast focus indicators with offset", () => {
      expect(cssContent).toContain(":where(a, button, input, select, textarea):focus-visible");
      expect(cssContent).toContain("outline: 3px solid #411b36;");
      expect(cssContent).toContain("outline-offset: 3px;");
      expect(cssContent).toContain("outline-color: #ffffff;");
    });

    it("provides scroll-padding and scroll-margin for fixed header navigation", () => {
      expect(cssContent).toContain("scroll-padding-top: 96px;");
      expect(cssContent).toContain("scroll-margin-top: 96px;");
    });

    it("includes skip-to-content styling and prefers-reduced-motion media query", () => {
      expect(cssContent).toContain(".skip-link");
      expect(cssContent).toContain("transform: translateY(-200%);");
      expect(cssContent).toContain("@media (prefers-reduced-motion: reduce)");
      expect(cssContent).toContain("scroll-behavior: auto !important;");
    });
  });

  describe("B — Metadata Title Resolution & P0 Duplicate Title Elimination", () => {
    it("configures layout title template to prevent duplicate site suffixes", () => {
      const titleConfig = rootMetadata.title as { default: string; template: string };
      expect(titleConfig.template).toBe("%s");
      expect(titleConfig.default).toContain("Bilal Shahid");
    });

    it("verifies all 8 static pages have exact, non-duplicated titles ending with | Bilal Shahid", () => {
      const staticPages = [
        { name: "Home", meta: homeMetadata, expected: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid" },
        { name: "Services", meta: servicesMetadata, expected: "TikTok Shop Growth Services | Bilal Shahid" },
        { name: "Results", meta: resultsMetadata, expected: "TikTok Shop Case Studies & Results | Bilal Shahid" },
        { name: "Process", meta: processMetadata, expected: "TikTok Shop Growth Process | Bilal Shahid" },
        { name: "About", meta: aboutMetadata, expected: "About Bilal Shahid | TikTok Shop Specialist" },
        { name: "Résumé", meta: resumeMetadata, expected: "Bilal Shahid Résumé | TikTok Shop & E-commerce" },
        { name: "Contact", meta: contactMetadata, expected: "Contact Bilal Shahid | TikTok Shop Growth Audit" },
        { name: "Privacy", meta: privacyMetadata, expected: "Privacy Policy | Bilal Shahid" },
      ];

      for (const page of staticPages) {
        const titleStr = typeof page.meta.title === "string" ? page.meta.title : "";
        expect(titleStr).toBe(page.expected);
        expect(titleStr).not.toContain("Bilal Shahid | Bilal Shahid");
        expect(titleStr).toContain("Bilal Shahid");
      }
    });

    it("verifies all 5 case studies have exact, non-duplicated titles", async () => {
      const dossiers = await getAllCanonicalDossiers();
      expect(dossiers.length).toBe(5);

      for (const dossier of dossiers) {
        const meta = await generateCaseStudyMetadata({
          params: Promise.resolve({ slug: dossier.slug }),
        });
        const titleStr = typeof meta.title === "string" ? meta.title : "";
        expect(titleStr).toBe(dossier.seoTitle);
        expect(titleStr).not.toContain("Bilal Shahid | Bilal Shahid");
        expect(titleStr.endsWith("Bilal Shahid")).toBe(true);
      }
    });
  });

  describe("C — Canonical URLs & Meta Descriptions Across All 13 Routes", () => {
    it("verifies static pages have absolute canonical URLs matching their route", () => {
      expect(homeMetadata.alternates?.canonical).toBe(`${BASE_URL}/`);
      expect(servicesMetadata.alternates?.canonical).toBe(`${BASE_URL}/services`);
      expect(resultsMetadata.alternates?.canonical).toBe(`${BASE_URL}/results`);
      expect(processMetadata.alternates?.canonical).toBe(`${BASE_URL}/process`);
      expect(aboutMetadata.alternates?.canonical).toBe(`${BASE_URL}/about`);
      expect(resumeMetadata.alternates?.canonical).toBe(`${BASE_URL}/resume`);
      expect(contactMetadata.alternates?.canonical).toBe(`${BASE_URL}/contact`);
      expect(privacyMetadata.alternates?.canonical).toBe(`${BASE_URL}/privacy`);
    });

    it("verifies all 8 static pages have informative meta descriptions", () => {
      const staticPages = [
        homeMetadata,
        servicesMetadata,
        resultsMetadata,
        processMetadata,
        aboutMetadata,
        resumeMetadata,
        contactMetadata,
        privacyMetadata,
      ];

      for (const meta of staticPages) {
        expect(meta.description).toBeDefined();
        expect(meta.description!.length).toBeGreaterThanOrEqual(50);
        expect(meta.description!.length).toBeLessThanOrEqual(250);
      }
    });

    it("verifies all 5 case studies resolve canonical to absolute URL", async () => {
      const dossiers = await getAllCanonicalDossiers();

      for (const dossier of dossiers) {
        const meta = await generateCaseStudyMetadata({
          params: Promise.resolve({ slug: dossier.slug }),
        });
        expect(meta.alternates?.canonical).toBe(`${BASE_URL}/results/${dossier.slug}`);
        expect(meta.description).toBe(dossier.seoDescription);
        expect(meta.description!.length).toBeGreaterThanOrEqual(50);
      }
    });
  });

  describe("D — Sitemap & Robots.txt Specifications", () => {
    it("generates sitemap with all 13 canonical URLs and correct priorities", async () => {
      const sitemapEntries = await sitemap();
      expect(sitemapEntries.length).toBe(13);

      const urls = sitemapEntries.map((e) => e.url);

      // Verify all 8 static routes
      expect(urls).toContain(`${BASE_URL}`);
      expect(urls).toContain(`${BASE_URL}/services`);
      expect(urls).toContain(`${BASE_URL}/results`);
      expect(urls).toContain(`${BASE_URL}/about`);
      expect(urls).toContain(`${BASE_URL}/contact`);
      expect(urls).toContain(`${BASE_URL}/process`);
      expect(urls).toContain(`${BASE_URL}/resume`);
      expect(urls).toContain(`${BASE_URL}/privacy`);

      // Verify all 5 case studies
      expect(urls).toContain(`${BASE_URL}/results/contemporary-apparel-q4`);
      expect(urls).toContain(`${BASE_URL}/results/sports-nutrition-affiliate-first`);
      expect(urls).toContain(`${BASE_URL}/results/premium-apparel-lean-sampling`);
      expect(urls).toContain(`${BASE_URL}/results/fine-jewellery-aesthetic-pipeline`);
      expect(urls).toContain(`${BASE_URL}/results/beauty-brand-ramp-up`);

      const homeEntry = sitemapEntries.find((e) => e.url === `${BASE_URL}`);
      expect(homeEntry?.priority).toBe(1.0);
    });

    it("generates robots.txt with disallow /api/ and exact sitemap link", () => {
      const robotsConfig = robots();
      expect(robotsConfig.rules).toBeDefined();
      const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules[0] : robotsConfig.rules;
      expect(rules?.allow).toBe("/");
      expect(rules?.disallow).toContain("/api/");
      expect(robotsConfig.sitemap).toBe(`${BASE_URL}/sitemap.xml`);
    });
  });

  describe("E — Structured Data (JSON-LD) Validation", () => {
    const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");
    const aboutPath = path.resolve(process.cwd(), "src/app/about/page.tsx");
    const casePath = path.resolve(process.cwd(), "src/app/results/[slug]/page.tsx");

    it("includes WebSite schema in RootLayout", () => {
      const layoutContent = fs.readFileSync(layoutPath, "utf-8");
      expect(layoutContent).toContain('"@type": "WebSite"');
      expect(layoutContent).toContain('"@type": "Person"');
      expect(layoutContent).toContain('name: "Bilal Shahid"');
      expect(layoutContent).toContain('application/ld+json');
    });

    it("includes ProfilePage + Person schema on About page", () => {
      const aboutContent = fs.readFileSync(aboutPath, "utf-8");
      expect(aboutContent).toContain('"@type": "ProfilePage"');
      expect(aboutContent).toContain('"@type": "Person"');
      expect(aboutContent).toContain("COMSATS University Islamabad");
      expect(aboutContent).toContain("application/ld+json");
    });

    it("includes BreadcrumbList schema on Case Study detail page", () => {
      const caseContent = fs.readFileSync(casePath, "utf-8");
      expect(caseContent).toContain('"@type": "BreadcrumbList"');
      expect(caseContent).toContain('"@type": "ListItem"');
      expect(caseContent).toContain('name: "Home"');
      expect(caseContent).toContain('name: "Case Studies"');
      expect(caseContent).toContain('application/ld+json');
    });
  });

  describe("F — Accessibility Components & Interactive Controls", () => {
    it("renders skip navigation link in RootLayout targeting #main-content", () => {
      const layoutContent = fs.readFileSync(path.resolve(process.cwd(), "src/app/layout.tsx"), "utf-8");
      expect(layoutContent).toContain('href="#main-content"');
      expect(layoutContent).toContain('skip-link');
      expect(layoutContent).toContain('id="main-content"');
    });

    it("supports Escape key dismissal in mobile navigation drawer", () => {
      const navPath = path.resolve(process.cwd(), "src/components/layout/mobile-navigation.tsx");
      const navContent = fs.readFileSync(navPath, "utf-8");
      expect(navContent).toContain('"Escape"');
      expect(navContent).toContain("onClose()");
    });
  });
});
