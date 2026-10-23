import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { ProfessionalSnapshot } from "@/components/about/professional-snapshot";
import { CareerJourney } from "@/components/about/career-journey";
import { CoreExpertise } from "@/components/about/core-expertise";
import { GrowthApproach } from "@/components/about/growth-approach";
import { CredentialsPreview } from "@/components/about/credentials-preview";
import { AboutFinalCTA } from "@/components/about/about-final-cta";

export const metadata: Metadata = {
  title: "About Bilal Shahid | TikTok Shop Growth Specialist",
  description:
    "Bilal Shahid specializes in TikTok Shop operations, creator affiliate programs, and e-commerce growth support for US and UK brands. Explore his background and expertise.",
  openGraph: {
    title: "About Bilal Shahid | TikTok Shop Growth Specialist",
    description:
      "E-commerce operator and creator affiliate specialist with 4+ years driving measurable commerce outcomes for US and UK consumer brands.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 01 — About Hero */}
      <AboutHero />

      {/* 02 — Professional Snapshot */}
      <ProfessionalSnapshot />

      {/* 03 — Professional Journey */}
      <CareerJourney />

      {/* 04 — Core Expertise */}
      <CoreExpertise />

      {/* 05 — How I Approach Growth */}
      <GrowthApproach />

      {/* 06 — Credentials & Résumé */}
      <CredentialsPreview />

      {/* 07 — Final CTA */}
      <AboutFinalCTA />
    </>
  );
}
