/**
 * Phase 2 — Homepage Optimization Data Architecture
 * Centralized, developer-ready content specification for the 8-section homepage.
 */

import { siteRoutes } from "./navigation";

export interface HomepageProofIndicator {
  value: string;
  label: string;
  context: string;
  href: string;
}

export interface HomepageCaseStudyPreview {
  id: string;
  categoryTag: string;
  title: string;
  primaryMetric: {
    value: string;
    label: string;
  };
  description: string;
  href: string;
  thumbnail: string;
}

export interface HomepageServiceCard {
  id: string;
  title: string;
  idealClient: string;
  scope: string;
  cta: string;
  href: string;
  featured?: boolean;
}

export interface HomepageProcessStep {
  step: string;
  title: string;
  description: string;
}

export const homeHeroContent = {
  eyebrow: "TIKTOK SHOP · CREATOR COMMERCE · DTC GROWTH",
  headline: "I Help US & UK Brands Scale on TikTok Shop.",
  supportingCopy:
    "I build and manage creator affiliate programs, improve TikTok Shop operations, and use performance data to turn creator content into measurable commerce results.",
  primaryCTA: {
    label: "Request a Growth Audit",
    href: siteRoutes.contact,
  },
  secondaryCTA: {
    label: "Explore Case Studies",
    href: siteRoutes.results,
  },
  portraitCaption: "Bilal Shahid — TikTok Shop Growth & Creator Affiliate Specialist",
  portraitSrc: "/media/portrait/bilal-shahid.png",
  portraitTransparentSrc: "/media/bilal-transparent.png",
} as const;

export const homeCredibilityProof = {
  eyebrow: "RESULTS FROM SELECTED CAMPAIGNS",
  title: "Performance You Can Examine.",
  subtitle:
    "Three examples of reported outcomes from creator commerce campaigns across apparel and sports nutrition.",
  metrics: [
    {
      value: "$616.8K",
      label: "Creator-Attributed GMV",
      context: "Contemporary Apparel · Nov–Dec 2025",
      href: `${siteRoutes.results}/contemporary-apparel-q4`,
    },
    {
      value: "95.47%",
      label: "Affiliate Revenue Share",
      context: "Sports Nutrition · Jun–Jul 2026",
      href: `${siteRoutes.results}/sports-nutrition-affiliate-first`,
    },
    {
      value: "3.3M",
      label: "Reported Video Views",
      context: "Premium Apparel · Jun–Jul 2026",
      href: `${siteRoutes.results}/premium-apparel-lean-sampling`,
    },
  ] as HomepageProofIndicator[],
  disclosure:
    "Figures represent separate campaigns and reporting periods. They are not combined results or guarantees of future performance.",
} as const;

export const homeFeaturedCases = {
  eyebrow: "DOCUMENTED CAMPAIGN RESULTS",
  title: "Selected TikTok Shop Case Studies",
  subtitle:
    "Explore the creator strategies, affiliate operations, and shop performance behind selected US brand campaigns. Each case study includes its reporting period, my role, key metrics, and supporting dashboard evidence.",
  sectionCTA: {
    label: "View All Five Case Studies",
    href: siteRoutes.results,
  },
  cases: [
    {
      id: "contemporary-apparel",
      categoryTag: "CASE 01 · CONTEMPORARY APPAREL",
      title: "Creator-Led Holiday Growth",
      primaryMetric: {
        value: "$616,780",
        label: "Creator-attributed GMV · Nov 18–Dec 23, 2025",
      },
      description:
        "A coordinated creator-video and LIVE-streaming program during the Q4 shopping period.",
      href: `${siteRoutes.results}/contemporary-apparel-q4`,
      thumbnail: "/media/cases/thumb-apparel-q4.png",
    },
    {
      id: "sports-nutrition",
      categoryTag: "CASE 02 · SPORTS NUTRITION",
      title: "Building an Affiliate-Led Revenue Engine",
      primaryMetric: {
        value: "$91,030",
        label: "Total revenue · Jun 29–Jul 28, 2026",
      },
      description:
        "A creator affiliate program with a reported 95.47% affiliate revenue share.",
      href: `${siteRoutes.results}/sports-nutrition-affiliate-first`,
      thumbnail: "/media/cases/thumb-sports-nutrition.png",
    },
    {
      id: "premium-apparel",
      categoryTag: "CASE 03 · PREMIUM APPAREL",
      title: "Selective Sampling, Measurable Reach",
      primaryMetric: {
        value: "3.3M",
        label: "Video views · Jun 1–Jul 29, 2026",
      },
      description:
        "$129K total shop GMV, including $22.4K affiliate-attributed GMV, during the reported period.",
      href: `${siteRoutes.results}/premium-apparel-lean-sampling`,
      thumbnail: "/media/cases/thumb-premium-apparel.png",
    },
  ] as HomepageCaseStudyPreview[],
} as const;

