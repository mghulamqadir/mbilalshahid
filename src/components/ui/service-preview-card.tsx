import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Package } from "@/content/seed";

export interface ServicePreviewCardProps {
  pkg: Package;
  featured?: boolean;
}

export function ServicePreviewCard({ pkg, featured = false }: ServicePreviewCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
        featured
          ? "bg-[#2D1627] text-[#FAF8F4] border-[#51284B] shadow-xl md:-translate-y-1"
          : "bg-[#FFFCF8] text-[#241B24] border-[#DDD3D7] hover:border-[#51284B]/40 hover:shadow-md"
      }`}
    >
      <div>
        {/* Eyebrow / Best For */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded ${
              featured ? "bg-[#51284B] text-[#DCC9DA]" : "bg-[#EEE5E1] text-[#51284B]"
            }`}
          >
            {pkg.engagementStructure}
          </span>
          {featured && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#DCC9DA] border border-[#DCC9DA]/40 px-2 py-0.5 rounded">
              Most Popular
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-editorial text-xl sm:text-2xl font-semibold mb-2 ${
            featured ? "text-[#FAF8F4]" : "text-[#241B24]"
          }`}
        >
          {pkg.name}
        </h3>

        {/* Tagline */}
        <p
          className={`text-xs leading-relaxed mb-5 font-light ${
            featured ? "text-[#DCC9DA]" : "text-[#746970]"
          }`}
        >
          {pkg.tagline}
        </p>

        {/* Deliverables Preview: top 3 highlights */}
        <div className={`pt-4 border-t ${featured ? "border-[#51284B]" : "border-[#DDD3D7]/60"}`}>
          <span
            className={`text-[10px] font-semibold uppercase tracking-wider block mb-2.5 ${
              featured ? "text-[#DCC9DA]" : "text-[#51284B]"
            }`}
          >
            Includes:
          </span>
          <ul className="space-y-2">
            {pkg.deliverables.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className={`text-xs flex items-start gap-2 ${
                  featured ? "text-[#FAF8F4]/90" : "text-[#241B24]"
                }`}
              >
                <Check
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                    featured ? "text-[#DCC9DA]" : "text-[#51284B]"
                  }`}
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link to Services Detail */}
      <div className={`pt-6 mt-6 border-t ${featured ? "border-[#51284B]" : "border-[#DDD3D7]/40"}`}>
        <Link
          href={`/services#${pkg.id}`}
          className={`inline-flex items-center justify-between w-full text-xs font-semibold py-2 px-3 rounded-lg transition-colors ${
            featured
              ? "bg-[#FAF8F4] text-[#2D1627] hover:bg-[#DCC9DA]"
              : "bg-[#35172F]/5 text-[#35172F] hover:bg-[#35172F] hover:text-[#FAF8F4]"
          }`}
        >
          <span>View Full Package Scope</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
