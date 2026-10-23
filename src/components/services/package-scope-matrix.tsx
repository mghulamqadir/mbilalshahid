import React from "react";
import { packageScopeMatrix, scopeMatrixFootnote } from "@/content/services-data";
import { CheckIcon } from "@/components/ui/primitives";

export function PackageScopeMatrix() {
  return (
    <div className="mt-16 pt-12 border-t border-[#DDD3D7]">
      <div className="mb-6">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] block mb-1">
          Detailed Comparison
        </span>
        <h3 className="font-editorial text-2xl text-[#241B24] mb-2">
          Package Scope Matrix
        </h3>
        <p className="text-xs sm:text-sm text-[#746970] max-w-2xl font-light">
          Compare operational responsibilities across the three engagement models.
        </p>
      </div>

      {/* Responsive Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-[#DDD3D7] bg-[#FFFCF8] shadow-xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#FAF8F4] border-b border-[#DDD3D7] text-[#241B24]">
              <th className="py-3.5 px-4 font-semibold uppercase tracking-wider text-[11px] text-[#51284B] w-2/5">
                Capability
              </th>
              <th className="py-3.5 px-3 font-semibold uppercase tracking-wider text-[11px] text-[#241B24] w-1/5">
                Launch &amp; Setup
              </th>
              <th className="py-3.5 px-3 font-semibold uppercase tracking-wider text-[11px] text-[#51284B] w-1/5 bg-[#F4EDE9]">
                Affiliate Growth
              </th>
              <th className="py-3.5 px-3 font-semibold uppercase tracking-wider text-[11px] text-[#241B24] w-1/5">
                Full Management
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD3D7]/60">
            {packageScopeMatrix.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <tr
                  key={idx}
                  className={`hover:bg-[#FAF8F4]/80 transition-colors ${
                    isEven ? "bg-[#FFFCF8]" : "bg-[#FAF8F4]/40"
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-[#241B24]">
                    {row.capability}
                  </td>
                  <td className="py-3 px-3 text-[#746970]">
                    {formatCellValue(row.launchSetup)}
                  </td>
                  <td className="py-3 px-3 text-[#35172F] font-medium bg-[#F4EDE9]/40">
                    {formatCellValue(row.affiliateGrowth)}
                  </td>
                  <td className="py-3 px-3 text-[#746970]">
                    {formatCellValue(row.fullManagement)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-[#746970] italic mt-4 leading-relaxed">
        * {scopeMatrixFootnote}
      </p>
    </div>
  );
}

function formatCellValue(value: string) {
  if (value === "Included") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-[#51284B]">
        <CheckIcon className="w-3.5 h-3.5 text-[#51284B] shrink-0" />
        <span>Included</span>
      </span>
    );
  }
  if (value === "—") {
    return <span className="text-[#DDD3D7] font-bold">—</span>;
  }
  return <span>{value}</span>;
}
