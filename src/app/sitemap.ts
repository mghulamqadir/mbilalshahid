import type { MetadataRoute } from "next";
import { cases, services } from "@/content/seed";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/results", "/services", "/how-i-work", "/about", "/book", "/contact", "/faq", "/privacy"];
  return [...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })), ...cases.map((study) => ({ url: `${base}/results/${study.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })), ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))];
}
