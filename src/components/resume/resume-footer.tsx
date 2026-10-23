import React from "react";
import Link from "next/link";
import { professionalProfile } from "@/content/profile-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ResumeFooter() {
  return (
    <footer className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="space-y-1 text-xs text-[#746970]">
        <div>
          Portfolio:{" "}
          <a
            href={professionalProfile.portfolioUrl}
            className="text-[#35172F] font-medium hover:underline"
          >
            {professionalProfile.portfolioUrl.replace("https://", "")}
          </a>
        </div>
        <div>
          Email:{" "}
          <a
            href={`mailto:${professionalProfile.email}`}
            className="text-[#35172F] font-medium hover:underline"
          >
            {professionalProfile.email}
          </a>
        </div>
        <div>
          LinkedIn:{" "}
          <a
            href={professionalProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#35172F] font-medium hover:underline"
          >
            linkedin.com/in/mbilalshahid/
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 no-print">
        <a
          href={professionalProfile.resumePdfUrl}
          download="Bilal_Shahid_Resume.pdf"
          className="btn-outline-plum text-xs inline-flex items-center gap-1.5"
        >
          <span>Download PDF Résumé</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <Link
          href="/contact"
          className="btn-plum text-xs inline-flex items-center gap-1.5"
        >
          <span>Contact Me</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </footer>
  );
}
