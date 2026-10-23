import React from "react";
import type { CanonicalDossier } from "@/content/case-studies-data";

export function CampaignSnapshot({ dossier }: { dossier: CanonicalDossier }) {
  return (
    <section className="py-12 md:py-16 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970] block mb-1">
              Section 02 · Quantitative Performance
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24]">
              Campaign Performance Snapshot
            </h2>
          </div>
          <span className="text-xs text-[#746970] font-light italic">
            * All figures correspond to verified campaign reporting windows.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dossier.snapshotMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] flex flex-col justify-between hover:border-[#51284B]/40 transition-colors"
            >
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#35172F] block mb-1 leading-none">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-[#241B24] block mb-3 leading-snug">
                  {metric.label}
                </span>
                <p className="text-[11px] text-[#746970] leading-relaxed font-light">
                  {metric.definition}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[10px] text-[#51284B] font-medium">
                Period: {metric.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
