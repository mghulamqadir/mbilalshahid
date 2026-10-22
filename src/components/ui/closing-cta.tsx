import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ClosingCta() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF8F4]">
      <div className="container-editorial">
        <div className="bg-[#2E1428] text-[#FAF8F4] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#51284B]/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#DCC9DA] block mb-3">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] leading-[1.15] mb-4">
                Ready to Grow Your Brand on TikTok?
              </h2>
              <p className="text-sm sm:text-base text-[#DCC9DA] leading-relaxed font-light">
                Whether you&apos;re a founder, brand, or agency — let&apos;s talk about how we can create real growth together.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FAF8F4] text-[#2E1428] hover:bg-[#DCC9DA] transition-all shadow-md"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] text-[#DCC9DA]/80 tracking-wide">
                Strategy • Growth • Long-Term Partnership
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
