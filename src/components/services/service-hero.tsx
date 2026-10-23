import React from "react";
import { servicesHeroContent } from "@/content/services-data";

export function ServiceHero() {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial max-w-4xl">
        <span className="badge-editorial mb-4">
          {servicesHeroContent.eyebrow}
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#241B24] tracking-tight leading-[1.15] mb-6">
          {servicesHeroContent.headline}
        </h1>
        <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#746970] leading-relaxed font-light">
          {servicesHeroContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
