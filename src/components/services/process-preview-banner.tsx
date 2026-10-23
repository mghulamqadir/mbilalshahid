import React from "react";
import Link from "next/link";
import { servicesProcessPreview } from "@/content/services-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ProcessPreviewBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-10 rounded-2xl bg-[#FFFCF8] border border-[#DDD3D7] shadow-xs">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block">
              {servicesProcessPreview.eyebrow}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#241B24]">
              {servicesProcessPreview.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
              {servicesProcessPreview.description}
            </p>
          </div>
          <Link
            href={servicesProcessPreview.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] transition-colors shrink-0 shadow-sm"
          >
            <span>{servicesProcessPreview.ctaLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
