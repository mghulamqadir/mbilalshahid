import React from "react";
import { CheckIcon } from "lucide-react";
import type { CanonicalDossier } from "@/content/case-studies-data";

export function CampaignNarrative({ dossier }: { dossier: CanonicalDossier }) {
  return (
    <div className="space-y-14">
      {/* ── 03. THE CHALLENGE & CONTEXT ────────────────────────────── */}
      <section>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
          Section 03 · Operational Baseline
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-4">
          The Challenge &amp; Context
        </h2>
        <p className="text-base sm:text-lg text-[#746970] leading-relaxed font-light bg-[#FFFCF8] p-6 sm:p-7 rounded-2xl border border-[#DDD3D7]">
          {dossier.challenge}
        </p>
      </section>

      {/* ── 04. MY ROLE & OWNERSHIP ─────────────────────────────────── */}
      <section>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
          Section 04 · Scope &amp; Contribution
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-4">
          My Role &amp; Operational Ownership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFFCF8] p-6 sm:p-7 rounded-2xl border border-[#DDD3D7]">
            <h3 className="font-editorial text-lg text-[#241B24] font-semibold mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#51284B]" />
              <span>Direct Personal Management</span>
            </h3>
            <ul className="space-y-2.5">
              {dossier.roleOwnership.personalManagement.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#241B24]">
                  <CheckIcon className="w-4 h-4 text-[#51284B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAF8F4] p-6 sm:p-7 rounded-2xl border border-[#DDD3D7]">
            <h3 className="font-editorial text-lg text-[#241B24] font-semibold mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#746970]" />
              <span>Collaborative Scope</span>
            </h3>
            <ul className="space-y-2.5">
              {dossier.roleOwnership.collaborativeScope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#746970]">
                  <CheckIcon className="w-4 h-4 text-[#746970] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 05. STRATEGY & EXECUTION ─────────────────────────────────── */}
      <section>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
          Section 05 · Methodology &amp; Actions
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-6">
          Strategy &amp; Execution
        </h2>

        <div className="space-y-6">
          {dossier.strategy.map((strat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFCF8] p-6 sm:p-8 rounded-2xl border border-[#DDD3D7] hover:border-[#51284B]/40 transition-colors"
            >
              <h3 className="font-editorial text-xl text-[#241B24] font-semibold mb-3">
                {strat.title}
              </h3>
              <ul className="space-y-2">
                {strat.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm text-[#746970] leading-relaxed flex items-start gap-2">
                    <span className="text-[#51284B] font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 08. KEY LEARNINGS ───────────────────────────────────────── */}
      <section>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
          Section 08 · Operational Takeaways
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-6">
          Key Learnings &amp; Insights
        </h2>

        <div className="space-y-4">
          {dossier.keyLearnings.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#EEE5E1]/50 border-l-4 border-[#35172F]"
            >
              <h3 className="font-editorial text-lg text-[#241B24] font-semibold mb-1">
                {item.takeaway}
              </h3>
              <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Attribution & Data Integrity Disclosure */}
      <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#DDD3D7] text-xs text-[#746970] space-y-2">
        <span className="font-semibold text-[#241B24] block uppercase tracking-wider text-[10px]">
          Attribution &amp; Integrity Disclosure
        </span>
        <p>
          Metrics reflect reported platform values from TikTok Shop Seller Center and Kalodata during Bilal Shahid&apos;s active tenure ({dossier.periodLabel}).
        </p>
        <p>
          Total shop GMV, creator-attributed GMV, and net revenue are kept distinct. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </div>
  );
}
