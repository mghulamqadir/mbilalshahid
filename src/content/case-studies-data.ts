/**
 * Phase 3 — Case Studies & Results Canonical Data Source
 * Centralized, developer-ready content specification for the Results listing
 * and all 5 individual case study dossiers.
 */

import { siteRoutes } from "./navigation";

export interface FeaturedResultHighlight {
  id: string;
  slug: string;
  category: string;
  title: string;
  primaryMetric: {
    value: string;
    label: string;
  };
  description: string;
  ctaText: string;
  href: string;
}

export interface MetricDefinitionCard {
  title: string;
  term: string;
  explanation: string;
  importance: string;
}

export const resultsListingHero = {
  eyebrow: "CREATOR COMMERCE · CAMPAIGN PERFORMANCE",
  title: "TikTok Shop Case Studies & Results: Real Campaigns. Measurable Results. Clear Execution.",
  subtitle:
    "Explore selected TikTok Shop campaigns across apparel, sports nutrition, fine jewellery, and beauty. Each case study highlights the campaign context, creator affiliate strategy, reported performance, and operational work behind the results.",
  primaryCTA: {
    label: "Explore Case Studies",
    href: "#case-studies-grid",
  },
  secondaryCTA: {
    label: "Discuss Your Brand",
    href: siteRoutes.contact,
  },
} as const;

export const featuredResultsHighlights: FeaturedResultHighlight[] = [
  {
    id: "contemporary-apparel",
    slug: "contemporary-apparel-q4",
    category: "Apparel",
    title: "Contemporary Apparel — Creator-Led Holiday Growth",
    primaryMetric: {
      value: "$616.8K",
      label: "Creator-Attributed GMV",
    },
    description:
      "A Q4 apparel campaign combining creator video activity and LIVE commerce during the peak holiday shopping period.",
    ctaText: "Explore Apparel Case Study",
    href: `${siteRoutes.results}/contemporary-apparel-q4`,
  },
  {
    id: "sports-nutrition",
    slug: "sports-nutrition-affiliate-first",
    category: "Sports Nutrition",
    title: "Sports Nutrition — Affiliate-Led Revenue",
    primaryMetric: {
      value: "95.47%",
      label: "Affiliate Revenue Share",
    },
    description:
      "A 30-day campaign illustrating the high contribution of creator affiliates to reported total shop revenue ($91.03K total revenue).",
    ctaText: "Explore Nutrition Case Study",
    href: `${siteRoutes.results}/sports-nutrition-affiliate-first`,
  },
  {
    id: "premium-apparel",
    slug: "premium-apparel-lean-sampling",
    category: "Apparel",
    title: "Premium Apparel — Selective Sampling & Creator Reach",
    primaryMetric: {
      value: "3.3M",
      label: "Reported Video Views",
    },
    description:
      "A selective creator sampling and content program supporting product visibility ($129K total shop GMV; $22.4K affiliate GMV).",
    ctaText: "Explore Premium Apparel Case Study",
    href: `${siteRoutes.results}/premium-apparel-lean-sampling`,
  },
];

export const metricDefinitions: MetricDefinitionCard[] = [
  {
    title: "Total Shop GMV vs. Affiliate GMV",
    term: "Attribution Scope",
    explanation:
      "Total Shop GMV represents the gross sales value recorded across the entire TikTok Shop. Affiliate-Attributed GMV isolates orders driven directly by creators tagging products in short-form videos and LIVE streams.",
    importance:
      "Separating the two ensures shop baseline organic sales are not erroneously claimed as creator-generated output.",
  },
  {
    title: "Revenue vs. GMV vs. Net Profit",
    term: "Commercial Distinction",
    explanation:
      "GMV represents gross transaction value prior to refunds, taxes, and platform fees. Revenue reflects recognized sales in reporting consoles (e.g. Kalodata). None of these figures represent net corporate profit.",
    importance:
      "Campaign evaluation focuses on top-line revenue velocity, product demand, and channel contribution without making unverified profit claims.",
  },
  {
    title: "Video Count vs. Creator Count",
    term: "Cadence & Retention",
    explanation:
      "A single activated creator frequently produces multiple videos throughout a campaign. Roster performance tracks both the number of unique creators onboarded and the total content volume published.",
    importance:
      "A high video-to-creator ratio demonstrates strong creator retention and willingness to post repeatedly without requiring new sample costs.",
  },
  {
    title: "Sampling & Posting Rate Calculation",
    term: "Fulfillment Economics",
    explanation:
      "Posting rate measures the proportion of seeded creators who fulfill their commitment by publishing qualifying videos within the tracking window, rather than dividing raw video count by total samples shipped.",
    importance:
      "Guards seeding inventory by penalizing non-posting sample recipients and directing future product drops toward proven closers.",
  },
];

