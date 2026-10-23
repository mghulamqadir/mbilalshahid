import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { getAllCanonicalDossiers } from "@/features/content/queries";
import { resultsListingHero, resultsAuditCTA } from "@/content/case-studies-data";
import { FeaturedResults } from "@/components/case-studies/featured-results";
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";
import { MetricDefinitions } from "@/components/case-studies/metric-definitions";
import { PrimaryCTA } from "@/components/ui/primary-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Case Studies & Results | Bilal Shahid",
  description:
    "Explore five TikTok Shop campaign case studies covering apparel, sports nutrition, jewellery, and beauty, with reported results and creator strategies.",
  openGraph: {
    title: "TikTok Shop Case Studies & Results | Bilal Shahid",
    description:
      "Explore five TikTok Shop campaign case studies covering apparel, sports nutrition, jewellery, and beauty, with reported results and creator strategies.",
    type: "website",
    url: "https://mbilalshahid.vercel.app/results",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/results",
  },
};

export default async function ResultsPage() {
  const dossiers = await getAllCanonicalDossiers();

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#241B24]">
      {/* ── 01. PAGE HERO ────────────────────────────────────────────── */}
      <section className="pt-16 pb-14 md:pt-24 md:pb-18 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFCF8] border border-[#DDD3D7] text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#51284B] uppercase mb-6 shadow-2xs">
            {resultsListingHero.eyebrow}
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#241B24] leading-[1.12] mb-6">
            TikTok Shop Case Studies &amp; Results:{" "}
            <span className="italic font-normal text-[#35172F]">
              Real Campaigns. Measurable Results.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#746970] leading-relaxed font-light mb-8 max-w-2xl">
            {resultsListingHero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={resultsListingHero.primaryCTA.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] transition-all shadow-md active:scale-[0.98]"
            >
              <span>{resultsListingHero.primaryCTA.label}</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <Link
              href={resultsListingHero.secondaryCTA.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#35172F] transition-all shadow-2xs active:scale-[0.98]"
            >
              <span>{resultsListingHero.secondaryCTA.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 02. FEATURED RESULTS ─────────────────────────────────────── */}
      <FeaturedResults />

      {/* ── 03. ALL CASE STUDIES GRID WITH FILTERS ───────────────────── */}
      <CaseStudyGrid dossiers={dossiers} />

      {/* ── 04. METRICS EXPLAINED ────────────────────────────────────── */}
      <MetricDefinitions />

      {/* ── 05. FINAL AUDIT CTA ──────────────────────────────────────── */}
      <PrimaryCTA
        eyebrow={resultsAuditCTA.eyebrow}
        headline={resultsAuditCTA.title}
        description={resultsAuditCTA.subtitle}
        buttonLabel={resultsAuditCTA.buttonLabel}
        buttonHref={resultsAuditCTA.buttonHref}
        subtext={resultsAuditCTA.subtext}
      />
    </div>
  );
}
