import React from "react";
import type { Metadata } from "next";
import { getAllCases } from "@/features/content/queries";
import { SectionHeading } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";
import { CaseFilter } from "@/components/ui/case-filter";

export const metadata: Metadata = {
  title: "TikTok Shop Case Studies — Real Results with Evidence | Bilal Shahid",
  description:
    "Five documented TikTok Shop growth programmes with Seller Center and Kalodata screenshots. Includes creator-attributed GMV, affiliate programme performance, and shop operations outcomes for US brands.",
  openGraph: {
    title: "TikTok Shop Case Studies with Evidence | Bilal Shahid",
    description:
      "Real TikTok Shop outcomes documented with Seller Center screenshots across Contemporary Apparel, Sports Nutrition, Premium Apparel, Fine Jewellery, and Beauty brands.",
  },
  alternates: {
    canonical: "/results",
  },
};

export default async function ResultsPage() {
  const allCases = await getAllCases();

  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            as="h1"
            eyebrow="Evidence & Programme Outcomes"
            title="TikTok Shop Case Studies"
            subtitle="Five operations documented with Seller Center and Kalodata screenshots. Each outcome is labelled by metric type and reporting period."
          />
          <CaseFilter allCases={allCases} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
