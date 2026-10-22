"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  aspectRatio?: string;
}

export function ImageLightbox({ src, alt, title, description }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        data-hydrated={mounted}
        onClick={() => setIsOpen(true)}
        className="group relative w-full text-left cursor-zoom-in overflow-hidden rounded-xl border border-[#DDD3D7] bg-[#FFFCF8] shadow-sm transition-all duration-300 hover:border-[#51284B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#51284B]"
        aria-label={`Enlarge proof image: ${alt}`}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F4]" style={{ position: "relative" }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#35172F]/0 transition-colors duration-200 group-hover:bg-[#35172F]/5" />
          <div className="absolute top-3 right-3 rounded-full bg-[#FAF8F4]/90 px-3 py-1 text-xs font-medium text-[#35172F] shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Click to expand ↗
          </div>
        </div>

        {(title || description) && (
          <div className="p-4 border-t border-[#DDD3D7]/60 bg-[#FFFCF8]">
            {title && <h4 className="font-editorial text-base font-semibold text-[#241B24] mb-1">{title}</h4>}
            {description && <p className="text-xs leading-relaxed text-[#746970]">{description}</p>}
          </div>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241B24]/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={dialogRef}
            className="relative flex flex-col max-h-[95vh] max-w-5xl w-full rounded-2xl bg-[#FFFCF8] overflow-hidden shadow-2xl border border-[#DDD3D7]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#DDD3D7] px-6 py-4 bg-[#FAF8F4]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#51284B]">
                  Dashboard Evidence
                </span>
                <h3 className="font-editorial text-lg text-[#241B24]">{title || alt}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-[#746970] hover:bg-[#EEE5E1] hover:text-[#241B24] transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body / Image Zoom Area */}
            <div className="relative flex-1 overflow-auto p-4 bg-[#241B24]/5 flex items-center justify-center min-h-[400px]">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm"
                priority
              />
            </div>

            {/* Modal Footer */}
            {description && (
              <div className="border-t border-[#DDD3D7] px-6 py-3 bg-[#FAF8F4] text-xs text-[#746970]">
                {description}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
