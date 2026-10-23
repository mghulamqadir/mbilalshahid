import React from "react";
import type { Metadata } from "next";
import { getOperatingSystem, getRoadmapPhases } from "@/features/content/queries";
import { sampleCreatorPitches } from "@/content/seed";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { RoadmapSection } from "@/components/ui/roadmap-section";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata: Metadata = {
  title: "TikTok Shop Operating Methodology & 90-Day Roadmap | Bilal Shahid",
  description:
    "The 5-phase creator commerce operating framework and 30/60/90-day delivery roadmap used to build predictable, compounding revenue on TikTok Shop.",
  openGraph: {
    title: "Operating Methodology & 90-Day Roadmap | Bilal Shahid",
    description:
      "A systematic creator engine: Discovery, Sampling, Activation, Paid Amplification, and Weekly Funnel Diagnostics.",
  },
  alternates: {
    canonical: "/process",
  },
};

export default async function ProcessPage() {
  const [operatingSystemSteps, roadmapPhases] = await Promise.all([
    getOperatingSystem(),
    getRoadmapPhases(),
  ]);

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <SectionHeading
            as="h1"
            eyebrow="The Operating Framework"
            title="A Systematic Creator Engine"
            subtitle="Growth on TikTok Shop is not about hoping an algorithmic lottery ticket lands. It requires a disciplined, repeatable operational cadence."
          />
        </div>
      </section>

      {/* ── 5 Operating System Steps ───────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial max-w-5xl">
          <div className="space-y-12">
            {operatingSystemSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl p-8 md:p-12 shadow-xs transition-all hover:border-[#51284B]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-3">
                    <span className="font-editorial text-4xl md:text-5xl font-bold text-[#51284B] block mb-2">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase font-semibold text-[#746970] tracking-wider">
                      Phase {idx + 1} of 5
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-4">
                    <h3 className="font-editorial text-2xl md:text-3xl text-[#241B24]">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#746970] leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-[#DDD3D7]/60">
                      <span className="text-xs uppercase font-semibold text-[#51284B] block mb-3">
                        Operational Outputs &amp; Artifacts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#241B24]">
                            <CheckIcon className="w-3.5 h-3.5 text-[#51284B] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── 30/60/90-Day Delivery Roadmap (Phase 7) ─────────────── */}
          <div className="mt-20 pt-16 border-t border-[#DDD3D7]">
            <SectionHeading
              eyebrow="Delivery Timeline"
              title="30 / 60 / 90-Day Execution Roadmap"
              subtitle="How shop growth is structured from foundation to scaling. Clear delivery gates prevent wasted sample inventory."
            />
            <div className="mt-8">
              <RoadmapSection phases={roadmapPhases} />
            </div>
          </div>

          {/* ── Sample Creator Pitch Showcase ────────────────────────── */}
          <div className="mt-20 pt-16 border-t border-[#DDD3D7]">
            <div className="mb-10">
              <span className="badge-editorial mb-3">Creator Evaluation Benchmark</span>
              <h2 className="font-editorial text-3xl text-[#241B24] mb-2">
                Sample Creator Pitch &amp; Shortlist
              </h2>
              <p className="text-sm text-[#746970] max-w-2xl leading-relaxed">
                Illustrative shortlist matching brand creator profiles. Demonstrates how creator
                vetting prioritizes revenue-closing ability and niche authority over vanity follower counts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleCreatorPitches.map((item, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-bold text-[#35172F]">
                        {item.creator}
                      </span>
                      <span className="text-[10px] bg-[#DCC9DA]/50 text-[#35172F] font-semibold px-2 py-0.5 rounded">
                        {item.performance}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#51284B] block mb-2">
                      {item.category}
                    </span>
                    <p className="text-xs text-[#746970] leading-relaxed font-light">
                      {item.rationale}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[10px] text-[#746970]">
                    Vetting Benchmark
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#746970] italic mt-4">
              * Note: Illustrative creator profiles representative of campaign briefs managed; provided as evaluation benchmarks.
            </p>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
