import React from "react";
import Link from "next/link";
import { aboutPageContent } from "@/content/profile-data";
import { ArrowUpRight, SectionHeading } from "@/components/ui/primitives";

export function CredentialsPreview() {
  const { credentials } = aboutPageContent;

  return (
    <section className="py-16 md:py-20 bg-[#FFFCF8] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-4xl">
        <SectionHeading
          eyebrow={credentials.eyebrow}
          title={credentials.title}
          subtitle={credentials.description}
        />

        <div className="card-editorial p-8 bg-[#FAF8F4] mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block">
              Formal Education
            </span>
            <h3 className="font-editorial text-2xl text-[#241B24]">
              {credentials.educationDetail}
            </h3>
            <p className="text-xs sm:text-sm text-[#746970] font-light">
              {credentials.secondaryNote}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={credentials.primaryCTA.href}
              className="btn-plum text-xs inline-flex items-center gap-1.5"
            >
              <span>{credentials.primaryCTA.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={credentials.secondaryCTA.href}
              download="Bilal_Shahid_Resume.pdf"
              className="btn-outline-plum text-xs inline-flex items-center gap-1.5"
            >
              <span>{credentials.secondaryCTA.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
