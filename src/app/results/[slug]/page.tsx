import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCases, getCaseBySlug } from "@/features/content/queries";
import { formatMetricValue } from "@/features/content/format";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { ArrowRight, CheckIcon } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";

export async function generateStaticParams() {
  const cases = await getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseBySlug(slug);

  if (!study) {
    notFound();
  }

  const allCases = await getAllCases();
  const currentIndex = allCases.findIndex((c) => c.slug === slug);
  const nextCase = allCases[(currentIndex + 1) % allCases.length];

  return (
    <>
      {/* Dossier Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="flex items-center gap-2 text-xs font-medium text-[#746970] mb-6">
            <Link href="/results" className="hover:text-[#35172F]">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-[#35172F] font-semibold">{study.sector}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge-editorial">{study.sector}</span>
              <span className="text-xs bg-[#EEE5E1] text-[#241B24] px-3 py-1 rounded-full font-medium">
                {study.period.label}
              </span>
              <span className="text-xs text-[#746970] font-mono">{study.code}</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#241B24] leading-[1.12] mb-6">
              {study.title}
            </h1>

            <p className="text-lg md:text-xl text-[#746970] leading-relaxed font-light mb-8">
              {study.summary}
            </p>

            {/* Headline Result Callout */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-[#35172F] text-[#FAF8F4] px-6 py-4 rounded-xl shadow-md">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#DCC9DA] block font-medium">
                  Reported Headline Outcome
                </span>
                <span className="font-editorial text-2xl sm:text-3xl font-semibold">
                  {study.headlineOutcome}
                </span>
              </div>
              <div className="text-xs text-[#DCC9DA] sm:border-l sm:border-[#51284B] sm:pl-6 max-w-xs">
                Role: <strong>{study.role}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Metrics Breakdown Grid */}
      <section className="py-12 md:py-16 bg-[#FFFCF8] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#746970] mb-8">
            Observed Program KPIs & Metrics
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[#DDD3D7] bg-[#FAF8F4]/60 flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial text-2xl sm:text-3xl font-semibold text-[#35172F] block mb-1">
                    {formatMetricValue(metric.value, metric.unit, metric.format ?? "auto")}
                  </span>
                  <span className="text-xs font-medium text-[#241B24] block">
                    {metric.label}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[11px] text-[#746970]">
                  <span>{metric.footnote || `${metric.period.from} to ${metric.period.to}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative & Strategy Section */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div>
                <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24] mb-4">
                  The Operational Challenge
                </h3>
                <p className="text-base text-[#746970] leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24] mb-4">
                  The Creator & Commerce Strategy
                </h3>
                <p className="text-base text-[#746970] leading-relaxed mb-6">
                  {study.approach}
                </p>

                <div className="space-y-3 bg-[#FFFCF8] p-6 rounded-xl border border-[#DDD3D7]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#51284B] mb-2">
                    Core Operational Responsibilities
                  </h4>
                  {study.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#241B24]">
                      <CheckIcon className="w-4 h-4 text-[#51284B] mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Takeaway */}
              <div className="p-6 rounded-xl bg-[#EEE5E1]/60 border-l-4 border-[#35172F]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#35172F] mb-2">
                  Operating Takeaway
                </h4>
                <p className="text-sm text-[#241B24] leading-relaxed italic font-editorial">
                  &ldquo;{study.learning}&rdquo;
                </p>
              </div>

              {/* Dashboard Evidence Gallery */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24]">
                      Dashboard Proof & Evidence
                    </h3>
                    <p className="text-xs text-[#746970] mt-1">
                      Direct platform exports. Click any screenshot to open the high-resolution lightbox.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {study.evidence.map((proof, idx) => (
                    <ImageLightbox
                      key={idx}
                      src={`/media/cases/${proof.filename}`}
                      alt={proof.title}
                      title={proof.title}
                      description={proof.description}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column: Top Creators & Next Study */}
            <div className="lg:col-span-4 space-y-8">
              {/* Top Creators Roster Card */}
              {study.topCreators && study.topCreators.length > 0 && (
                <div className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-xl p-6 shadow-sm">
                  <h4 className="font-editorial text-lg text-[#241B24] mb-1">
                    Featured Creators & Affiliates
                  </h4>
                  <p className="text-xs text-[#746970] mb-4">
                    Creators active during this campaign period.
                  </p>

                  <div className="space-y-3">
                    {study.topCreators.map((creator, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-lg bg-[#FAF8F4] border border-[#DDD3D7]/60 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="font-mono text-xs font-bold text-[#35172F] block">
                            {creator.handle}
                          </span>
                          {creator.note && (
                            <span className="text-[11px] text-[#746970] block leading-tight mt-0.5">
                              {creator.note}
                            </span>
                          )}
                        </div>
                        {creator.gmv && (
                          <span className="text-xs font-semibold text-[#51284B] shrink-0 bg-[#DCC9DA]/50 px-2 py-0.5 rounded">
                            ${creator.gmv.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Data Integrity Box */}
              <div className="bg-[#FAF8F4] border border-[#DDD3D7] rounded-xl p-6 text-xs text-[#746970] space-y-2">
                <span className="font-semibold text-[#241B24] block uppercase tracking-wider text-[10px]">
                  Data & Integrity Disclosure
                </span>
                <p>
                  Metrics reflect reported platform values from TikTok Shop Seller Center and Kalodata
                  during Bilal Shahid&apos;s active tenure ({study.period.label}).
                </p>
                <p>
                  Total shop GMV and creator-attributed GMV are maintained as distinct metrics.
                </p>
              </div>

              {/* Next Case Link */}
              <div className="bg-[#35172F] text-[#FAF8F4] rounded-xl p-6">
                <span className="text-[10px] uppercase font-semibold text-[#DCC9DA] block mb-2">
                  Next Case Study
                </span>
                <h4 className="font-editorial text-lg mb-2">{nextCase.sector}</h4>
                <p className="text-xs text-[#DCC9DA] mb-4 line-clamp-2">
                  {nextCase.title}
                </p>
                <Link
                  href={`/results/${nextCase.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#FAF8F4] hover:text-[#DCC9DA] underline underline-offset-4"
                >
                  <span>View dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
