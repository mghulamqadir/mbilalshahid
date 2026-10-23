import React from "react";
import { aboutPageContent } from "@/content/profile-data";
import { SectionHeading } from "@/components/ui/primitives";

export function ProfessionalSnapshot() {
  const { snapshot } = aboutPageContent;

  return (
    <section className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow={snapshot.eyebrow}
          title={snapshot.title}
          subtitle="How practical e-commerce operations, creator management, and analytics combine in client engagements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {snapshot.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 sm:p-8 bg-[#FAF8F4] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded inline-block mb-3">
                  Pillar {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#241B24] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#51284B] font-medium text-center mt-10 max-w-2xl mx-auto leading-relaxed">
          {snapshot.closingNote}
        </p>
      </div>
    </section>
  );
}
