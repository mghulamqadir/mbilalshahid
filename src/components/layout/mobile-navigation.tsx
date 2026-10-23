"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation, primaryCTA, siteRoutes } from "@/content/navigation";
import { ArrowRight } from "@/components/ui/primitives";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          onClose();
        }
      }
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="md:hidden border-b border-[#DDD3D7] bg-[#FAF8F4] px-6 py-6 shadow-xl animate-fadeIn"
    >
      <nav className="flex flex-col gap-3 text-base font-medium text-[#241B24]">
        {primaryNavigation.map((item, idx) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              ref={idx === 0 ? firstLinkRef : undefined}
              onClick={onClose}
              className={`py-2.5 px-3 rounded-lg border-b border-[#DDD3D7]/40 flex items-center justify-between transition-colors ${
                isActive
                  ? "bg-[#35172F]/5 text-[#35172F] font-semibold"
                  : "hover:text-[#51284B] hover:bg-[#FAF5F2]"
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#51284B]" aria-hidden="true" />
              )}
            </Link>
          );
        })}

        {/* Secondary entry point in mobile drawer */}
        <div className="pt-2 pb-1 border-t border-[#DDD3D7]/60 text-xs text-[#746970] flex items-center justify-between px-3">
          <Link
            href={siteRoutes.process}
            onClick={onClose}
            className="hover:text-[#35172F] transition-colors"
          >
            How I Work &rarr;
          </Link>
          <Link
            href={siteRoutes.resume}
            onClick={onClose}
            className="hover:text-[#35172F] transition-colors"
          >
            Résumé &rarr;
          </Link>
        </div>

        {/* Mobile Primary Conversion CTA */}
        <div className="pt-2">
          <Link
            href={primaryCTA.href}
            onClick={onClose}
            className="btn-plum w-full text-center py-3.5 flex items-center justify-center gap-2"
          >
            <span>{primaryCTA.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
