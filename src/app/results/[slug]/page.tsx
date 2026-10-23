import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCases,
  getCaseBySlug,
  getCanonicalDossier,
  getRelatedDossiers,
} from "@/features/content/queries";
import { formatMetricValue } from "@/features/content/format";
import { CaseStudyHero } from "@/components/case-studies/case-study-hero";
import { CampaignSnapshot } from "@/components/case-studies/campaign-snapshot";
import { CampaignNarrative } from "@/components/case-studies/campaign-narrative";
import { EvidenceGallery } from "@/components/case-studies/evidence-gallery";
import { RelatedCaseStudies } from "@/components/case-studies/related-case-studies";
import { siteRoutes } from "@/content/navigation";

export async function generateStaticParams() {
  const cases = await getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dossier = await getCanonicalDossier(slug);
  const study = await getCaseBySlug(slug);

  if (!dossier || !study) {
    return { title: "Case Study Not Found | Bilal Shahid" };
  }

  return {
    title: dossier.seoTitle,
    description: dossier.seoDescription,
    openGraph: {
      title: `${dossier.sector}: ${dossier.headlineOutcome} | Bilal Shahid`,
      description: dossier.seoDescription,
      type: "article",
      url: `https://mbilalshahid.vercel.app/results/${dossier.slug}`,
      images: [
        {
          url: dossier.cardData.thumbnail,
          width: 1200,
          height: 630,
          alt: `${dossier.title} — Proof`,
        },
      ],
    },
    alternates: {
      canonical: `https://mbilalshahid.vercel.app/results/${dossier.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dossier = await getCanonicalDossier(slug);
  const legacyStudy = await getCaseBySlug(slug);

  if (!dossier || !legacyStudy) {
    notFound();
  }

  const relatedDossiers = await getRelatedDossiers(slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mbilalshahid.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://mbilalshahid.vercel.app/results",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dossier.title,
        item: `https://mbilalshahid.vercel.app/results/${dossier.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#241B24]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* ── 01. BREADCRUMB + HERO ────────────────────────────────────── */}
      <CaseStudyHero dossier={dossier} />

      {/* ── 02. CAMPAIGN SNAPSHOT METRICS ────────────────────────────── */}
      <CampaignSnapshot dossier={dossier} />

      {/* ── MAIN CONTENT CONTAINER (NARRATIVE + EVIDENCE + SIDEBAR) ─── */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Primary Left Column: Sections 03, 04, 05, 06, 07, 08 */}
            <div className="lg:col-span-8 space-y-16">
              {/* Narrative Sections (03 Challenge, 04 Role, 05 Strategy, 08 Learnings) */}
              <CampaignNarrative dossier={dossier} />

              {/* ── 06. RESULTS & PERFORMANCE BREAKDOWN ──────────────── */}
              <section className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
                    Section 06 · Full Metric Inventory
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-2">
                    Complete Performance Reporting
                  </h2>
                  <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                    Every metric recorded across the campaign reporting period ({dossier.periodLabel}), with explicit attribution sources.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {legacyStudy.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-5 rounded-xl border border-[#DDD3D7] bg-[#FFFCF8] flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#35172F] block mb-1">
                          {formatMetricValue(m.value, m.unit, m.format ?? "auto")}
                        </span>
                        <span className="text-xs font-semibold text-[#241B24] block leading-snug">
                          {m.label}
                        </span>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[10px] text-[#746970] space-y-0.5">
                        {m.footnote && <span className="block text-[#51284B] font-medium">{m.footnote}</span>}
                        <span className="block font-mono">
                          Period: {m.period.from} to {m.period.to}
                        </span>
                        <span className="block uppercase text-[9px] tracking-wider font-semibold text-[#746970]">
                          Source: {m.source.replace(/_/g, " ")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 07. EVIDENCE GALLERY ─────────────────────────────── */}
              <EvidenceGallery dossier={dossier} />
            </div>

            {/* Sidebar Column: Creators, Governance & Direct Action */}
            <aside aria-label="Campaign Highlights & Roster" className="lg:col-span-4 space-y-8 sticky top-28">
              {/* Featured Creators & Affiliates Roster */}
              {legacyStudy.topCreators && legacyStudy.topCreators.length > 0 && (
                <div className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] block mb-1">
                    Affiliate Network
                  </span>
                  <h3 className="font-editorial text-xl text-[#241B24] font-semibold mb-1">
                    Featured Creators &amp; Affiliates
                  </h3>
                  <p className="text-xs text-[#746970] mb-5 font-light">
                    Active creator contributors during this campaign period.
                  </p>

                  <div className="space-y-3">
                    {legacyStudy.topCreators.map((creator, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl bg-[#FAF8F4] border border-[#DDD3D7]/60 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="font-mono text-xs font-bold text-[#35172F] block">
                            {creator.handle}
                          </span>
                          {creator.note && (
                            <span className="text-[11px] text-[#746970] block leading-tight mt-0.5 font-light">
                              {creator.note}
                            </span>
                          )}
                        </div>
                        {creator.gmv && (
                          <span className="text-xs font-bold text-[#51284B] shrink-0 bg-[#DCC9DA]/50 px-2.5 py-1 rounded">
                            ${creator.gmv.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Campaign Quick Facts Card */}
              <div className="bg-[#FAF8F4] border border-[#DDD3D7] rounded-2xl p-6 text-xs text-[#746970] space-y-3">
                <span className="font-semibold text-[#241B24] block uppercase tracking-wider text-[10px]">
                  Campaign Metadata
                </span>
                <div className="space-y-2 divide-y divide-[#DDD3D7]/60">
                  <div className="pt-1 flex justify-between">
                    <span>Market:</span>
                    <strong className="text-[#241B24]">{dossier.market}</strong>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span>Category:</span>
                    <strong className="text-[#241B24]">{dossier.categoryLabel}</strong>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span>Reporting Dates:</span>
                    <strong className="text-[#241B24]">{dossier.periodLabel}</strong>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span>Campaign Code:</span>
                    <strong className="font-mono text-[#241B24]">{dossier.code}</strong>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span>Attribution Scope:</span>
                    <strong className="text-[#51284B]">Verified Dashboard</strong>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Consultation Action */}
              <div className="bg-[#35172F] text-[#FAF8F4] rounded-2xl p-6 sm:p-7 shadow-md">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#DCC9DA] block mb-2">
                  Growth Consultation
                </span>
                <h4 className="font-editorial text-xl font-semibold mb-2">
                  Run a Similar Campaign for Your Brand
                </h4>
                <p className="text-xs text-[#DCC9DA] leading-relaxed font-light mb-5">
                  Have an apparel, sports nutrition, jewellery, or beauty brand? Let&apos;s discuss custom commission tiers and creator pipelines.
                </p>
                <Link
                  href={`${siteRoutes.contact}?service=${encodeURIComponent(dossier.sector)}`}
                  className="inline-flex items-center justify-center w-full py-3 rounded-full font-semibold text-xs bg-[#FAF8F4] text-[#35172F] hover:bg-[#DCC9DA] transition-colors"
                >
                  <span>Request a Strategy Consultation</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 09. RELATED CASE STUDIES + FINAL CTA ─────────────────────── */}
      <RelatedCaseStudies
        relatedDossiers={relatedDossiers}
        currentSector={dossier.categoryLabel}
      />
    </div>
  );
}
