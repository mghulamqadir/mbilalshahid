"use client";

import React from "react";
import { professionalProfile } from "@/content/profile-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ResumeHeader() {
  function handlePrint() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-10 border-b border-[#DDD3D7]">
      <div>
        <span className="badge-editorial mb-3 no-print">Curriculum Vitae</span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#241B24]">
          {professionalProfile.name}
        </h1>
        <p className="text-base sm:text-lg text-[#51284B] font-medium mt-1">
          {professionalProfile.headline}
        </p>
        <p className="text-xs text-[#746970] mt-1 font-light">
          {professionalProfile.tagline}
        </p>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#746970] mt-4">
          <a
            href={`mailto:${professionalProfile.email}`}
            className="hover:text-[#51284B] underline underline-offset-2"
          >
            {professionalProfile.email}
          </a>
          <span>•</span>
          <a
            href={professionalProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#51284B] underline underline-offset-2"
          >
            LinkedIn Profile
          </a>
          <span>•</span>
          <span>{professionalProfile.location}</span>
          <span>•</span>
          <span>Portfolio: {professionalProfile.portfolioUrl.replace("https://", "")}</span>
        </div>
      </div>

      {/* Download & Print Actions */}
      <div className="flex flex-wrap items-center gap-2.5 shrink-0 no-print">
        <button
          type="button"
          onClick={handlePrint}
          className="btn-outline-plum text-xs inline-flex items-center gap-1.5"
          title="Print or save as PDF via browser print dialogue"
        >
          <span>Print Résumé</span>
        </button>

        <a
          href={professionalProfile.resumePdfUrl}
          download="Bilal_Shahid_Resume.pdf"
          className="btn-plum text-xs inline-flex items-center gap-1.5"
        >
          <span>Download PDF</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
