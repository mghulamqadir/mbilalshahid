export type MetricUnit = "usd" | "count" | "percent";
export type MetricType =
  | "creator_attributed_gmv" | "affiliate_gmv" | "total_shop_gmv" | "total_revenue"
  | "video_views" | "orders" | "items_sold" | "units_sold" | "videos_posted"
  | "samples_shipped" | "creators_reached" | "messages_sent" | "active_affiliates"
  | "post_rate" | "estimated_commission" | "live_streams" | "daily_creators";

export type Metric = {
  label: string;
  value: number;
  unit: MetricUnit;
  metricType: MetricType;
  period: { from: string; to: string };
  source: "seller_center_screenshot" | "portfolio_pdf" | "owner_confirmed";
  evidenceMediaId?: string;
  footnote?: string;
  format?: "compact" | "full";
};

export type CaseStudy = {
  slug: string;
  code: string;
  sector: string;
  title: string;
  outcome: string;
  role: string;
  period: { from: string; to: string; label: string };
  summary: string;
  challenge: string;
  responsibilities: string[];
  strategy: string[];
  learning: string;
  metrics: Metric[];
  featured: boolean;
  visual: "apparel" | "nutrition" | "premium" | "jewelry" | "beauty";
};

const period = (from: string, to: string) => ({ from, to });
const metric = (label: string, value: number, unit: MetricUnit, metricType: MetricType, from: string, to: string, footnote?: string): Metric => ({
  label, value, unit, metricType, period: period(from, to), source: "owner_confirmed", footnote,
});

export const site = {
  name: "BS. / GROWTH SYSTEMS",
  shortName: "BS.",
  email: "bilalshahid1609@gmail.com",
  description: "Creator-led commerce operations for US DTC brands on TikTok Shop.",
  nav: [
    { label: "Work", href: "/results" }, { label: "Services", href: "/services" },
    { label: "Process", href: "/how-i-work" }, { label: "About", href: "/about" },
  ],
  disclaimer: "Independent specialist. Not affiliated with, endorsed by, or sponsored by TikTok.",
};

