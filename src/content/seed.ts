export type MetricUnit = "usd" | "count" | "percent";
export type MetricType =
  | "creator_attributed_gmv"
  | "affiliate_gmv"
  | "total_shop_gmv"
  | "total_revenue"
  | "video_views"
  | "orders"
  | "items_sold"
  | "units_sold"
  | "videos_posted"
  | "samples_shipped"
  | "creators_reached"
  | "messages_sent"
  | "active_affiliates"
  | "affiliate_revenue_share"
  | "post_rate"
  | "estimated_commission"
  | "live_streams"
  | "daily_creators"
  | "earned_media_value"
  | "aov";

export type Metric = {
  label: string;
  value: number;
  unit: MetricUnit;
  metricType: MetricType;
  period: { from: string; to: string };
  source: "seller_center_screenshot" | "kalodata_screenshot" | "portfolio_pdf" | "owner_confirmed";
  footnote?: string;
  format?: "compact" | "full";
};

export type CaseEvidence = {
  filename: string;
  title: string;
  description: string;
  aspectRatio?: string;
};

export type TopCreator = {
  handle: string;
  gmv?: number;
  note?: string;
  avatarText?: string;
};

export type CaseCardData = {
  thumbnail: string;
  pillTag: string;
  cardTitle: string;
  primaryValue: string;
  primaryLabel: string;
  stats: { value: string; label: string }[];
};

export type CaseStudy = {
  slug: string;
  code: string;
  category: "apparel" | "nutrition" | "jewellery" | "beauty";
  sector: string;
  title: string;
  headlineOutcome: string;
  outcomeType: string;
  role: string;
  period: { from: string; to: string; label: string };
  summary: string;
  challenge: string;
  approach: string;
  responsibilities: string[];
  strategy: string[];
  learning: string;
  metrics: Metric[];
  featured: boolean;
  featuredOrder?: number;
  evidence: CaseEvidence[];
  topCreators: TopCreator[];
  cardData?: CaseCardData;
};

export type CareerRole = {
  company: string;
  title: string;
  period: string;
  market: string;
  highlights: string[];
  notes?: string;
};

export type BrandProject = {
  title: string;
  sector: string;
  description: string;
  focus: string;
};

const period = (from: string, to: string) => ({ from, to });
const metric = (
  label: string,
  value: number,
  unit: MetricUnit,
  metricType: MetricType,
  from: string,
  to: string,
  footnote?: string,
  source: "seller_center_screenshot" | "kalodata_screenshot" | "portfolio_pdf" | "owner_confirmed" = "owner_confirmed"
): Metric => ({
  label,
  value,
  unit,
  metricType,
  period: period(from, to),
  source,
  footnote,
});

