import type { Metric } from "@/content/seed";
import { formatMetric, metricPeriod } from "@/features/content/format";
import { CountUp } from "@/components/motion/count-up";
import { MonoLabel } from "./primitives";

export function MetricDisplay({ metric, context }: { metric: Metric; context?: string }) {
  return <article className="metric"><MonoLabel>{metric.label}</MonoLabel><strong><CountUp finalText={formatMetric(metric)} /></strong>{context && <p>{context}</p>}<p className="metric-period">{metricPeriod(metric)}</p>{metric.footnote && <p className="metric-note">{metric.footnote}</p>}</article>;
}
