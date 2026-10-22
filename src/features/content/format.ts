import type { Metric, MetricUnit } from "@/content/seed";

export function formatNumber(value: number): string {
  if (value >= 1_000_000) {
    const formatted = (value / 1_000_000).toFixed(1);
    return formatted.endsWith(".0") ? `${value / 1_000_000}M` : `${formatted}M`;
  }
  if (value >= 1_000) {
    const formatted = (value / 1_000).toFixed(1);
    return formatted.endsWith(".0") ? `${value / 1_000}K` : `${formatted}K`;
  }
  return value.toLocaleString("en-US");
}

export function formatCurrency(
  value: number,
  precision: "auto" | "compact" | "full" = "auto"
): string {
  if (precision === "compact" || (precision === "auto" && value >= 10_000 && value % 100 === 0)) {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
    }
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatMetricValue(
  value: number,
  unit: MetricUnit,
  format: "compact" | "full" | "auto" = "auto"
): string {
  switch (unit) {
    case "usd":
      return formatCurrency(value, format);
    case "percent":
      return `${value.toFixed(value % 1 === 0 ? 0 : 2)}%`;
    case "count":
    default:
      return formatNumber(value);
  }
}

export function formatMetricDisplay(metric: Metric): { value: string; label: string; periodLabel: string } {
  return {
    value: formatMetricValue(metric.value, metric.unit, metric.format ?? "auto"),
    label: metric.label,
    periodLabel: `${metric.period.from} to ${metric.period.to}`,
  };
}
