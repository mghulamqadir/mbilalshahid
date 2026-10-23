import React from "react";
import Link from "next/link";
import { CheckIcon, ArrowRight } from "@/components/ui/primitives";
import type { Package } from "@/content/seed";

interface PackageCardProps {
  pkg: Package;
  featured?: boolean;
}

export function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <div
      id={pkg.id}
      className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all scroll-mt-24 ${
        featured
          ? "bg-[#2D1627] border-[#51284B] text-[#FAF8F4] shadow-xl"
          : "bg-[#FFFCF8] border-[#DDD3D7] text-[#241B24] hover:border-[#51284B] shadow-sm"
      }`}
    >
      <div className="p-8">
        <div className="mb-6">
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest block mb-2 ${
              featured ? "text-[#DCC9DA]" : "text-[#51284B]"
            }`}
          >
            {pkg.engagementStructure}
          </span>
          <h3
            className={`font-editorial text-2xl leading-snug mb-2 ${
              featured ? "text-[#FAF8F4]" : "text-[#241B24]"
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`text-sm leading-relaxed font-light ${
              featured ? "text-[#DCC9DA]" : "text-[#746970]"
            }`}
          >
            {pkg.tagline}
          </p>
        </div>

        <div
          className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
            featured ? "text-[#DCC9DA]" : "text-[#51284B]"
          }`}
        >
          Best for
        </div>
        <p
          className={`text-sm mb-6 font-medium ${
            featured ? "text-[#FAF8F4]" : "text-[#241B24]"
          }`}
        >
          {pkg.bestFor}
        </p>

        <div
          className={`pt-5 border-t ${
            featured ? "border-[#51284B]" : "border-[#DDD3D7]/60"
          }`}
        >
          <span
            className={`text-[11px] uppercase font-semibold block mb-3 ${
              featured ? "text-[#DCC9DA]" : "text-[#51284B]"
            }`}
          >
            Deliverables & Scope
          </span>
          <ul className="space-y-2">
            {pkg.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs">
                <CheckIcon
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                    featured ? "text-[#DCC9DA]" : "text-[#51284B]"
                  }`}
                />
                <span className={featured ? "text-[#DCC9DA]" : "text-[#241B24]"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {pkg.addOns && pkg.addOns.length > 0 && (
          <div className="mt-6 pt-4 border-t border-dashed border-[#DDD3D7]/60">
            <span
              className={`text-[11px] uppercase font-semibold block mb-2 ${
                featured ? "text-[#DCC9DA]" : "text-[#746970]"
              }`}
            >
              Optional Add-ons
            </span>
            <ul className="space-y-1">
              {pkg.addOns.map((addon, idx) => (
                <li
                  key={idx}
                  className={`text-xs ${featured ? "text-[#DCC9DA]/80" : "text-[#746970]"}`}
                >
                  + {addon}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div
        className={`p-6 border-t ${
          featured ? "border-[#51284B]" : "border-[#DDD3D7]/50"
        }`}
      >
        <Link
          href={`/contact?service=${encodeURIComponent(pkg.name)}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            featured
              ? "text-[#FAF8F4] hover:text-[#DCC9DA]"
              : "text-[#35172F] hover:text-[#51284B]"
          }`}
        >
          <span>{pkg.ctaLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p
          className={`text-[11px] mt-2 ${
            featured ? "text-[#DCC9DA]/70" : "text-[#746970]"
          }`}
        >
          No guaranteed ROI or sales figures. Execution and transparency guaranteed.
        </p>
      </div>
    </div>
  );
}
