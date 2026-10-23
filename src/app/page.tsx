import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  homeHeroContent,
  homeCredibilityProof,
  homeFeaturedCases,
  homeServicesPreview,
  homeAboutPreview,
  homeProcessPreview,
  homeFinalCTA,
} from "@/content/homepage";
import { SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
  description:
    "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce. Explore services and results.",
  keywords: [
    "TikTok Shop growth specialist",
    "TikTok Shop affiliate manager",
    "TikTok Shop management services",
    "TikTok Shop creator recruitment",
    "TikTok Shop consultant US brands",
    "TikTok Shop management UK",
    "GMV Max specialist",
    "TikTok Shop affiliate programme",
  ],
  openGraph: {
    title: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
    description:
      "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce. Explore services and results.",
    type: "website",
    locale: "en_US",
    url: "https://mbilalshahid.vercel.app/",
    images: [
      {
        url: "/media/cases/thumb-apparel-q4.png",
        width: 1200,
        height: 630,
        alt: "Bilal Shahid — TikTok Shop Growth Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/",
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#241B24]">
      {/* ── 01. HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#DDD3D7]/50">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Positioning & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFCF8] border border-[#DDD3D7] text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#51284B] uppercase mb-6 shadow-2xs">
                {homeHeroContent.eyebrow}
              </div>

              {/* Single Editorial H1 Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.1] text-[#241B24] tracking-tight mb-5">
                I Help US &amp; UK Brands{" "}
                <span className="italic font-normal text-[#35172F]">
                  Scale on TikTok Shop.
                </span>
              </h1>

              {/* Supporting Positioning Copy */}
              <p className="text-base sm:text-lg text-[#746970] max-w-xl leading-relaxed mb-8 font-light">
                {homeHeroContent.supportingCopy}
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href={homeHeroContent.primaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#2D1627] text-[#FAF8F4] hover:bg-[#461F3D] transition-all shadow-md active:scale-[0.98]"
                >
                  <span>{homeHeroContent.primaryCTA.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href={homeHeroContent.secondaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#2D1627] transition-all shadow-2xs active:scale-[0.98]"
                >
                  <span>{homeHeroContent.secondaryCTA.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Verified Attribution Micro-Badge */}
              <div className="flex items-center gap-2 text-xs text-[#746970] font-light">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                <span>Verified Seller Center &amp; Kalodata Campaign Records</span>
              </div>
            </div>

            {/* Right Column: Authentic Professional Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
              <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#3D1A36] via-[#733364] to-[#CBB4C6] shadow-2xl border border-[#DDD3D7]/60">
                <Image
                  src={homeHeroContent.portraitTransparentSrc}
                  alt={homeHeroContent.portraitCaption}
                  width={600}
                  height={720}
                  priority
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl translate-y-3"
                />

                {/* Portrait Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2D1627]/95 via-[#2D1627]/80 to-transparent p-5 text-center text-[#FAF8F4] backdrop-blur-[2px]">
                  <p className="text-xs font-medium text-[#FAF8F4] leading-snug">
                    Bilal Shahid
                  </p>
                  <p className="text-[11px] text-[#DCC9DA] font-light mt-0.5">
                    TikTok Shop Growth &amp; Creator Affiliate Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. CREDIBILITY & PROOF ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#FFFCF8] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={homeCredibilityProof.eyebrow}
            title={homeCredibilityProof.title}
            subtitle={homeCredibilityProof.subtitle}
          />

          {/* Three Campaign-Specific Proof Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {homeCredibilityProof.metrics.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group p-6 sm:p-7 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] hover:border-[#51284B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
                      Documented Outcome
                    </span>
                    <span className="text-xs text-[#746970] group-hover:text-[#51284B] group-hover:translate-x-0.5 transition-all flex items-center gap-1 font-medium">
                      <span>Examine evidence</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#2D1627] tracking-tight leading-none mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-[#241B24] leading-snug mb-1">
                    {item.label}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDD3D7]/70 text-xs text-[#746970] font-light">
                  {item.context}
                </div>
              </Link>
            ))}
          </div>

          {/* Attribution Disclosure */}
          <p className="text-[11px] text-[#746970] italic mt-6 text-center max-w-3xl mx-auto leading-relaxed">
            {homeCredibilityProof.disclosure}
          </p>
        </div>
      </section>

      {/* ── 03. FEATURED CASE STUDIES ────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                {homeFeaturedCases.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#241B24] leading-tight">
                {homeFeaturedCases.title}
              </h2>
              <p className="text-sm sm:text-base text-[#746970] max-w-2xl leading-relaxed mt-2 font-light">
                {homeFeaturedCases.subtitle}
              </p>
            </div>
            <Link
              href={homeFeaturedCases.sectionCTA.href}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#2D1627] hover:text-[#51284B] tracking-wider underline underline-offset-4 shrink-0"
            >
              <span>{homeFeaturedCases.sectionCTA.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Featured Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeFeaturedCases.cases.map((cs) => (
              <article
                key={cs.id}
                className="bg-white border border-[#EAE1E6] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#2D1627]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#F2ECE9]">
                    <Image
                      src={cs.thumbnail}
                      alt={`${cs.title} — ${cs.categoryTag}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] block mb-1.5">
                      {cs.categoryTag}
                    </span>
                    <h3 className="font-editorial text-xl font-semibold text-[#241B24] tracking-tight mb-3">
                      {cs.title}
                    </h3>

                    <div className="font-editorial text-3xl font-bold text-[#35172F] leading-none mb-1">
                      {cs.primaryMetric.value}
                    </div>
                    <span className="text-[11px] text-[#746970] block mb-4 font-light">
                      {cs.primaryMetric.label}
                    </span>

                    <p className="text-xs text-[#746970] leading-relaxed font-light">
                      {cs.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#F0EAE8] bg-[#FAF8F4]/40">
                  <Link
                    href={cs.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#FFFCF8] border-y border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                {homeServicesPreview.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#241B24] leading-tight">
                {homeServicesPreview.title}
              </h2>
              <p className="text-sm sm:text-base text-[#746970] max-w-2xl leading-relaxed mt-2 font-light">
                {homeServicesPreview.subtitle}
              </p>
            </div>
            <Link
              href={homeServicesPreview.sectionCTA.href}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#2D1627] hover:text-[#51284B] tracking-wider underline underline-offset-4 shrink-0"
            >
              <span>{homeServicesPreview.sectionCTA.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Focused Service Cards (No full deliverable lists or add-ons) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeServicesPreview.services.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  service.featured
                    ? "bg-[#2D1627] text-[#FAF8F4] border-[#51284B] shadow-xl md:-translate-y-1"
                    : "bg-[#FAF8F4] text-[#241B24] border-[#DDD3D7] hover:border-[#51284B]/40 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded ${
                        service.featured
                          ? "bg-[#51284B] text-[#DCC9DA]"
                          : "bg-[#EEE5E1] text-[#51284B]"
                      }`}
                    >
                      Engagement Model
                    </span>
                    {service.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DCC9DA] border border-[#DCC9DA]/40 px-2 py-0.5 rounded">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-editorial text-2xl font-semibold mb-2 leading-snug ${
                      service.featured ? "text-[#FAF8F4]" : "text-[#241B24]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-xs font-medium mb-4 ${
                      service.featured ? "text-[#DCC9DA]" : "text-[#51284B]"
                    }`}
                  >
                    {service.idealClient}
                  </p>

                  <p
                    className={`text-xs leading-relaxed mb-6 font-light ${
                      service.featured ? "text-[#DCC9DA]/90" : "text-[#746970]"
                    }`}
                  >
                    {service.scope}
                  </p>
                </div>

                <div
                  className={`pt-5 border-t ${
                    service.featured ? "border-[#51284B]" : "border-[#DDD3D7]/60"
                  }`}
                >
                  <Link
                    href={service.href}
                    className={`inline-flex items-center justify-between w-full text-xs font-semibold py-2.5 px-3.5 rounded-lg transition-colors ${
                      service.featured
                        ? "bg-[#FAF8F4] text-[#2D1627] hover:bg-[#DCC9DA]"
                        : "bg-[#35172F]/5 text-[#35172F] hover:bg-[#35172F] hover:text-[#FAF8F4]"
                    }`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05. ABOUT BILAL ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-editorial">
          <div className="bg-[#FFFCF8] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#DDD3D7] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Genuine Portrait */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 sm:w-72 lg:w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden shadow-md border border-[#DDD3D7]/70">
                  <Image
                    src={homeAboutPreview.portraitSrc}
                    alt="Bilal Shahid — TikTok Shop Growth Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Shortened Introduction */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block">
                  {homeAboutPreview.eyebrow}
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] leading-tight">
                  {homeAboutPreview.title}
                </h2>

                <div className="space-y-3 pt-2 text-sm text-[#746970] leading-relaxed font-light">
                  {homeAboutPreview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={homeAboutPreview.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] transition-colors"
                  >
                    <span>{homeAboutPreview.cta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. HOW I WORK ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#FFFCF8] border-y border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                {homeProcessPreview.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#241B24] leading-tight">
                {homeProcessPreview.title}
              </h2>
              <p className="text-sm sm:text-base text-[#746970] max-w-2xl leading-relaxed mt-2 font-light">
                {homeProcessPreview.subtitle}
              </p>
            </div>
            <Link
              href={homeProcessPreview.cta.href}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#2D1627] hover:text-[#51284B] tracking-wider underline underline-offset-4 shrink-0"
            >
              <span>{homeProcessPreview.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Compact Operational Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {homeProcessPreview.steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] flex flex-col justify-between hover:border-[#51284B]/40 transition-colors"
              >
                <div>
                  <span className="font-editorial text-2xl font-bold text-[#51284B] block mb-3">
                    {st.step}
                  </span>
                  <h3 className="font-editorial text-base sm:text-lg font-semibold text-[#241B24] mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#746970] leading-relaxed font-light">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07. FINAL CALL TO ACTION ─────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="bg-[#2D1627] text-[#FAF8F4] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Ambient radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#51284B]/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DCC9DA] block mb-3">
                  {homeFinalCTA.eyebrow}
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] leading-[1.15] mb-4">
                  {homeFinalCTA.headline}
                </h2>
                <p className="text-sm sm:text-base text-[#DCC9DA] leading-relaxed font-light">
                  {homeFinalCTA.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start md:items-end gap-3">
                <Link
                  href={homeFinalCTA.buttonHref}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-[#FAF8F4] text-[#2D1627] hover:bg-[#DCC9DA] transition-all shadow-md active:scale-[0.98]"
                >
                  <span>{homeFinalCTA.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#DCC9DA]/75 tracking-wide">
                  {homeFinalCTA.subtext}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
