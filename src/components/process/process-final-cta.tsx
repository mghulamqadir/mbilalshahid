import React from "react";
import Link from "next/link";
import { processFinalCTA } from "@/content/process-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ProcessFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#35172F] text-[#FAF8F4]">
      <div className="container-editorial max-w-3xl text-center space-y-6">
        <span className="badge-editorial text-[#DCC9DA] border-[#DCC9DA]/30">
          {processFinalCTA.eyebrow}
        </span>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] tracking-tight leading-tight">
          {processFinalCTA.title}
        </h2>

        <p className="text-sm sm:text-base text-[#DCC9DA] max-w-xl mx-auto leading-relaxed font-light">
          {processFinalCTA.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={processFinalCTA.primaryCTA.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase bg-[#FAF8F4] text-[#35172F] hover:bg-[#EEE5E1] transition-all shadow-md"
          >
            <span>{processFinalCTA.primaryCTA.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href={processFinalCTA.secondaryCTA.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase border border-[#FAF8F4]/30 text-[#FAF8F4] hover:bg-[#FAF8F4]/10 transition-all"
          >
            <span>{processFinalCTA.secondaryCTA.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href={processFinalCTA.caseStudiesCTA.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-xs tracking-wider uppercase text-[#DCC9DA] hover:text-[#FAF8F4] transition-all"
          >
            <span>{processFinalCTA.caseStudiesCTA.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-[11px] text-[#DCC9DA]/70 pt-6 border-t border-[#FAF8F4]/15 max-w-lg mx-auto leading-relaxed">
          {processFinalCTA.disclosure}
        </p>
      </div>
    </section>
  );
}
