import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/content/seed";

export interface CaseStudyCardProps {
  study: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ study, className = "" }: CaseStudyCardProps) {
  const card = study.cardData || {
    thumbnail: "/media/cases/thumb-apparel-q4.png",
    pillTag: study.sector,
    cardTitle: study.sector,
    primaryValue: study.headlineOutcome,
    primaryLabel: study.outcomeType,
    stats: [],
  };

  return (
    <article
      className={`card-editorial overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:border-[#2D1627]/30 ${className}`}
    >
      <div>
        {/* Card Thumbnail */}
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#F2ECE9]">
          <Image
            src={card.thumbnail}
            alt={card.cardTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Body */}
        <div className="p-5">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#51284B] block mb-1">
            {card.pillTag}
          </span>
          <h3 className="font-editorial text-lg font-semibold text-[#241B24] tracking-tight mb-2">
            {card.cardTitle}
          </h3>
          <div className="font-editorial text-2xl font-bold text-[#35172F] leading-none">
            {card.primaryValue}
          </div>
          <span className="text-[10px] text-[#746970] block mt-1">
            {card.primaryLabel}
          </span>
        </div>
      </div>

      {/* Key Stats Row */}
      {card.stats && card.stats.length > 0 && (
        <div className="border-t border-[#F0EAE8] px-4 py-3 grid grid-cols-3 divide-x divide-[#F0EAE8] text-center">
          {card.stats.map((s, sIdx) => (
            <div key={sIdx} className="px-2 flex flex-col justify-center">
              <div className="text-xs font-bold text-[#241B24] leading-tight">{s.value}</div>
              <div className="text-[9px] text-[#746970] leading-snug mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Action Footer */}
      <div className="px-5 py-3 border-t border-[#F0EAE8]">
        <Link
          href={`/results/${study.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#35172F] hover:text-[#51284B] transition-colors"
        >
          <span>Read full case dossier</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
