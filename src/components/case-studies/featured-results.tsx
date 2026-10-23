import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredResultsHighlights } from "@/content/case-studies-data";

export function FeaturedResults() {
  return (
    <section className="py-12 md:py-16 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="mb-10 max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
            Selected Campaign Highlights
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] tracking-tight mb-2">
            Featured Campaign Results
          </h2>
          <p className="text-sm sm:text-base text-[#746970] leading-relaxed font-light">
            Selected examples of creator commerce performance across different product categories and campaign periods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResultsHighlights.map((feat) => (
            <div
              key={feat.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] hover:border-[#51284B] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] block mb-2">
                  {feat.category}
                </span>
                <h3 className="font-editorial text-xl font-semibold text-[#241B24] leading-snug mb-3">
                  {feat.title}
                </h3>
                <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#35172F] leading-none mb-1">
                  {feat.primaryMetric.value}
                </div>
                <span className="text-xs text-[#746970] font-medium block mb-4">
                  {feat.primaryMetric.label}
                </span>
                <p className="text-xs text-[#746970] leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#DDD3D7]/70">
                <Link
                  href={feat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B] group-hover:translate-x-0.5 transition-all"
                >
                  <span>{feat.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
