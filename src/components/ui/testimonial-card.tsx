import React from "react";
import type { Testimonial } from "@/content/seed";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#FFFCF8] border border-[#DDD3D7] rounded-2xl p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#51284B]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="font-editorial text-lg text-[#241B24] leading-relaxed italic mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-[#DDD3D7]/60">
        <div>
          <span className="text-sm font-semibold text-[#241B24] block">{testimonial.name}</span>
          <span className="text-xs text-[#746970]">
            {testimonial.title}
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
          {testimonial.source === "linkedin" ? "LinkedIn" : testimonial.source === "agency" ? "Agency" : "Direct"}
        </span>
      </div>
    </div>
  );
}
