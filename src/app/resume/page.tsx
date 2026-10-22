import React from "react";
import { site, careerTimeline, education, brandProjects } from "@/content/seed";
import { ArrowUpRight } from "@/components/ui/primitives";

export const metadata = {
  title: "Resume — Bilal Shahid",
  description: "Official resume of Bilal Shahid, TikTok Shop & Multichannel E-commerce Professional.",
};

export default function ResumePage() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="container-editorial max-w-4xl">
        {/* Top Header & Download Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-[#DDD3D7]">
          <div>
            <span className="badge-editorial mb-3">Official Curriculum Vitae</span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-[#241B24]">
              {site.name}
            </h1>
            <p className="text-base text-[#746970] mt-1 font-light">
              {site.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#746970] mt-3">
              <span>{site.email}</span>
              {site.phone && <><span>•</span><span>{site.phone}</span></>}
              <span>•</span>
              <span>{site.location}</span>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="/docs/bilal-shahid-resume.pdf"
              download="Bilal_Shahid_Resume.pdf"
              className="btn-plum text-sm"
            >
              <span>Download PDF Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="py-10 border-b border-[#DDD3D7]">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-3">
            About Me / Executive Profile
          </h2>
          <p className="text-sm md:text-base text-[#241B24] leading-relaxed font-light">
            Versatile TikTok Shop & Multichannel E-commerce Professional with 4+ years of experience working
            with both agencies and brand-side teams across TikTok Shop, Amazon, Shopify, and Walmart ecosystems.
            Proven ability to manage multiple brands simultaneously, scale GMV through performance marketing,
            affiliate ecosystems, and operational excellence, and support agency-style client delivery as well as
            in-house brand growth.
          </p>
          <p className="text-sm md:text-base text-[#241B24] leading-relaxed font-light mt-3">
            Demonstrated success in UK & US markets, driving 20–30% MoM growth, £5k to £20k+ GMV scaling, and
            5x–15x ROI using GMV Max and manual strategies. Backed by an MBA in Marketing & Branding with
            strong execution, reporting, and stakeholder-management skills.
          </p>
        </div>

        {/* Core Expertise Grid */}
        <div className="py-10 border-b border-[#DDD3D7]">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-6">
            Core Expertise & Disciplines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7]">
              <h3 className="font-editorial text-lg text-[#241B24] mb-2">TikTok Shop Growth & Performance</h3>
              <ul className="space-y-1.5 text-xs text-[#746970]">
                <li>• GMV Max (Auto & Manual) Campaigns</li>
                <li>• Shop Ads, Campaign Center & Promotions</li>
                <li>• Budget Allocation, Scaling & Audit</li>
                <li>• Flash Sales, Vouchers, Free Shipping & Discounts</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7]">
              <h3 className="font-editorial text-lg text-[#241B24] mb-2">Affiliate & Creator Ecosystem</h3>
              <ul className="space-y-1.5 text-xs text-[#746970]">
                <li>• Affiliate Marketplace Strategy</li>
                <li>• Free, Retainer & Targeted Creator Collaborations</li>
                <li>• Sample Tracking, Quality Approvals & Creator KPIs</li>
                <li>• Cooperation Chat & Performance Scaling</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7]">
              <h3 className="font-editorial text-lg text-[#241B24] mb-2">Product, Listing & SEO Optimization</h3>
              <ul className="space-y-1.5 text-xs text-[#746970]">
                <li>• Product Hunting & Market Validation</li>
                <li>• Listing SEO, CRO & Offer Optimization</li>
                <li>• Product Analysis & Competitive Research</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7]">
              <h3 className="font-editorial text-lg text-[#241B24] mb-2">Operations, CRM & Multichannel</h3>
              <ul className="space-y-1.5 text-xs text-[#746970]">
                <li>• TikTok Shop to Shopify & Amazon Integrations</li>
                <li>• Order, Return & Refund Management</li>
                <li>• Customer Segmentation (New, Repeat, Lapsed, Abandoned Cart)</li>
                <li>• Shop Performance Score & Violation Appeals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="py-10 border-b border-[#DDD3D7]">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-8">
            Professional Experience
          </h2>

          <div className="space-y-10">
            {careerTimeline.map((job, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-editorial text-2xl text-[#241B24]">
                    {job.title} — <span className="font-sans font-normal text-lg text-[#51284B]">{job.company}</span>
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#746970] shrink-0">
                    {job.period}
                  </span>
                </div>

                <div className="text-xs font-medium text-[#746970]">
                  {job.market}
                </div>

                <ul className="space-y-2 pt-2">
                  {job.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-[#241B24] flex items-start gap-2.5">
                      <span className="text-[#51284B] font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Projects */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-4">
                Education & Training
              </h2>
              <div className="bg-[#FFFCF8] p-6 rounded-xl border border-[#DDD3D7]">
                <h3 className="font-editorial text-xl text-[#241B24]">{education.degree}</h3>
                <p className="text-xs font-medium text-[#746970] mt-1 mb-4">
                  {education.institution} · {education.period}
                </p>
                <ul className="space-y-1 text-xs text-[#746970]">
                  {education.coursework.map((c, idx) => (
                    <li key={idx}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-4">
                Strategy Projects
              </h2>
              <div className="space-y-3">
                {brandProjects.map((p, idx) => (
                  <div key={idx} className="bg-[#FFFCF8] p-4 rounded-xl border border-[#DDD3D7] text-xs">
                    <span className="font-bold text-[#241B24] block">{p.title} ({p.sector})</span>
                    <span className="text-[#746970] block mt-0.5">{p.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#DDD3D7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#746970]">
            Available for select brand-side and agency growth contracts.
          </span>
          <a
            href="/docs/bilal-shahid-resume.pdf"
            download="Bilal_Shahid_Resume.pdf"
            className="btn-plum text-xs"
          >
            <span>Download Official PDF Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
