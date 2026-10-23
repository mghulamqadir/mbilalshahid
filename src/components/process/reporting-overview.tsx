import React from "react";
import { reportingAreas, reportingStandardsNote } from "@/content/process-data";
import { SectionHeading } from "@/components/ui/primitives";

export function ReportingOverview() {
  return (
    <section id="reporting" className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7] scroll-mt-16">
      <div className="container-editorial max-w-5xl">
        <SectionHeading
          eyebrow="Accountability & Attribution"
          title="Transparent Reporting & Operational Deliverables"
          subtitle="Avoid opaque dashboards and vanity outreach claims. Prospective clients receive structured operational reports with clearly defined attribution boundaries."
        />

        {/* 8 Reporting Areas Table */}
        <div className="overflow-x-auto rounded-xl border border-[#DDD3D7] bg-[#FAF8F4] shadow-xs mt-12">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#EEE5E1] border-b border-[#DDD3D7] text-[#241B24]">
                <th className="py-3.5 px-4 font-semibold uppercase tracking-wider text-[11px] text-[#51284B] w-1/4">
                  Reporting Area
                </th>
                <th className="py-3.5 px-4 font-semibold uppercase tracking-wider text-[11px] text-[#241B24] w-2/5">
                  Operational Measure
                </th>
                <th className="py-3.5 px-4 font-semibold uppercase tracking-wider text-[11px] text-[#51284B] w-1/3">
                  Critical Attribution Distinction
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDD3D7]/60">
              {reportingAreas.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <tr
                    key={idx}
                    className={`hover:bg-[#FFFCF8] transition-colors ${
                      isEven ? "bg-[#FAF8F4]" : "bg-[#FFFCF8]/60"
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-[#241B24]">
                      {item.area}
                    </td>
                    <td className="py-3 px-4 text-[#746970]">
                      {item.measure}
                    </td>
                    <td className="py-3 px-4 text-[#51284B] font-medium bg-[#F4EDE9]/40">
                      {item.distinction}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* KPI Standards Card */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] flex flex-col md:flex-row gap-6 items-start">
          <div className="p-3 bg-[#51284B] text-[#FAF8F4] rounded-xl font-mono text-xs font-bold shrink-0">
            KPI SCHEMA
          </div>
          <div className="space-y-2 text-xs text-[#746970] leading-relaxed">
            <h4 className="font-editorial text-base text-[#241B24] font-semibold">
              Standardized KPI Data Model
            </h4>
            <p>
              Every reported KPI in weekly and monthly client scorecards supports:{" "}
              <code className="text-[#51284B] bg-[#EEE5E1] px-1.5 py-0.5 rounded font-mono">label</code>,{" "}
              <code className="text-[#51284B] bg-[#EEE5E1] px-1.5 py-0.5 rounded font-mono">value</code>,{" "}
              <code className="text-[#51284B] bg-[#EEE5E1] px-1.5 py-0.5 rounded font-mono">period</code>,{" "}
              <code className="text-[#51284B] bg-[#EEE5E1] px-1.5 py-0.5 rounded font-mono">definition</code>, and{" "}
              <code className="text-[#51284B] bg-[#EEE5E1] px-1.5 py-0.5 rounded font-mono">source</code>.
            </p>
            <p className="italic">
              * {reportingStandardsNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
