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
import {
  servicePackages,
  packageScopeMatrix,
  operationalCapabilities,
  engagementTerms,
  ServicePackage,
  ScopeMatrixRow,
  OperationalCapability,
  EngagementTermItem,
} from "@/content/services-data";
import {
  processFrameworkSteps,
  retainerRoadmap,
  launchProjectTimeline,
  reportingAreas,
  ProcessStepItem,
  RoadmapMilestone,
  LaunchTimelineStage,
  ReportingArea,
} from "@/content/process-data";
import {
  professionalProfile,
  aboutPageContent,
  verifiedExperience,
  selectedAchievements,
  coreCompetencies,
  verifiedEducation,
  additionalProjects,
  contactFAQs,
  ExperienceRole,
  AchievementItem,
  CompetencyGroup,
  EducationRecord,
  AdditionalProject,
} from "@/content/profile-data";

/* ── Canonical Profile & Résumé Queries (Phase 5) ─────────────── */
export async function getProfessionalProfile() {
  return professionalProfile;
}

export async function getAboutContent() {
  return aboutPageContent;
}

export async function getVerifiedExperience(): Promise<ExperienceRole[]> {
  return verifiedExperience.filter((e) => e.approved);
}

export async function getSelectedAchievements(): Promise<AchievementItem[]> {
  return selectedAchievements;
}

export async function getCoreCompetencies(): Promise<CompetencyGroup[]> {
  return coreCompetencies;
}

export async function getVerifiedEducation(): Promise<EducationRecord[]> {
  return verifiedEducation;
}

export async function getAdditionalProjects(): Promise<AdditionalProject[]> {
  return additionalProjects;
}

export async function getContactFAQs() {
  return contactFAQs;
}

/* ── Canonical Services & Packages Queries (Phase 4) ──────────── */
export async function getCanonicalServices(): Promise<ServicePackage[]> {
  return servicePackages;
}

export async function getPackageScopeMatrix(): Promise<ScopeMatrixRow[]> {
  return packageScopeMatrix;
}

export async function getOperationalCapabilities(): Promise<OperationalCapability[]> {
  return operationalCapabilities;
}

export async function getEngagementTerms(): Promise<EngagementTermItem[]> {
  return engagementTerms;
}

/* ── Canonical Process Queries (Phase 4) ──────────────────────── */
export async function getCanonicalProcessSteps(): Promise<ProcessStepItem[]> {
  return processFrameworkSteps;
}

export async function getRetainerRoadmap(): Promise<RoadmapMilestone[]> {
  return retainerRoadmap;
}

export async function getLaunchTimeline(): Promise<LaunchTimelineStage[]> {
  return launchProjectTimeline;
}

export async function getReportingAreas(): Promise<ReportingArea[]> {
  return reportingAreas;
}

/* ── Case Studies & Dossiers Queries (Phase 3) ─────────────────── */

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
