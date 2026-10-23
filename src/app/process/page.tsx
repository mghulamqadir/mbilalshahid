import React from "react";
import type { Metadata } from "next";
import { ProcessHero } from "@/components/process/process-hero";
import { ProcessStepList } from "@/components/process/process-step-list";
import { RetainerRoadmap } from "@/components/process/retainer-roadmap";
import { LaunchTimeline } from "@/components/process/launch-timeline";
import { ReportingOverview } from "@/components/process/reporting-overview";
import { ProcessFinalCTA } from "@/components/process/process-final-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Growth Process & 90-Day Roadmap | Bilal Shahid",
  description:
    "Explore Bilal Shahid's five-step TikTok Shop creator commerce methodology, 30/60/90-day roadmap, launch process, and reporting framework.",
  openGraph: {
    title: "TikTok Shop Growth Process & 90-Day Roadmap | Bilal Shahid",
    description:
      "A systematic creator engine: Discover & Qualify, Plan Sampling, Activate Affiliates, Align Shop & Promotions, and Measure & Optimize.",
  },
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return (
    <>
      {/* 01 — Hero */}
      <ProcessHero />

      {/* 02 — Five-Step Creator Commerce Methodology */}
      <ProcessStepList />

      {/* 03 — 30/60/90-Day Retainer Roadmap */}
      <RetainerRoadmap />

      {/* 04 — Launch Project Timeline (4–6 Weeks) */}
      <LaunchTimeline />

      {/* 05 — Transparent Reporting & Deliverables */}
      <ReportingOverview />

      {/* 06 — Final CTA */}
      <ProcessFinalCTA />
    </>
  );
}