export const homeServicesPreview = {
  eyebrow: "HOW WE CAN WORK TOGETHER",
  title: "TikTok Shop Services for Every Stage of Growth",
  subtitle:
    "Whether you're preparing to launch, building a creator affiliate program, or looking for ongoing shop management, I offer structured support matched to your brand's current needs.",
  sectionCTA: {
    label: "View All Services",
    href: siteRoutes.services,
  },
  services: [
    {
      id: "launch-setup",
      title: "TikTok Shop Launch & Setup",
      idealClient: "For brands preparing to launch or improve an early-stage shop.",
      scope:
        "Seller Center readiness, product listings, affiliate setup, and the foundation for a qualified creator pipeline.",
      cta: "Explore Launch Services",
      href: `${siteRoutes.services}#launch-setup`,
      featured: false,
    },
    {
      id: "creator-affiliate-growth",
      title: "Creator Affiliate Growth",
      idealClient:
        "For brands with an active shop that need stronger creator participation and affiliate performance.",
      scope:
        "Creator sourcing, outreach, sample coordination, affiliate activation, and performance reporting.",
      cta: "Explore Affiliate Growth",
      href: `${siteRoutes.services}#creator-affiliate-growth`,
      featured: true,
    },
    {
      id: "full-growth-management",
      title: "Full TikTok Shop Growth Management",
      idealClient: "For established brands that need hands-on operational support.",
      scope:
        "Creator affiliate management, Seller Center operations, promotions, reporting, and GMV Max coordination where appropriate.",
      cta: "Explore Full Management",
      href: `${siteRoutes.services}#full-growth-management`,
      featured: false,
    },
  ] as HomepageServiceCard[],
} as const;

export const homeAboutPreview = {
  eyebrow: "MEET THE SPECIALIST",
  title: "Hands-On TikTok Shop Growth, Backed by E-commerce Experience.",
  paragraphs: [
    "I'm Bilal Shahid, an e-commerce operator specializing in TikTok Shop growth and creator affiliate programs for US and UK brands.",
    "My experience spans brand-side and agency-side e-commerce operations, with a focus on creator sourcing, selective sampling, Seller Center management, promotions, and performance analysis.",
    "I combine hands-on execution with structured reporting, helping brands understand which activities contribute to measurable business results.",
  ],
  cta: {
    label: "More About Bilal",
    href: siteRoutes.about,
  },
  portraitSrc: "/media/portrait/about-card-clean.png",
} as const;

export const homeProcessPreview = {
  eyebrow: "THE OPERATING FRAMEWORK",
  title: "A Structured Approach to Creator Commerce",
  subtitle:
    "From finding suitable creators to reviewing sales attribution, each stage is designed to improve execution, reduce wasted effort, and inform the next growth decision.",
  steps: [
    {
      step: "01",
      title: "Discover & Qualify",
      description:
        "Identify creators based on category fit, content quality, audience relevance, and available performance data.",
    },
    {
      step: "02",
      title: "Plan Sampling",
      description:
        "Prioritize relevant creators, manage sample approvals, and track fulfillment.",
    },
    {
      step: "03",
      title: "Activate Affiliates",
      description:
        "Coordinate outreach, collaboration, commissions, and creator content delivery.",
    },
    {
      step: "04",
      title: "Align Shop & Promotions",
      description:
        "Connect creator activity with Seller Center operations, promotional campaigns, and paid amplification where appropriate.",
    },
    {
      step: "05",
      title: "Measure & Optimize",
      description:
        "Review creator activity, affiliate-attributed GMV, post rates, and campaign performance to guide further investment.",
    },
  ] as HomepageProcessStep[],
  cta: {
    label: "Explore My Growth Process",
    href: siteRoutes.process,
  },
} as const;

export const homeFinalCTA = {
  eyebrow: "LET'S DISCUSS YOUR GROWTH",
  headline: "Ready to Build a Stronger TikTok Shop Growth Engine?",
  description:
    "Tell me about your shop, your creator program, and your current challenges. I'll review your inquiry and discuss the next steps for your brand.",
  buttonLabel: "Request Your Free Growth Audit",
  buttonHref: siteRoutes.contact,
  subtext: "Independent TikTok Shop specialist · No guaranteed sales or ROI",
} as const;
