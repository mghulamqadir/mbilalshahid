"use client";
import { useEffect, useRef, useState } from "react";

export function CountUp({ finalText }: { finalText: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [text, setText] = useState(finalText);
  useEffect(() => { const node = ref.current; const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection; if (!node || matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return; const match = finalText.match(/^(\$?)([\d,.]+)([KMB]?)(%?)$/); if (!match) return; const target = Number(match[2].replaceAll(",", "")); const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0; let frame = 0; const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; const start = performance.now(); const animate = (now: number) => { const progress = Math.min((now - start) / 700, 1); const eased = 1 - Math.pow(1 - progress, 3); const value = target * eased; const numeric = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US"); setText(`${match[1]}${numeric}${match[3]}${match[4]}`); if (progress < 1) frame = requestAnimationFrame(animate); else setText(finalText); }; frame = requestAnimationFrame(animate); observer.disconnect(); }, { threshold: .35 }); observer.observe(node); return () => { observer.disconnect(); cancelAnimationFrame(frame); }; }, [finalText]);
  return <span ref={ref}>{text}</span>;
}
