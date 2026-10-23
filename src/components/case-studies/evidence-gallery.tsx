import React from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import type { CanonicalDossier } from "@/content/case-studies-data";

export function EvidenceGallery({ dossier }: { dossier: CanonicalDossier }) {
  return (
    <section className="space-y-6">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-2">
          Section 07 · Dashboard Documentation
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl text-[#241B24] mb-2">
          Dashboard Proof &amp; Original Evidence
        </h2>
        <p className="text-xs sm:text-sm text-[#746970] leading-relaxed font-light max-w-2xl">
          Direct platform dashboard exports. Click any screenshot to open the high-resolution lightbox view. Confidential customer data, addresses, and order IDs are strictly redacted.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dossier.evidence.map((proof, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#FFFCF8] border border-[#DDD3D7] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
                  {proof.platform}
                </span>
                <span className="text-[10px] text-[#746970] font-mono">
                  {proof.period}
                </span>
              </div>

              <div className="rounded-xl overflow-hidden mb-3 border border-[#DDD3D7]/60">
                <ImageLightbox
                  src={`/media/cases/${proof.filename}`}
                  alt={proof.title}
                  title={proof.title}
                  description={proof.caption}
                />
              </div>

              <h3 className="font-editorial text-base font-semibold text-[#241B24] mb-1">
                {proof.title}
              </h3>
              <p className="text-xs text-[#746970] leading-relaxed font-light mb-3">
                {proof.caption}
              </p>
            </div>

            <div className="pt-3 border-t border-[#DDD3D7]/60 text-[10px] font-medium text-[#51284B]">
              Metric: <span className="text-[#241B24]">{proof.metricReported}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
