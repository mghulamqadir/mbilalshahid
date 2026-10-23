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
    "Explore TikTok Shop launch support, creator affiliate growth, and ongoing management services for US and UK brands.",
  openGraph: {
    title: "TikTok Shop Growth Services | Bilal Shahid",
    description:
      "Explore TikTok Shop launch support, creator affiliate growth, and ongoing management services for US and UK brands.",
    url: "https://mbilalshahid.vercel.app/services",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/services",
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
