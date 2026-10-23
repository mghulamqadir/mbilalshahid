import React from "react";
import Link from "next/link";
import { aboutPageContent } from "@/content/profile-data";
import { ArrowUpRight, SectionHeading } from "@/components/ui/primitives";

export function GrowthApproach() {
  const { growthApproach } = aboutPageContent;

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-4xl">
        <SectionHeading
          eyebrow={growthApproach.eyebrow}
          title={growthApproach.title}
          subtitle="A five-step framework that connects creator partnerships, sampling, shop operations, and performance reviews into a consistent operating cadence."
        />

        {/* 5-step flow pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-10">
          {growthApproach.frameworkSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7] text-center flex flex-col items-center justify-center"
            >
              <span className="font-editorial text-xl font-bold text-[#51284B] mb-1">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-semibold text-[#241B24]">
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#FFFCF8] border border-[#DDD3D7] mt-8 shadow-xs">
          <p className="text-xs sm:text-sm text-[#746970] leading-relaxed max-w-xl font-light">
            {growthApproach.description}
          </p>
          <Link
            href={growthApproach.cta.href}
            className="btn-plum text-xs inline-flex items-center gap-1.5 shrink-0"
          >
            <span>{growthApproach.cta.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
