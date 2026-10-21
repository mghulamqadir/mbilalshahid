import type { Field } from "payload";

const metricTypes = ["creator_attributed_gmv", "affiliate_gmv", "total_shop_gmv", "total_revenue", "video_views", "orders", "items_sold", "units_sold", "videos_posted", "samples_shipped", "creators_reached", "messages_sent", "active_affiliates", "post_rate", "estimated_commission", "live_streams", "daily_creators"];
export const metricsField: Field = {
  name: "metrics", type: "array", required: true, fields: [
    { name: "label", type: "text", required: true },
    { name: "value", type: "number", required: true, min: 0 },
    { name: "unit", type: "select", required: true, options: ["usd", "count", "percent"] },
    { name: "metricType", type: "select", required: true, options: metricTypes },
    { name: "period", type: "group", fields: [{ name: "from", type: "date", required: true }, { name: "to", type: "date", required: true }] },
    { name: "source", type: "select", required: true, options: ["seller_center_screenshot", "portfolio_pdf", "owner_confirmed"] },
    { name: "evidenceMediaId", type: "relationship", relationTo: "media-assets" },
    { name: "footnote", type: "textarea" },
    { name: "format", type: "select", options: ["compact", "full"], defaultValue: "compact" },
  ],
};
