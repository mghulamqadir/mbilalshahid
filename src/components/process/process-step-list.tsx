import React from "react";
import { processFrameworkSteps } from "@/content/process-data";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";

export function ProcessStepList() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow="The Five-Step Methodology"
          title="The Creator Commerce Framework"
          subtitle="One consistent operational framework that connects creator discovery, product seeding, affiliate activation, and performance analysis into a repeatable cadence."
        />

        <div className="space-y-8 mt-12">
          {processFrameworkSteps.map((step, idx) => (
            <div
              key={step.id}
              className="card-editorial p-8 md:p-10 bg-[#FFFCF8] transition-all hover:border-[#51284B] shadow-xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Step indicator */}
                <div className="md:col-span-3">
                  <span className="font-editorial text-4xl md:text-5xl font-bold text-[#51284B] block mb-2">
                    {step.step}
                  </span>
                  <span className="text-[11px] uppercase font-semibold text-[#746970] tracking-wider block">
                    Stage {idx + 1} of 5
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#51284B]">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-[#746970] leading-relaxed font-light">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-[#DDD3D7]/60">
                    <span className="text-[11px] uppercase font-semibold text-[#51284B] block mb-3 tracking-wider">
                      Typical Operational Outputs
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {step.outputs.map((out, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-center gap-2 text-xs text-[#241B24] bg-[#FAF8F4] p-2.5 rounded-lg border border-[#DDD3D7]/50"
                        >
                          <CheckIcon className="w-3.5 h-3.5 text-[#51284B] shrink-0" />
                          <span className="font-medium">{out}</span>
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
  );
}
