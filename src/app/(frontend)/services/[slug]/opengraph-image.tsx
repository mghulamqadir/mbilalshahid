import { ImageResponse } from "next/og";
import { services } from "@/content/seed";
export const size = { width: 1200, height: 630 }; export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((item) => item.slug === slug) ?? services[0];
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#10110f", color: "#f2efe7", padding: 64, fontFamily: "Arial" }}><div style={{ display: "flex", color: "#d8ff3e", fontSize: 26 }}>SERVICE / CREATOR COMMERCE</div><div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: .95, maxWidth: 1050 }}>{service.title.toUpperCase()}</div><div style={{ display: "flex", fontSize: 24, color: "#a8a99f" }}>BS. / GROWTH SYSTEMS</div></div>, size);
}
