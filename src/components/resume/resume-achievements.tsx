import React from "react";
import Link from "next/link";
import { selectedAchievements } from "@/content/profile-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function ResumeAchievements() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B]">
          Selected Professional Achievements
        </h2>
        <Link
          href="/results"
          className="text-xs font-semibold text-[#51284B] hover:text-[#35172F] inline-flex items-center gap-1 no-print"
        >
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedAchievements.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#746970] block mb-1">
                {item.sector}
              </span>
              <div className="font-editorial text-lg text-[#51284B] font-bold mb-2">
                {item.metric}
              </div>
              <p className="text-xs text-[#241B24] leading-relaxed mb-4 font-light">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#DDD3D7]/60 flex items-center justify-between text-[11px]">
              <span className="text-[#746970]">{item.period}</span>
              <Link
                href={item.caseStudyUrl}
                className="font-semibold text-[#51284B] hover:underline inline-flex items-center gap-1 no-print"
              >
                <span>Dossier</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
