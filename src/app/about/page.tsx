import React from "react";
import Image from "next/image";
import { site, careerTimeline, education, brandProjects, platformTools } from "@/content/seed";
import { ArrowUpRight, ArrowRight, CheckIcon, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata = {
  title: "About Bilal Shahid",
  description: "Biographical background, credentials, career timeline, and operational principles of Bilal Shahid.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="badge-editorial mb-4">Background & Experience</span>
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#241B24] leading-[1.1] mb-6">
                E-commerce operator, creator engine architect, and MBA strategist.
              </h1>
              <p className="text-base sm:text-lg text-[#746970] leading-relaxed mb-6 font-light">
                Over the past four-plus years, I have navigated both agency-side client delivery and
                in-house brand building across TikTok Shop, Amazon, Shopify, and Walmart ecosystems.
              </p>
              <p className="text-base sm:text-lg text-[#746970] leading-relaxed mb-8 font-light">
                My recent focus has been centered end-to-end on TikTok Shop: building creator pipelines,
                sampling protocols, affiliate compensation models, and paid GMV Max campaigns that
                compound into consistent revenue.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink href="/resume" variant="primary">
                  <span>View Resume</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  <span>Direct Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-[#DDD3D7] shadow-xl bg-[#FFFCF8]">
                <div className="aspect-[4/5] relative w-full" style={{ position: "relative" }}>
                  <Image
                    src="/media/portrait/bilal-shahid.png"
                    alt="Bilal Shahid portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-[#FAF8F4] border-t border-[#DDD3D7]">
                  <h3 className="font-editorial text-xl text-[#241B24]">{site.name}</h3>
                  <p className="text-xs text-[#746970] mt-1">{site.title}</p>
                  <p className="text-xs text-[#51284B] font-medium mt-2">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <SectionHeading
            eyebrow="Chronology"
            title="Professional Experience"
            subtitle="Demonstrated history across brand management, agency operations, and marketplace scaling."
          />

          <div className="space-y-12 mt-12">
            {careerTimeline.map((role, idx) => (
              <div
                key={idx}
                className="relative pl-8 md:pl-10 border-l-2 border-[#51284B]/30 pb-4"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#35172F] border-2 border-[#FFFCF8]" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-editorial text-2xl text-[#241B24]">
                    {role.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#51284B] shrink-0">
                    {role.period}
                  </span>
                </div>

                <div className="text-sm font-medium text-[#746970] mb-4">
                  <span>{role.company}</span> · <span className="text-xs font-normal">{role.market}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {role.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-[#241B24] flex items-start gap-2">
                      <span className="text-[#51284B] font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {role.notes && (
                  <p className="text-[11px] text-[#746970] italic bg-[#FAF8F4] p-3 rounded border border-[#DDD3D7]/60">
                    Note: {role.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Academic Projects */}
      <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-[#FFFCF8] p-8 rounded-2xl border border-[#DDD3D7]">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#51284B] block mb-2">
                Education
              </span>
              <h3 className="font-editorial text-2xl text-[#241B24] mb-1">
                {education.degree}
              </h3>
              <p className="text-xs text-[#746970] font-medium mb-4">
                {education.institution} · {education.period}
              </p>

              <div className="pt-4 border-t border-[#DDD3D7]/60">
                <span className="text-xs font-semibold text-[#241B24] block mb-2">
                  Core Focus Areas:
                </span>
                <ul className="space-y-2">
                  {education.coursework.map((c, cIdx) => (
                    <li key={cIdx} className="text-xs text-[#746970] flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-[#51284B]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strategic Brand Projects */}
            <div className="space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#51284B] block">
                Brand & Academic Projects
              </span>
              {brandProjects.map((proj, pIdx) => (
                <div key={pIdx} className="bg-[#FFFCF8] p-5 rounded-xl border border-[#DDD3D7]">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-editorial text-lg text-[#241B24]">{proj.title}</h4>
                    <span className="text-[10px] bg-[#EEE5E1] text-[#241B24] px-2 py-0.5 rounded">
                      {proj.sector}
                    </span>
                  </div>
                  <p className="text-xs text-[#746970] leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <span className="text-[11px] text-[#51284B] font-medium block">
                    Focus: {proj.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Ecosystem */}
      <section className="py-16 md:py-24 bg-[#FFFCF8]">
        <div className="container-editorial text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Ecosystem Fluency"
            title="Tools & Technologies Operated"
            subtitle="Hands-on competence across marketplace consoles, analytics aggregators, and creative tools."
            centered
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {platformTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F4] border border-[#DDD3D7] px-4 py-2.5 rounded-lg text-xs font-medium text-[#241B24] shadow-2xs"
              >
                <span className="font-semibold block">{tool.name}</span>
                <span className="text-[10px] text-[#746970] block">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
