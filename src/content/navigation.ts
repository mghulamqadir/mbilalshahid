/**
 * Centralized Navigation Configuration for Bilal Shahid Portfolio
 * Phase 1 Architecture: Single source of truth for all routes and menus.
 */

export const siteRoutes = {
  home: "/",
  services: "/services",
  results: "/results",
  about: "/about",
  contact: "/contact",
  process: "/process",
  resume: "/resume",
  resumePdf: "/docs/bilal-shahid-resume.pdf",
  privacy: "/privacy",
} as const;

export type SiteRouteKey = keyof typeof siteRoutes;
export type SiteRoutePath = (typeof siteRoutes)[SiteRouteKey];

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

/**
 * Primary navigation: strictly 5 destinations for the header and main menus.
 * Order: Home, Services, Case Studies, About, Contact
 */
export const primaryNavigation: readonly NavItem[] = [
  { label: "Home", href: siteRoutes.home },
  { label: "Services", href: siteRoutes.services },
  { label: "Case Studies", href: siteRoutes.results },
  { label: "About", href: siteRoutes.about },
  { label: "Contact", href: siteRoutes.contact },
] as const;

/**
 * Secondary navigation: accessible from Services, About, and Footer.
 * Does not crowd the primary navigation.
 */
export const secondaryNavigation: readonly NavItem[] = [
  { label: "How I Work", href: siteRoutes.process },
  { label: "Résumé", href: siteRoutes.resume },
  { label: "Privacy Policy", href: siteRoutes.privacy },
] as const;

/**
 * Standardized primary conversion CTA across header, hero, and page closers.
 */
export const primaryCTA = {
  label: "Request a Growth Audit",
  compactLabel: "Get a Free Audit",
  href: siteRoutes.contact,
} as const;

/**
 * Case study detail pages canonical routes registry.
 */
export const caseStudyRoutes = [
  {
    slug: "contemporary-apparel-q4",
    path: `${siteRoutes.results}/contemporary-apparel-q4`,
    sector: "Contemporary Apparel Brand (US)",
  },
  {
    slug: "sports-nutrition-affiliate-first",
    path: `${siteRoutes.results}/sports-nutrition-affiliate-first`,
    sector: "Sports Nutrition Brand (US)",
  },
  {
    slug: "premium-apparel-lean-sampling",
    path: `${siteRoutes.results}/premium-apparel-lean-sampling`,
    sector: "Premium Apparel Brand (US)",
  },
  {
    slug: "fine-jewellery-aesthetic-pipeline",
    path: `${siteRoutes.results}/fine-jewellery-aesthetic-pipeline`,
    sector: "Fine Jewellery Brand (US)",
  },
  {
    slug: "beauty-brand-ramp-up",
    path: `${siteRoutes.results}/beauty-brand-ramp-up`,
    sector: "Beauty Brand (US)",
  },
] as const;
