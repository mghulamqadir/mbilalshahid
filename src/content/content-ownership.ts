/**
 * Content Ownership Architecture Specification
 * Phase 1 Architecture: Each major topic has ONE primary owner page.
 * Supporting pages provide previews/summaries only and link to the primary owner.
 */

export interface PageContentOwnership {
  route: string;
  pageName: string;
  ownedTopics: string[];
  prohibitedDuplications: string[];
  conversionGoal: string;
}

export const contentOwnershipMap: Record<string, PageContentOwnership> = {
  home: {
    route: "/",
    pageName: "Home",
    ownedTopics: [
      "Primary positioning & brand value proposition",
      "Credibility metrics strip & quick proof",
      "Curated featured case studies (top 3)",
      "High-level service package previews with links",
      "Short personal intro preview with link to About",
      "Simplified operating system workflow preview with link to How I Work",
      "Primary audit conversion CTA",
    ],
    prohibitedDuplications: [
      "Full 3-package deliverables and engagement terms (owned by Services)",
      "Full 5-step operational outputs and 30/60/90 roadmap (owned by How I Work)",
      "Full platform tool inventory (owned by About)",
      "Complete employment history and academic projects (owned by Résumé)",
    ],
    conversionGoal: "Request a TikTok Shop Growth Audit",
  },
  services: {
    route: "/services",
    pageName: "Services",
    ownedTopics: [
      "All 3 engagement packages (Launch & Setup, Creator Affiliate Growth, Full Growth Management)",
      "Detailed package deliverables, scope, and engagement structures",
      "Core operational capabilities overview",
      "Engagement terms & scoping disclaimers",
    ],
    prohibitedDuplications: [
      "Full 5-step operating system methodology (owned by How I Work)",
      "Full 30/60/90 roadmap details (owned by How I Work)",
      "Deep case dossier evidence and screenshots (owned by Case Studies)",
    ],
    conversionGoal: "Select a package / Request a Growth Consultation",
  },
  results: {
    route: "/results",
    pageName: "Case Studies Index",
    ownedTopics: [
      "Case study index and sector filtering",
      "Cross-category performance outcomes",
      "Verified metric cards and proof snapshots",
    ],
    prohibitedDuplications: [
      "Detailed service packages (owned by Services)",
      "Generic operating framework details (owned by How I Work)",
    ],
    conversionGoal: "Explore individual case dossiers / Request a Growth Audit",
  },
  caseStudyDetail: {
    route: "/results/[slug]",
    pageName: "Individual Case Dossier",
    ownedTopics: [
      "Campaign background, market context, and brand challenge",
      "Authentic Seller Center & Kalodata evidence screenshots",
      "Specific operational responsibilities and strategy",
      "Verified performance metrics with date stamps and sources",
      "Top creator contributor breakdowns",
    ],
    prohibitedDuplications: [
      "Generic operating methodology explanations (owned by How I Work)",
      "Complete service package listings (owned by Services)",
    ],
    conversionGoal: "Request a Growth Audit for similar category/challenge",
  },
  process: {
    route: "/process",
    pageName: "How I Work",
    ownedTopics: [
      "5-step Creator Commerce Operating System",
      "Operational outputs and artifacts for each phase",
      "30 / 60 / 90-Day Execution Roadmap with phase milestones",
      "Sample creator pitch & vetting evaluation benchmark",
    ],
    prohibitedDuplications: [
      "Complete service package listings and commercial pricing terms (owned by Services)",
      "Full case-study evidence galleries (owned by Case Studies)",
    ],
    conversionGoal: "Request a Growth Audit to apply the framework",
  },
  about: {
    route: "/about",
    pageName: "About",
    ownedTopics: [
      "Professional background & operating philosophy",
      "High-level career milestones and agency/brand experience summary",
      "Education & core coursework credentials",
      "Full tools & technology ecosystem fluency",
    ],
    prohibitedDuplications: [
      "Full line-by-line CV/résumé employment history (owned by Résumé)",
      "Detailed academic brand project write-ups (owned by Résumé)",
      "Full service package descriptions (owned by Services)",
    ],
    conversionGoal: "View Résumé or Direct Inquiry",
  },
  resume: {
    route: "/resume",
    pageName: "Résumé",
    ownedTopics: [
      "Full chronological employment history with detailed bullet points",
      "Full educational background and academic credentials",
      "Detailed strategic brand projects",
      "Direct PDF resume download link",
    ],
    prohibitedDuplications: [
      "Sales-oriented promotional marketing copy (owned by Home/Services)",
      "Extensive case study proof galleries (owned by Case Studies)",
    ],
    conversionGoal: "Download PDF Resume / Inquire for growth contract",
  },
  contact: {
    route: "/contact",
    pageName: "Contact",
    ownedTopics: [
      "TikTok Shop Growth Audit inquiry form",
      "Market, shop stage, and service interest qualification",
      "Direct contact alternatives (Email, WhatsApp)",
      "What Happens Next onboarding timeline",
      "Common questions FAQ",
      "Transactional email privacy disclosure (Brevo)",
    ],
    prohibitedDuplications: [
      "Full service package listings or deliverables (owned by Services)",
      "Operating methodology explanations (owned by How I Work)",
    ],
    conversionGoal: "Submit Growth Audit inquiry form",
  },
  privacy: {
    route: "/privacy",
    pageName: "Privacy Policy",
    ownedTopics: [
      "Data handling & transactional processing disclosures (Brevo API)",
      "Zero-marketing-sale data policy",
      "Platform independence disclaimer",
      "Contact information for data removal",
    ],
    prohibitedDuplications: [
      "Promotional or sales content",
    ],
    conversionGoal: "Information only / Return to Homepage",
  },
};
