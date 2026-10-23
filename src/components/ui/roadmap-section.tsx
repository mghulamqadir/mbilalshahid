import React from "react";
import type { RoadmapPhase } from "@/content/seed";
import { CheckIcon } from "@/components/ui/primitives";

interface RoadmapSectionProps {
  phases: RoadmapPhase[];
}

export function RoadmapSection({ phases }: RoadmapSectionProps) {
  return (
    <div>
      <p className="text-xs text-[#746970] italic mb-8 max-w-2xl">
        Illustrative delivery framework based on how growth programmes typically progress. Actual timelines vary by brand, inventory availability, and market conditions. Not a guarantee of specific outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-8 relative overflow-hidden ${
              idx === 1
                ? "bg-[#35172F] border-[#51284B] text-[#FAF8F4]"
                : "bg-[#FFFCF8] border-[#DDD3D7] text-[#241B24]"
            }`}
          >
            <div className="mb-6">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest block mb-1 ${
                  idx === 1 ? "text-[#DCC9DA]" : "text-[#51284B]"
                }`}
              >
                {phase.days}
              </span>
              <h3
                className={`font-editorial text-2xl leading-snug mb-2 ${
                  idx === 1 ? "text-[#FAF8F4]" : "text-[#241B24]"
                }`}
              >
                {phase.title}
              </h3>
              <p
                className={`text-sm leading-relaxed font-light ${
                  idx === 1 ? "text-[#DCC9DA]" : "text-[#746970]"
                }`}
              >
                {phase.description}
              </p>
            </div>
            <ul className="space-y-2.5">
              {phase.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2 text-xs">
                  <CheckIcon
                    className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                      idx === 1 ? "text-[#DCC9DA]" : "text-[#51284B]"
                    }`}
                  />
                  <span className={idx === 1 ? "text-[#DCC9DA]" : "text-[#241B24]"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
