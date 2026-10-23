import React from "react";
import { launchProjectTimeline, launchProjectNote } from "@/content/process-data";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";

export function LaunchTimeline() {
  return (
    <section id="launch-timeline" className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#DDD3D7] scroll-mt-16">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow="One-Time Project Delivery"
          title="For New Shops: A Focused 4–6-Week Launch"
          subtitle="The TikTok Shop Launch & Setup package is a dedicated one-time project, not a three-month retainer. It follows a distinct, accelerated delivery timeline."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {launchProjectTimeline.map((stage, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 bg-[#FFFCF8] flex flex-col justify-between border-[#DDD3D7]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
                    {stage.period}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970]">
                    Sprint {idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-lg text-[#241B24] mb-4">
                  {stage.focus}
                </h3>

                <div className="pt-3 border-t border-[#DDD3D7]/60 space-y-2">
                  <span className="text-[10px] uppercase font-semibold text-[#51284B] tracking-wider block">
                    Expected Outputs
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#241B24]">
                    {stage.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-[#51284B] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-[#746970] italic mt-6 text-center max-w-3xl mx-auto leading-relaxed">
          * {launchProjectNote}
        </p>
      </div>
    </section>
  );
}
