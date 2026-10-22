import React from "react";
import Link from "next/link";
import { site } from "@/content/seed";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ClosingCta() {
  return (
    <section className="bg-[#35172F] text-[#FAF8F4] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#51284B]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#51284B]/40 blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#DCC9DA] mb-4">
          Consultation & Operating Partnerships
        </span>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FAF8F4] leading-[1.1] mb-6">
          Ready to build a stronger TikTok Shop growth engine?
        </h2>

        <p className="text-base sm:text-lg text-[#DCC9DA] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Whether you are launching a new shop from scratch or need an experienced operator to scale
          daily creator output and affiliate GMV, let&apos;s evaluate your program.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-medium text-base bg-[#FAF8F4] text-[#35172F] hover:bg-[#DCC9DA] transition-all shadow-md hover:shadow-lg"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${site.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-medium text-base border border-[#FAF8F4]/30 text-[#FAF8F4] hover:bg-[#FAF8F4]/10 transition-colors"
          >
            <span>Email Directly</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
