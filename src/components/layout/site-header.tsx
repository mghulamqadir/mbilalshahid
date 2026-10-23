"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/ui/primitives";
import { site } from "@/content/seed";
import { primaryNavigation, primaryCTA, siteRoutes } from "@/content/navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DDD3D7]/70 bg-[#FAF8F4]/90 backdrop-blur-md transition-all">
      <div className="container-editorial flex h-20 items-center justify-between">
        {/* Brand Mark: points to canonical root */}
        <Link href={siteRoutes.home} className="group flex items-center">
          <span className="font-editorial text-2xl sm:text-[28px] font-semibold tracking-tight text-[#241B24] transition-colors group-hover:text-[#51284B]">
            {site.name}
          </span>
        </Link>

        {/* Primary Desktop Navigation: Strictly 5 Destinations */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#746970]"
        >
          {primaryNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#35172F] ${
                  isActive
                    ? "text-[#35172F] font-semibold underline underline-offset-8 decoration-2 decoration-[#51284B]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action: Standardized Audit CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={primaryCTA.href}
            className="btn-plum text-sm !py-2.5 !px-5"
            title="Request a TikTok Shop Growth Audit"
          >
            <span>{primaryCTA.compactLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex p-2 md:hidden text-[#241B24] hover:text-[#51284B] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Reusable Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
