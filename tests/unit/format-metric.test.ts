import { describe, expect, it } from "vitest";
import { formatMetric } from "@/features/content/format";

describe("formatMetric", () => {
  it("derives currency text from numeric data", () => expect(formatMetric({ label: "GMV", value: 616780, unit: "usd", metricType: "creator_attributed_gmv", period: { from: "2025-11-18", to: "2025-12-23" }, source: "owner_confirmed" })).toBe("$616,780"));
  it("preserves precise percentages", () => expect(formatMetric({ label: "Share", value: 95.47, unit: "percent", metricType: "post_rate", period: { from: "2026-06-29", to: "2026-07-28" }, source: "owner_confirmed" })).toBe("95.47%"));
});