export const cases: CaseStudy[] = [
  {
    slug: "us-contemporary-apparel", code: "APPAREL-Q4", sector: "US Contemporary Apparel",
    title: "A creator program built for daily output.", outcome: "$616,780 creator-attributed GMV",
    role: "Creator and affiliate program operations", period: { from: "2025-11-18", to: "2025-12-23", label: "Nov 18–Dec 23, 2025" },
    summary: "Creator activation across videos, live streams, and a consistent daily sales rhythm.",
    challenge: "A reliable pre-program baseline was not available. The work centered on building repeatable creator activity and reporting the observed program outcomes accurately.",
    responsibilities: ["Creator sourcing and qualification", "Outreach and follow-up", "Sampling coordination", "Affiliate activation", "Performance reporting"],
    strategy: ["Map creator-fit criteria", "Build a prioritized outreach pipeline", "Coordinate sampling and follow-up", "Support posting and LIVE activity", "Review output and sales signals daily"],
    learning: "Consistent creator participation and operational follow-through can create a dependable content rhythm. The reported result is attributable to the creator program, not to one person acting alone.",
    metrics: [
      metric("Creator-attributed GMV", 616780, "usd", "creator_attributed_gmv", "2025-11-18", "2025-12-23"),
      metric("Items sold", 9337, "count", "items_sold", "2025-11-18", "2025-12-23"),
      metric("Creator videos", 1661, "count", "videos_posted", "2025-11-18", "2025-12-23"),
      metric("LIVE streams", 210, "count", "live_streams", "2025-11-18", "2025-12-23"),
      metric("Daily creators posting", 35, "count", "daily_creators", "2025-11-18", "2025-12-23"),
      metric("Daily creators making sales", 31, "count", "daily_creators", "2025-11-18", "2025-12-23"),
      metric("Estimated commission", 87469, "usd", "estimated_commission", "2025-11-18", "2025-12-23"),
    ], featured: true, visual: "apparel",
  },
  {
    slug: "us-sports-nutrition", code: "NUTRITION-30", sector: "US Sports Nutrition",
    title: "Affiliate momentum, made operational.", outcome: "95.47% affiliate-driven share of $91,030 revenue",
    role: "Affiliate activation and program operations", period: { from: "2026-06-29", to: "2026-07-28", label: "Jun 29–Jul 28, 2026" },
    summary: "An affiliate-led program focused on activation, participation, and measurable contribution.", challenge: "Baseline not available. The operational goal was to make affiliate participation measurable and repeatable.",
    responsibilities: ["Affiliate sourcing", "Activation follow-up", "Content tracking", "Offer communication", "Performance reporting"],
    strategy: ["Prioritize category-fit affiliates", "Clarify the creator offer", "Build follow-up cadences", "Track active participation", "Use output data to focus support"],
    learning: "The affiliate share indicates that creator participation was central to reported revenue in this period; it does not establish guaranteed future performance.",
    metrics: [
      metric("Revenue", 91030, "usd", "total_revenue", "2026-06-29", "2026-07-28"),
      metric("Affiliate-driven share", 95.47, "percent", "total_revenue", "2026-06-29", "2026-07-28", "Affiliate-driven share of reported revenue; classified with its total-revenue context because the approved Metric schema has no affiliate-share type."),
      metric("Active affiliates", 475, "count", "active_affiliates", "2026-06-29", "2026-07-28"),
      metric("Affiliate videos", 747, "count", "videos_posted", "2026-06-29", "2026-07-28"),
      metric("Units sold", 1920, "count", "units_sold", "2026-06-29", "2026-07-28"),
    ], featured: true, visual: "nutrition",
  },
  {
    slug: "us-premium-apparel", code: "PREMIUM-59", sector: "US Premium Apparel",
    title: "From outreach to a visible content engine.", outcome: "$22.4K affiliate GMV",
    role: "Creator outreach, sampling, and affiliate reporting", period: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1–Jul 29, 2026" },
    summary: "A focused affiliate program with a clear split between shop context and affiliate outcomes.", challenge: "Baseline not available. The program needed a clearer path from creator contact to published content.",
    responsibilities: ["Creator qualification", "Outreach", "Sampling coordination", "Post-rate tracking", "Affiliate reporting"],
    strategy: ["Define creator-fit signals", "Structure outreach batches", "Track samples to posts", "Follow up by creator stage", "Separate affiliate outcomes from shop context"],
    learning: "The reporting separates affiliate GMV from total shop GMV so the program contribution remains clear.",
    metrics: [
      metric("Affiliate GMV", 22400, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29"),
      metric("Total shop GMV", 129000, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Context only; not presented as creator-attributed revenue."),
      metric("Video views", 3300000, "count", "video_views", "2026-06-01", "2026-07-29"),
      metric("Post rate", 57.6, "percent", "post_rate", "2026-06-01", "2026-07-29"),
      metric("Orders", 1100, "count", "orders", "2026-06-01", "2026-07-29"),
      metric("Videos posted", 291, "count", "videos_posted", "2026-06-01", "2026-07-29"),
    ], featured: false, visual: "premium",
  },
  {
    slug: "us-fine-jewelry", code: "JEWELRY-59", sector: "US Fine Jewelry",
    title: "Precision outreach for a considered category.", outcome: "$11.7K affiliate GMV",
    role: "Creator sourcing, sampling, and affiliate operations", period: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1–Jul 29, 2026" },
    summary: "A sampling and affiliate workflow shaped around category fit and quality content.", challenge: "Baseline not available. The category called for selective creator fit alongside enough outreach volume to learn quickly.",
    responsibilities: ["Creator sourcing", "Qualification", "Sampling", "Content tracking", "Affiliate reporting"],
    strategy: ["Build category-specific qualification", "Sequence outreach", "Track sample delivery", "Follow up toward posting", "Report affiliate outcomes separately"],
    learning: "Reach and sample volume are inputs, not outcomes by themselves. Post rate and affiliate GMV show what progressed beyond outreach.",
    metrics: [
      metric("Affiliate GMV", 11700, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29"), metric("Total shop GMV", 14700, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Context only."),
      metric("Creators reached", 40200, "count", "creators_reached", "2026-06-01", "2026-07-29"), metric("Samples shipped", 464, "count", "samples_shipped", "2026-06-01", "2026-07-29"),
      metric("Videos posted", 389, "count", "videos_posted", "2026-06-01", "2026-07-29"), metric("Video views", 741300, "count", "video_views", "2026-06-01", "2026-07-29"), metric("Post rate", 52.37, "percent", "post_rate", "2026-06-01", "2026-07-29"),
    ], featured: false, visual: "jewelry",
  },
  {
    slug: "us-beauty", code: "BEAUTY-59", sector: "US Beauty", title: "Sampling with a feedback loop.", outcome: "$6.2K affiliate GMV",
    role: "Creator outreach, sampling, and reporting", period: { from: "2026-06-01", to: "2026-07-29", label: "Jun 1–Jul 29, 2026" },
    summary: "A creator program connecting high-volume outreach with tracked product seeding.", challenge: "Baseline not available. High outreach volume needed a disciplined system for qualification, sampling, and follow-up.",
    responsibilities: ["Creator sourcing", "Outreach operations", "Sampling", "Post tracking", "Affiliate reporting"],
    strategy: ["Segment the creator pool", "Operate outreach at scale", "Qualify before sampling", "Track posts and views", "Report activity and outcomes separately"],
    learning: "Large outreach numbers show the top of the funnel. Samples, posts, views, orders, and affiliate GMV show progressive outcomes further down it.",
    metrics: [
      metric("Affiliate GMV", 6200, "usd", "affiliate_gmv", "2026-06-01", "2026-07-29"), metric("Total shop GMV", 7500, "usd", "total_shop_gmv", "2026-06-01", "2026-07-29", "Context only."),
      metric("Creators reached", 70400, "count", "creators_reached", "2026-06-01", "2026-07-29"), metric("Initial messages", 177900, "count", "messages_sent", "2026-06-01", "2026-07-29"),
      metric("Samples shipped", 188, "count", "samples_shipped", "2026-06-01", "2026-07-29"), metric("Videos posted", 221, "count", "videos_posted", "2026-06-01", "2026-07-29"),
      metric("Video views", 229700, "count", "video_views", "2026-06-01", "2026-07-29"), metric("Orders", 282, "count", "orders", "2026-06-01", "2026-07-29"),
    ], featured: false, visual: "beauty",
  },
];

export const services = [
  { slug: "creator-sourcing-and-qualification", title: "Creator Sourcing and Qualification", problem: "Finding creators whose audience and content fit the product.", responsibilities: ["Define creator-fit criteria", "Build and qualify prospect lists", "Prioritize outreach-ready creators"] },
  { slug: "outreach-sampling-and-pr-gifting", title: "Outreach, Sampling and PR Gifting", problem: "Moving from creator interest to accountable product seeding.", responsibilities: ["Outreach workflows", "Sampling coordination", "Follow-up and delivery tracking"] },
  { slug: "affiliate-activation-and-retention", title: "Affiliate Activation and Retention", problem: "Turning recruited creators into active, repeat participants.", responsibilities: ["Affiliate onboarding", "Activation follow-up", "Retention and communication"] },
  { slug: "tiktok-shop-creator-program-management", title: "TikTok Shop Creator Program Management", problem: "Operating the creator program consistently across every stage.", responsibilities: ["Day-to-day program operations", "Creator communication", "Sampling and performance coordination"] },
  { slug: "performance-analytics-and-reporting", title: "Performance Analytics and Reporting", problem: "Separating useful program signals from noisy platform data.", responsibilities: ["Metric definitions", "Period-based reporting", "Program observations and next actions"] },
  { slug: "tiktok-shop-program-review", title: "TikTok Shop Program Review", problem: "Getting a focused view of current operating gaps and opportunities.", responsibilities: ["Program discussion", "Workflow review", "Prioritized next steps"] },
] as const;

export const processSteps = [
  ["01", "Discover", "Map the brand, product, category, and existing creator signal."], ["02", "Qualify", "Find creators with the right audience and realistic fit."],
  ["03", "Activate", "Coordinate outreach, sampling, and clear next actions."], ["04", "Amplify", "Support active affiliates and turn response into content volume."],
  ["05", "Optimize", "Read the program, report what is working, and adjust."],
] as const;

export const faqs = [
  ["What kinds of brands are a fit?", "US DTC brands seeking a deliberate creator-commerce operating system, especially in beauty, apparel, jewelry, and sports nutrition."],
  ["Do you work only on TikTok Shop?", "TikTok Shop is the focus. The work can connect to adjacent creator, affiliate, and e-commerce operations where that supports the program."],
  ["What should a brand bring to a consultation?", "A clear view of the product, current creator activity, available sampling inventory, and the main challenge to solve."],
  ["Are outcomes guaranteed?", "No. Category, offer, creator mix, and operating context differ. The work centers on disciplined execution and clear reporting, not guarantees."],
] as const;
