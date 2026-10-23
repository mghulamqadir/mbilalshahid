/**
 * Phase 4 — Canonical Services & Engagement Packages Data Architecture
 * Single source of truth for the 3 packages, scope matrix, operational capabilities,
 * engagement terms, and contact URL helpers.
 */

import { siteRoutes } from "./navigation";

export type EngagementType = "one-time" | "retainer";

export interface ServicePackage {
  id: string;
  anchorIds: string[];
  number: string;
  name: string;
  type: EngagementType;
  duration: string;
  audience: string;
  overview: string;
  deliverables: string[];
  optionalAddOns: string[];
  additionalServicesByAgreement?: string[];
  contactValue: string;
  cta: string;
  featured?: boolean;
}

export interface ScopeMatrixRow {
  capability: string;
  launchSetup: string;
  affiliateGrowth: string;
  fullManagement: string;
}

export interface OperationalCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface EngagementTermItem {
  title: string;
  description: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Page Metadata & Hero
 * ───────────────────────────────────────────────────────────────────────────── */
export const servicesHeroContent = {
  eyebrow: "TIKTOK SHOP SERVICES · CREATOR COMMERCE",
  headline: "TikTok Shop Growth Services for US & UK Brands",
  paragraphs: [
    "From initial shop setup to ongoing creator affiliate management, I provide hands-on operational support designed around your brand's current stage, products, and growth priorities.",
    "Whether you need a stronger creator pipeline, more organized sampling, or coordinated shop management, each engagement begins with understanding your operational needs.",
  ],
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
 * Three Service Packages
 * ───────────────────────────────────────────────────────────────────────────── */
export const servicePackages: ServicePackage[] = [
  {
    id: "launch",
    anchorIds: ["launch", "launch-setup"],
    number: "01",
    name: "TikTok Shop Launch & Setup",
    type: "one-time",
    duration: "One-time project · Typically 4–6 weeks",
    audience: "New brands preparing to launch or improve the foundations of their TikTok Shop.",
    overview:
      "Establish a clear operational foundation for your shop, products, affiliate program, and initial creator outreach.",
    deliverables: [
      "Seller Center readiness review, configuration guidance, and shop health assessment.",
      "Product listing review and optimization for agreed priority products.",
      "Initial affiliate program configuration and proposed commission structure.",
      "Ideal Creator Profile (ICP) and creator qualification criteria.",
      "Initial creator prospect list and outreach plan, sized according to the agreed scope.",
      "Launch readiness checklist, recommendations, and handover documentation.",
    ],
    optionalAddOns: [
      "Shopify or Amazon integration support.",
      "Initial GMV Max campaign configuration, where eligible and authorized.",
    ],
    contactValue: "TikTok Shop Launch & Setup",
    cta: "Discuss Launch & Setup",
    featured: false,
  },
  {
    id: "affiliate-growth",
    anchorIds: ["affiliate-growth", "creator-affiliate-growth"],
    number: "02",
    name: "Creator Affiliate Growth",
    type: "retainer",
    duration: "Monthly retainer · Initial 3-month commitment",
    audience:
      "Brands with an operational TikTok Shop seeking more consistent creator participation and better affiliate program management.",
    overview:
      "Build and manage an organized creator affiliate program, from qualification and outreach through activation, content follow-up, and performance review.",
    deliverables: [
      "Ongoing creator discovery, qualification, and personalized outreach.",
      "Creator pipeline management and collaboration follow-up.",
      "Sample approvals, coordination, and fulfillment tracking.",
      "Affiliate onboarding, commission planning, and creator activation support.",
      "Re-engagement of inactive affiliates and support for recurring collaborations.",
      "Weekly reporting on creator activity, sampling, published content, and affiliate-attributed results.",
      "Monthly performance review and recommendations for the next cycle.",
    ],
    optionalAddOns: [
      "GMV Max campaign coordination.",
      "Expanded competitor and category research using agreed tools.",
    ],
    contactValue: "Creator Affiliate Growth",
    cta: "Request an Affiliate Growth Audit",
    featured: true,
  },
  {
    id: "full-management",
    anchorIds: ["full-management", "full-growth-management"],
    number: "03",
    name: "Full TikTok Shop Growth Management",
    type: "retainer",
    duration: "Monthly retainer · Initial 3-month commitment",
    audience:
      "Established brands needing ongoing creator affiliate support together with broader shop and promotional operations.",
    overview:
      "Coordinate creator commerce, Seller Center operations, promotional activity, and performance reporting through one structured management engagement.",
    deliverables: [
      "Core services from Creator Affiliate Growth.",
      "Ongoing Seller Center operational support and catalog management.",
      "Product listing and offer optimization for agreed products.",
      "Coordination of promotional campaigns, vouchers, bundles, and shipping offers.",
      "GMV Max setup, monitoring, and optimization where appropriate and authorized.",
      "LIVE commerce scheduling and coordination support.",
      "Weekly operational and performance reporting.",
      "Monthly growth review and recommendations for the following period.",
      "Agreed multichannel synchronization support, where included in the scope.",
    ],
    optionalAddOns: [
      "Multichannel sync expansions.",
      "Custom analytics dashboard integration.",
    ],
    additionalServicesByAgreement: [
      "Dedicated creator-management coordination.",
      "Additional paid content and campaign support.",
      "Expanded multichannel operations.",
    ],
    contactValue: "Full TikTok Shop Growth Management",
    cta: "Discuss Full Management",
    featured: false,
  },
];

/**
 * Generate standardized contact URL pre-filling the selected service
 */
export function getServiceContactUrl(service: ServicePackage | { contactValue: string }): string {
  const params = new URLSearchParams({
    service: service.contactValue,
  });
  return `${siteRoutes.contact}?${params.toString()}`;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Package Scope Matrix
 * ───────────────────────────────────────────────────────────────────────────── */
export const packageScopeMatrix: ScopeMatrixRow[] = [
  {
    capability: "Shop readiness assessment",
    launchSetup: "Included",
    affiliateGrowth: "Initial review",
    fullManagement: "Included",
  },
  {
    capability: "Creator ICP and sourcing",
    launchSetup: "Initial setup",
    affiliateGrowth: "Ongoing",
    fullManagement: "Ongoing",
  },
  {
    capability: "Personalized outreach",
    launchSetup: "Initial pipeline",
    affiliateGrowth: "Ongoing",
    fullManagement: "Ongoing",
  },
  {
    capability: "Sample coordination",
    launchSetup: "Planning / optional execution",
    affiliateGrowth: "Included",
    fullManagement: "Included",
  },
  {
    capability: "Affiliate activation",
    launchSetup: "Setup",
    affiliateGrowth: "Included",
    fullManagement: "Included",
  },
  {
    capability: "Re-engagement",
    launchSetup: "—",
    affiliateGrowth: "Included",
    fullManagement: "Included",
  },
  {
    capability: "Shop listing operations",
    launchSetup: "Initial scope",
    affiliateGrowth: "—",
    fullManagement: "Included",
  },
  {
    capability: "Promotional campaigns",
    launchSetup: "Initial setup guidance",
    affiliateGrowth: "By agreement",
    fullManagement: "Included",
  },
  {
    capability: "GMV Max coordination",
    launchSetup: "Add-on",
    affiliateGrowth: "Add-on",
    fullManagement: "Included if applicable",
  },
  {
    capability: "LIVE scheduling",
    launchSetup: "—",
    affiliateGrowth: "By agreement",
    fullManagement: "Included",
  },
  {
    capability: "Reporting",
    launchSetup: "Handover report",
    affiliateGrowth: "Weekly + monthly",
    fullManagement: "Weekly + monthly",
  },
  {
    capability: "Shopify/Amazon integration",
    launchSetup: "Add-on",
    affiliateGrowth: "By agreement",
    fullManagement: "Agreed scope",
  },
];

export const scopeMatrixFootnote =
  '"Included" means the capability is part of the proposed service category, not unlimited execution. Specific quantities, assets, access, and responsibilities must be defined in the final engagement agreement.';

/* ─────────────────────────────────────────────────────────────────────────────
 * Six Operational Capabilities (Concise Summaries)
 * ───────────────────────────────────────────────────────────────────────────── */
export const operationalCapabilities: OperationalCapability[] = [
  {
    id: "creator-discovery",
    number: "01",
    title: "Creator Discovery & Qualification",
    description:
      "Identify relevant creators through category fit, content quality, audience relevance, and available performance indicators.",
    tag: "Pipeline",
  },
  {
    id: "personalized-outreach",
    number: "02",
    title: "Personalized Outreach",
    description:
      "Build organized outreach pipelines, manage collaboration conversations, and follow up with qualified prospects.",
    tag: "Execution",
  },
  {
    id: "sampling-logistics",
    number: "03",
    title: "Sampling & Creator Logistics",
    description:
      "Coordinate approvals, sample budgets, dispatch tracking, and content follow-up.",
    tag: "Logistics",
  },
  {
    id: "affiliate-activation",
    number: "04",
    title: "Affiliate Activation & Retention",
    description:
      "Support creator onboarding, commission planning, active collaborations, and re-engagement.",
    tag: "Retention",
  },
  {
    id: "shop-operations",
    number: "05",
    title: "Shop Operations & Promotion",
    description:
      "Align listings, inventory readiness, promotional activity, and applicable paid campaigns.",
    tag: "Operations",
  },
  {
    id: "performance-analysis",
    number: "06",
    title: "Performance Analysis",
    description:
      "Review creator activity, affiliate attribution, shop performance, and operational bottlenecks to guide future decisions.",
    tag: "Diagnostics",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Engagement Scope & Expectations (Commercial Reality & Disclosures)
 * ───────────────────────────────────────────────────────────────────────────── */
export const engagementTerms: EngagementTermItem[] = [
  {
    title: "Tailored Engagements",
    description:
      "Each engagement is tailored to the brand's product catalog, shop readiness, creator activity, operational workload, and reporting needs.",
  },
  {
    title: "Transparent Cost Separation",
    description:
      "Project fees and monthly retainers are quoted individually. Creator payments, affiliate commissions, sample products, shipping, advertising budgets, and third-party software costs are separate unless expressly included in the agreed scope.",
  },
  {
    title: "Client Ownership & Approvals",
    description:
      "Clients retain ownership of their shop, advertising accounts, and business data. Access permissions, budgets, timelines, responsibilities, and approvals are documented before execution.",
  },
  {
    title: "Commercial Reality & Non-Guaranteed Outcomes",
    description:
      "Outreach, sampling, creator content, sales performance, and advertising outcomes depend on factors including platform eligibility, product availability, market demand, and creator participation. Specific GMV, ROI, sales, or posting outcomes are not guaranteed.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Process Preview & Final Call to Action
 * ───────────────────────────────────────────────────────────────────────────── */
export const servicesProcessPreview = {
  eyebrow: "EXECUTION METHODOLOGY",
  title: "How the Work Gets Done",
  description:
    "My delivery process follows five connected stages: Discover & Qualify, Plan Sampling, Activate Affiliates, Align Shop & Promotions, and Measure & Optimize. For ongoing engagements, a 30/60/90-day roadmap provides an initial structure for auditing, activation, and optimization. One-time launch projects use a separate, shorter delivery timeline.",
  ctaLabel: "Explore My Growth Process",
  ctaHref: siteRoutes.process,
} as const;

export const servicesFinalCTA = {
  eyebrow: "LET'S DISCUSS YOUR GROWTH",
  title: "Ready to Build a Stronger TikTok Shop Operation?",
  description:
    "Tell me about your brand, your existing creator program, and the challenges you want to solve. I'll review your inquiry and discuss which level of support may be appropriate.",
  buttonLabel: "Request Your Free Growth Audit",
  buttonHref: siteRoutes.contact,
  disclosure:
    "Bilal Shahid is an independent TikTok Shop specialist and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance.",
} as const;
