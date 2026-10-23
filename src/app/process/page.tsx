import React from "react";
import type { Metadata } from "next";
import { ProcessHero } from "@/components/process/process-hero";
import { ProcessStepList } from "@/components/process/process-step-list";
import { RetainerRoadmap } from "@/components/process/retainer-roadmap";
import { LaunchTimeline } from "@/components/process/launch-timeline";
import { ReportingOverview } from "@/components/process/reporting-overview";
import { ProcessFinalCTA } from "@/components/process/process-final-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Growth Process | Bilal Shahid",
  description:
    "Discover Bilal Shahid's five-step creator commerce process, initial 90-day roadmap, sampling workflows, and performance reporting approach.",
  openGraph: {
    title: "TikTok Shop Growth Process | Bilal Shahid",
    description:
      "Discover Bilal Shahid's five-step creator commerce process, initial 90-day roadmap, sampling workflows, and performance reporting approach.",
    url: "https://mbilalshahid.vercel.app/process",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/process",
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
