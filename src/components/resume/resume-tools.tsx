import React from "react";
import { toolsAndPlatforms } from "@/content/profile-data";

export function ResumeTools() {
  return (
    <section className="py-8 border-b border-[#DDD3D7]">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#51284B] mb-6">
        Tools &amp; Platforms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl bg-[#FAF8F4] border border-[#DDD3D7]">
          <h3 className="font-editorial text-base text-[#241B24] font-semibold mb-3">
            TikTok Shop
          </h3>
          <ul className="space-y-1.5 text-xs text-[#746970]">
            {toolsAndPlatforms.tiktokShop.map((tool, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#51284B] font-bold">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-[#FAF8F4] border border-[#DDD3D7]">
          <h3 className="font-editorial text-base text-[#241B24] font-semibold mb-3">
            E-Commerce
          </h3>
          <ul className="space-y-1.5 text-xs text-[#746970]">
            {toolsAndPlatforms.ecommerce.map((tool, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#51284B] font-bold">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-[#FAF8F4] border border-[#DDD3D7]">
          <h3 className="font-editorial text-base text-[#241B24] font-semibold mb-3">
            Analytics &amp; Intelligence
          </h3>
          <ul className="space-y-1.5 text-xs text-[#746970]">
            {toolsAndPlatforms.analytics.map((tool, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#51284B] font-bold">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
