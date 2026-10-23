import React from "react";
import { metricDefinitions } from "@/content/case-studies-data";

export function MetricDefinitions() {
  return (
    <section className="py-16 md:py-20 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
            Attribution &amp; Integrity
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] tracking-tight mb-3">
            Understanding the Results
          </h2>
          <p className="text-sm sm:text-base text-[#746970] leading-relaxed font-light mb-3">
            Every campaign is different. The metrics shown across these case studies may include total shop GMV, affiliate-attributed GMV, reported revenue, creator activity, and content reach.
          </p>
          <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light italic">
            Each case study identifies the measurement period and metric type so results can be interpreted in context. Reported GMV is not equivalent to profit, and historical performance does not guarantee future outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricDefinitions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#51284B] block mb-1">
                  {item.term}
                </span>
                <h3 className="font-editorial text-lg font-semibold text-[#241B24] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#746970] leading-relaxed font-light mb-4">
                  {item.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DDD3D7]/60 text-[11px] text-[#51284B] font-medium leading-snug">
                Why it matters: <span className="font-light text-[#746970]">{item.importance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
