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
  title: "About Bilal Shahid | TikTok Shop Specialist",
  description:
    "Learn about Bilal Shahid's e-commerce background, TikTok Shop expertise, creator affiliate work, and professional approach to growth.",
  openGraph: {
    title: "About Bilal Shahid | TikTok Shop Specialist",
    description:
      "Learn about Bilal Shahid's e-commerce background, TikTok Shop expertise, creator affiliate work, and professional approach to growth.",
    url: "https://mbilalshahid.vercel.app/about",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://mbilalshahid.vercel.app/about#profile",
  url: "https://mbilalshahid.vercel.app/about",
  name: "About Bilal Shahid",
  mainEntity: {
    "@type": "Person",
    "@id": "https://mbilalshahid.vercel.app/#person",
    name: "Bilal Shahid",
    url: "https://mbilalshahid.vercel.app/",
    jobTitle: "TikTok Shop Growth & Creator Affiliate Specialist",
    sameAs: ["https://www.linkedin.com/in/mbilalshahid/"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "COMSATS University Islamabad",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
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