export const site = {
  name: "Bilal Shahid",
  title: "TikTok Shop & Creator / Affiliate Growth Specialist",
  tagline: "Turning Attention Into Measurable Commerce Growth",
  email: "bilalshahid1609@gmail.com",
  // Publish direct phone/WhatsApp contact only after the owner has explicitly approved it.
  phone: undefined,
  whatsappUrl: undefined,
  location: "US & UK Markets (Remote Operator)",
  experienceYears: "4+",
  maxShopsParallel: "5",
  disclaimer: "Independent specialist. Not affiliated with, endorsed by, or sponsored by TikTok.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "What I Do", href: "/services" },
    { label: "Case Studies", href: "/results" },
    { label: "Insights", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
};

export const heroProof = [
  {
    number: "4+",
    unit: "Years",
    label: "Years Experience",
    subtext: "UK & US brand-side & agency operations",
  },
  {
    number: "5",
    unit: "Shops",
    label: "Active Shops Managed in Parallel",
    subtext: "Up to 5 shops managed in parallel",
  },
  {
    number: "$616K",
    unit: "GMV",
    label: "Highest Creator Attributed GMV",
    subtext: "Contemporary Apparel — Q4 peak shopping",
  },
  {
    number: "30%+",
    unit: "MoM",
    label: "Average MoM Growth",
    subtext: "Technisia full-funnel TikTok Shop operations",
  },
  {
    number: "200+",
    unit: "Creators",
    label: "Creators Activated",
    subtext: "Active affiliate roster across lifestyle & apparel",
  },
];

export const sampleCreatorPitches = [
  {
    creator: "@dezbreel",
    category: "Jewellery & Accessories UGC",
    performance: "$4,904 solo GMV",
    rationale:
      "Proven closer. Drove $4,904 in solo GMV on a fine jewellery brand managed with a strong repeat posting cadence. Aesthetic reads premium; fits jewellery and light apparel briefs.",
  },
  {
    creator: "@italiajjacqueline",
    category: "Apparel & Lifestyle UGC",
    performance: "$2,363 solo GMV",
    rationale:
      "Converting UGC and a high-AOV audience. Delivered $2,363 GMV solo on a premium apparel brand. Strong choice for fashion-forward drops.",
  },
  {
    creator: "@annaschae.finds",
    category: "Jewellery-Native Creator",
    performance: "Category Authority",
    rationale:
      "Active affiliate posting behaviour. Good fit for jewellery-first launches where category authority matters more than raw reach.",
  },
];

export const platformTools = [
  { name: "TikTok Shop Seller Center", category: "Core Channel" },
  { name: "GMV Max & Shop Ads", category: "Paid Commerce" },
  { name: "Kalodata", category: "Analytics & Intelligence" },
  { name: "FastMoss", category: "TikTok Analytics" },
  { name: "Euka", category: "Affiliate CRM" },
  { name: "UpPromote", category: "Affiliate System" },
  { name: "Shopify", category: "E-commerce Storefront" },
  { name: "Amazon Seller Central", category: "Multichannel Marketplace" },
  { name: "Keepa & Helium 10", category: "Market Validation" },
  { name: "Google Sheets & Canva", category: "Operations & Creative" },
];

export const operatingSystemSteps = [
  {
    step: "01",
    shortTitle: "Creator Strategy",
    shortDesc: "Find the right creators and winning angles.",
    icon: "users",
    title: "Creator Discovery & Scoring",
    description:
      "Aesthetic and category-fit pipeline across TikTok Shop, Instagram, and LTK. Rigorous qualification using GMV, post-rate, and audience resonance rubrics.",
    deliverables: ["Creator ICP mapping", "Scoring matrix (A/B/C tiers)", "Outreach prospect list"],
  },
  {
    step: "02",
    shortTitle: "Content & Testing",
    shortDesc: "Produce, test and iterate high-converting content.",
    icon: "play",
    title: "Samples & PR Logistics",
    description:
      "Disciplined sample approvals preventing wasted seeding budget. End-to-end fulfillment tracking and post-send follow-through until video goes live.",
    deliverables: ["Sample budget allocation", "Fulfillment & dispatch tracking", "Unboxing expectations brief"],
  },
  {
    step: "03",
    shortTitle: "TikTok Shop Growth",
    shortDesc: "Optimize listings, offers and creator distribution.",
    icon: "shopping-bag",
    title: "Outreach & Activation",
    description:
      "In-voice personalized messaging at scale. Active collaboration chat, custom commission structures, and dormant affiliate re-engagement.",
    deliverables: ["Personalized DM sequences", "Tiered commission incentive design", "Cooperation chat management"],
  },
  {
    step: "04",
    shortTitle: "Paid Amplification",
    shortDesc: "Scale what works with TT Ads and retargeting.",
    icon: "chart",
    title: "Shop, Content & Promotion",
    description:
      "Coordinating creator video cadence with Seller Center campaign centers, flash sales, product vouchers, and GMV Max advertising amplification.",
    deliverables: ["Content publishing calendar", "Promotional flash sale alignment", "LIVE stream schedule support"],
  },
  {
    step: "05",
    shortTitle: "Repeat & Scale",
    shortDesc: "Build systems for long-term growth.",
    icon: "gear",
    title: "Weekly Reporting & Scaling",
    description:
      "Funnel diagnostics separating top-of-funnel reach from actual affiliate-attributed GMV. Double down on winning creators and prune low-converting seeds.",
    deliverables: ["Weekly funnel health dashboard", "Top affiliate contribution report", "Next-cycle optimization roadmap"],
  },
];

export const cases: CaseStudy[] = [
  {
    slug: "contemporary-apparel-q4",
    code: "CASE-01",
    category: "apparel",
    sector: "Contemporary Apparel Brand (US)",
    title: "Scaling Creator-Driven Q4 GMV with Daily Posting Cadence & LIVE Streams",
    headlineOutcome: "$616,780 Creator-Attributed GMV",
    outcomeType: "Creator-Attributed GMV",
    role: "TikTok Shop Creator Engine & Live Coordination",
    period: {
      from: "2025-11-18",
      to: "2025-12-23",
      label: "Nov 18 – Dec 23, 2025 (Q4 peak)",
    },
    summary:
      "Managed the creator engine during the highest-intent shopping window of the year. Layered high-volume outreach with a LIVE-heavy creator strategy to drive consistent daily sales.",
    challenge:
      "During the Q4 holiday peak, organic reach alone is insufficient without consistent creator output. The brand needed high video cadence and continuous LIVE streaming representation from trusted creators.",
    approach:
      "Recruited and mobilized a dedicated roster of daily-posting creators and live hosts. Synced product drops with TikTok Shop Seller Center promotions, ensuring 35 daily creators active and 31 daily creators closing sales.",
    responsibilities: [
      "Creator outreach at scale during Q4 peak",
      "LIVE seller coordination and stream scheduling",
      "Daily creator posting accountability",
      "Commission structuring and fast payouts",
      "Seller Center performance monitoring",
    ],
    strategy: [
      "Prioritize high-conversion apparel creators with established repeat buyer audiences",
      "Pair short-form video hooks with scheduled LIVE shopping events",
      "Maintain active cooperation chats for rapid stock and promo alerts",
      "Reward high-volume posting with tiered commission escalations",
    ],
    learning:
      "High-intent shopping windows reward consistent multi-creator presence over one-off virality. Daily sales from 31 creators compounded to generate over $616K in creator-attributed GMV.",
    metrics: [
      metric("Creator-Attributed GMV", 616780.87, "usd", "creator_attributed_gmv", "2025-11-18", "2025-12-23", "Internally reported Seller Center metric", "seller_center_screenshot"),
      metric("Estimated Commission", 87469.10, "usd", "estimated_commission", "2025-11-18", "2025-12-23", "Generated for participating creators", "seller_center_screenshot"),
      metric("Creator-Attributed Items Sold", 9337, "count", "items_sold", "2025-11-18", "2025-12-23", undefined, "seller_center_screenshot"),
      metric("Creator Videos Posted", 1661, "count", "videos_posted", "2025-11-18", "2025-12-23", undefined, "seller_center_screenshot"),
      metric("LIVE Streams Held", 210, "count", "live_streams", "2025-11-18", "2025-12-23", undefined, "seller_center_screenshot"),
      metric("Daily Creators Posting", 35, "count", "daily_creators", "2025-11-18", "2025-12-23", "Daily active poster baseline", "seller_center_screenshot"),
      metric("Daily Creators Making Sales", 31, "count", "daily_creators", "2025-11-18", "2025-12-23", "Daily converting creator baseline", "seller_center_screenshot"),
    ],
    featured: true,
    featuredOrder: 1,
    evidence: [
      {
        filename: "contemporary-apparel-q4-performance.webp",
        title: "TikTok Shop Seller Center Q4 Performance Dashboard",
        description:
          "Seller Center dashboard reporting $616,780.87 in creator-attributed GMV, 9,337 items sold, 1,661 videos, 210 LIVE streams, and $87,469 commission.",
      },
    ],
    topCreators: [
      { handle: "@be.lush", note: "Top Q4 revenue and high engagement UGC" },
      { handle: "@heyitsamber4", note: "Consistent daily posting and conversion" },
      { handle: "@sharpafedc", note: "Product styling and live stream closer" },
      { handle: "@jp.field.tested", note: "High AOV bundle converter" },
    ],
    cardData: {
      thumbnail: "/media/cases/thumb-apparel-q4.jpg",
      pillTag: "Contemporary Apparel",
      cardTitle: "US Apparel Brand (Q4)",
      primaryValue: "$616,780",
      primaryLabel: "Creator Attributed GMV",
      stats: [
        { value: "1,661", label: "Creator Videos" },
        { value: "210", label: "LIVE Streams" },
        { value: "9,337", label: "Items Sold" },
      ],
    },
  },
  {
    slug: "sports-nutrition-affiliate-first",
    code: "CASE-02",
    category: "nutrition",
    sector: "Sports Nutrition Brand (US)",
    title: "Building an Affiliate-First Engine Generating 95.47% Creator-Driven Revenue",
    headlineOutcome: "$91,030 Revenue (95.47% Affiliate-Driven)",
    outcomeType: "Affiliate Revenue Share",
    role: "TikTok Shop Affiliate Program Lead",
    period: {
      from: "2026-06-29",
      to: "2026-07-28",
      label: "Jun 29 – Jul 28, 2026 (Last 30 Days Managed)",
    },
    summary:
      "Constructed an affiliate-first shop model where over 95% of total revenue derived from creator videos rather than paid ads. Maintained a broad active roster averaging 24 videos per day.",
    challenge:
      "The brand sought rapid growth without committing massive ad spend. Saturated sports nutrition categories demand high video volume and fitness-community authenticity.",
    approach:
      "Activated 475 active affiliates through tailored commission incentives and community seeding. Kept content cadence steady at ~24 videos daily to ensure continuous algorithm visibility.",
    responsibilities: [
      "Affiliate network recruitment and onboarding",
      "Sample seeding to authentic fitness creators",
      "Commission optimization and top affiliate retention",
      "Kalodata intelligence and performance audits",
      "Daily video frequency management",
    ],
    strategy: [
      "Target mid-tier and micro fitness creators with high-engagement audiences",
      "Incentivize honest workout routines and product integration over scripted ads",
      "Analyze weekly Kalodata sales by channel to confirm creator attribution",
      "Nurture top performers with exclusive product drops and boosted rates",
    ],
    learning:
      "Organic creator compounding can sustain the bulk of a store's revenue when volume is disciplined. Top creator @reps.2.redemption contributed $10.7K GMV solo.",
    metrics: [
      metric("Total Revenue", 91030, "usd", "total_revenue", "2026-06-29", "2026-07-28", "Kalodata reported 30-day revenue", "kalodata_screenshot"),
      metric("Affiliate Revenue Share", 95.47, "percent", "affiliate_revenue_share", "2026-06-29", "2026-07-28", "$86.90K affiliate-driven revenue", "kalodata_screenshot"),
      metric("Active Affiliates", 475, "count", "active_affiliates", "2026-06-29", "2026-07-28", "Active posting affiliates", "kalodata_screenshot"),
      metric("Affiliate Videos Posted", 747, "count", "videos_posted", "2026-06-29", "2026-07-28", "~24 videos posted per day", "kalodata_screenshot"),
      metric("Units Sold", 1920, "count", "units_sold", "2026-06-29", "2026-07-28", "Average unit price $47.31", "kalodata_screenshot"),
    ],
    featured: true,
    featuredOrder: 2,
    evidence: [
      {
        filename: "sports-nutrition-affiliate-revenue.webp",
        title: "Kalodata Core Metrics & Channel Strategy Overview",
        description:
          "Kalodata platform metrics detailing $91.03k 30-day revenue, $86.90k affiliate revenue (95.47%), 475 active affiliates, and 747 videos.",
      },
      {
        filename: "sports-nutrition-top-affiliates.webp",
        title: "Top Affiliates Driving Revenue Ranking",
        description:
          "Ranked list of top contributors including @reps.2.redemption ($10.74k), @organzambrano ($9.57k), @live2lovekim ($6.56k).",
      },
    ],
    topCreators: [
      { handle: "@reps.2.redemption", gmv: 10740, note: "Top solo contributor with 75 videos linked" },
      { handle: "@organzambrano", gmv: 9570, note: "High conversion workout routines" },
      { handle: "@live2lovekim", gmv: 6560, note: "Lifestyle fitness integration" },
      { handle: "@kayla_wellnesfinds", gmv: 3990, note: "Wellness and supplement reviewer" },
    ],
    cardData: {
      thumbnail: "/media/cases/thumb-sports-nutrition.jpg",
      pillTag: "Sports Nutrition",
      cardTitle: "US Sports Nutrition",
      primaryValue: "$91,030",
      primaryLabel: "Revenue (Last 30 Days)",
      stats: [
        { value: "2.1M", label: "Video Views" },
        { value: "898", label: "Orders" },
        { value: "$102.04", label: "AOV" },
      ],
    },
  },
  {
    slug: "premium-apparel-lean-sampling",
    code: "CASE-03",
    category: "apparel",
    sector: "Premium Apparel Brand (US)",
    title: "Lean Sampling with Strict Creator Fit: 3.3M Views and 57.60% Post Rate",
    headlineOutcome: "$129K Total GMV · 3.3M Video Views",
    outcomeType: "Total Shop GMV & Reach",
    role: "End-to-End Creator & Affiliate Program Ownership",
    period: {
      from: "2026-06-01",
      to: "2026-07-29",
      label: "Jun 1 – Jul 29, 2026",
    },
    summary:
      "Executed a disciplined, selective sampling program for a high-AOV apparel label. By filtering strictly for aesthetic alignment, achieved a roster-best 57.60% post rate and 3.3 million views.",
    challenge:
      "Premium fashion requires careful brand preservation. Mass seeding risks off-brand content and low post rates with expensive inventory.",
    approach:
      "Reached 36.2K creators with personalized pitches, selectively shipping just 125 samples. The tight quality filter produced 291 videos and 1,100 orders with a healthy $116.62 AOV.",
    responsibilities: [
      "Rigorous aesthetic-fit creator qualification",
      "High-touch sampling logistics for 125 curated creators",
      "Affiliate commission and voucher coordination",
      "Content tracking and view acceleration",
    ],
    strategy: [
      "Target high-AOV fashion creators with demonstrable buying audiences",
      "Provide moodboard styling guidance without scripting creator voice",
      "Amplify top converting videos via organic reposts and shop tagging",
    ],
    learning:
      "A smaller, strictly qualified sample pool frequently outperforms wide spray-and-pray gifting in both post rate (57.6%) and total earned media value ($13.4K EMV).",
    metrics: [
      metric("Total GMV", 129000, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Total shop GMV across period", "seller_center_screenshot"),
      metric("Affiliate GMV", 22400, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29", "Direct affiliate attributed GMV", "seller_center_screenshot"),
      metric("Total Video Views", 3300000, "count", "video_views", "2026-06-01", "2026-07-29", "Across 291 posted videos", "seller_center_screenshot"),
      metric("Post Rate", 57.60, "percent", "post_rate", "2026-06-01", "2026-07-29", "Roster-best seeding fulfillment rate", "seller_center_screenshot"),
      metric("Orders Closed", 1100, "count", "orders", "2026-06-01", "2026-07-29", "Average order value $116.62", "seller_center_screenshot"),
      metric("Earned Media Value (EMV)", 13400, "usd", "earned_media_value", "2026-06-01", "2026-07-29", "Platform-calculated brand exposure", "seller_center_screenshot"),
      metric("Samples Shipped", 125, "count", "samples_shipped", "2026-06-01", "2026-07-29", "Lean, highly curated distribution", "seller_center_screenshot"),
    ],
    featured: true,
    featuredOrder: 3,
    evidence: [
      {
        filename: "premium-apparel-performance.webp",
        title: "TikTok Shop Performance Dashboard — Premium Apparel",
        description:
          "Seller Center dashboard showing $129K total GMV, $22.4K affiliate GMV, 3.3M views, and 57.60% post rate.",
      },
      {
        filename: "premium-apparel-top-videos-affiliates.webp",
        title: "Top Performing Videos & Affiliates Roster",
        description:
          "Proof showing top affiliates @italiajjacqueline ($2,363 GMV), @planetamariel ($1,949 GMV), @paulinareitman ($1,205 GMV).",
      },
    ],
    topCreators: [
      { handle: "@italiajjacqueline", gmv: 2363, note: "Solo top affiliate; high-AOV styling UGC" },
      { handle: "@planetamariel", gmv: 1949, note: "Top video driver with $1,598 solo video GMV" },
      { handle: "@paulinareitman", gmv: 1205, note: "Consistent luxury lifestyle conversion" },
      { handle: "@sabinagilman1998", gmv: 837, note: "Fashion try-on showcase" },
    ],
    cardData: {
      thumbnail: "/media/cases/thumb-premium-apparel.jpg",
      pillTag: "Premium Apparel",
      cardTitle: "US Premium Apparel",
      primaryValue: "$129K",
      primaryLabel: "Total GMV",
      stats: [
        { value: "3.3M", label: "Video Views" },
        { value: "1,100", label: "Orders" },
        { value: "57.60%", label: "Post Rate" },
      ],
    },
  },
  {
    slug: "fine-jewellery-aesthetic-pipeline",
    code: "CASE-04",
    category: "jewellery",
    sector: "Fine Jewellery Brand (US)",
    title: "Aesthetic-Fit Creator Pipeline & Repeat Posters for High-Trust Luxury",
    headlineOutcome: "$14.7K Total GMV · 52.37% Post Rate",
    outcomeType: "Total Shop GMV & Affiliate Activation",
    role: "TikTok Shop Creator & Affiliate Program Management",
    period: {
      from: "2026-06-01",
      to: "2026-07-29",
      label: "Jun 1 – Jul 29, 2026",
    },
    summary:
      "Built a curated creator pipeline for a delicate fine jewellery brand. Pushed sample volume while retaining high-converting top creators to achieve a 52.37% post rate and 741.3K views.",
    challenge:
      "Jewellery requires exceptional aesthetic taste and close-up lighting. Low-quality UGC erodes trust and converts poorly for fine jewelry pieces.",
    approach:
      "Qualified creators based on hands-on macro styling capability. Focused on retaining repeat posters rather than continually chasing new unproven creators.",
    responsibilities: [
      "Aesthetic qualification & macro-shot verification",
      "Sample tracking for high-value fine pieces",
      "Repeat creator retention and custom gifting packages",
      "Affiliate promotion timing and discount codes",
    ],
    strategy: [
      "Build long-term relationships with proven jewellery closers like @dezbreel",
      "Set clear styling briefs emphasizing natural light and close-up jewelry detailing",
      "Track order conversion at $61.41 AOV across 389 posted videos",
    ],
    learning:
      "Fine jewellery scales when the brand doubles down on repeat creators who already know how to talk about metals, sizing, and everyday wear.",
    metrics: [
      metric("Total GMV", 14700, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Overall shop performance", "seller_center_screenshot"),
      metric("Affiliate GMV", 11700, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29", "Direct creator-attributed GMV", "seller_center_screenshot"),
      metric("Post Rate", 52.37, "percent", "post_rate", "2026-06-01", "2026-07-29", "Over half of gifted creators posted content", "seller_center_screenshot"),
      metric("Videos Posted", 389, "count", "videos_posted", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Video Views", 741300, "count", "video_views", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Orders Closed", 240, "count", "orders", "2026-06-01", "2026-07-29", "Average order value $61.41", "seller_center_screenshot"),
      metric("Earned Media Value (EMV)", 2200, "usd", "earned_media_value", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Samples Shipped", 464, "count", "samples_shipped", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
    ],
    featured: false,
    evidence: [
      {
        filename: "fine-jewellery-performance.webp",
        title: "TikTok Shop Performance Dashboard — Fine Jewellery",
        description:
          "Seller Center metrics documenting $14.7K total GMV, $11.7K affiliate GMV, 52.37% post rate, and 741.3K views.",
      },
      {
        filename: "fine-jewellery-top-videos-affiliates.webp",
        title: "Top Videos & Top Affiliates Breakdown",
        description:
          "Dashboard detailing top affiliate @dezbreel driving $4,904.20 solo GMV, followed by @stylebybrittxo ($1,447.27 GMV).",
      },
    ],
    topCreators: [
      { handle: "@dezbreel", gmv: 4904, note: "Top closer; repeat posting with $4,904 solo GMV" },
      { handle: "@stylebybrittxo", gmv: 1447, note: "Proven conversion with $1,190 top video" },
      { handle: "@carnival_lights", gmv: 777, note: "Aesthetic try-on creator" },
      { handle: "@sierra_savage", gmv: 683, note: "Jewellery styling and layering tips" },
      { handle: "@betchbebuying", gmv: 588, note: "Curated shopping finds" },
      { handle: "@annaschae.finds", note: "Jewellery-native creator with strong niche authority" },
    ],
    cardData: {
      thumbnail: "/media/cases/thumb-jewellery.jpg",
      pillTag: "Fine Jewellery",
      cardTitle: "US Jewellery Brand",
      primaryValue: "$14.7K",
      primaryLabel: "Total GMV",
      stats: [
        { value: "464", label: "Samples Shipped" },
        { value: "389", label: "Videos Posted" },
        { value: "52.37%", label: "Post Rate" },
      ],
    },
  },
  {
    slug: "beauty-brand-ramp-up",
    code: "CASE-05",
    category: "beauty",
    sector: "Beauty Brand (US)",
    title: "High-Volume Funnel Outreach to Scale a Newly Ramping TikTok Shop",
    headlineOutcome: "$7.5K Total GMV · 70.4K Creators Reached",
    outcomeType: "Top of Funnel to GMV Ramp",
    role: "Full-Funnel Creator Outreach & Sampling Lead",
    period: {
      from: "2026-06-01",
      to: "2026-07-29",
      label: "Jun 1 – Jul 29, 2026",
    },
    summary:
      "Ramped a new beauty store from zero using disciplined top-of-funnel outreach. Reached over 70K creators and dispatched 188 samples to establish initial review velocity and affiliate momentum.",
    challenge:
      "A new shop starts with no social proof or sales history. Getting creators to accept samples and post content requires aggressive yet targeted DM outreach.",
    approach:
      "Executed high-volume invitation campaigns (177.9K messages) while segmenting creator tiers. Prioritized samples strictly for category-fit beauty reviewers to generate 221 videos.",
    responsibilities: [
      "High-volume creator prospecting & invitation campaigns",
      "Sample qualification to avoid untracked freebie seekers",
      "Post tracking and view monitoring",
      "Affiliate commission and voucher support",
    ],
    strategy: [
      "Use automated and customized outreach sequences in TikTok Shop Seller Center",
      "Focus sample distribution on creators with documented skincare/cosmetics engagement",
      "Re-engage responsive creators to secure second and third posting cadences",
    ],
    learning:
      "Large top-of-funnel reach (70.4K reached) filters down into measurable conversions: 188 samples → 221 videos → 282 orders → $7.5K GMV. Top affiliate @indraniphillips contributed $2,019 GMV.",
    metrics: [
      metric("Total GMV", 7500, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Total shop GMV across period", "seller_center_screenshot"),
      metric("Affiliate GMV", 6200, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29", "Direct creator affiliate GMV", "seller_center_screenshot"),
      metric("Creators Reached", 70400, "count", "creators_reached", "2026-06-01", "2026-07-29", "Top-of-funnel outreach scale", "seller_center_screenshot"),
      metric("Initial Messages Sent", 177900, "count", "messages_sent", "2026-06-01", "2026-07-29", "Total outbound touchpoints", "seller_center_screenshot"),
      metric("Samples Shipped", 188, "count", "samples_shipped", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Videos Posted", 221, "count", "videos_posted", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Video Views", 229700, "count", "video_views", "2026-06-01", "2026-07-29", undefined, "seller_center_screenshot"),
      metric("Orders Closed", 282, "count", "orders", "2026-06-01", "2026-07-29", "Average order value $26.76", "seller_center_screenshot"),
    ],
    featured: false,
    evidence: [
      {
        filename: "beauty-performance.webp",
        title: "TikTok Shop Performance Dashboard — Beauty",
        description:
          "Seller Center performance showing $7.5K total GMV, $6.2K affiliate GMV, 177.9K messages sent, and 188 samples shipped.",
      },
      {
        filename: "beauty-top-affiliates.webp",
        title: "Top Affiliates Ranked by GMV",
        description:
          "Affiliate breakdown confirming @indraniphillips at $2,019.34 GMV, followed by @ryryfindss ($570.89 GMV).",
      },
    ],
    topCreators: [
      { handle: "@indraniphillips", gmv: 2019, note: "Solo top affiliate driving $2,019 GMV" },
      { handle: "@ryryfindss", gmv: 571, note: "Beauty and lifestyle recommendations" },
      { handle: "@myroutineroom", gmv: 276, note: "Skincare routine integration" },
      { handle: "@corinaanetta", gmv: 157, note: "Cosmetics unboxing & application" },
      { handle: "@marora.tk11", gmv: 99, note: "Everyday essentials tester" },
    ],
    cardData: {
      thumbnail: "/media/cases/thumb-beauty.jpg",
      pillTag: "Beauty",
      cardTitle: "US Beauty Brand",
      primaryValue: "$7.5K",
      primaryLabel: "Total GMV",
      stats: [
        { value: "70.4K", label: "Creators Reached" },
        { value: "221", label: "Videos Posted" },
        { value: "282", label: "Orders" },
      ],
    },
  },
];

export const services = [
  {
    slug: "creator-sourcing-and-qualification",
    title: "Creator Sourcing & Scoring",
    problem: "Finding genuine creators whose audience and aesthetic match your brand profile without wasting time on dead outreach.",
    deliverables: [
      "Custom creator ICP profiling across TikTok Shop, Instagram, and LTK",
      "Scoring matrix evaluating GMV history, post rate, aesthetic alignment, and engagement",
      "Creator outreach pipelines organized into priority response tiers",
    ],
  },
  {
    slug: "outreach-sampling-and-pr-gifting",
    title: "Outreach, Sampling & PR Gifting",
    problem: "Moving from initial creator interest to accountable, tracked product seeding that actually results in live videos.",
    deliverables: [
      "In-voice personalized messaging sequences tailored for founder-led brands",
      "Sample inventory budgeting and approval gates to protect margin",
      "Post-shipment logistics follow-through and video fulfillment tracking",
    ],
  },
  {
    slug: "affiliate-activation-and-retention",
    title: "Affiliate Activation & Retention",
    problem: "Preventing seeded creators from posting once and going dormant. Building lasting repeat contributors.",
    deliverables: [
      "Tiered commission structures, performance bonuses, and custom open-plan incentives",
      "Cooperation chat management with prompt stock updates and promo notifications",
      "Dormant affiliate re-engagement campaigns and exclusive drop access",
    ],
  },
  {
    slug: "tiktok-shop-campaigns-and-gmv-max",
    title: "Shop Operations & Paid Ads (GMV Max)",
    problem: "Aligning creator content with TikTok Shop Seller Center campaign centers, vouchers, and ad budget for exponential scale.",
    deliverables: [
      "GMV Max automated and manual campaign configuration with 5x–15x ROI targets",
      "Flash sales, product vouchers, free shipping campaigns, and bundle offers",
      "Product listing SEO, conversion rate optimization (CRO), and offer optimization",
    ],
  },
  {
    slug: "multichannel-integration",
    title: "Multichannel Commerce Integration",
    problem: "Preventing overselling and operational chaos across disconnected sales channels.",
    deliverables: [
      "TikTok Shop to Shopify inventory, order, and customer syncing",
      "TikTok Shop to Amazon catalog integration and FBA fulfillment alignment",
      "Order management, return/refund flows, and seller health score protection",
    ],
  },
  {
    slug: "performance-analytics-and-reporting",
    title: "Performance Analytics & Diagnostics",
    problem: "Separating useful revenue signals from superficial vanity metrics like raw outreach counts.",
    deliverables: [
      "Weekly performance reports detailing sample spend, post rates, and creator GMV",
      "Kalodata & FastMoss competitor tracking and market trend validation",
      "Actionable bottleneck diagnostics highlighting exactly where to re-allocate budget",
    ],
  },
];

export const careerTimeline: CareerRole[] = [
  {
    company: "Technisia",
    title: "TikTok Shop & Growth Marketing Manager",
    period: "Mar 2025 – Sep 2026",
    market: "UK & US Brands (Health & Wellness, Supplements, Beauty, Apparel, Personal Care)",
    highlights: [
      "Managed full-funnel TikTok Shop operations driving 20–30% MoM GMV growth",
      "Executed GMV Max (auto & manual) campaigns achieving 5x–15x ROI",
      "Scaled an apparel clothing brand from £5k to £20k+ GMV within 2 months",
      "Led affiliate & creator programs managing free creators, retainers, and targeted collaborations",
      "Oversaw order management, CRM flows, and review handling at 1,500–2,000 peak orders",
      "Coordinated 4 junior executives, 2 creator managers, and 1 customer support specialist",
    ],
  },
  {
    company: "Blue Star Manufacturing",
    title: "TikTok Shop Executive",
    period: "Sep 2023 – Feb 2025",
    market: "UK & US Markets (Apparel: Biker Jeans & Home Decor)",
    highlights: [
      "Managed 2 TikTok Shop brands achieving £20k–£50k monthly GMV through ads and creator sales",
      "Planned and executed campaign calendars, flash sales, vouchers, and seasonal promotions",
      "Optimized listings, pricing, and fulfillment workflows to improve conversion and reduce refunds",
      "Maintained stable shop performance scores through operational compliance and dispute handling",
    ],
  },
  {
    company: "Blue Star Manufacturing",
    title: "Amazon Executive",
    period: "Jan 2023 – Sep 2024",
    market: "UK & US Marketplaces",
    highlights: [
      "Managed Amazon operations for Apparel and Home Decor product lines in parallel",
      "Ran Amazon PPC campaigns, listing SEO, keyword research, and conversion optimization",
      "Conducted product hunting, sourcing, Buy Box optimization, and order processing",
      "Maintained seller health, inventory accuracy, and operational KPIs",
    ],
    notes: "Overlapping timeline reflects dual-channel operational management at Blue Star Manufacturing.",
  },
  {
    company: "iKara E Solution",
    title: "Amazon Arbitrage & Wholesale Specialist",
    period: "Aug 2021 – Jan 2023",
    market: "UK & US Marketplaces",
    highlights: [
      "Hunted 600+ profitable product leads using Keepa, Helium 10, and Jungle Scout",
      "Managed Arbitrage, Wholesale, Private Label, and Dropshipping models across multiple client accounts",
      "Built local and Alibaba supplier pipelines to ensure margin predictability and stock flow",
      "Handled inventory planning, FBA shipment creation, and compliance",
    ],
  },
];

export const education = {
  degree: "MBA — Marketing & Branding",
  institution: "COMSATS University",
  period: "Aug 2021 – Jul 2023",
  coursework: [
    "E-commerce Strategy & Brand Positioning",
    "Digital Marketing & Customer Segmentation",
    "Performance Marketing & Growth Frameworks",
  ],
};

export const brandProjects: BrandProject[] = [
  {
    title: "BeepWell",
    sector: "Health & Wellness",
    description: "Brand positioning, customer segmentation, and e-commerce growth strategy aligned with social commerce funnels.",
    focus: "Social Commerce & Customer Segmentation",
  },
  {
    title: "Hostbreak",
    sector: "Digital Services",
    description: "Go-to-market planning, value proposition design, and digital acquisition frameworks for service scalability.",
    focus: "GTM Planning & Acquisition Funnels",
  },
  {
    title: "Daniel Mart",
    sector: "Retail / E-commerce",
    description: "Product positioning, pricing strategy, and promotional planning linked with performance marketing.",
    focus: "Offer Optimization & Promotional Structure",
  },
];

export const faqs = [
  {
    question: "What types of brands are the best fit for your creator engine?",
    answer:
      "I specialize in US and UK consumer DTC brands operating in Beauty, Contemporary Apparel, Fine Jewellery, Sports Nutrition, Health & Wellness, and Home Decor. Brands with compelling product hooks, available sample inventory, and a commitment to active collaboration see the strongest compounding results.",
  },
  {
    question: "Do you focus exclusively on TikTok Shop or omnichannel commerce?",
    answer:
      "TikTok Shop creator and affiliate programs are my primary focus. However, I ensure seamless synchronization with Shopify and Amazon Seller Central so your inventory, pricing, fulfillment, and customer data remain unified.",
  },
  {
    question: "What makes your creator approach different from traditional influencer agencies?",
    answer:
      "Agencies often charge high retainers for vanity metrics like raw follower counts. My methodology is operational and performance-driven: rigorous aesthetic scoring, lean sampling gates, daily video cadence, and real GMV attribution tracked in Seller Center and Kalodata.",
  },
  {
    question: "How do you handle sample costs and prevent wasted seeding?",
    answer:
      "Every sample approval requires passing a rubric based on historical GMV, post rate, content aesthetics, and category fit. As demonstrated in my Premium Apparel case, shipping fewer, higher-quality samples (125 samples) yielded 3.3M views and a 57.60% post rate.",
  },
  {
    question: "How quickly can a new or existing shop ramp up with your system?",
    answer:
      "Initial outreach and creator scoring typically begin within week 1. Sample delivery and initial video posting ramp through weeks 2–3, followed by content cadence scaling and paid GMV Max coordination starting week 4.",
  },
  {
    question: "Are outcomes guaranteed?",
    answer:
      "No ethical operator guarantees specific GMV because product-market fit, margin structure, and inventory availability vary. What I guarantee is disciplined execution, transparent reporting, and proven operating systems tested across multiple seven-figure shopping windows.",
  },
];
