/**
 * Performance Claims Inventory & Data Governance
 * Phase 1 Architecture: Authoritative registry of all quantitative performance claims,
 * including date ranges, metric definitions, primary sources, evidence status, and audit notes.
 */

export type ClaimEvidenceStatus =
  | "verified_screenshot"
  | "owner_confirmed"
  | "context_clarified"
  | "flagged_for_review";

export interface PerformanceClaim {
  id: string;
  claimValue: string | number;
  metricLabel: string;
  metricType: string;
  scope: "hero" | "case_study" | "career" | "service";
  context: string;
  reportingPeriod: { from: string; to: string; label: string };
  source: string;
  evidenceStatus: ClaimEvidenceStatus;
  auditNotes: string;
}

export const claimsInventory: PerformanceClaim[] = [
  // ── Hero & Sitewide Credibility Claims ─────────────────────────
  {
    id: "claim-hero-experience",
    claimValue: "4+",
    metricLabel: "Years Experience",
    metricType: "experience_years",
    scope: "hero",
    context: "UK & US brand-side & agency operations",
    reportingPeriod: { from: "2021-08-01", to: "2026-10-23", label: "Aug 2021 – Present" },
    source: "career_chronology",
    evidenceStatus: "context_clarified",
    auditNotes:
      "Clarified: 4+ years of overall multichannel e-commerce experience (Amazon, Shopify, TikTok Shop); 2+ years dedicated full-funnel TikTok Shop operator (starting Sep 2023 at Blue Star Manufacturing).",
  },
  {
    id: "claim-hero-shops-parallel",
    claimValue: "5",
    metricLabel: "Active Shops Managed in Parallel",
    metricType: "concurrent_capacity",
    scope: "hero",
    context: "Peak concurrent brand management capacity",
    reportingPeriod: { from: "2025-03-01", to: "2026-09-01", label: "Technisia tenure" },
    source: "agency_employment_record",
    evidenceStatus: "context_clarified",
    auditNotes:
      "Clarified: Reflects peak concurrent management capacity (up to 5 shops managed in parallel across agency retainers) rather than permanent concurrent client count.",
  },
  {
    id: "claim-hero-peak-gmv",
    claimValue: "$616K",
    metricLabel: "Highest Creator Attributed GMV",
    metricType: "creator_attributed_gmv",
    scope: "hero",
    context: "Contemporary Apparel — Q4 peak shopping",
    reportingPeriod: { from: "2025-11-18", to: "2025-12-23", label: "Nov 18 – Dec 23, 2025" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes:
      "Verified via contemporary-apparel-q4-performance.webp ($616,780.87 creator-attributed GMV).",
  },
  {
    id: "claim-hero-growth-rate",
    claimValue: "30%+",
    metricLabel: "Average MoM Growth",
    metricType: "mom_growth_rate",
    scope: "hero",
    context: "Technisia full-funnel TikTok Shop operations",
    reportingPeriod: { from: "2025-03-01", to: "2026-09-01", label: "Technisia tenure" },
    source: "agency_reporting_metrics",
    evidenceStatus: "context_clarified",
    auditNotes:
      "Reconciliation: Home highlights 30%+ average MoM growth during peak scaling periods, while About cites 20–30% sustained monthly growth across the full 18-month tenure. Terminology retained without altering unsupported claims.",
  },
  {
    id: "claim-hero-creators-activated",
    claimValue: "200+",
    metricLabel: "Creators Activated",
    metricType: "active_affiliates",
    scope: "hero",
    context: "Active affiliate roster across lifestyle & apparel",
    reportingPeriod: { from: "2025-11-01", to: "2026-07-29", label: "Multi-campaign active roster" },
    source: "seller_center_and_kalodata",
    evidenceStatus: "verified_screenshot",
    auditNotes:
      "Cross-verified with Sports Nutrition (475 active affiliates), Contemporary Apparel (35 daily posting), and Premium Apparel rosters.",
  },
  {
    id: "claim-career-roas",
    claimValue: "5x–15x",
    metricLabel: "Return on Ad Spend",
    metricType: "roas",
    scope: "career",
    context: "GMV Max auto & manual campaign scaling at Technisia",
    reportingPeriod: { from: "2025-03-01", to: "2026-09-01", label: "Technisia tenure" },
    source: "seller_center_ad_metrics",
    evidenceStatus: "context_clarified",
    auditNotes:
      "Clarified: Measures campaign ROAS (Return on Ad Spend) for GMV Max campaigns rather than total net company ROI.",
  },

  // ── Case 1: Contemporary Apparel Q4 ─────────────────────────────
  {
    id: "claim-case-01-gmv",
    claimValue: 616780.87,
    metricLabel: "Creator-Attributed GMV",
    metricType: "creator_attributed_gmv",
    scope: "case_study",
    context: "Scaling Creator-Driven Q4 GMV",
    reportingPeriod: { from: "2025-11-18", to: "2025-12-23", label: "Nov 18 – Dec 23, 2025" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Reported directly in Seller Center screenshot contemporary-apparel-q4-performance.webp.",
  },
  {
    id: "claim-case-01-commission",
    claimValue: 87469.1,
    metricLabel: "Estimated Commission",
    metricType: "estimated_commission",
    scope: "case_study",
    context: "Generated for participating creators",
    reportingPeriod: { from: "2025-11-18", to: "2025-12-23", label: "Nov 18 – Dec 23, 2025" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Confirmed in Seller Center dashboard.",
  },

  // ── Case 2: Sports Nutrition Affiliate-First ────────────────────
  {
    id: "claim-case-02-revenue",
    claimValue: 91030,
    metricLabel: "Total Revenue (30 Days)",
    metricType: "total_revenue",
    scope: "case_study",
    context: "Affiliate-first shop model in saturated category",
    reportingPeriod: { from: "2026-06-29", to: "2026-07-28", label: "Jun 29 – Jul 28, 2026" },
    source: "kalodata_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Verified in Kalodata screenshot sports-nutrition-affiliate-revenue.webp.",
  },
  {
    id: "claim-case-02-affiliate-share",
    claimValue: 95.47,
    metricLabel: "Affiliate Revenue Share",
    metricType: "affiliate_revenue_share",
    scope: "case_study",
    context: "$86.90K affiliate-driven revenue out of $91.03K total",
    reportingPeriod: { from: "2026-06-29", to: "2026-07-28", label: "Jun 29 – Jul 28, 2026" },
    source: "kalodata_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Kept strictly distinct from post rate; calculated from Kalodata channel distribution.",
  },

  // ── Case 3: Premium Apparel Lean Sampling ───────────────────────
  {
    id: "claim-case-03-total-gmv",
    claimValue: 129000,
    metricLabel: "Total Shop GMV",
    metricType: "total_shop_gmv",
    scope: "case_study",
    context: "High-AOV lean sampling campaign",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Seller Center screenshot premium-apparel-performance.webp ($129K total GMV).",
  },
  {
    id: "claim-case-03-post-rate",
    claimValue: 57.6,
    metricLabel: "Post Rate",
    metricType: "post_rate",
    scope: "case_study",
    context: "Roster-best seeding fulfillment rate on 125 samples",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Confirmed in Seller Center dashboard.",
  },

  // ── Case 4: Fine Jewellery Aesthetic Pipeline ───────────────────
  {
    id: "claim-case-04-total-gmv",
    claimValue: 14700,
    metricLabel: "Total Shop GMV",
    metricType: "total_shop_gmv",
    scope: "case_study",
    context: "Curated creator pipeline for high-trust luxury jewellery",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Seller Center screenshot fine-jewellery-performance.webp.",
  },
  {
    id: "claim-case-04-post-rate",
    claimValue: 52.37,
    metricLabel: "Post Rate",
    metricType: "post_rate",
    scope: "case_study",
    context: "Repeat posting on fine jewellery",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Confirmed in Seller Center dashboard.",
  },

  // ── Case 5: Beauty Brand Ramp-Up ────────────────────────────────
  {
    id: "claim-case-05-total-gmv",
    claimValue: 7500,
    metricLabel: "Total Shop GMV",
    metricType: "total_shop_gmv",
    scope: "case_study",
    context: "Top of funnel to GMV ramp for new store",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Seller Center screenshot beauty-performance.webp.",
  },
  {
    id: "claim-case-05-creators-reached",
    claimValue: 70400,
    metricLabel: "Creators Reached",
    metricType: "creators_reached",
    scope: "case_study",
    context: "Top of funnel outreach scale across 177.9K messages",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1 – Jul 29, 2026" },
    source: "seller_center_screenshot",
    evidenceStatus: "verified_screenshot",
    auditNotes: "Confirmed in Seller Center dashboard.",
  },
];
