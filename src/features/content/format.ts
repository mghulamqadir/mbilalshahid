import type { Metric } from "@/content/seed";

export function formatMetric(metric: Metric): string {
  if (metric.unit === "percent") return `${metric.value.toLocaleString("en-US", { maximumFractionDigits: 2 })}%`;
  if (metric.unit === "usd") {
    if (metric.format === "compact" || metric.value >= 1_000_000) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(metric.value);
    }
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(metric.value);
  }
  if (metric.format === "compact" || metric.value >= 100_000) {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(metric.value);
  }
  return metric.value.toLocaleString("en-US");
}

export function metricPeriod(metric: Metric): string {
  const format = (value: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
  return `${format(metric.period.from)}–${format(metric.period.to)}`;
}
