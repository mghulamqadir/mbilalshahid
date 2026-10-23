import React from "react";
import Image from "next/image";
import Link from "next/link";
import { professionalProfile, aboutPageContent } from "@/content/profile-data";
import { ArrowUpRight } from "@/components/ui/primitives";

export function AboutHero() {
  const { hero } = aboutPageContent;

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-[#FAF8F4] border-b border-[#DDD3D7]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Introduction Column */}
          <div className="lg:col-span-7">
            <span className="badge-editorial mb-4">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#241B24] leading-[1.15] mb-6">
              {hero.headline}
            </h1>
            <div className="space-y-4 text-sm sm:text-base text-[#746970] leading-relaxed font-light mb-8">
              {hero.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={hero.primaryCTA.href}
                className="btn-plum text-xs inline-flex items-center gap-1.5"
              >
                <span>{hero.primaryCTA.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={hero.secondaryCTA.href}
                className="btn-outline-plum text-xs inline-flex items-center gap-1.5"
              >
                <span>{hero.secondaryCTA.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Genuine Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-[#DDD3D7] shadow-lg bg-[#FFFCF8]">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src={professionalProfile.portraitSrc}
                  alt={professionalProfile.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 bg-[#FAF8F4] border-t border-[#DDD3D7]">
                <h3 className="font-editorial text-xl text-[#241B24]">
                  {professionalProfile.name}
                </h3>
                <p className="text-xs text-[#746970] mt-1 font-light">
                  {professionalProfile.headline}
                </p>
                <p className="text-xs text-[#51284B] font-medium mt-2">
                  {professionalProfile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
