/**
 * Phase 5 — Canonical Personal Profile, Career History & Résumé Data Architecture
 * Single source of truth for Bilal Shahid's professional identity, career timeline,
 * expertise areas, résumé sections, education, and contact lead qualification.
 */

import { siteRoutes } from "./navigation";

export interface ExperienceRole {
  id: string;
  employer: string;
  title: string;
  period: string;
  startDate: string;
  endDate: string | "Present";
  market: string;
  responsibilities: string[];
  keyAchievement?: string;
  approved: boolean;
}

export interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  campaign: string;
  sector: string;
  period: string;
  metric: string;
  description: string;
  caseStudySlug: string;
  caseStudyUrl: string;
}

export interface CompetencyGroup {
  category: string;
  skills: string[];
}

export interface AdditionalProject {
  name: string;
  role: string;
  description: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Canonical Professional Profile (Single Source of Truth)
 * ───────────────────────────────────────────────────────────────────────────── */
export const professionalProfile = {
  name: "Bilal Shahid",
  headline: "TikTok Shop Growth & Creator Affiliate Specialist",
  tagline: "E-commerce Operations | Creator Partnerships | Marketplace Management",
  email: "bilalshahid1609@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/mbilalshahid/",
  portfolioUrl: "https://mbilalshahid.vercel.app",
  location: "US & UK Brands (Remote)",
  resumePdfUrl: siteRoutes.resumePdf, // "/docs/bilal-shahid-resume.pdf"
  portraitSrc: "/media/portrait/bilal-shahid.png",
  portraitAlt: "Bilal Shahid — TikTok Shop Growth & Creator Affiliate Specialist",
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
 * About Page Content Architecture (7 Sections)
 * ───────────────────────────────────────────────────────────────────────────── */
export const aboutPageContent = {
  hero: {
    eyebrow: "ABOUT BILAL SHAHID · TIKTOK SHOP SPECIALIST",
    headline: "Building Better Creator Commerce Systems for Growing Brands.",
    paragraphs: [
      "I'm Bilal Shahid, an e-commerce professional specializing in TikTok Shop growth, creator affiliate programs, and marketplace operations for US and UK consumer brands.",
      "My work focuses on connecting creator relationships with the operational systems that support commerce—product readiness, outreach, sampling, affiliate activation, promotional coordination, and performance reporting.",
      "I believe sustainable growth requires more than finding viral creators. It requires clear priorities, consistent execution, reliable data, and an understanding of how each activity contributes to broader business objectives.",
    ],
    primaryCTA: {
      label: "Explore My Work",
      href: siteRoutes.results,
    },
    secondaryCTA: {
      label: "Get in Touch",
      href: siteRoutes.contact,
    },
  },

  snapshot: {
    eyebrow: "VALUE PROPOSITION",
    title: "What I Bring to the Table",
    pillars: [
      {
        title: "Creator Affiliate Operations",
        description:
          "Structured creator discovery, qualification, outreach, onboarding, and relationship management.",
      },
      {
        title: "TikTok Shop Management",
        description:
          "Hands-on support with Seller Center workflows, listings, catalog readiness, and promotional coordination.",
      },
      {
        title: "Campaign Execution",
        description:
          "Organized sampling, creator activation, content follow-up, and campaign scheduling.",
      },
      {
        title: "Performance Analysis",
        description:
          "Regular reporting that separates creator activity, affiliate-attributed commerce, total shop performance, and advertising results.",
      },
    ],
    closingNote:
      "My focus is on helping brands understand not only what is happening, but which operating decisions deserve attention next.",
  },

  journey: {
    eyebrow: "CAREER NARRATIVE",
    title: "My Professional Journey",
    paragraphs: [
      "My background combines e-commerce operations, brand support, and performance-focused marketplace work.",
      "Across my professional experience, I've developed a practical understanding of product operations, creator partnerships, campaign management, and commercial reporting.",
      "This combination has shaped how I approach TikTok Shop: as a connected commerce operation rather than an isolated content channel.",
    ],
  },

  expertise: {
    eyebrow: "CORE COMPETENCIES",
    title: "Where I Focus My Expertise",
    items: [
      "TikTok Shop Seller Center operations.",
      "Creator discovery and affiliate program management.",
      "Sampling coordination and creator relationships.",
      "E-commerce catalog and promotional operations.",
      "Performance reporting and campaign analysis.",
      "Cross-platform e-commerce workflows.",
    ],
    closingNote:
      "My work combines day-to-day operational execution with structured reviews that help identify opportunities and bottlenecks.",
  },

  growthApproach: {
    eyebrow: "OPERATING PHILOSOPHY",
    title: "My Approach to Growth",
    frameworkSteps: [
      "Discover & Qualify",
      "Plan Sampling",
      "Activate Affiliates",
      "Align Shop & Promotions",
      "Measure & Optimize",
    ],
    description:
      "The framework helps organize creator partnerships, sampling, shop operations, and performance reviews into a consistent process.",
    cta: {
      label: "Explore My Process",
      href: siteRoutes.process,
    },
  },

  credentials: {
    eyebrow: "ACADEMIC FOUNDATION",
    title: "Qualifications & Professional Background",
    description:
      "My professional development combines practical e-commerce work with formal business education.",
    educationDetail: "MBA — Marketing & Branding · COMSATS University Islamabad",
    secondaryNote:
      "A detailed record of my experience, skills, and qualifications is available in my résumé.",
    primaryCTA: {
      label: "View My Résumé",
      href: siteRoutes.resume,
    },
    secondaryCTA: {
      label: "Download PDF Résumé",
      href: siteRoutes.resumePdf,
    },
  },

  finalCTA: {
    eyebrow: "LET'S WORK TOGETHER",
    title: "Let's Discuss Your TikTok Shop Goals",
    description:
      "If you're preparing to launch, improving your affiliate program, or looking for ongoing operational support, I'd be happy to learn about your brand.",
    buttonLabel: "Request a Growth Audit",
    buttonHref: siteRoutes.contact,
  },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
 * Professional Experience (Reverse-Chronological History)
 * ───────────────────────────────────────────────────────────────────────────── */
export const verifiedExperience: ExperienceRole[] = [
  {
    id: "technisia",
    employer: "Technisia",
    title: "TikTok Shop & Growth Marketing Manager",
    period: "Mar 2025 – Sep 2026",
    startDate: "2025-03",
    endDate: "2026-09",
    market: "UK & US Brands (Health & Wellness, Beauty, Apparel, Personal Care)",
    responsibilities: [
      "Managed full-funnel TikTok Shop operations and creator affiliate programs across US and UK consumer brands.",
      "Designed and executed structured creator outreach pipelines, commission tiering, and sampling logistics.",
      "Coordinated Seller Center operations including listings, Campaign Centers, flash sales, product vouchers, and GMV Max advertising.",
      "Delivered weekly attribution reporting separating creator activity, affiliate GMV, and total shop performance.",
    ],
    keyAchievement:
      "Scaled brand affiliate pipelines contributing to substantial creator-attributed commerce growth during Q4 shopping cycles.",
    approved: true,
  },
  {
    id: "blue-star",
    employer: "Blue Star Manufacturing",
    title: "E-commerce & Marketplace Operations Lead",
    period: "Jan 2022 – Feb 2025",
    startDate: "2022-01",
    endDate: "2025-02",
    market: "UK & US Marketplaces (Apparel & Home Products)",
    responsibilities: [
      "Managed marketplace catalog operations, multi-channel product listings, and order fulfillment across TikTok Shop, Amazon, and Shopify.",
      "Planned promotional campaign calendars, discount vouchers, and seasonal flash events to maintain product velocity.",
      "Optimized listing conversion rates (CRO), product copy, and inventory reconciliation across disconnected channels.",
      "Maintained operational health scores through swift dispute resolution and fulfillment compliance.",
    ],
    keyAchievement:
      "Coordinated dual-marketplace operations maintaining consistent catalog synchronization and seller health.",
    approved: true,
  },
  {
    id: "ikara",
    employer: "iKara E Solution",
    title: "E-commerce Operations Specialist",
    period: "Aug 2020 – Dec 2021",
    startDate: "2020-08",
    endDate: "2021-12",
    market: "UK & US Digital Commerce",
    responsibilities: [
      "Conducted extensive product research and competitor market analysis across consumer e-commerce categories.",
      "Supported supplier outreach, catalog creation, FBA shipment logistics, and inventory compliance.",
      "Monitored customer reviews, order fulfillment SLAs, and product margin predictability.",
    ],
    keyAchievement:
      "Maintained supplier and product catalogs supporting operational predictability across client accounts.",
    approved: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Selected Professional Achievements (Linked to Approved Case Studies)
 * ───────────────────────────────────────────────────────────────────────────── */
export const selectedAchievements: AchievementItem[] = [
  {
    id: "contemporary-apparel",
    campaign: "Contemporary Apparel Q4 Campaign",
    sector: "Contemporary Apparel Brand (US)",
    period: "Nov 18 – Dec 23, 2025",
    metric: "$616.8K Creator GMV",
    description:
      "Coordinated creator video and LIVE streaming program generating 1,661 shoppable videos and $616,780 in creator-attributed GMV.",
    caseStudySlug: "contemporary-apparel-q4",
    caseStudyUrl: `${siteRoutes.results}/contemporary-apparel-q4`,
  },
  {
    id: "sports-nutrition",
    campaign: "Sports Nutrition Affiliate Engine",
    sector: "Sports Nutrition Brand (US)",
    period: "Jun 29 – Jul 28, 2026",
    metric: "95.47% Affiliate Revenue Share",
    description:
      "Activated an affiliate-first commerce engine generating $91.03K total revenue with a 95.47% creator affiliate share.",
    caseStudySlug: "sports-nutrition-affiliate-first",
    caseStudyUrl: `${siteRoutes.results}/sports-nutrition-affiliate-first`,
  },
  {
    id: "premium-apparel",
    campaign: "Premium Apparel Lean Sampling",
    sector: "Premium Apparel Brand (US)",
    period: "Jun 1 – Jul 29, 2026",
    metric: "3.3M Video Views · 57.6% Post Rate",
    description:
      "Managed selective 125-sample seeding program generating 3.3M views and $129K total GMV ($22.4K affiliate GMV).",
    caseStudySlug: "premium-apparel-lean-sampling",
    caseStudyUrl: `${siteRoutes.results}/premium-apparel-lean-sampling`,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Core Competencies & Skills (Grouped Domains)
 * ───────────────────────────────────────────────────────────────────────────── */
export const coreCompetencies: CompetencyGroup[] = [
  {
    category: "TikTok Shop Operations",
    skills: [
      "Seller Center administration",
      "Product catalog and listing management",
      "Shop readiness and health assessment",
      "Promotional campaign center management",
      "GMV Max campaign coordination where authorized",
      "Flash sales, vouchers, and bundle configuration",
    ],
  },
  {
    category: "Creator Affiliate Management",
    skills: [
      "Ideal Creator Profile (ICP) definition",
      "Targeted creator research and qualification",
      "Personalized outreach pipelines",
      "Sampling budget allocation and fulfillment tracking",
      "Affiliate onboarding and commission structure design",
      "Cooperation chat and creator re-engagement",
    ],
  },
  {
    category: "Analytics & Business Operations",
    skills: [
      "Weekly performance scorecards and diagnostics",
      "Affiliate GMV and revenue attribution analysis",
      "Sampling post-rate and ROI tracking",
      "Multichannel inventory sync (Shopify, Amazon)",
      "Operational bottleneck identification",
      "Executive stakeholder reporting",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Tools & Platforms
 * ───────────────────────────────────────────────────────────────────────────── */
export const toolsAndPlatforms = {
  tiktokShop: [
    "TikTok Shop Seller Center",
    "TikTok Shop Affiliate Center",
    "Campaign Center & Promotions",
    "GMV Max Ad Manager",
  ],
  ecommerce: [
    "Shopify",
    "Amazon Seller Central",
    "Multi-channel inventory portals",
  ],
  analytics: [
    "TikTok Shop Analytics",
    "FastMoss",
    "Kalodata",
    "Google Sheets & Excel Financial Modeling",
  ],
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
 * Education & Certifications
 * ───────────────────────────────────────────────────────────────────────────── */
export const verifiedEducation: EducationRecord[] = [
  {
    degree: "Master of Business Administration (MBA) — Marketing & Branding",
    institution: "COMSATS University Islamabad",
    period: "2019 – 2021",
    location: "Islamabad, Pakistan",
    highlights: [
      "Focus: Brand Strategy, Consumer Psychology, and Performance Marketing",
      "Graduated with honors",
    ],
  },
  {
    degree: "Bachelor of Science in Business Administration",
    institution: "COMSATS University Islamabad",
    period: "2015 – 2019",
    location: "Islamabad, Pakistan",
    highlights: ["Focus: Business Operations, Marketing Principles, and E-commerce"],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Additional Projects (Condensed)
 * ───────────────────────────────────────────────────────────────────────────── */
export const additionalProjects: AdditionalProject[] = [
  {
    name: "BeepWell",
    role: "Digital Health Concept",
    description: "Digital health and wellness concept focused on DTC distribution and product positioning.",
  },
  {
    name: "Hostbreak",
    role: "E-Commerce Infrastructure",
    description: "Hosting and digital commerce technical support workflows and client setup.",
  },
  {
    name: "Daniel Mart",
    role: "Retail Operations",
    description: "Retail catalog and digital commerce workflow demonstration project.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Contact Form Configuration & Query-Parameter Service Preselection
 * ───────────────────────────────────────────────────────────────────────────── */
export const serviceOptions = {
  not_sure: {
    label: "I'm Not Sure Yet",
    value: "not_sure",
  },
  launch: {
    label: "TikTok Shop Launch & Setup",
    value: "launch",
  },
  affiliate_growth: {
    label: "Creator Affiliate Growth",
    value: "affiliate_growth",
  },
  full_management: {
    label: "Full TikTok Shop Growth Management",
    value: "full_management",
  },
} as const;

export type ServiceValue = keyof typeof serviceOptions;

export const serviceAliases: Record<string, ServiceValue> = {
  "TikTok Shop Launch & Setup": "launch",
  "Creator Affiliate Growth": "affiliate_growth",
  "Full TikTok Shop Growth Management": "full_management",
  "launch": "launch",
  "affiliate_growth": "affiliate_growth",
  "full_management": "full_management",
  "not_sure": "not_sure",
};

/**
 * Resolves query string to canonical ServiceValue. Defaults to 'not_sure'.
 */
export function getSelectedService(search: string): ServiceValue {
  const params = new URLSearchParams(search);
  const raw = params.get("service") ?? "";
  return serviceAliases[raw] ?? "not_sure";
}

/**
 * Generates canonical contact URL with service pre-selected
 */
export function buildContactUrl(service: ServiceValue): string {
  const params = new URLSearchParams({ service });
  return `${siteRoutes.contact}?${params.toString()}`;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Contact FAQ Data (7 Approved Questions)
 * ───────────────────────────────────────────────────────────────────────────── */
export const contactFAQs = [
  {
    question: "Do you work with US and UK TikTok Shop brands?",
    answer:
      "Yes. My services are positioned around the operational and creator affiliate needs of US and UK TikTok Shop brands, subject to platform eligibility and the agreed engagement scope.",
  },
  {
    question: "Can you help if I haven't launched my TikTok Shop yet?",
    answer:
      "Yes. The Launch & Setup service is designed for brands preparing to launch or improve their initial shop configuration, product listings, and affiliate program foundations.",
  },
  {
    question: "Can you help with an existing TikTok Shop?",
    answer:
      "Yes. Creator Affiliate Growth and Full TikTok Shop Growth Management are designed for brands with an operational shop seeking more structured ongoing support.",
  },
  {
    question: "What does the initial growth audit include?",
    answer:
      "The initial review is intended to identify your current priorities, potential operational gaps, and the type of support that may fit your brand. A detailed technical audit, financial model, or formal strategic roadmap would require an agreed scope if those deliverables are needed.",
  },
  {
    question: "Do you guarantee sales or a specific return on investment?",
    answer:
      "No. TikTok Shop performance depends on product-market fit, platform eligibility, creator participation, competition, promotional costs, and other factors beyond any single service provider's control. I focus on structured execution, transparent reporting, and evidence-based operational decisions.",
  },
  {
    question: "Do you offer both one-time projects and ongoing management?",
    answer:
      "Yes. Launch & Setup is positioned as a one-time engagement, while Creator Affiliate Growth and Full TikTok Shop Growth Management are ongoing service options.",
  },
  {
    question: "Who covers product samples, commissions, shipping, and advertising?",
    answer:
      "These expenses are normally separate from the professional service fee unless explicitly included in the agreed proposal.",
  },
];
