"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/ui/primitives";
import { site } from "@/content/seed";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

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

  useEffect(() => {
    if (mobileMenuOpen) firstMobileLinkRef.current?.focus();
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DDD3D7]/70 bg-[#FAF8F4]/90 backdrop-blur-md transition-all">
      <div className="container-editorial flex h-20 items-center justify-between">
        {/* Brand Mark */}
        <Link href="/" className="group flex flex-col">
          <span className="font-editorial text-2xl font-semibold tracking-tight text-[#241B24] transition-colors group-hover:text-[#51284B]">
            {site.name}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#746970]">
            TikTok Shop & Creator Commerce
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#746970]">
          {site.nav.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#35172F] ${
                  isActive ? "text-[#35172F] font-semibold underline underline-offset-8 decoration-2 decoration-[#51284B]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-plum text-sm !py-2.5 !px-5"
          >
            <span>Let&apos;s Talk</span>
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
          aria-label="Toggle navigation menu"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#DDD3D7] bg-[#FAF8F4] px-6 py-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#241B24]">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                ref={item.href === site.nav[0]?.href ? firstMobileLinkRef : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#DDD3D7]/40 hover:text-[#51284B] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-plum w-full text-center py-3"
              >
                Let&apos;s Talk ↗
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
