import React from "react";
import { aboutPageContent, verifiedExperience } from "@/content/profile-data";
import { SectionHeading } from "@/components/ui/primitives";

export function CareerJourney() {
  const { journey } = aboutPageContent;

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-4xl">
        <SectionHeading
          eyebrow={journey.eyebrow}
          title={journey.title}
          subtitle="Demonstrated history across marketplace operations, agency client delivery, and brand-building."
        />

        <div className="space-y-4 text-xs sm:text-sm text-[#746970] leading-relaxed font-light mt-8 max-w-3xl">
          {journey.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-10 mt-12 pt-8 border-t border-[#DDD3D7]/60">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block">
            Featured Experience
          </span>

          {verifiedExperience.map((role) => (
            <div
              key={role.id}
              className="relative pl-8 md:pl-10 border-l-2 border-[#51284B]/30 pb-4"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#35172F] border-2 border-[#FAF8F4]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="font-editorial text-xl sm:text-2xl text-[#241B24]">
                  {role.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#51284B] shrink-0">
                  {role.period}
                </span>
              </div>

              <div className="text-xs font-medium text-[#746970] mb-3">
                {role.employer} · <span className="font-light">{role.market}</span>
              </div>

              <ul className="space-y-1.5 text-xs text-[#241B24] leading-relaxed">
                {role.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-[#51284B] font-bold text-xs shrink-0">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
