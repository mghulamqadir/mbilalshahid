import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryCTA } from "@/content/navigation";

export interface PrimaryCTAProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  subtext?: string;
  className?: string;
}

export function PrimaryCTA({
  eyebrow = "START A CONVERSATION",
  headline = "Ready to Grow Your Brand on TikTok Shop?",
  description = "Whether you're a founder, brand, or agency — request a free TikTok Shop growth audit and let's review your creator strategy.",
  buttonLabel = primaryCTA.label,
  buttonHref = primaryCTA.href,
  subtext = "Strategy · Growth · Long-Term Partnership",
  className = "",
}: PrimaryCTAProps) {
  return (
    <section className={`py-16 md:py-20 bg-[#FAF8F4] ${className}`}>
      <div className="container-editorial">
        <div className="bg-[#2D1627] text-[#FAF8F4] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle plum gradient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#51284B]/30 blur-3xl pointer-events-none" />

          {/* Decorative wave outline */}
          <svg
            className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-32 opacity-15 pointer-events-none hidden md:block"
            viewBox="0 0 200 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 10 70 Q 70 10 130 50 T 190 20"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#DCC9DA] block mb-3">
                {eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] leading-[1.15] mb-4">
                {headline}
              </h2>
              <p className="text-sm sm:text-base text-[#DCC9DA] leading-relaxed font-light">
                {description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FAF8F4] text-[#2D1627] hover:bg-[#DCC9DA] transition-all shadow-md"
              >
                <span>{buttonLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {subtext && (
                <span className="text-[11px] text-[#DCC9DA]/80 tracking-wide">
                  {subtext}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
