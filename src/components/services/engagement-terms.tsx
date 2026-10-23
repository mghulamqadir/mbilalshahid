import React from "react";
import { engagementTerms } from "@/content/services-data";
import { SectionHeading } from "@/components/ui/primitives";

export function EngagementTerms() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow="Commercial Terms & Governance"
          title="Engagement Scope & Expectations"
          subtitle="Clear operational boundaries, expense transparency, and realistic expectations established before any work begins."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {engagementTerms.map((term, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 sm:p-8 bg-[#FFFCF8] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
                  Pillar {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-editorial text-xl text-[#241B24] mb-3">
                  {term.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                  {term.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[#F4EDE9] border border-[#DDD3D7]/70 text-[11px] text-[#746970] text-center italic">
          Bilal Shahid operates as an independent advisor and growth manager. Pricing is custom-quoted based on catalogue size, target geography, and active creator pipeline.
        </div>
      </div>
    </section>
  );
}
