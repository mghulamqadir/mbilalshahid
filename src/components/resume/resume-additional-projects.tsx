import React from "react";
import { additionalProjects } from "@/content/profile-data";

export function ResumeAdditionalProjects() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-4">
        Additional Projects
      </h2>

      <div className="space-y-3">
        {additionalProjects.map((proj, idx) => (
          <div key={idx} className="text-xs leading-relaxed">
            <strong className="text-[#241B24] font-semibold">{proj.name}</strong>{" "}
            <span className="text-[#51284B]">({proj.role})</span> —{" "}
            <span className="text-[#746970] font-light">{proj.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
