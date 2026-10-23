import React from "react";
import type { Metadata } from "next";
import { ResumeHeader } from "@/components/resume/resume-header";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { ResumeCompetencies } from "@/components/resume/resume-competencies";
import { ResumeExperience } from "@/components/resume/resume-experience";
import { ResumeAchievements } from "@/components/resume/resume-achievements";
import { ResumeTools } from "@/components/resume/resume-tools";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeAdditionalProjects } from "@/components/resume/resume-additional-projects";
import { ResumeFooter } from "@/components/resume/resume-footer";

export const metadata: Metadata = {
  title: "Bilal Shahid Résumé | E-commerce & TikTok Shop",
  description:
    "View Bilal Shahid's professional experience, e-commerce competencies, creator affiliate skills, and qualifications. Access his online résumé and downloadable CV.",
  openGraph: {
    title: "Bilal Shahid Résumé | E-commerce & TikTok Shop",
    description:
      "Curriculum Vitae of Bilal Shahid: TikTok Shop & Creator Affiliate Specialist. Career history, core competencies, education, and achievements.",
  },
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          header, footer, nav, .no-print, button {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .container-editorial {
            max-width: 100% !important;
            padding: 0 !important;
          }
          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial max-w-4xl bg-[#FFFCF8] p-8 sm:p-12 md:p-16 rounded-2xl border border-[#DDD3D7] shadow-sm">
          {/* 01 — Header & Download */}
          <ResumeHeader />

          {/* 02 — Professional Summary */}
          <ResumeSummary />

          {/* 03 — Core Competencies */}
          <ResumeCompetencies />

          {/* 04 — Professional Experience */}
          <ResumeExperience />

          {/* 05 — Selected Achievements */}
          <ResumeAchievements />

          {/* 06 — Tools & Platforms */}
          <ResumeTools />

          {/* 07 — Education & Credentials */}
          <ResumeEducation />

          {/* 08 — Additional Projects */}
          <ResumeAdditionalProjects />

          {/* 09 — Contact & Download */}
          <ResumeFooter />
        </div>
      </section>
    </>
  );
}
