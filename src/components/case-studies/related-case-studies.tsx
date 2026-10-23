import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CanonicalDossier } from "@/content/case-studies-data";
import { siteRoutes } from "@/content/navigation";

interface RelatedCaseStudiesProps {
  relatedDossiers: CanonicalDossier[];
  currentSector: string;
}

export function RelatedCaseStudies({
  relatedDossiers,
  currentSector,
}: RelatedCaseStudiesProps) {
  return (
    <section className="py-16 md:py-24 bg-[#FFFCF8] border-t border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
              Section 09 · Next Steps &amp; Portfolio Exploration
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] tracking-tight">
              Related Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-[#746970] font-light mt-1">
              Explore additional campaigns connected to {currentSector} creator strategies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={siteRoutes.services}
              className="text-xs font-semibold text-[#35172F] hover:text-[#51284B] underline underline-offset-4"
            >
              View Service Packages &rarr;
            </Link>
            <Link
              href={siteRoutes.results}
              className="text-xs font-semibold text-[#35172F] hover:text-[#51284B] underline underline-offset-4"
            >
              All Case Studies &rarr;
            </Link>
          </div>
        </div>

        {/* 2 Related Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {relatedDossiers.map((study) => (
            <article
              key={study.slug}
              className="card-editorial bg-[#FAF8F4] border border-[#DDD3D7] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#51284B] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#F2ECE9]">
                  <Image
                    src={study.cardData.thumbnail}
                    alt={`${study.title} — ${study.cardData.pillTag}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F4]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#51284B] border border-[#DDD3D7]/60">
                    {study.cardData.pillTag}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#746970] block mb-1">
                    {study.code} · {study.periodLabel}
                  </span>
                  <h3 className="font-editorial text-xl font-semibold text-[#241B24] leading-snug tracking-tight mb-2">
                    {study.title}
                  </h3>
                  <div className="font-editorial text-2xl font-bold text-[#35172F] leading-none mb-1">
                    {study.cardData.primaryValue}
                  </div>
                  <span className="text-xs text-[#746970] block mb-3 font-light">
                    {study.cardData.primaryLabel}
                  </span>
                </div>
              </div>

              <div className="p-5 border-t border-[#DDD3D7]/60 bg-[#FFFCF8] flex items-center justify-between">
                <Link
                  href={`/results/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Open Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-[#746970] font-light">
                  {study.evidence.length} Evidence Dashboard
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Dedicated Growth Audit Callout Container */}
        <div className="bg-[#2D1627] text-[#FAF8F4] rounded-3xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#51284B]">
          <div className="max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DCC9DA] block mb-2">
              DISCUSS YOUR GROWTH
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#FAF8F4] leading-tight mb-3">
              Ready to Scale on TikTok Shop?
            </h3>
            <p className="text-xs sm:text-sm text-[#DCC9DA] leading-relaxed font-light">
              Whether you need creator affiliate recruitment, lean sampling protocols, or full-funnel management, let&apos;s evaluate your shop&apos;s growth bottlenecks.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-start gap-3">
            <Link
              href={siteRoutes.contact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-[#FAF8F4] text-[#2D1627] hover:bg-[#DCC9DA] transition-all shadow-md active:scale-[0.98]"
            >
              <span>Request a Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-[10px] text-[#DCC9DA]/75 tracking-wider">
              Independent Specialist · 24–48h Response SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
