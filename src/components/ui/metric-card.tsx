import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  footnote?: string;
  source?: string;
  className?: string;
}

export function MetricCard({ value, label, footnote, source, className = "" }: MetricCardProps) {
  return (
    <div className={`p-5 rounded-xl border border-[#DDD3D7] bg-[#FAF8F4]/60 flex flex-col justify-between ${className}`}>
      <div>
        <span className="font-editorial text-2xl sm:text-3xl font-semibold text-[#35172F] block mb-1">
          {value}
        </span>
        <span className="text-xs font-medium text-[#241B24] block leading-snug">
          {label}
        </span>
      </div>
      {(footnote || source) && (
        <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[11px] text-[#746970] space-y-0.5">
          {footnote && <span className="block">{footnote}</span>}
          {source && (
            <span className="block font-medium uppercase tracking-wider text-[10px] text-[#51284B]">
              Source: {source.replace(/_/g, " ")}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
