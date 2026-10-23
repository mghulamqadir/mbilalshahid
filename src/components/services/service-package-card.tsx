import React from "react";
import Link from "next/link";
import { ServicePackage, getServiceContactUrl } from "@/content/services-data";
import { ArrowUpRight, CheckIcon } from "@/components/ui/primitives";

interface ServicePackageCardProps {
  pkg: ServicePackage;
}

export function ServicePackageCard({ pkg }: ServicePackageCardProps) {
  const contactUrl = getServiceContactUrl(pkg);
  const primaryAnchor = pkg.anchorIds[0];
  const secondaryAnchor = pkg.anchorIds[1];

  return (
    <article
      id={primaryAnchor}
      className={`card-editorial p-8 flex flex-col justify-between relative scroll-mt-24 transition-all duration-300 ${
        pkg.featured
          ? "border-[#51284B] ring-1 ring-[#51284B]/30 shadow-md bg-[#FFFDFB]"
          : "border-[#DDD3D7] bg-[#FFFCF8]"
      }`}
    >
      {/* Secondary anchor alias for backwards compatibility */}
      {secondaryAnchor && <span id={secondaryAnchor} className="sr-only" />}

      <div>
        {/* Header row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-editorial text-2xl font-bold text-[#51284B]">
            {pkg.number}
          </span>
          <div className="flex items-center gap-2">
            {pkg.featured && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FAF8F4] bg-[#51284B] px-2.5 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970] bg-[#EEE5E1] px-2.5 py-1 rounded">
              {pkg.type === "one-time" ? "One-Time Project" : "Retainer"}
            </span>
          </div>
        </div>

        {/* Package Title & Duration */}
        <h3 className="font-editorial text-2xl sm:text-[26px] text-[#241B24] leading-snug mb-2">
          {pkg.name}
        </h3>

        <div className="text-xs font-semibold text-[#51284B] mb-3">
          {pkg.duration}
        </div>

        <div className="text-xs text-[#746970] leading-relaxed mb-4 pb-4 border-b border-[#DDD3D7]/60">
          <strong className="text-[#241B24] font-medium">Best for:</strong>{" "}
          {pkg.audience}
        </div>

        <p className="text-xs sm:text-sm text-[#746970] leading-relaxed mb-6 font-light">
          {pkg.overview}
        </p>

        {/* Deliverables */}
        <div className="space-y-3 pt-4 border-t border-[#DDD3D7]/60">
          <span className="text-[11px] uppercase font-semibold text-[#51284B] block tracking-wider">
            What&apos;s Included
          </span>
          <ul className="space-y-2.5">
            {pkg.deliverables.map((item, dIdx) => (
              <li
                key={dIdx}
                className="text-xs text-[#241B24] flex items-start gap-2.5 leading-relaxed"
              >
                <CheckIcon className="w-3.5 h-3.5 text-[#51284B] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Add-ons */}
        {pkg.optionalAddOns && pkg.optionalAddOns.length > 0 && (
          <div className="mt-6 pt-4 border-t border-[#DDD3D7]/40 space-y-2">
            <span className="text-[10px] uppercase font-semibold text-[#746970] block tracking-wider">
              Optional Add-ons
            </span>
            <ul className="space-y-1.5">
              {pkg.optionalAddOns.map((addon, aIdx) => (
                <li
                  key={aIdx}
                  className="text-xs text-[#746970] flex items-start gap-2"
                >
                  <span className="text-[#51284B] font-bold text-xs">+</span>
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Additional Services By Agreement */}
        {pkg.additionalServicesByAgreement && pkg.additionalServicesByAgreement.length > 0 && (
          <div className="mt-6 pt-4 border-t border-[#DDD3D7]/40 space-y-2">
            <span className="text-[10px] uppercase font-semibold text-[#746970] block tracking-wider">
              Additional Services by Agreement
            </span>
            <ul className="space-y-1.5">
              {pkg.additionalServicesByAgreement.map((item, sIdx) => (
                <li
                  key={sIdx}
                  className="text-xs text-[#746970] flex items-start gap-2"
                >
                  <span className="text-[#51284B] font-bold text-xs">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-6 border-t border-[#DDD3D7]/60">
        <Link
          href={contactUrl}
          className={`w-full py-3 px-5 rounded-full font-semibold text-xs text-center inline-flex items-center justify-center gap-1.5 transition-colors ${
            pkg.featured
              ? "bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B]"
              : "border border-[#35172F] text-[#35172F] hover:bg-[#35172F] hover:text-[#FAF8F4]"
          }`}
        >
          <span>{pkg.cta}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