export const resultsAuditCTA = {
  eyebrow: "LET'S DISCUSS YOUR TIKTOK SHOP GROWTH",
  title: "Looking to Improve Creator Partnerships, Affiliate Participation, or Shop Operations?",
  subtitle:
    "Share your current challenges and explore how a structured creator commerce approach could support your brand.",
  buttonLabel: "Request a Growth Audit",
  buttonHref: siteRoutes.contact,
  subtext: "Independent TikTok Shop specialist · No guaranteed sales or ROI",
} as const;

export interface CanonicalDossier {
  slug: string;
  code: string;
  category: "apparel" | "nutrition" | "jewellery" | "beauty";
  categoryLabel: string;
  sector: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  market: string;
  periodLabel: string;
  reportingPeriod: { from: string; to: string };
  headlineOutcome: string;
  headlineMetricType: string;
  role: string;
  roleScope: string;
  snapshotMetrics: {
    value: string;
    label: string;
    definition: string;
    period: string;
  }[];
  challenge: string;
  roleOwnership: {
    personalManagement: string[];
    collaborativeScope: string[];
  };
  strategy: {
    title: string;
    points: string[];
  }[];
  keyLearnings: {
    takeaway: string;
    explanation: string;
  }[];
  evidence: {
    filename: string;
    title: string;
    platform: string;
    metricReported: string;
    period: string;
    caption: string;
  }[];
  relatedSlugs: [string, string];
  cardData: {
    pillTag: string;
    cardTitle: string;
    primaryValue: string;
    primaryLabel: string;
    secondaryStats: { value: string; label: string }[];
    thumbnail: string;
  };
}

