import React from "react";
import { retainerRoadmap, retainerRoadmapNote } from "@/content/process-data";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";

export function RetainerRoadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7] scroll-mt-16">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow="Ongoing Retainer Engagements"
          title="The First 90 Days: Delivery Roadmap"
          subtitle="A structured framework for Creator Affiliate Growth and Full Shop Management retainers. Clear delivery gates prevent wasted sample inventory and ensure reliable attribution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {retainerRoadmap.map((stage, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 sm:p-8 bg-[#FAF8F4] flex flex-col justify-between border-[#DDD3D7]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
                    {stage.days}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970]">
                    {stage.phaseLabel}
                  </span>
                </div>

                <div className="text-xs uppercase font-semibold text-[#51284B] tracking-wider mb-1">
                  {stage.theme}
                </div>
                <h3 className="font-editorial text-2xl text-[#241B24] mb-3">
                  {stage.title}
                </h3>

                <p className="text-xs text-[#746970] leading-relaxed mb-6 font-light">
                  {stage.objective}
                </p>

                {/* Key Activities */}
                <div className="space-y-2 pb-5 border-b border-[#DDD3D7]/60">
                  <span className="text-[10px] uppercase font-semibold text-[#746970] tracking-wider block">
                    Key Activities
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#241B24]">
                    {stage.keyActivities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="text-[#51284B] font-bold text-xs">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="pt-4 space-y-2">
                  <span className="text-[10px] uppercase font-semibold text-[#51284B] tracking-wider block">
                    End-of-Stage Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-[#241B24]">
                    {stage.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#51284B] mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#746970] italic mt-6 leading-relaxed max-w-4xl mx-auto text-center">
          * {retainerRoadmapNote}
        </p>
      </div>
    </section>
  );
}
