import React from "react";
import { aboutPageContent } from "@/content/profile-data";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";

export function CoreExpertise() {
  const { expertise } = aboutPageContent;

  return (
    <section className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          subtitle="Specific operational disciplines applied across brand audits, launches, and ongoing management."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {expertise.items.map((item, idx) => (
            <div
              key={idx}
              className="card-editorial p-6 bg-[#FAF8F4] flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-[#EEE5E1] text-[#51284B] flex items-center justify-center shrink-0 mt-0.5">
                <CheckIcon className="w-4 h-4 text-[#51284B]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#241B24] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#746970] text-center mt-10 max-w-2xl mx-auto leading-relaxed italic">
          {expertise.closingNote}
        </p>
      </div>
    </section>
  );
}
