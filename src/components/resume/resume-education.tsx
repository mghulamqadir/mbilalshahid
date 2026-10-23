import React from "react";
import { verifiedEducation } from "@/content/profile-data";

export function ResumeEducation() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-6">
        Education &amp; Credentials
      </h2>

      <div className="space-y-6">
        {verifiedEducation.map((edu, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-editorial text-lg text-[#241B24]">
                {edu.degree}
              </h3>
              <span className="text-xs font-mono font-semibold text-[#51284B]">
                {edu.period}
              </span>
            </div>
            <div className="text-xs text-[#746970]">
              {edu.institution} · <span className="font-light">{edu.location}</span>
            </div>
            {edu.highlights && (
              <p className="text-xs text-[#51284B] italic pt-1">
                {edu.highlights.join(" · ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
