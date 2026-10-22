import React from "react";
import { operatingSystemSteps } from "@/content/seed";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata = {
  title: "Operating Methodology",
  description: "The 5-step creator-commerce system Bilal Shahid uses to build reliable, high-converting TikTok Shop growth.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            as="h1"
            eyebrow="The Framework"
            title="A Systematic Creator Engine"
            subtitle="Growth on TikTok Shop is not about hoping an algorithmic lottery ticket lands. It requires a disciplined, repeatable operational cadence."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial max-w-5xl">
          <div className="space-y-12">
            {operatingSystemSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl p-8 md:p-12 shadow-xs transition-all hover:border-[#51284B]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="font-editorial text-4xl md:text-5xl font-bold text-[#51284B] block mb-2">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase font-semibold text-[#746970] tracking-wider">
                      Phase {idx + 1} of 5
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-4">
                    <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24]">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#746970] leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-[#DDD3D7]/60">
                      <span className="text-xs uppercase font-semibold text-[#51284B] block mb-3">
                        Operational Outputs & Artifacts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#241B24]">
                            <CheckIcon className="w-3.5 h-3.5 text-[#51284B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
