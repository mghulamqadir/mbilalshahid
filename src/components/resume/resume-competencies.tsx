import React from "react";
import { coreCompetencies } from "@/content/profile-data";

export function ResumeCompetencies() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-6">
        Core Competencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coreCompetencies.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#FFFCF8] border border-[#DDD3D7]"
          >
            <h3 className="font-editorial text-base sm:text-lg text-[#241B24] mb-3 font-semibold">
              {group.category}
            </h3>
            <ul className="space-y-1.5 text-xs text-[#746970]">
              {group.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-start gap-1.5 leading-snug">
                  <span className="text-[#51284B] font-bold text-xs shrink-0">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
