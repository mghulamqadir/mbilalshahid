import React from "react";
import { verifiedExperience } from "@/content/profile-data";

export function ResumeExperience() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-6">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {verifiedExperience.map((role) => (
          <div key={role.id} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="font-editorial text-lg sm:text-xl text-[#241B24]">
                  {role.title}
                </h3>
                <div className="text-xs font-medium text-[#51284B]">
                  {role.employer} · <span className="text-[#746970] font-light">{role.market}</span>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-[#51284B] shrink-0">
                {role.period}
              </span>
            </div>

            <ul className="space-y-1.5 text-xs text-[#241B24] leading-relaxed pt-1">
              {role.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2">
                  <span className="text-[#51284B] font-bold text-xs shrink-0">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {role.keyAchievement && (
              <p className="text-[11px] text-[#51284B] bg-[#F4EDE9] p-2.5 rounded-lg border border-[#DDD3D7]/50 italic">
                <strong>Key Achievement:</strong> {role.keyAchievement}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
