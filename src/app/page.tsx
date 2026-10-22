import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cases, heroProof, operatingSystemSteps } from "@/content/seed";
import {
  ArrowRight,
  BarChart3,
  Users,
  Play,
  ShoppingBag,
  Settings,
  Target,
} from "lucide-react";
import { ClosingCta } from "@/components/ui/closing-cta";

export default function HomePage() {
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
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFCF8] border border-[#DDD3D7] text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#51284B] uppercase mb-6 shadow-2xs">
                TIKTOK SHOP · CREATOR COMMERCE · DTC GROWTH
              </div>

              {/* Editorial Headline */}
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1.06] text-[#241B24] tracking-tight mb-6">
                Turning Attention Into{" "}
                <span className="italic font-normal text-[#35172F]">
                  Lasting Brands.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#746970] max-w-xl leading-relaxed mb-8 font-light">
                I help consumer brands and founders grow on TikTok Shop through creator partnerships,
                content-driven commerce, and performance systems that scale.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#35172F] text-[#FAF8F4] hover:bg-[#4A1E45] transition-all shadow-sm"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/results"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-[#FFFCF8] text-[#241B24] border border-[#DDD3D7] hover:border-[#35172F] transition-all shadow-2xs"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Column (Aura Backdrop + Bilal Cutout + Handwriting + Floating Quote) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-end justify-center">
                {/* Sweeping Plum/Lavender Gradient Aura */}
                <div className="absolute top-4 inset-x-2 bottom-0 rounded-t-[220px] rounded-b-3xl bg-gradient-to-tr from-[#3D1A36] via-[#6B2F5C] to-[#E2D0DD] opacity-95 shadow-2xl" />

                {/* Handwritten cursive annotation in upper right */}
                <div className="absolute top-8 right-6 z-20 font-handwriting text-[#FAF8F4]/90 text-2xl md:text-3xl leading-tight select-none rotate-6 text-right drop-shadow">
                  Creator<br />
                  Commerce<br />
                  Real Brands<br />
                  Real Growth
                </div>

                {/* Bilal's transparent portrait cutout */}
                <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none">
                  <Image
                    src="/media/bilal-transparent.png"
                    alt="Bilal Shahid — TikTok Shop Growth Operator"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-auto max-h-[96%] object-contain object-bottom drop-shadow-2xl"
                  />
                </div>

                {/* Floating Frosted Glass Card on bottom right */}
                <div className="absolute -bottom-4 right-0 sm:right-2 z-30 bg-[#FFFCF8]/95 backdrop-blur-md border border-[#DDD3D7] rounded-2xl p-4 shadow-xl max-w-[240px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#35172F] to-[#884279] flex items-center justify-center text-[#FAF8F4]">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#241B24] tracking-tight">
                      TikTok Shop Growth Operator
                    </span>
                  </div>
                  <p className="text-xs text-[#51284B] italic leading-snug">
                    &ldquo;Better creators. Stronger systems. Real revenue.&rdquo;
                  </p>
                  <div className="w-8 h-0.5 bg-[#51284B]/40 mt-2 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section className="border-y border-[#DDD3D7] bg-[#FFFCF8] py-8 md:py-10">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DDD3D7]/70">
            {heroProof.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? "md:pl-6 pt-4 md:pt-0" : ""}`}>
                <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#35172F]">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#241B24] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUSTED PLATFORMS & TOOLS */}
      <section className="py-8 bg-[#FAF8F4] border-b border-[#DDD3D7]/60">
        <div className="container-editorial flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#746970] shrink-0">
            TRUSTED PLATFORMS &amp; TOOLS
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base text-[#241B24]/80">
            {brandLogos.map((brand, idx) => (
              <span key={idx} className={`${brand.font} hover:text-[#35172F] transition-colors select-none`}>
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MY OPERATING SYSTEM (Deep Plum Horizontal Steps) */}
      <section className="py-20 md:py-24 bg-[#2A1224] text-[#FAF8F4] relative overflow-hidden">
        <div className="container-editorial">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#DCC9DA] block mb-2">
                MY OPERATING SYSTEM
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F4] leading-tight">
                From Creators to<br className="hidden sm:inline" /> Compounding Growth.
              </h2>
            </div>
            <div className="max-w-md md:text-right flex flex-col md:items-end gap-3">
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#DCC9DA] hover:text-[#FAF8F4] tracking-wider"
              >
                <span>THE PROCESS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-xs sm:text-sm text-[#DCC9DA]/90 font-light leading-relaxed">
                A structured, end-to-end approach to grow brands on TikTok Shop — combining creative, creators, commerce, and data.
              </p>
            </div>
          </div>

          {/* 5 Connected Circular Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {operatingSystemSteps.map((step, idx) => {
              const IconComp = stepIcons[idx] || Users;
              return (
                <div key={idx} className="flex flex-col items-start relative group">
                  {/* Circle + connecting arrow */}
                  <div className="flex items-center w-full mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#FAF8F4] flex items-center justify-center text-[#35172F] shadow-lg shrink-0 group-hover:scale-105 transition-transform">
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

                  {/* Step Title & Description */}
                  <h3 className="font-editorial text-base sm:text-lg text-[#FAF8F4] font-semibold mb-1">
                    {step.step} {step.shortTitle || step.title}
                  </h3>
                  <p className="text-xs text-[#DCC9DA] leading-relaxed font-light">
                    {step.shortDesc || step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. REAL RESULTS (Featured Case Studies) */}
      <section className="py-20 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                REAL RESULTS
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#241B24]">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-[#35172F] hover:text-[#51284B] tracking-wider"
            >
              <span>VIEW ALL CASE STUDIES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Case Study Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              cases.find((c) => c.slug === "beauty-brand-ramp-up"),
              cases.find((c) => c.slug === "contemporary-apparel-q4"),
              cases.find((c) => c.slug === "fine-jewellery-aesthetic-pipeline"),
              cases.find((c) => c.slug === "premium-apparel-lean-sampling"),
              cases.find((c) => c.slug === "sports-nutrition-affiliate-first"),
            ]
              .filter(Boolean)
              .map((study) => {
                if (!study) return null;
                const card = study.cardData || {
                  thumbnail: "/media/cases/thumb-apparel-q4.jpg",
                  pillTag: study.sector,
                  cardTitle: study.sector,
                  primaryValue: study.headlineOutcome,
                  primaryLabel: study.outcomeType,
                  stats: [],
                };

              return (
                <article
                  key={study.slug}
                  className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#51284B]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail Image with Pill Tag */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EEE5E1]" style={{ position: "relative" }}>
                      <Image
                        src={card.thumbnail}
                        alt={card.cardTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-[#FAF8F4]/90 backdrop-blur-xs text-[#241B24] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-2xs">
                        {card.pillTag}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xs font-semibold text-[#241B24] tracking-tight">
                            {card.cardTitle}
                          </h3>
                          <div className="font-editorial text-2xl font-bold text-[#35172F] mt-1 leading-none">
                            {card.primaryValue}
                          </div>
                          <span className="text-[10px] text-[#746970] block mt-0.5">
                            {card.primaryLabel}
                          </span>
                        </div>
                        <Link
                          href={`/results/${study.slug}`}
                          className="w-7 h-7 rounded-full bg-[#FAF8F4] border border-[#DDD3D7] flex items-center justify-center text-[#35172F] group-hover:bg-[#35172F] group-hover:text-[#FAF8F4] transition-colors shrink-0 mt-0.5"
                          aria-label={`View dossier for ${card.cardTitle}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 3 Bottom Metrics */}
                  <div className="border-t border-[#DDD3D7]/60 p-3 bg-[#FAF8F4]/50 grid grid-cols-3 divide-x divide-[#DDD3D7]/60 text-center">
                    {card.stats.map((s, sIdx) => (
                      <div key={sIdx} className="px-1">
                        <div className="text-xs font-bold text-[#241B24]">{s.value}</div>
                        <div className="text-[9px] text-[#746970] leading-tight line-clamp-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. ABOUT SECTION (Side-by-Side with Circular Portrait, Badges, Postcard Note) */}
      <section className="py-20 md:py-24 bg-[#FFFCF8] border-t border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Circular Portrait with Handwriting Signature */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#FAF8F4] shadow-xl relative" style={{ position: "relative" }}>
                  <Image
                    src="/media/portrait/bilal-circle.png"
                    alt="Bilal Shahid portrait"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                {/* Handwritten signature overlay */}
                <div className="absolute -bottom-2 -left-4 z-20 font-handwriting text-[#51284B] text-3xl sm:text-4xl -rotate-12 select-none font-bold drop-shadow-sm">
                  Bilal<br />
                  Shahid
                </div>
              </div>
            </div>

            {/* Middle: Bio & Feature Badges */}
            <div className="lg:col-span-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#51284B] block mb-2">
                ABOUT
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#241B24] mb-4 leading-tight">
                Operator. Creator Commerce Specialist. Brand Builder.
              </h2>
              <p className="text-xs sm:text-sm text-[#746970] leading-relaxed mb-6 font-light">
                I&apos;m Bilal Shahid, a TikTok Shop and DTC growth operator with 4+ years of experience helping consumer brands win in the creator economy. I combine creator strategy, content, and performance systems to turn attention into measurable revenue and long-term brand equity.
              </p>

              {/* 3 Feature Badges */}
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
                  <span>Strategic &amp; Hands-On Partnership</span>
                </div>
              </div>
            </div>

            {/* Right: Postcard Note ("BEYOND CAMPAIGNS") */}
            <div className="lg:col-span-3">
              <div className="bg-[#FAF8F4] border border-[#DDD3D7] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#746970] block mb-3">
                    BEYOND CAMPAIGNS
                  </span>
                  <p className="font-editorial italic text-base sm:text-lg text-[#241B24] leading-snug mb-4">
                    &ldquo;I partner with founders and teams to build real brands — not just viral moments.&rdquo;
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-[#51284B]/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA BANNER */}
      <ClosingCta />
    </>
  );
}
