import {
  cases,
  services,
  operatingSystemSteps,
  heroProof,
  careerTimeline,
  education,
  brandProjects,
  faqs,
  site,
  packages,
  testimonials,
  roadmapPhases,
  CaseStudy,
  Package,
  Testimonial,
  RoadmapPhase,
} from "@/content/seed";
import { canonicalDossiers, CanonicalDossier } from "@/content/case-studies-data";

export async function getCanonicalDossier(slug: string): Promise<CanonicalDossier | undefined> {
  return canonicalDossiers[slug];
}

export async function getAllCanonicalDossiers(): Promise<CanonicalDossier[]> {
  return Object.values(canonicalDossiers);
}

export async function getRelatedDossiers(slug: string): Promise<CanonicalDossier[]> {
  const current = canonicalDossiers[slug];
  if (!current) return [];
  return current.relatedSlugs
    .map((s) => canonicalDossiers[s])
    .filter((d): d is CanonicalDossier => Boolean(d));
}

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

export async function getPackages(): Promise<Package[]> {
  return packages.filter((p) => p.published);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials.filter((t) => t.approved);
}

export async function getRoadmapPhases(): Promise<RoadmapPhase[]> {
  return roadmapPhases;
}
