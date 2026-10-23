import React from "react";
import { Metric } from "@/content/seed";
import { formatMetricDisplay } from "@/features/content/format";

export interface MetricDisplayProps {
  metric: Metric;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function MetricDisplay({
  metric,
  className = "",
  size = "md",
}: MetricDisplayProps) {
  const display = formatMetricDisplay(metric);
  const sourceLabel = metric.source ? metric.source.replace(/_/g, " ") : undefined;

  const valueSizeClass =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
      ? "text-xl sm:text-2xl"
      : "text-2xl sm:text-3xl";

  return (
    <div
      className={`p-5 rounded-xl border border-[#DDD3D7] bg-[#FAF8F4]/60 flex flex-col justify-between transition-all hover:border-[#51284B]/30 ${className}`}
    >
      <div>
        <span
          className={`font-editorial font-bold text-[#35172F] block mb-1 leading-none ${valueSizeClass}`}
        >
          {display.value}
        </span>
        <span className="text-xs font-medium text-[#241B24] block leading-snug">
          {display.label}
        </span>
      </div>

      <div className="mt-4 pt-3 border-t border-[#DDD3D7]/60 text-[11px] text-[#746970] space-y-1">
        {display.periodLabel && (
          <span className="block text-[10px] text-[#746970]">
            Period: {display.periodLabel}
          </span>
        )}
        {metric.footnote && (
          <span className="block text-[11px] text-[#746970]">
            {metric.footnote}
          </span>
        )}
        {sourceLabel && (
          <span className="block font-semibold uppercase tracking-wider text-[9px] text-[#51284B]">
            Source: {sourceLabel}
          </span>
        )}
      </div>
    </div>
  );
}
