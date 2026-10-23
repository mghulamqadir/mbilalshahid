import React from "react";
import Link from "next/link";
import { site } from "@/content/seed";
import { primaryNavigation, secondaryNavigation, siteRoutes } from "@/content/navigation";
import { ArrowUpRight } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="bg-[#35172F] text-[#FAF8F4] pt-16 pb-12 border-t border-[#51284B]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#51284B]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href={siteRoutes.home} className="inline-block">
                <span className="font-editorial text-3xl font-semibold tracking-tight text-[#FAF8F4]">
                  {site.name}
                </span>
              </Link>
              <p className="mt-2 text-sm text-[#DCC9DA] max-w-sm leading-relaxed">
                TikTok Shop &amp; creator commerce operator for US &amp; UK DTC brands.
                Turning creator attention into disciplined, accountable commerce systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF8F4] bg-[#51284B] px-3.5 py-2 rounded hover:bg-[#DCC9DA] hover:text-[#35172F] transition-colors"
              >
                <span>{site.email}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF8F4] bg-[#51284B] px-3.5 py-2 rounded hover:bg-[#DCC9DA] hover:text-[#35172F] transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
              {site.whatsappUrl && site.phone && (
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF8F4] bg-[#51284B] px-3.5 py-2 rounded hover:bg-[#DCC9DA] hover:text-[#35172F] transition-colors"
                >
                  <span>WhatsApp: {site.phone}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Column: Primary + Secondary */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DCC9DA] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#FAF8F4] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[#51284B]/60">
                <Link
                  href={siteRoutes.process}
                  className="hover:text-[#FAF8F4] text-xs text-[#DCC9DA] transition-colors"
                >
                  How I Work
                </Link>
              </li>
              <li>
                <Link
                  href={siteRoutes.resume}
                  className="hover:text-[#FAF8F4] text-xs text-[#DCC9DA] transition-colors"
                >
                  Résumé
                </Link>
              </li>
            </ul>
          </div>

          {/* Positioning & Brand Statement (Replaces redundant Core Capabilities list) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DCC9DA] mb-4">
              Operating Focus
            </h4>
            <div className="space-y-3 text-xs text-[#DCC9DA]/90 leading-relaxed font-light">
              <p>
                Specializing in creator affiliate architecture, Seller Center operations, and GMV Max scaling
                for consumer brands across Beauty, Contemporary Apparel, Fine Jewellery, and Sports Nutrition.
              </p>
              <p className="text-[11px] text-[#DCC9DA]/75 pt-2 border-t border-[#51284B]/50">
                Accountable execution &middot; Lean sampling protocols &middot; Verified revenue attribution
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DCC9DA]/80">
          <p>{site.disclaimer}</p>
          <div className="flex items-center gap-6">
            <Link href={siteRoutes.privacy} className="hover:underline">
              Privacy Policy
            </Link>
            <Link href={siteRoutes.resume} className="hover:underline">
              Résumé
            </Link>
            <span>© {new Date().getFullYear()} Bilal Shahid. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
