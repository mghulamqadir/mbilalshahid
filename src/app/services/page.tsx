import React from "react";
import type { Metadata } from "next";
import { getCanonicalServices } from "@/features/content/queries";
import { ServiceHero } from "@/components/services/service-hero";
import { ServicePackageGrid } from "@/components/services/service-package-grid";
import { EngagementTerms } from "@/components/services/engagement-terms";
import { CapabilityGrid } from "@/components/services/capability-grid";
import { ProcessPreviewBanner } from "@/components/services/process-preview-banner";
import { ServicesFinalCTA } from "@/components/services/services-final-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Growth Services | Bilal Shahid",
  description:
    "TikTok Shop launch support, creator affiliate growth, and full shop management for US and UK brands. Explore Bilal Shahid's services and engagement options.",
  openGraph: {
    title: "TikTok Shop Growth Services | Bilal Shahid",
    description:
      "Three structured TikTok Shop packages: Launch & Setup, Creator Affiliate Growth, and Full Growth Management for US & UK brands.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const packagesList = await getCanonicalServices();

  return (
    <>
      {/* 01 — Hero */}
      <ServiceHero />

      {/* 02 — Three Service Packages & Scope Matrix */}
      <ServicePackageGrid packages={packagesList} />

      {/* 03 — Scope & Engagement Terms */}
      <EngagementTerms />

      {/* 04 — Operating Capabilities */}
      <CapabilityGrid />

      {/* 05 — How Delivery Works */}
      <ProcessPreviewBanner />

      {/* 06 — Final CTA */}
      <ServicesFinalCTA />
    </>
  );
}
