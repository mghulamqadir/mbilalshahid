import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getFeaturedCases,
  getHeroProof,
  getOperatingSystem,
  getPackages,
  getTestimonials,
  getRoadmapPhases,
} from "@/features/content/queries";
import {
  ArrowRight,
  BarChart3,
  Users,
  Play,
  ShoppingBag,
  Settings,
  Target,
} from "lucide-react";
import { PackageCard } from "@/components/ui/package-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { RoadmapSection } from "@/components/ui/roadmap-section";
import { SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
  description:
    "Bilal Shahid helps US and UK brands scale on TikTok Shop through creator affiliate programmes, GMV Max campaigns, and data-driven shop operations. View case studies with Seller Center evidence.",
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
    title: "I Help US & UK Brands Scale on TikTok Shop | Bilal Shahid",
    description:
      "Building creator affiliate programmes, managing TikTok Shop operations, and scaling performance through data-driven creator partnerships and GMV Max campaigns.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const [heroProof, operatingSystemSteps, featuredCases, pkgs, testimonials, roadmapPhases] =
    await Promise.all([
      getHeroProof(),
      getOperatingSystem(),
      getFeaturedCases(),
      getPackages(),
      getTestimonials(),
      getRoadmapPhases(),
    ]);

  const stepIcons = [Users, Play, ShoppingBag, BarChart3, Settings];

  const brandLogos = [
    { name: "TikTok Shop", font: "font-semibold tracking-tight" },
    { name: "shopify", font: "font-bold lowercase tracking-tighter" },
    { name: "amazon", font: "font-bold lowercase tracking-normal" },
    { name: "klaviyo", font: "font-medium lowercase tracking-wide" },
    { name: "Later", font: "font-semibold tracking-tight" },
    { name: "Euka", font: "font-bold tracking-tight" },
    { name: "FastMoss", font: "font-semibold tracking-tight" },
    { name: "CapCut", font: "font-bold tracking-tight" },
    { name: "LTK", font: "font-black tracking-widest" },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#241B24]">
      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start z-10">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFCF8] border border-[#DDD3D7] text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#51284B] uppercase mb-6 shadow-2xs">
                TikTok Shop &middot; Creator Commerce &middot; DTC Growth
              </div>

              {/* Editorial Headline */}
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-normal leading-[1.08] text-[#241B24] tracking-tight mb-4">
                I Help US &amp; UK Brands{" "}
                <span className="italic font-normal text-[#35172F]">
                  Scale on TikTok Shop.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#746970] max-w-xl leading-relaxed mb-8 font-light">
                Building creator affiliate programmes, managing TikTok Shop operations, and scaling
                performance through data-driven creator partnerships and GMV Max campaigns.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#2D1627] text-[#FAF8F4] hover:bg-[#461F3D] transition-all shadow-md"
                >
                  <span>Request a TikTok Shop Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/results"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#2D1627] transition-all shadow-2xs"
                >
                  <span>Explore TikTok Shop Case Studies</span>
                </Link>
              </div>

              {/* 5-Metric Hero Proof Strip */}
              <div className="w-full pt-6 border-t border-[#DDD3D7]/70 grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD3D7]/60">
                {heroProof.map((stat, idx) => (
                  <div key={idx} className={`${idx !== 0 ? "sm:pl-3 pt-2 sm:pt-0" : ""}`}>
                    <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D1627] leading-none">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-[#746970] mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[560px] aspect-[4/5] lg:aspect-[5/6] flex items-end justify-center">
                {/* Outer sweeping sand/cream curve */}
                <div className="absolute top-0 right-0 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full bg-[#EFE6DC]/60 pointer-events-none -z-20 translate-x-12 -translate-y-8" />

                {/* Sweeping Plum/Lavender Gradient Aura */}
                <div className="absolute top-8 right-4 sm:right-8 w-[340px] sm:w-[400px] h-[400px] sm:h-[480px] rounded-t-[200px] rounded-b-[140px] bg-gradient-to-tr from-[#3D1A36] via-[#733364] to-[#CBB4C6] opacity-95 shadow-2xl -z-10" />

                {/* Handwritten annotation */}
                <div className="absolute top-4 right-2 sm:right-6 z-20 font-handwriting text-[#94817B] text-2xl sm:text-3xl leading-tight select-none rotate-6 text-right">
                  Creator<br />
                  Commerce<br />
                  Real Brands<br />
                  Real Growth
                </div>

                {/* Portrait */}
                <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                  <Image
                    src="/media/bilal-transparent.png"
                    alt="Bilal Shahid — TikTok Shop Growth Specialist"
                    width={700}
                    height={700}
                    priority
                    className="w-full h-auto max-h-[102%] object-contain object-bottom drop-shadow-2xl translate-y-2"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-6 -right-2 sm:right-0 z-30 bg-white/95 backdrop-blur-md border border-[#E8DFD8] rounded-2xl p-4 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#2D1627] text-white flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] font-semibold text-[#241B24] leading-tight">
                      TikTok Shop<br />Growth Specialist
                    </div>
                  </div>
                  <p className="text-xs text-[#51284B] italic leading-snug">
                    &ldquo;Better creators. Stronger systems. Real revenue.&rdquo;
                  </p>
                  <div className="w-6 h-0.5 bg-[#2D1627]/30 mt-2.5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUSTED PLATFORMS & TOOLS ─────────────────────────────── */}
      <section className="py-6 bg-[#F5ECE5] border-y border-[#DDD3D7]/60">
        <div className="container-editorial flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#746970] shrink-0">
            PLATFORMS &amp; TOOLS
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base text-[#241B24]/85">
            {brandLogos.map((brand, idx) => (
              <span
                key={idx}
                className={`${brand.font} hover:text-[#2D1627] transition-colors select-none`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OPERATING SYSTEM ──────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="bg-[#2D1627] text-[#FAF8F4] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#51284B]/20 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16 relative z-10">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#DCC9DA] block mb-3">
                  MY OPERATING SYSTEM
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F4] leading-[1.15]">
                  From Creators to<br className="hidden sm:inline" /> Compounding Growth.
                </h2>
              </div>
              <div className="max-w-md md:text-right flex flex-col md:items-end gap-3">
                <Link
                  href="/process"
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#DCC9DA] hover:text-[#FAF8F4] tracking-wider underline underline-offset-4"
                >
                  <span>THE PROCESS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <p className="text-xs sm:text-sm text-[#DCC9DA]/90 font-light leading-relaxed">
                  A structured, end-to-end approach to grow brands on TikTok Shop&nbsp;&mdash; combining creative, creators, commerce, and data.
                </p>
              </div>
            </div>

            {/* 5 Connected Step Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {operatingSystemSteps.map((step, idx) => {
                const IconComp = stepIcons[idx] || Users;
                return (
                  <div key={idx} className="flex flex-col items-start relative group">
                    <div className="flex items-center w-full mb-5">
                      <div className="w-14 h-14 rounded-full bg-[#FAF5F2] flex items-center justify-center text-[#2D1627] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      {idx < operatingSystemSteps.length - 1 && (
                        <div className="hidden md:flex flex-1 items-center px-2">
                          <div className="w-full h-[1px] bg-[#DCC9DA]/30 relative">
                            <ArrowRight className="w-3.5 h-3.5 text-[#DCC9DA]/60 absolute right-0 -top-[7px]" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-sm font-bold text-[#DCC9DA]">{step.step}</span>
                      <h3 className="font-editorial text-base sm:text-lg text-[#FAF8F4] font-semibold">
                        {step.shortTitle || step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#DCC9DA]/90 leading-relaxed font-light">
                      {step.shortDesc || step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED CASE STUDIES ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                DOCUMENTED RESULTS
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#241B24]">
                TikTok Shop Case Studies
              </h2>
            </div>
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#2D1627] hover:text-[#51284B] tracking-wider underline underline-offset-4"
            >
              <span>VIEW ALL CASE STUDIES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCases.map((study) => {
              const card = study.cardData || {
                thumbnail: "/media/cases/thumb-apparel-q4.png",
                pillTag: study.sector,
                cardTitle: study.sector,
                primaryValue: study.headlineOutcome,
                primaryLabel: study.outcomeType,
                stats: [],
              };

              return (
                <article
                  key={study.slug}
                  className="bg-white border border-[#EAE1E6] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#2D1627]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#F2ECE9]">
                      <Image
                        src={card.thumbnail}
                        alt={card.cardTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] block mb-1">
                        {card.pillTag}
                      </span>
                      <h3 className="font-editorial text-lg font-semibold text-[#241B24] tracking-tight mb-2">
                        {card.cardTitle}
                      </h3>
                      <div className="font-editorial text-2xl font-bold text-[#35172F] leading-none">
                        {card.primaryValue}
                      </div>
                      <span className="text-[10px] text-[#746970] block mt-1">
                        {card.primaryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="border-t border-[#F0EAE8] px-4 py-3 grid grid-cols-3 divide-x divide-[#F0EAE8] text-center">
                    {card.stats.map((s, sIdx) => (
                      <div key={sIdx} className="px-2 flex flex-col justify-center">
                        <div className="text-xs font-bold text-[#241B24] leading-tight">{s.value}</div>
                        <div className="text-[9px] text-[#746970] leading-snug mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="px-5 py-3 border-t border-[#F0EAE8]">
                    <Link
                      href={`/results/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B]"
                    >
                      <span>Read full case dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT SECTION ─────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="bg-[#FFFCF8] rounded-3xl p-8 sm:p-12 md:p-14 border border-[#DDD3D7]/80 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Portrait */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="relative w-60 sm:w-64 lg:w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden shadow-md border border-[#DDD3D7]/60">
                  <Image
                    src="/media/portrait/about-card-clean.png"
                    alt="Bilal Shahid — TikTok Shop Growth Specialist"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                    quality={90}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-6">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                  ABOUT
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] mb-4 leading-tight">
                  TikTok Shop Operator.<br />Creator Commerce Specialist.
                </h2>
                <p className="text-xs sm:text-sm text-[#746970] leading-relaxed mb-6 font-light">
                  I&apos;m Bilal Shahid, a TikTok Shop growth specialist with 4+ years managing
                  creator affiliate programmes, Seller Center operations, and GMV Max campaigns for
                  US and UK consumer brands. I combine disciplined creator strategy, lean sampling
                  systems, and performance analytics to turn creator attention into accountable revenue.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF8F4] border border-[#DDD3D7] text-xs font-medium text-[#241B24]">
                    <Target className="w-3.5 h-3.5 text-[#51284B]" />
                    <span>Results-Driven Execution</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF8F4] border border-[#DDD3D7] text-xs font-medium text-[#241B24]">
                    <Users className="w-3.5 h-3.5 text-[#51284B]" />
                    <span>Deep Creator Network</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF8F4] border border-[#DDD3D7] text-xs font-medium text-[#241B24]">
                    <BarChart3 className="w-3.5 h-3.5 text-[#51284B]" />
                    <span>Strategic &amp; Hands-On</span>
                  </div>
                </div>
              </div>

              {/* Postcard */}
              <div className="lg:col-span-3">
                <div className="bg-[#FAF6F0] border border-[#DDD3D7]/70 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#746970] block mb-3">
                      BEYOND CAMPAIGNS
                    </span>
                    <p className="font-editorial italic text-base sm:text-lg text-[#241B24] leading-snug mb-4">
                      &ldquo;I partner with founders and teams to build real brands&nbsp;&mdash; not just viral moments.&rdquo;
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-[#2D1627]/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ──────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="py-12 md:py-16 bg-[#FFFCF8] border-y border-[#DDD3D7]">
          <div className="container-editorial">
            <SectionHeading
              eyebrow="Client Feedback"
              title="What Brands & Agencies Say"
              subtitle="Recommendations from brands and operators who have worked directly with Bilal."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. ENGAGEMENT PACKAGES ───────────────────────────────────── */}
      {pkgs.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container-editorial">
            <SectionHeading
              eyebrow="Engagement Models"
              title="Three Ways to Work Together"
              subtitle="Each engagement is scoped to where your TikTok Shop is right now — from initial setup to full ongoing management."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {pkgs.map((pkg, idx) => (
                <PackageCard key={pkg.id} pkg={pkg} featured={idx === 2} />
              ))}
            </div>
            <p className="text-[11px] text-[#746970] italic mt-6 text-center">
              Pricing is discussed on a per-engagement basis. No guaranteed sales, ROI, or outcome figures.
            </p>
          </div>
        </section>
      )}

      {/* ── 8. 30/60/90 ROADMAP ──────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-[#FFFCF8] border-y border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Delivery Framework"
            title="The 30 / 60 / 90-Day Growth Roadmap"
            subtitle="How a typical TikTok Shop growth engagement progresses from audit to scale. Actual timelines depend on brand readiness and inventory."
          />
          <RoadmapSection phases={roadmapPhases} />
        </div>
      </section>

      {/* ── 9. CLOSING CTA ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="bg-[#2D1627] text-[#FAF8F4] rounded-2xl p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Decorative wave */}
            <svg
              className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-32 opacity-15 pointer-events-none hidden md:block"
              viewBox="0 0 200 80"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 10 70 Q 70 10 130 50 T 190 20"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#DCC9DA] block mb-2.5">
                  START A CONVERSATION
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#FAF8F4] leading-[1.18] mb-3">
                  Ready to Grow Your Brand on TikTok Shop?
                </h2>
                <p className="text-xs sm:text-sm text-[#DCC9DA]/90 leading-relaxed font-light">
                  Whether you&apos;re a founder, brand, or agency&nbsp;&mdash; request a free TikTok Shop growth audit and let&apos;s discuss your creator strategy.
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start md:items-end gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-[#EFE5EB] text-[#2D1627] hover:bg-white transition-all shadow-md"
                >
                  <span>Request a TikTok Shop Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[10px] text-[#DCC9DA]/75 tracking-wider">
                  Strategy &middot; Growth &middot; Long-Term Partnership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
