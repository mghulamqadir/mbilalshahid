import React from "react";
import Link from "next/link";
import type { CanonicalDossier } from "@/content/case-studies-data";

export function CaseStudyHero({ dossier }: { dossier: CanonicalDossier }) {
  return (
    <section className="pt-14 pb-12 md:pt-20 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#746970] mb-6">
          <Link href="/" className="hover:text-[#35172F] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/results" className="hover:text-[#35172F] transition-colors">
            Case Studies
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#35172F] font-semibold" aria-current="page">
            {dossier.categoryLabel}
          </span>
        </nav>

        <div className="max-w-4xl">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-3 py-1 rounded-full">
              {dossier.sector}
            </span>
            <span className="text-xs bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] px-3 py-1 rounded-full font-medium">
              {dossier.periodLabel}
            </span>
            <span className="text-xs text-[#746970] font-mono px-2 py-1">
              {dossier.code}
            </span>
          </div>

          {/* Single H1 Title */}
          <h1 className="font-editorial text-3xl sm:text-5xl md:text-6xl text-[#241B24] leading-[1.12] mb-6 tracking-tight">
            {dossier.title}
          </h1>

          {/* Executive Headline Outcome Callout */}
          <div className="bg-[#2D1627] text-[#FAF8F4] rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#51284B]">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#DCC9DA] block mb-1">
                Reported Headline Outcome · {dossier.headlineMetricType}
              </span>
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#FAF8F4] tracking-tight">
                {dossier.headlineOutcome}
              </div>
              <span className="text-xs text-[#DCC9DA]/80 block mt-1">
                Market: {dossier.market}
              </span>
            </div>

            <div className="md:border-l md:border-[#51284B] md:pl-6 max-w-sm">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#DCC9DA] block mb-1">
                Bilal&apos;s Campaign Role
              </span>
              <p className="text-xs text-[#FAF8F4] font-medium leading-relaxed">
                {dossier.role}
              </p>
              <p className="text-[11px] text-[#DCC9DA]/80 font-light mt-1 leading-snug">
                {dossier.roleScope}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
