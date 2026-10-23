import React from "react";
import { operationalCapabilities } from "@/content/services-data";
import { SectionHeading } from "@/components/ui/primitives";

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7] scroll-mt-16">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Operational Capabilities"
          subtitle="The underlying systems, workflows, and frameworks executed across all client engagements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {operationalCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="card-editorial p-6 sm:p-8 bg-[#FAF8F4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-2xl font-bold text-[#51284B]">
                    {cap.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970] bg-[#EEE5E1] px-2.5 py-1 rounded">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl text-[#241B24] mb-3">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>

              {/* Sub-capabilities context note for completeness & searchability */}
              <div className="mt-6 pt-4 border-t border-[#DDD3D7]/50 text-[11px] text-[#51284B] font-medium">
                {cap.id === "creator-discovery" && "Includes Creator Sourcing & Scoring"}
                {cap.id === "personalized-outreach" && "Includes founder-led DM pipelines"}
                {cap.id === "sampling-logistics" && "Includes PR gifting & fulfillment tracking"}
                {cap.id === "affiliate-activation" && "Includes commission structures & retention"}
                {cap.id === "shop-operations" && "Includes Multichannel Commerce Integration & GMV Max"}
                {cap.id === "performance-analysis" && "Includes weekly funnel diagnostics & attribution"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
