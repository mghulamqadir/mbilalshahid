import { ImageResponse } from "next/og";
export const alt = "BS. Growth Systems — creator-led commerce operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#10110f", color: "#f2efe7", padding: 64, fontFamily: "Arial, sans-serif" }}><div style={{ display: "flex", color: "#d8ff3e", fontSize: 30 }}>BS. / GROWTH SYSTEMS</div><div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: .9, letterSpacing: -5 }}>I BUILD<br />GROWTH ENGINES.</div><div style={{ display: "flex", fontSize: 24, color: "#a8a99f" }}>TikTok Shop × Creator Commerce × E-commerce</div></div>, size); }
