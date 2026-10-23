"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CanonicalDossier } from "@/content/case-studies-data";

interface CaseStudyGridProps {
  dossiers: CanonicalDossier[];
}

const CATEGORY_MAP = [
  { id: "all", label: "All Sectors", filterKey: "all" },
  { id: "apparel", label: "Apparel", filterKey: "apparel" },
  { id: "nutrition", label: "Sports Nutrition", filterKey: "nutrition" },
  { id: "jewellery", label: "Jewellery", filterKey: "jewellery" },
  { id: "beauty", label: "Beauty", filterKey: "beauty" },
] as const;

const emptySubscribe = () => () => {};

export function CaseStudyGrid({ dossiers }: CaseStudyGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const filteredDossiers =
    activeCategory === "all"
      ? dossiers
      : dossiers.filter((d) => d.category === activeCategory);

  const categoriesWithCounts = CATEGORY_MAP.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? dossiers.length
        : dossiers.filter((d) => d.category === cat.id).length,
  }));

  return (
    <section id="case-studies-grid" className="py-16 md:py-20 bg-[#FAF8F4]" data-hydrated={mounted}>
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
              Full Portfolio Archive
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] tracking-tight mb-2">
              Explore All Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#746970] max-w-2xl leading-relaxed font-light">
              Discover five campaigns covering creator outreach, affiliate activation, sampling, shop operations, content production, and performance reporting.
            </p>
          </div>
        </div>

        {/* Category Filter Navigation */}
        <div
          role="tablist"
          aria-label="Filter case studies by sector"
          className="relative z-10 flex flex-wrap gap-2.5 mb-10"
        >
          {categoriesWithCounts.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#51284B]/40 ${
                  isSelected
                    ? "bg-[#35172F] text-[#FAF8F4] shadow-sm font-semibold"
                    : "bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#51284B] hover:bg-[#FAF5F2]"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* 5-Card Responsive Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDossiers.map((study) => (
            <article
              key={study.slug}
              className="card-editorial bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#51284B] hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#F2ECE9]">
                  <Image
                    src={study.cardData.thumbnail}
                    alt={`${study.title} — ${study.cardData.pillTag}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF8F4]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#51284B] border border-[#DDD3D7]/60">
                    {study.cardData.pillTag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#746970] block mb-1">
                    {study.code} · {study.periodLabel}
                  </span>
                  <h3 className="font-editorial text-xl font-semibold text-[#241B24] leading-snug tracking-tight mb-3">
                    {study.title}
                  </h3>

                  <div className="font-editorial text-3xl font-bold text-[#35172F] leading-none mb-1">
                    {study.cardData.primaryValue}
                  </div>
                  <span className="text-xs text-[#746970] block mb-4 font-light">
                    {study.cardData.primaryLabel}
                  </span>

                  <p className="text-xs text-[#746970] leading-relaxed font-light line-clamp-3">
                    {study.challenge}
                  </p>
                </div>
              </div>

              {/* Secondary Stats Strip */}
              {study.cardData.secondaryStats.length > 0 && (
                <div className="border-t border-[#DDD3D7]/60 px-4 py-3 grid grid-cols-3 divide-x divide-[#DDD3D7]/60 text-center bg-[#FAF8F4]/60">
                  {study.cardData.secondaryStats.map((s, idx) => (
                    <div key={idx} className="px-2 flex flex-col justify-center">
                      <div className="text-xs font-bold text-[#241B24] leading-tight">{s.value}</div>
                      <div className="text-[9px] text-[#746970] leading-snug mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Footer */}
              <div className="p-5 border-t border-[#DDD3D7]/60 bg-[#FAF8F4]/40 flex items-center justify-between">
                <Link
                  href={`/results/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Open Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-[#746970] font-light">
                  {study.evidence.length} Evidence Screenshots
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
