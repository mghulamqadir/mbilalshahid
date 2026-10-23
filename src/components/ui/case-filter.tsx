"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/seed";
import { ArrowRight } from "@/components/ui/primitives";

const CATEGORIES = [
  { id: "all", label: "All Sectors" },
  { id: "apparel", label: "Apparel" },
  { id: "nutrition", label: "Sports Nutrition" },
  { id: "jewellery", label: "Fine Jewellery" },
  { id: "beauty", label: "Beauty" },
];

const emptySubscribe = () => () => {};

interface CaseFilterProps {
  allCases: CaseStudy[];
}

export function CaseFilter({ allCases }: CaseFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const filteredCases =
    activeCategory === "all"
      ? allCases
      : allCases.filter((c) => c.category === activeCategory);

  // Build dynamic category counts
  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count:
      cat.id === "all"
        ? allCases.length
        : allCases.filter((c) => c.category === cat.id).length,
  })).filter((cat) => cat.id === "all" || cat.count > 0);

  return (
    <div data-hydrated={mounted}>
      {/* Category Filter Pills */}
      <div className="relative z-10 flex flex-wrap gap-2.5 mt-8">
        {categoriesWithCounts.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-[#35172F] text-[#FAF8F4] shadow-sm"
                : "bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#51284B]"
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((study) => (
            <article
              key={study.slug}
              className="card-editorial flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Dashboard Evidence Preview */}
                <div
                  className="relative w-full aspect-[16/10] bg-[#EEE5E1] border-b border-[#DDD3D7] overflow-hidden"
                  style={{ position: "relative" }}
                >
                  {study.evidence[0] && (
                    <Image
                      src={`/media/cases/${study.evidence[0].filename}`}
                      alt={study.evidence[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-3 left-3 bg-[#35172F]/90 text-[#FAF8F4] text-[11px] font-semibold px-2.5 py-1 rounded">
                    {study.period.label}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-semibold text-[#51284B] tracking-wider">
                      {study.sector}
                    </span>
                    <span className="text-xs text-[#746970]">{study.code}</span>
                  </div>

                  <h3 className="font-editorial text-xl text-[#241B24] mb-3 group-hover:text-[#35172F] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs text-[#746970] leading-relaxed mb-6 line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Headline Result Badge */}
                  <div className="bg-[#FAF8F4] border border-[#DDD3D7] rounded-lg p-3.5 mb-4">
                    <span className="text-[10px] uppercase font-semibold text-[#746970] tracking-wider block mb-0.5">
                      {study.outcomeType}
                    </span>
                    <span className="font-editorial text-2xl font-bold text-[#35172F] block">
                      {study.headlineOutcome}
                    </span>
                  </div>

                  {/* Quick Metric Snapshot */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#746970] pt-2 border-t border-[#DDD3D7]/60">
                    <div>
                      <span className="font-semibold text-[#241B24] block">
                        {study.metrics[0].value.toLocaleString()}
                        {study.metrics[0].unit === "usd" ? " USD" : ""}
                      </span>
                      <span>{study.metrics[0].label}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#241B24] block">
                        {study.metrics[1]?.value.toLocaleString()}
                        {study.metrics[1]?.unit === "usd" ? " USD" : ""}
                      </span>
                      <span>{study.metrics[1]?.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="p-6 pt-0 border-t border-[#DDD3D7]/50 mt-auto flex items-center justify-between text-xs font-semibold text-[#35172F]">
                <Link
                  href={`/results/${study.slug}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#51284B]"
                >
                  <span>Read full case dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
