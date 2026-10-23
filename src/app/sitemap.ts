import { MetadataRoute } from "next";
import { getAllCases } from "@/features/content/queries";
import { siteRoutes } from "@/content/navigation";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mbilalshahid.vercel.app";
  const cases = await getAllCases();

  const staticRouteKeys: (keyof typeof siteRoutes)[] = [
    "home",
    "services",
    "results",
    "about",
    "contact",
    "process",
    "resume",
    "privacy",
  ];

  const staticRoutes = staticRouteKeys.map((key) => {
    const route = siteRoutes[key];
    const path = route === "/" ? "" : route;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: key === "home" ? 1.0 : key === "services" || key === "results" ? 0.9 : 0.8,
    };
  });

  const caseRoutes = cases.map((c) => ({
    url: `${baseUrl}${siteRoutes.results}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...caseRoutes];
}
