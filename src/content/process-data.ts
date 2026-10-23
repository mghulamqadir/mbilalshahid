/**
 * Phase 4 — Canonical Process & Operating Methodology Data Architecture
 * Single source of truth for the 5-step methodology, 30/60/90-day retainer roadmap,
 * separate 4–6-week launch timeline, reporting framework, and anchors.
 */

import { siteRoutes } from "./navigation";

export interface ProcessStepItem {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  outputs: string[];
}

export interface RoadmapMilestone {
  days: string;
  phaseLabel: string;
  theme: string;
  title: string;
  objective: string;
  keyActivities: string[];
  deliverables: string[];
}

export interface LaunchTimelineStage {
  period: string;
  focus: string;
  deliverables: string[];
}

export interface ReportingArea {
  area: string;
  measure: string;
  distinction: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Process Page Hero Content
 * ───────────────────────────────────────────────────────────────────────────── */
export const processHeroContent = {
  eyebrow: "HOW I WORK · THE OPERATING FRAMEWORK",
  headline: "A Structured Approach to TikTok Shop Growth",
  paragraphs: [
    "Successful creator commerce requires more than outreach volume or short-term viral content.",
    "My approach connects creator discovery, sampling, affiliate activation, shop operations, and performance analysis into a repeatable working system.",
    "Every engagement is adapted to the brand's products, budget, operational readiness, and commercial priorities.",
  ],
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
 * The Five-Step Creator Commerce Process
 * ───────────────────────────────────────────────────────────────────────────── */
export const processFrameworkSteps: ProcessStepItem[] = [
  {
    id: "discover-qualify",
    step: "01",
    title: "Discover & Qualify",
    tagline: "Start with the right products and creators.",
    description:
      "I begin by reviewing the brand's products, TikTok Shop readiness, audience, and current creator activity. Creator qualification considers category fit, content quality, audience relevance, and available performance indicators—not follower counts alone.",
    outputs: [
      "Ideal Creator Profile (ICP)",
      "Creator scoring framework",
      "Prioritized prospect list",
    ],
  },
  {
    id: "plan-sampling",
    step: "02",
    title: "Plan Sampling",
    tagline: "Make product seeding more accountable.",
    description:
      "Creator outreach and sampling are organized around agreed qualification criteria, product availability, approval processes, and budget constraints. The objective is to create a trackable workflow from initial collaboration discussions to sample dispatch and content follow-up.",
    outputs: [
      "Outreach plan",
      "Sampling criteria",
      "Budget allocation",
      "Fulfillment tracker",
    ],
  },
  {
    id: "activate-affiliates",
    step: "03",
    title: "Activate Affiliates",
    tagline: "Turn qualified collaborations into an active program.",
    description:
      "I support affiliate onboarding, collaboration communication, commission planning, and content follow-up. Creator activity is tracked so brands can distinguish prospective collaborations from activated affiliates and published content.",
    outputs: [
      "Activation tracker",
      "Commission recommendations",
      "Creator follow-up schedule",
    ],
  },
  {
    id: "align-shop-promotions",
    step: "04",
    title: "Align Shop & Promotions",
    tagline: "Connect creator activity with operational readiness.",
    description:
      "Creator campaigns work best when listings, inventory, offers, promotional activity, and customer fulfillment are aligned. Depending on the engagement, this stage can include Seller Center operations, promotional coordination, LIVE scheduling support, and GMV Max campaign management.",
    outputs: [
      "Promotional calendar",
      "Shop operations checklist",
      "Approved campaign action plan",
    ],
  },
  {
    id: "measure-optimize",
    step: "05",
    title: "Measure & Optimize",
    tagline: "Use performance data to guide the next decision.",
    description:
      "I review creator activity, content output, affiliate-attributed commerce, sampling effectiveness, and relevant advertising performance. The reporting process focuses on what can be measured, what requires improvement, and which activities deserve continued attention.",
    outputs: [
      "Weekly performance scorecard",
      "Monthly review",
      "Next-cycle priorities",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * The First 90 Days — Retainer Roadmap
 * ───────────────────────────────────────────────────────────────────────────── */
export const retainerRoadmap: RoadmapMilestone[] = [
  {
    days: "Days 1–30",
    phaseLabel: "Foundation",
    theme: "Audit & Build",
    title: "Audit & Foundation",
    objective:
      "Understand the shop, agree on priorities, prepare the creator pipeline, and establish reliable tracking.",
    keyActivities: [
      "Shop and offer assessment",
      "Creator ICP definition",
      "Prospect qualification",
      "Commission planning",
      "Sampling approvals",
      "Reporting baseline",
    ],
    deliverables: [
      "Shop assessment",
      "Creator pipeline",
      "Approved operating plan",
      "Baseline scorecard",
    ],
  },
  {
    days: "Days 31–60",
    phaseLabel: "Activation",
    theme: "Launch & Optimize",
    title: "Activation & Optimization",
    objective:
      "Advance qualified creator collaborations, coordinate content, and review early engagement and commerce signals.",
    keyActivities: [
      "Sample dispatch",
      "Creator onboarding",
      "Follow-up sequences",
      "Content monitoring",
      "Commission and offer testing",
      "Weekly attribution review",
    ],
    deliverables: [
      "Creator activation report",
      "Sampling review",
      "Content tracker",
      "Optimization recommendations",
    ],
  },
  {
    days: "Days 61–90",
    phaseLabel: "Optimization & Scaling",
    theme: "Improve & Plan the Next Cycle",
    title: "Performance Review & Next-Cycle Planning",
    objective:
      "Evaluate campaign performance, deepen productive creator relationships, and plan the next growth cycle.",
    keyActivities: [
      "Top-creator retention",
      "Affiliate re-engagement",
      "Offer adjustments",
      "GMV Max review where applicable",
      "Performance diagnostics",
    ],
    deliverables: [
      "90-day performance review",
      "Creator portfolio assessment",
      "Recommended budget and sampling priorities",
      "Next-quarter operating roadmap",
    ],
  },
];

export const retainerRoadmapNote =
  "This roadmap is illustrative. Creator participation, sample delivery, content publication, advertising eligibility, and commercial results are subject to external dependencies. Exact outputs and responsibilities are agreed before work begins. The roadmap describes intended work and review checkpoints; it does not promise a fixed number of creators, videos, orders, or dollars in GMV by day 30, 60, or 90.";

/* ─────────────────────────────────────────────────────────────────────────────
 * For New Shops: A Focused 4–6-Week Launch Timeline
 * ───────────────────────────────────────────────────────────────────────────── */
export const launchProjectTimeline: LaunchTimelineStage[] = [
  {
    period: "Week 1",
    focus: "Access, brand intake, Seller Center audit",
    deliverables: [
      "Readiness and action checklist",
      "Intake and account permissions review",
      "Shop health baseline check",
    ],
  },
  {
    period: "Week 2",
    focus: "Listings, catalog and affiliate foundation",
    deliverables: [
      "Product listing and offer review for agreed SKUs",
      "Initial affiliate program configuration",
      "Proposed commission structure",
    ],
  },
  {
    period: "Weeks 3–4",
    focus: "Creator ICP, sourcing and outreach planning",
    deliverables: [
      "Ideal Creator Profile (ICP) framework",
      "Initial qualified creator prospect list",
      "Outreach messaging plan",
    ],
  },
  {
    period: "Weeks 5–6 (when required)",
    focus: "Final refinements, handover and training",
    deliverables: [
      "Launch readiness checklist and handover guide",
      "Operational recommendations report",
      "Next-step action plan",
    ],
  },
];

export const launchProjectNote =
  "Timings depend on access permissions, account eligibility, product assets, shipping arrangements, and client approvals. The final schedule is adapted to the brand's operational readiness.";

/* ─────────────────────────────────────────────────────────────────────────────
 * Transparent Reporting & Deliverables Overview
 * ───────────────────────────────────────────────────────────────────────────── */
export const reportingAreas: ReportingArea[] = [
  {
    area: "Creator pipeline",
    measure: "Prospects identified, contacted, responding",
    distinction: "Outreach volume is not activation",
  },
  {
    area: "Sampling",
    measure: "Approved, shipped, delivered, pending",
    distinction: "Sample requests are not always fulfilled samples",
  },
  {
    area: "Activation",
    measure: "Creators onboarded and actively collaborating",
    distinction: "Active creators are not necessarily published creators",
  },
  {
    area: "Content",
    measure: "Qualifying videos, LIVE activity",
    distinction: "Multiple posts may come from one creator",
  },
  {
    area: "Posting rate",
    measure: "Defined numerator ÷ eligible denominator",
    distinction: "Must state eligibility window",
  },
  {
    area: "Affiliate commerce",
    measure: "Affiliate-attributed GMV or revenue",
    distinction: "Use actual reporting-system label",
  },
  {
    area: "Shop performance",
    measure: "Total shop GMV, orders, refunds where available",
    distinction: "GMV is not profit",
  },
  {
    area: "Advertising",
    measure: "Spend, reported GMV Max ROI and campaign data",
    distinction: "Use platform definitions and identify attribution overlap",
  },
];

export const reportingStandardsNote =
  "Depending on the engagement, clients receive working documents and reports covering creator activity, sample fulfillment, published content, shop operations, and attributed commerce. Every reported KPI supports label, value, period, definition, and source. Total shop GMV, affiliate-attributed GMV, and advertising results are not automatically interchangeable.";

/* ─────────────────────────────────────────────────────────────────────────────
 * Process Final CTA
 * ───────────────────────────────────────────────────────────────────────────── */
export const processFinalCTA = {
  eyebrow: "READY TO SCALE",
  title: "Ready to Put a Clear Growth Process in Place?",
  description:
    "Explore the services available for your current stage, or share your brand's challenges to discuss a suitable engagement.",
  primaryCTA: {
    label: "Request a Growth Audit",
    href: siteRoutes.contact,
  },
  secondaryCTA: {
    label: "Explore Services",
    href: siteRoutes.services,
  },
  caseStudiesCTA: {
    label: "Explore Case Studies",
    href: siteRoutes.results,
  },
  disclosure:
    "The process describes a delivery framework, not a guarantee of specific commercial outcomes.",
} as const;
