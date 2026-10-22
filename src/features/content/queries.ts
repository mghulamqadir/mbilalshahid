import { cases, services, operatingSystemSteps, heroProof, careerTimeline, education, brandProjects, faqs, site, CaseStudy } from "@/content/seed";

export async function getSiteSettings() {
  return site;
}

export async function getHeroProof() {
  return heroProof;
}

export async function getOperatingSystem() {
  return operatingSystemSteps;
}

export async function getAllCases(): Promise<CaseStudy[]> {
  return cases;
}

export async function getFeaturedCases(): Promise<CaseStudy[]> {
  return cases
    .filter((c) => c.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export async function getCaseBySlug(slug: string): Promise<CaseStudy | undefined> {
  return cases.find((c) => c.slug === slug);
}

export async function getCasesByCategory(category: string): Promise<CaseStudy[]> {
  if (!category || category === "all") return cases;
  return cases.filter((c) => c.category === category);
}

export async function getAllServices() {
  return services;
}

export async function getCareerTimeline() {
  return careerTimeline;
}

export async function getEducationAndProjects() {
  return { education, brandProjects };
}

export async function getFaqs() {
  return faqs;
}
