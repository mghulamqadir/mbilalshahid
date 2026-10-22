import { describe, it, expect } from "vitest";
import { formatNumber, formatCurrency, formatMetricValue, formatMetricDisplay } from "@/features/content/format";
import type { Metric } from "@/content/seed";

describe("Metric formatting", () => {
  it("formats large numbers cleanly", () => {
    expect(formatNumber(1500)).toBe("1.5K");
    expect(formatNumber(1000000)).toBe("1M");
    expect(formatNumber(3300000)).toBe("3.3M");
    expect(formatNumber(475)).toBe("475");
  });

  it("formats currency accurately", () => {
    expect(formatCurrency(616780.87, "full")).toBe("$616,780.87");
    expect(formatCurrency(91030, "compact")).toBe("$91K");
    expect(formatCurrency(129000, "compact")).toBe("$129K");
  });

  it("formats percentages correctly", () => {
    expect(formatMetricValue(95.47, "percent")).toBe("95.47%");
    expect(formatMetricValue(50, "percent")).toBe("50%");
    expect(formatMetricValue(57.6, "percent")).toBe("57.60%");
  });

  it("formats metric display object", () => {
    const sampleMetric: Metric = {
      label: "Creator-Attributed GMV",
      value: 616780.87,
      unit: "usd",
      metricType: "creator_attributed_gmv",
      period: { from: "2025-11-18", to: "2025-12-23" },
      source: "seller_center_screenshot",
    };

    const display = formatMetricDisplay(sampleMetric);
    expect(display.label).toBe("Creator-Attributed GMV");
    expect(display.periodLabel).toBe("2025-11-18 to 2025-12-23");
    expect(display.value).toContain("616");
  });
});
