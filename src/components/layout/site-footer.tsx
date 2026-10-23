import React from "react";
import Link from "next/link";
import { site } from "@/content/seed";
import { ArrowUpRight } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="bg-[#35172F] text-[#FAF8F4] pt-16 pb-12 border-t border-[#51284B]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#51284B]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-3xl font-semibold tracking-tight text-[#FAF8F4]">
                {site.name}
              </span>
              <p className="mt-2 text-sm text-[#DCC9DA] max-w-sm leading-relaxed">
                TikTok Shop & creator commerce operator for US & UK DTC brands.
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

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DCC9DA] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#FAF8F4] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Disciplines Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DCC9DA] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-[#DCC9DA]/90">
              <li>→ Creator Sourcing & Aesthetic Scoring</li>
              <li>→ Seeding Logistics & PR Follow-Through</li>
              <li>→ Affiliate Marketplace Retention & Tiered Commissions</li>
              <li>→ TikTok Shop Seller Center & GMV Max Ads</li>
              <li>→ Multichannel Sync (Shopify & Amazon)</li>
              <li>→ Kalodata & Funnel Diagnostics</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DCC9DA]/80">
          <p>{site.disclaimer}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">
              Privacy Disclosure
            </Link>
            <Link href="/resume" className="hover:underline">
              Resume (PDF)
            </Link>
            <span>© {new Date().getFullYear()} Bilal Shahid. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