export const canonicalDossiers: Record<string, CanonicalDossier> = {
  "contemporary-apparel-q4": {
    slug: "contemporary-apparel-q4",
    code: "CASE-01",
    category: "apparel",
    categoryLabel: "Apparel",
    sector: "Contemporary Apparel Brand (US)",
    title: "Creator-Led Holiday Growth for a Contemporary Apparel Brand",
    seoTitle: "Apparel TikTok Shop Growth Case Study | Bilal Shahid",
    seoDescription:
      "How a Q4 creator affiliate and LIVE commerce program generated $616.8K creator-attributed GMV and 1,661 videos for a US contemporary apparel brand.",
    market: "United States (US Market)",
    periodLabel: "Nov 18 – Dec 23, 2025 (Q4 Peak Window)",
    reportingPeriod: { from: "2025-11-18", to: "2025-12-23" },
    headlineOutcome: "$616.8K Creator-Attributed GMV",
    headlineMetricType: "Creator-Attributed GMV (Seller Center)",
    role: "TikTok Shop Creator Engine & LIVE Shopping Coordinator",
    roleScope:
      "Direct individual ownership of creator recruitment, cooperation chat operations, LIVE host scheduling, and daily posting accountability; collaborated with brand founder on inventory releases and promotional vouchers.",
    snapshotMetrics: [
      {
        value: "$616,780.87",
        label: "Creator-Attributed GMV",
        definition: "Gross merchandise value directly linked to creator short-form videos and LIVE streams in TikTok Shop Seller Center.",
        period: "Nov 18 – Dec 23, 2025",
      },
      {
        value: "1,661",
        label: "Creator Videos Posted",
        definition: "Total qualifying affiliate video posts published and linked to product showcase listings across the campaign period.",
        period: "Nov 18 – Dec 23, 2025",
      },
      {
        value: "210",
        label: "LIVE Streams Held",
        definition: "Dedicated shopping live sessions conducted by authorized creator affiliates and stream hosts.",
        period: "Nov 18 – Dec 23, 2025",
      },
      {
        value: "9,337",
        label: "Items Sold via Creators",
        definition: "Units purchased through affiliate showcase links during the holiday promotion window.",
        period: "Nov 18 – Dec 23, 2025",
      },
    ],
    challenge:
      "During the high-competition Q4 holiday shopping window, organic brand reach is suppressed without massive content volume. The brand needed an aggressive creator cadence and continuous live shopping presence without inflating paid ad costs or diluting brand positioning.",
    roleOwnership: {
      personalManagement: [
        "High-velocity creator prospecting, qualification, and direct negotiation",
        "Cooperation chat management ensuring rapid product alerts and voucher updates",
        "Daily creator posting accountability and live-stream schedule enforcement",
        "Commission structuring and creator performance bonus tracking",
      ],
      collaborativeScope: [
        "Coordination with brand inventory team to prevent out-of-stock items on top affiliate showcases",
        "Alignment with Seller Center campaign center flash sales and vouchers",
      ],
    },
    strategy: [
      {
        title: "Daily Cadence Roster",
        points: [
          "Recruited high-affinity fashion UGC creators willing to adhere to a daily posting schedule",
          "Maintained 35 daily active posting creators, resulting in 31 daily creators closing measurable sales",
          "Layered short-form video hooks with scheduled 2–4 hour live shopping events",
        ],
      },
      {
        title: "Tiered Commission Incentives",
        points: [
          "Structured escalating commission tiers rewarding creators who crossed 10 and 25 weekly video milestones",
          "Distributed $87,469 in creator commission, ensuring top closers remained exclusive to the brand",
          "Enabled top performers like @be.lush and @heyitsamber4 to maintain daily multi-video volume",
        ],
      },
    ],
    keyLearnings: [
      {
        takeaway: "Daily compounding outperforms one-off viral spikes",
        explanation:
          "Rather than betting on a single viral video, maintaining 31 daily converting creators produced consistent baseline revenue throughout the entire 35-day Q4 window.",
      },
      {
        takeaway: "LIVE shopping provides immediate conversion for warm video audiences",
        explanation:
          "Creators whose short videos generated interest were able to convert high-intent viewers directly during scheduled evening LIVE streams.",
      },
    ],
    evidence: [
      {
        filename: "contemporary-apparel-q4-performance.webp",
        title: "TikTok Shop Seller Center Q4 Performance Dashboard",
        platform: "TikTok Shop Seller Center",
        metricReported: "$616,780.87 Creator-Attributed GMV · 9,337 Items Sold · 1,661 Videos",
        period: "Nov 18, 2025 – Dec 23, 2025",
        caption:
          "Official Seller Center dashboard confirming $616,780.87 in creator-attributed GMV, $87,469.10 creator commission, 1,661 videos posted, and 210 LIVE streams.",
      },
    ],
    relatedSlugs: ["premium-apparel-lean-sampling", "sports-nutrition-affiliate-first"],
    cardData: {
      pillTag: "Contemporary Apparel",
      cardTitle: "Creator-Led Holiday Growth",
      primaryValue: "$616.8K",
      primaryLabel: "Reported creator-attributed GMV",
      secondaryStats: [
        { value: "1,661", label: "Creator Videos" },
        { value: "210", label: "LIVE Streams" },
        { value: "9,337", label: "Items Sold" },
      ],
      thumbnail: "/media/cases/thumb-apparel-q4.png",
    },
  },

  "sports-nutrition-affiliate-first": {
    slug: "sports-nutrition-affiliate-first",
    code: "CASE-02",
    category: "nutrition",
    categoryLabel: "Sports Nutrition",
    sector: "Sports Nutrition Brand (US)",
    title: "Building an Affiliate-Led Revenue Engine for Sports Nutrition",
    seoTitle: "Sports Nutrition Affiliate Case Study | Bilal Shahid",
    seoDescription:
      "Discover how a sports nutrition brand scaled to $91.03K total revenue with a 95.47% affiliate revenue share across 475 active creators on TikTok Shop.",
    market: "United States (US Market)",
    periodLabel: "Jun 29 – Jul 28, 2026 (30-Day Managed Window)",
    reportingPeriod: { from: "2026-06-29", to: "2026-07-28" },
    headlineOutcome: "95.47% Affiliate Revenue Share ($91.03K Revenue)",
    headlineMetricType: "Affiliate Revenue Contribution (Kalodata)",
    role: "TikTok Shop Affiliate Program Lead",
    roleScope:
      "Sole operational ownership of affiliate recruitment, targeted creator outreach, Kalodata market intelligence, and commission optimization; reported weekly performance to executive management.",
    snapshotMetrics: [
      {
        value: "$91,030.00",
        label: "Total Shop Revenue Reported",
        definition: "Total recognized revenue generated across the TikTok Shop storefront across the 30-day tracking period.",
        period: "Jun 29 – Jul 28, 2026",
      },
      {
        value: "95.47%",
        label: "Affiliate Revenue Share",
        definition: "Proportion of total shop revenue directly attributable to creator affiliate links ($86.90K affiliate revenue).",
        period: "Jun 29 – Jul 28, 2026",
      },
      {
        value: "475",
        label: "Active Affiliate Creators",
        definition: "Unique fitness and wellness creators actively tagging products and generating live video impressions.",
        period: "Jun 29 – Jul 28, 2026",
      },
      {
        value: "747",
        label: "Affiliate Videos Posted",
        definition: "Creator videos posted during the window, maintaining a steady cadence of ~24 videos daily.",
        period: "Jun 29 – Jul 28, 2026",
      },
    ],
    challenge:
      "The sports nutrition category is fiercely competitive, with saturated ad auctions driving high customer acquisition costs. The brand required a predictable, compounding customer acquisition channel driven by organic creator advocacy rather than heavy reliance on paid ads.",
    roleOwnership: {
      personalManagement: [
        "Creator identification across fitness, bodybuilding, and wellness micro-communities",
        "Outreach messaging emphasizing authentic workout routines and supplement timing",
        "Kalodata competitor tracking to uncover winning affiliate commission thresholds",
        "Direct retention and bonus negotiations for top performers like @reps.2.redemption ($10.74K GMV)",
      ],
      collaborativeScope: [
        "Inventory planning with brand operations to support ~24 daily video link requests",
      ],
    },
    strategy: [
      {
        title: "High-Volume Micro-Affiliate Recruitment",
        points: [
          "Targeted mid-tier and micro fitness creators whose audience demonstrated genuine supplement buying habits",
          "Prioritized raw, authentic gym demonstration content over polished, scripted promotional reads",
          "Built an active community roster of 475 affiliates generating regular posting cadence",
        ],
      },
      {
        title: "Attribution & Channel Governance",
        points: [
          "Utilized Kalodata channel tracking to confirm creator attribution vs. direct shop search",
          "Ranked creator performance by GMV contribution, rewarding top 10 creators with custom product bundles",
          "Top affiliate @reps.2.redemption contributed $10,740 across 75 linked videos",
        ],
      },
    ],
    keyLearnings: [
      {
        takeaway: "Creator affiliates can sustain the majority of store revenue",
        explanation:
          "By maintaining an active roster of 475 creators posting ~24 videos daily, affiliate revenue accounted for 95.47% of total sales, minimizing paid ad expenditure.",
      },
      {
        takeaway: "Authentic gym routines outperform scripted promotional ads",
        explanation:
          "In sports nutrition, creators demonstrating actual pre-workout or post-workout usage in gym environments converted at significantly higher rates than staged studio showcases.",
      },
    ],
    evidence: [
      {
        filename: "sports-nutrition-affiliate-revenue.webp",
        title: "Kalodata Core Metrics & Channel Strategy Overview",
        platform: "Kalodata Analytics",
        metricReported: "$91.03K Total Revenue · $86.90K Affiliate Revenue (95.47%) · 475 Affiliates",
        period: "Jun 29, 2026 – Jul 28, 2026",
        caption:
          "Kalodata platform metrics detailing $91.03K total revenue, 95.47% affiliate revenue contribution, 475 active affiliates, and 747 videos.",
      },
      {
        filename: "sports-nutrition-top-affiliates.webp",
        title: "Top Affiliates Ranked by GMV Contribution",
        platform: "Kalodata Analytics",
        metricReported: "Ranked contributor leaderboard: @reps.2.redemption ($10.74K solo GMV)",
        period: "Jun 29, 2026 – Jul 28, 2026",
        caption:
          "Leaderboard confirming top revenue drivers including @reps.2.redemption ($10.74K GMV, 75 videos) and @organzambrano ($9.57K GMV).",
      },
    ],
    relatedSlugs: ["contemporary-apparel-q4", "beauty-brand-ramp-up"],
    cardData: {
      pillTag: "Sports Nutrition",
      cardTitle: "Affiliate-Led Revenue",
      primaryValue: "95.47%",
      primaryLabel: "Reported affiliate revenue share",
      secondaryStats: [
        { value: "$91.03K", label: "Total Revenue" },
        { value: "475", label: "Active Affiliates" },
        { value: "747", label: "Videos Posted" },
      ],
      thumbnail: "/media/cases/thumb-sports-nutrition.png",
    },
  },

  "premium-apparel-lean-sampling": {
    slug: "premium-apparel-lean-sampling",
    code: "CASE-03",
    category: "apparel",
    categoryLabel: "Apparel",
    sector: "Premium Apparel Brand (US)",
    title: "Selective Creator Sampling and Measurable Reach for Premium Apparel",
    seoTitle: "Premium Apparel Creator Campaign | Bilal Shahid",
    seoDescription:
      "How a disciplined creator sampling program generated 3.3M views, a 57.60% post rate, and $129K total shop GMV for a luxury fashion label on TikTok Shop.",
    market: "United States (US Market)",
    periodLabel: "Jun 1 – Jul 29, 2026",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29" },
    headlineOutcome: "3.3M Video Views · 57.60% Post Rate on 125 Samples",
    headlineMetricType: "Content Reach & Seeding Post Rate (Seller Center)",
    role: "End-to-End Creator Seeding & Shop Operations Specialist",
    roleScope:
      "Managed aesthetic creator vetting, sampling approval gates, post-dispatch tracking, affiliate voucher setup, and Seller Center campaign monitoring.",
    snapshotMetrics: [
      {
        value: "3.3M",
        label: "Reported Video Views",
        definition: "Total verified video views accumulated across 291 creator videos linked to product showcases.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "57.60%",
        label: "Seeding Post Rate",
        definition: "Proportion of sampled creators who published qualifying showcase videos within the campaign tracking window (72 creators posted from 125 samples).",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "$129,000",
        label: "Total Shop GMV",
        definition: "Overall merchandise value generated across all sales channels within the TikTok Shop storefront.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "$22,400",
        label: "Affiliate-Attributed GMV",
        definition: "Direct sales attributed exclusively to creator affiliate showcase links (distinct from total shop GMV).",
        period: "Jun 1 – Jul 29, 2026",
      },
    ],
    challenge:
      "High-AOV premium fashion brands risk brand erosion and wasted inventory if seeding is performed haphazardly. Mass-gifting often yields low posting rates and off-brand UGC. The brand required strict aesthetic controls, disciplined sample budgets, and measurable commercial return.",
    roleOwnership: {
      personalManagement: [
        "Rigorous aesthetic-fit qualification evaluating lighting, styling taste, and audience demographics",
        "Personalized outreach to high-converting fashion UGC creators",
        "Disciplined sample budgeting, shipping just 125 curated units to pre-screened creators",
        "Logistics tracking and post-send follow-through until video publication",
      ],
      collaborativeScope: [
        "Styling moodboard alignment with brand creative director",
      ],
    },
    strategy: [
      {
        title: "Selective Sampling Protocol",
        points: [
          "Filtered 36.2K potential prospects down to 125 tightly qualified creators",
          "Provided moodboard styling parameters without scripting the creator's authentic voice",
          "Achieved a roster-best 57.60% post rate, generating 291 videos from 125 samples shipped",
        ],
      },
      {
        title: "AOV & Visibility Compound",
        points: [
          "Generated 3.3 million organic video views, elevating brand profile across US fashion circles",
          "Closed 1,100 customer orders at a healthy average order value of $116.62",
          "Top affiliate @italiajjacqueline delivered $2,363 in solo affiliate GMV",
        ],
      },
    ],
    keyLearnings: [
      {
        takeaway: "Lean sampling frequently outperforms mass seeding",
        explanation:
          "Shipping 125 curated samples with high-touch follow-up yielded 291 videos and a 57.60% post rate, outperforming untargeted mass seeding in cost efficiency and brand aesthetic consistency.",
      },
      {
        takeaway: "Separate total shop GMV from affiliate GMV in reporting",
        explanation:
          "High content reach lifted overall shop baseline sales to $129K total GMV, while direct affiliate links captured $22.4K in measurable affiliate-attributed GMV.",
      },
    ],
    evidence: [
      {
        filename: "premium-apparel-performance.webp",
        title: "TikTok Shop Performance Dashboard — Premium Apparel",
        platform: "TikTok Shop Seller Center",
        metricReported: "$129K Total GMV · $22.4K Affiliate GMV · 3.3M Video Views · 57.60% Post Rate",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Seller Center dashboard showing $129K total shop GMV, $22.4K affiliate GMV, 3.3M video views, and a 57.60% post rate.",
      },
      {
        filename: "premium-apparel-top-videos-affiliates.webp",
        title: "Top Performing Videos & Affiliates Breakdown",
        platform: "TikTok Shop Seller Center",
        metricReported: "Top creators: @italiajjacqueline ($2,363 GMV), @planetamariel ($1,949 GMV)",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Leaderboard confirming top converting fashion creators including @italiajjacqueline ($2,363 GMV) and @planetamariel ($1,949 GMV).",
      },
    ],
    relatedSlugs: ["contemporary-apparel-q4", "fine-jewellery-aesthetic-pipeline"],
    cardData: {
      pillTag: "Premium Apparel",
      cardTitle: "Selective Sampling & Creator Reach",
      primaryValue: "3.3M",
      primaryLabel: "Reported video views",
      secondaryStats: [
        { value: "$129K", label: "Total Shop GMV" },
        { value: "$22.4K", label: "Affiliate GMV" },
        { value: "57.60%", label: "Post Rate" },
      ],
      thumbnail: "/media/cases/thumb-premium-apparel.png",
    },
  },

  "fine-jewellery-aesthetic-pipeline": {
    slug: "fine-jewellery-aesthetic-pipeline",
    code: "CASE-04",
    category: "jewellery",
    categoryLabel: "Fine Jewellery",
    sector: "Fine Jewellery Brand (US)",
    title: "Developing an Aesthetic Creator Content Pipeline for Fine Jewellery",
    seoTitle: "Jewellery Creator Sampling Case Study | Bilal Shahid",
    seoDescription:
      "A curated creator sampling pipeline for fine jewellery generating 389 videos, 464 samples sent, and a 52.37% post rate on TikTok Shop.",
    market: "United States (US Market)",
    periodLabel: "Jun 1 – Jul 29, 2026",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29" },
    headlineOutcome: "389 Creator Videos · 464 Samples · 52.37% Post Rate",
    headlineMetricType: "Content Production & Seeding Pipeline (Seller Center)",
    role: "TikTok Shop Creator & Affiliate Program Manager",
    roleScope:
      "Managed macro-aesthetic creator screening, delicate sample fulfillment logistics, repeat-creator incentive structures, and Seller Center campaign coordination.",
    snapshotMetrics: [
      {
        value: "389",
        label: "Reported Creator Videos",
        definition: "Total qualifying showcase videos published highlighting product craftsmanship, ring styling, and metal details.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "464",
        label: "Samples Fulfilled",
        definition: "Total delicate fine jewellery sample units dispatched to qualified creators passing aesthetic screening.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "52.37%",
        label: "Reported Posting Rate",
        definition: "Percentage of sampled creators who published qualifying showcase videos within the tracking period (calculated from active compliant creators vs. eligible sample recipients).",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "$14,700",
        label: "Total Shop GMV ($11.7K Affiliate)",
        definition: "Total recorded shop GMV ($14.7K) with $11.7K directly attributed to affiliate creator posts across 240 orders ($61.41 AOV).",
        period: "Jun 1 – Jul 29, 2026",
      },
    ],
    challenge:
      "Jewellery requires exceptional aesthetic taste, precise macro lighting, and trusted creator presentation. Low-effort unboxings fail to convey precious metal craftsmanship and fail to convert high-consideration buyers.",
    roleOwnership: {
      personalManagement: [
        "Aesthetic qualification verifying creator camera setups, hand styling, and lighting quality",
        "High-touch sample tracking for fine jewelry items",
        "Creator relationship nurturing turning one-off posters into repeat contributors",
        "Commission tier coordination and promotional flash sale vouchers",
      ],
      collaborativeScope: [
        "Catalog packaging coordination with warehouse fulfillment team",
      ],
    },
    strategy: [
      {
        title: "Macro-Aesthetic Creator Qualification",
        points: [
          "Screened creators specifically for natural daylight video production and clean macro product detailing",
          "Provided clear guidelines on demonstrating ring sizing, necklace layering, and everyday tarnish resistance",
          "Focused on creator retention: top closer @dezbreel produced repeat content generating $4,904 in solo GMV",
        ],
      },
      {
        title: "Repeat Content Compounding",
        points: [
          "Recognized that jewellery buyers require multiple touchpoints prior to purchasing",
          "Incentivized top-converting creators with follow-up gifting packages to secure second and third video posts",
          "Accumulated 741.3K views and 240 customer orders at a $61.41 AOV",
        ],
      },
    ],
    keyLearnings: [
      {
        takeaway: "Category-native creators outperform broad lifestyle accounts",
        explanation:
          "In fine jewellery, creators who already discuss everyday accessories, metal allergies, and styling aesthetics convert at dramatically higher rates than general influencers.",
      },
      {
        takeaway: "Posting rate reflects creator compliance, not simple video division",
        explanation:
          "With 389 videos from 464 samples, creators who posted often created multiple videos. The 52.37% posting rate accurately captures unique creator compliance rather than raw video count.",
      },
    ],
    evidence: [
      {
        filename: "fine-jewellery-performance.webp",
        title: "TikTok Shop Performance Dashboard — Fine Jewellery",
        platform: "TikTok Shop Seller Center",
        metricReported: "389 Videos Posted · 464 Samples Shipped · 52.37% Post Rate · $14.7K GMV",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Seller Center metrics documenting 389 creator videos, 464 samples shipped, 52.37% post rate, and $14.7K total shop GMV ($11.7K affiliate GMV).",
      },
      {
        filename: "fine-jewellery-top-videos-affiliates.webp",
        title: "Top Videos & Top Affiliates Breakdown",
        platform: "TikTok Shop Seller Center",
        metricReported: "Top creator @dezbreel driving $4,904.20 solo GMV",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Leaderboard detailing top affiliate @dezbreel driving $4,904.20 in solo GMV, followed by @stylebybrittxo ($1,447.27 GMV).",
      },
    ],
    relatedSlugs: ["premium-apparel-lean-sampling", "beauty-brand-ramp-up"],
    cardData: {
      pillTag: "Fine Jewellery",
      cardTitle: "Aesthetic Creator Content Pipeline",
      primaryValue: "389",
      primaryLabel: "Reported creator videos",
      secondaryStats: [
        { value: "464", label: "Samples Shipped" },
        { value: "52.37%", label: "Post Rate" },
        { value: "$14.7K", label: "Total GMV" },
      ],
      thumbnail: "/media/cases/thumb-jewellery.png",
    },
  },

  "beauty-brand-ramp-up": {
    slug: "beauty-brand-ramp-up",
    code: "CASE-05",
    category: "beauty",
    categoryLabel: "Beauty",
    sector: "Beauty Brand (US)",
    title: "Creator Outreach and Affiliate Activation for a Beauty Brand",
    seoTitle: "Beauty Creator Affiliate Case Study | Bilal Shahid",
    seoDescription:
      "A structured top-of-funnel outreach and seeding ramp-up generating 221 videos, 70.4K creators reached, and $7.5K GMV for an emerging TikTok Shop beauty brand.",
    market: "United States (US Market)",
    periodLabel: "Jun 1 – Jul 29, 2026",
    reportingPeriod: { from: "2026-06-01", to: "2026-07-29" },
    headlineOutcome: "221 Creator Videos · 70.4K Creators Reached ($7.5K GMV)",
    headlineMetricType: "Store Launch Ramp-Up & Creator Activation (Seller Center)",
    role: "Full-Funnel Creator Outreach & Sampling Lead",
    roleScope:
      "Planned and executed high-volume Seller Center invitation campaigns, creator screening, sample dispatch validation, and affiliate voucher coordination during the shop's initial launch ramp.",
    snapshotMetrics: [
      {
        value: "221",
        label: "Creator Videos Posted",
        definition: "Short-form beauty showcase videos published by activated creators demonstrating product application.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "70,400",
        label: "Creators Reached",
        definition: "Total top-of-funnel qualified beauty creator profiles identified and targeted through structured invitation campaigns.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "188",
        label: "Samples Shipped",
        definition: "Curated product sample units dispatched to beauty creators passing response screening.",
        period: "Jun 1 – Jul 29, 2026",
      },
      {
        value: "$7,500",
        label: "Total Shop GMV ($6.2K Affiliate)",
        definition: "Initial ramp-up sales recorded across the newly launched store ($7.5K total GMV, with $6.2K affiliate-attributed GMV across 282 orders).",
        period: "Jun 1 – Jul 29, 2026",
      },
    ],
    challenge:
      "A newly launching TikTok Shop starts with zero review velocity, zero organic ranking, and zero social proof. Convincing beauty reviewers to request samples and publish content requires systematic, high-volume outreach paired with fast sample fulfillment.",
    roleOwnership: {
      personalManagement: [
        "Creator segmentation across skincare, cosmetics, and beauty routine niches",
        "Systematic outbound touchpoints across Seller Center invitation tools (177.9K invitations sent)",
        "Sample approval validation to filter out untracked freebie collectors",
        "Follow-through tracking ensuring shipped samples resulted in published review videos",
      ],
      collaborativeScope: [
        "Coordination with brand packaging team for unboxing inserts and promotional vouchers",
      ],
    },
    strategy: [
      {
        title: "High-Volume Structured Outreach",
        points: [
          "Targeted 70.4K creators using categorized invitation sequences tailored for skincare and makeup creators",
          "Filtered incoming collaboration requests strictly for creators with documented engagement",
          "Dispatched 188 samples, generating 221 published videos and 282 initial store orders",
        ],
      },
      {
        title: "Review Momentum & Affiliate Activation",
        points: [
          "Activated a dedicated core of converting creators including top affiliate @indraniphillips ($2,019 solo GMV)",
          "Accumulated 229.7K video views, building initial algorithm authority and search visibility for the brand",
          "Established the product review base required for subsequent paid ad and GMV Max scaling",
        ],
      },
    ],
    keyLearnings: [
      {
        takeaway: "Outreach volume filters into accountable downstream sales",
        explanation:
          "70.4K creators reached filtered down into 188 samples shipped, 221 videos, and 282 initial orders, providing the initial review momentum essential for newly launched shops.",
      },
      {
        takeaway: "Fast sampling turnaround accelerates review velocity",
        explanation:
          "Shipping samples within 48 hours of creator confirmation significantly increased post completion rate and allowed the brand to capture early search momentum.",
      },
    ],
    evidence: [
      {
        filename: "beauty-performance.webp",
        title: "TikTok Shop Performance Dashboard — Beauty",
        platform: "TikTok Shop Seller Center",
        metricReported: "$7.5K Total GMV · 221 Videos Posted · 188 Samples Shipped · 70.4K Reached",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Seller Center performance dashboard confirming $7.5K total shop GMV ($6.2K affiliate GMV), 177.9K invitations sent, 188 samples shipped, and 221 videos.",
      },
      {
        filename: "beauty-top-affiliates.webp",
        title: "Top Affiliates Ranked by GMV",
        platform: "TikTok Shop Seller Center",
        metricReported: "Top creator @indraniphillips driving $2,019.34 GMV",
        period: "Jun 1, 2026 – Jul 29, 2026",
        caption:
          "Affiliate breakdown confirming top revenue contributor @indraniphillips ($2,019.34 GMV), followed by @ryryfindss ($570.89 GMV).",
      },
    ],
    relatedSlugs: ["fine-jewellery-aesthetic-pipeline", "sports-nutrition-affiliate-first"],
    cardData: {
      pillTag: "Beauty",
      cardTitle: "Creator Outreach & Activation",
      primaryValue: "$7.5K",
      primaryLabel: "Reported total shop GMV",
      secondaryStats: [
        { value: "221", label: "Videos Posted" },
        { value: "188", label: "Samples Shipped" },
        { value: "70.4K", label: "Creators Reached" },
      ],
      thumbnail: "/media/cases/thumb-beauty.png",
    },
  },
};
