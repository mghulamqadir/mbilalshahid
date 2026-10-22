import { MetadataRoute } from "next";
import { getAllCases } from "@/features/content/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bilalshahid.com";
  const cases = await getAllCases();

  const staticRoutes = ["", "/results", "/services", "/process", "/about", "/contact", "/resume", "/privacy"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const caseRoutes = cases.map((c) => ({
    url: `${baseUrl}/results/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...caseRoutes];
}
