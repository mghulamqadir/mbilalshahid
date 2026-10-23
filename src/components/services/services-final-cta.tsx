import React from "react";
import Link from "next/link";
import { servicesFinalCTA } from "@/content/services-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ServicesFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#35172F] text-[#FAF8F4]">
      <div className="container-editorial max-w-3xl text-center space-y-6">
        <span className="badge-editorial text-[#DCC9DA] border-[#DCC9DA]/30">
          {servicesFinalCTA.eyebrow}
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] tracking-tight leading-tight">
          {servicesFinalCTA.title}
        </h2>

        <p className="text-sm sm:text-base text-[#DCC9DA] max-w-xl mx-auto leading-relaxed font-light">
          {servicesFinalCTA.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={servicesFinalCTA.buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase bg-[#FAF8F4] text-[#35172F] hover:bg-[#EEE5E1] transition-all shadow-md"
          >
            <span>{servicesFinalCTA.buttonLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-[11px] text-[#DCC9DA]/70 pt-6 border-t border-[#FAF8F4]/15 max-w-lg mx-auto leading-relaxed">
          {servicesFinalCTA.disclosure}
        </p>
      </div>
    </section>
  );
}
