import React from "react";
import Link from "next/link";
import { services } from "@/content/seed";
import { ArrowUpRight, CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata = {
  title: "Services & Capabilities",
  description: "Full scope of TikTok Shop and creator-led commerce operations offered by Bilal Shahid.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            as="h1"
            eyebrow="Operating Capabilities"
            title="Full-Funnel Commerce Services"
            subtitle="Tailored to the operating bottlenecks in front of your shop—from top-of-funnel creator recruitment to Seller Center inventory sync and paid GMV Max scaling."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="card-editorial p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-2xl font-bold text-[#51284B]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970] bg-[#EEE5E1] px-2.5 py-1 rounded">
                      Core Discipline
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#241B24] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#746970] leading-relaxed mb-6 font-light">
                    <strong>Challenge Solved:</strong> {service.problem}
                  </p>

                  <div className="pt-4 border-t border-[#DDD3D7]/60">
                    <span className="text-[11px] uppercase font-semibold text-[#51284B] block mb-3">
                      Key Deliverables & Systems
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs text-[#241B24] flex items-start gap-2">
                          <CheckIcon className="w-3.5 h-3.5 text-[#51284B] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#DDD3D7]/40">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B]"
                  >
                    <span>Inquire about this capability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
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
