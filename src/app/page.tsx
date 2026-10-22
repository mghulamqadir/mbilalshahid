import React from "react";
import Link from "next/link";
import Image from "next/image";
import { heroProof, platformTools, operatingSystemSteps } from "@/content/seed";
import { getFeaturedCases } from "@/features/content/queries";
import { ArrowUpRight, ArrowRight, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";

export default async function HomePage() {
  const featuredCases = await getFeaturedCases();

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Copy (Left) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="badge-editorial mb-6">
                TIKTOK SHOP · CREATOR COMMERCE · DTC GROWTH
              </div>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#241B24] tracking-tight mb-6">
                Turning Attention Into{" "}
                <span className="italic font-normal text-[#35172F]">
                  Measurable Commerce Growth.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#746970] max-w-2xl leading-relaxed mb-8 font-light">
                Full-funnel TikTok Shop operations and creator ecosystem architect for US DTC brands.
                From rigorous creator sourcing and sample scoring to daily video cadence and GMV Max scaling.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <ButtonLink href="/contact" variant="primary">
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/results" variant="secondary">
                  <span>Explore Results</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonLink>
              </div>

              {/* Sub-hero badge */}
              <div className="mt-10 pt-6 border-t border-[#DDD3D7]/70 flex items-center gap-4 text-xs text-[#746970]">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>US & UK TikTok Shop and creator-commerce operations</span>
              </div>
            </div>

            {/* Hero Arch Portrait (Right) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Layered decorative background arch */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[160px] rounded-b-2xl bg-[#DCC9DA]/60 -z-10" />

                {/* Main Portrait Arch Container */}
                <div className="relative rounded-t-[160px] rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#E6D8E4] to-[#DCC9DA] border border-[#DDD3D7] shadow-xl aspect-[3/4] flex items-end justify-center">
                  <Image
                    src="/media/portrait/bilal-shahid.png"
                    alt="Bilal Shahid — TikTok Shop & Creator Growth Specialist"
                    width={512}
                    height={512}
                    priority
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Subtle lower vignette overlay for text legibility if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#35172F]/20 to-transparent pointer-events-none" />
                </div>

                {/* Floating Stat Pill on Portrait */}
                <div className="absolute -bottom-5 -left-4 sm:left-4 bg-[#FFFCF8] border border-[#DDD3D7] rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#35172F] text-[#FAF8F4] flex items-center justify-center font-editorial font-bold text-lg">
                    4+
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#241B24]">Years Experience</div>
                    <div className="text-[11px] text-[#746970]">UK & US TikTok Shop & Amazon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOURCE-BACKED HERO PROOF BANNER */}
      <section className="border-y border-[#DDD3D7] bg-[#FFFCF8] py-12 md:py-16">
        <div className="container-editorial">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {heroProof.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l-2 border-[#51284B]/20 pl-4 sm:pl-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#35172F]">
                    {stat.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#51284B]">
                    {stat.unit}
                  </span>
                </div>
                <span className="mt-1 text-sm font-medium text-[#241B24]">
                  {stat.label}
                </span>
                <span className="mt-0.5 text-xs text-[#746970]">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLATFORM & TOOL FAMILIARITY STRIP */}
      <section className="py-12 bg-[#FAF8F4]">
        <div className="container-editorial text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#746970] mb-6 block">
            PLATFORMS & SYSTEMS OPERATED
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {platformTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#FFFCF8] border border-[#DDD3D7] px-4 py-2 rounded-full text-xs font-medium text-[#241B24] shadow-2xs hover:border-[#51284B] transition-colors"
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEEP-PLUM OPERATING SYSTEM PANEL */}
      <section className="py-20 md:py-28 bg-[#35172F] text-[#FAF8F4] relative overflow-hidden">
        <div className="container-editorial relative z-10">
          <SectionHeading
            eyebrow="Operating Methodology"
            title="The 5-Step Creator Engine"
            subtitle="A disciplined operating approach to creator velocity and affiliate GMV."
            inverted
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {operatingSystemSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#51284B]/40 border border-[#51284B] rounded-xl p-6 flex flex-col justify-between hover:bg-[#51284B]/70 transition-all duration-300"
              >
                <div>
                  <span className="font-editorial text-2xl font-bold text-[#DCC9DA] mb-3 block">
                    {step.step}
                  </span>
                  <h3 className="font-editorial text-lg text-[#FAF8F4] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#51284B]/60">
                  <span className="text-[10px] uppercase font-semibold text-[#DCC9DA] block mb-2">
                    Key Outputs:
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="text-[11px] text-gray-300 flex items-start gap-1.5">
                        <span className="text-[#DCC9DA] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#DCC9DA] hover:text-[#FAF8F4] underline underline-offset-4"
            >
              <span>Explore the complete working methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Observed Performance"
              title="Source-Backed Case Studies"
              subtitle="Client operations documented with dated Seller Center and Kalodata dashboard evidence."
            />
            <Link
              href="/results"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#35172F] hover:text-[#51284B] underline underline-offset-4 mb-4 md:mb-16"
            >
              <span>View all 5 case dossiers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCases.map((study) => (
              <article
                key={study.slug}
                className="card-editorial flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Header Media Preview */}
                  <div className="relative w-full aspect-[16/10] bg-[#EEE5E1] border-b border-[#DDD3D7] overflow-hidden" style={{ position: "relative" }}>
                    {study.evidence[0] ? (
                      <Image
                        src={`/media/cases/${study.evidence[0].filename}`}
                        alt={study.evidence[0].title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#746970] text-xs">
                        Dashboard Evidence
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-[#35172F]/90 text-[#FAF8F4] text-[11px] font-semibold px-2.5 py-1 rounded">
                      {study.period.label}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-xs uppercase font-semibold text-[#51284B] tracking-wider block mb-1">
                      {study.sector}
                    </span>
                    <h3 className="font-editorial text-xl text-[#241B24] mb-3 group-hover:text-[#35172F] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-[#746970] leading-relaxed mb-6 line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Headline KPI highlight box */}
                    <div className="bg-[#FAF8F4] border border-[#DDD3D7] rounded-lg p-3.5 mb-4">
                      <div className="text-[10px] uppercase font-semibold text-[#746970] tracking-wider">
                        {study.outcomeType}
                      </div>
                      <div className="font-editorial text-2xl font-bold text-[#35172F]">
                        {study.headlineOutcome}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 border-t border-[#DDD3D7]/50 mt-auto flex items-center justify-between text-xs font-semibold text-[#35172F]">
                  <Link
                    href={`/results/${study.slug}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#51284B]"
                  >
                    <span>Read full case dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[#746970] font-normal">{study.code}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-[#FFFCF8] border-t border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-80 aspect-square rounded-2xl overflow-hidden border border-[#DDD3D7] shadow-md bg-[#FAF8F4]" style={{ position: "relative" }}>
                <Image
                  src="/media/portrait/bilal-shahid.png"
                  alt="Bilal Shahid portrait"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="badge-editorial mb-4">The Operator</span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#241B24] mb-6">
                Disciplined execution over vanity metrics.
              </h2>
              <p className="text-base text-[#746970] leading-relaxed mb-6">
                With 4+ years spanning both brand-side and agency environments in the UK & US markets,
                I run the end-to-end TikTok Shop engine: product validation, creator sourcing, sample
                approvals, affiliate activation, and performance advertising.
              </p>
              <p className="text-base text-[#746970] leading-relaxed mb-8">
                Backed by an <strong>MBA in Marketing & Branding from COMSATS University</strong>, my
                work treats social commerce as a rigorous, accountable sales channel—not a one-off promotional stunt.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink href="/about" variant="primary">
                  <span>Full Biography & Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/resume" variant="outline">
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <ClosingCta />
    </>
  );
}
