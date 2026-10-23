import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices, getPackages } from "@/features/content/queries";
import { ArrowUpRight, CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { PackageCard } from "@/components/ui/package-card";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Services & Engagement Packages | Bilal Shahid",
  description:
    "Comprehensive TikTok Shop services: Launch & Setup, Creator Affiliate Growth, and Full Shop Management for US & UK e-commerce brands.",
  openGraph: {
    title: "TikTok Shop Services & Packages | Bilal Shahid",
    description:
      "From shop setup and creator outreach to GMV Max paid ads and multi-channel synchronization.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const [servicesList, packagesList] = await Promise.all([
    getAllServices(),
    getPackages(),
  ]);

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            as="h1"
            eyebrow="Operating Capabilities"
            title="TikTok Shop Growth Services"
            subtitle="Tailored to the operating bottlenecks in front of your shop — from top-of-funnel creator recruitment to Seller Center inventory sync and paid GMV Max scaling."
          />
        </div>
      </section>

      {/* ── Engagement Packages (Phase 6) ─────────────────────────── */}
      {packagesList.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7]">
          <div className="container-editorial">
            <SectionHeading
              eyebrow="Engagement Models"
              title="Three Structured Packages"
              subtitle="Whether you need a full turnkey launch, accelerated affiliate growth, or continuous end-to-end management."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {packagesList.map((pkg, idx) => (
                <PackageCard key={pkg.id} pkg={pkg} featured={idx === 2} />
              ))}
            </div>
            <p className="text-[11px] text-[#746970] italic mt-6 text-center">
              Pricing is customized per store based on catalogue size, sample volume, and requirements. No guaranteed sales or ROI.
            </p>
          </div>
        </section>
      )}

      {/* ── Core Service Disciplines ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Deep Disciplines"
            title="Individual Operational Modules"
            subtitle="The underlying systems and frameworks executed across all client engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {servicesList.map((service, idx) => (
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
                      Key Deliverables &amp; Systems
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

      {/* ── Process Entry Point (How I Work) ───────────────────────── */}
      <section className="py-12 bg-[#FFFCF8] border-y border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7]">
            <div className="max-w-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
                Execution Methodology
              </span>
              <h3 className="font-editorial text-2xl text-[#241B24] mb-2">
                Want to See How These Packages Are Delivered?
              </h3>
              <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                Explore the 5-step Creator Commerce Operating System, operational outputs, and the 30 / 60 / 90-day execution roadmap.
              </p>
            </div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] transition-colors shrink-0"
            >
              <span>Explore How I Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
