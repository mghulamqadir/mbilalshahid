import "server-only";
import { cacheTag } from "next/cache";
import { draftMode } from "next/headers";
import { cases as seedCases, services as seedServices, type CaseStudy, type Metric } from "@/content/seed";
import { payloadClient } from "@/lib/payload";

async function loadCases(preview: boolean): Promise<CaseStudy[]> {
  if (!process.env.DATABASE_URI) return seedCases;
  try { const payload = await payloadClient(); const result = await payload.find({ collection: "case-studies", where: preview ? undefined : { _status: { equals: "published" } }, sort: "sortOrder", limit: 100, draft: preview, overrideAccess: preview }); if (!result.docs.length) { if (process.env.NODE_ENV !== "production") return seedCases; throw new Error("No published case studies exist"); } return result.docs.map((doc) => { const base = seedCases.find((item) => item.slug === doc.slug); if (!base) throw new Error(`Case ${doc.slug} is missing its renderer seed`); return { ...base, title: String(doc.title), sector: String(doc.sector), role: String(doc.role), summary: String(doc.summary), outcome: String(doc.outcome), period: { from: String(doc.period.from).slice(0, 10), to: String(doc.period.to).slice(0, 10), label: String(doc.period.label) }, metrics: doc.metrics as unknown as Metric[], featured: Boolean(doc.featured) }; }); } catch (error) { if (process.env.NODE_ENV !== "production") return seedCases; throw error; }
}
async function cachedCases() { "use cache"; cacheTag("case-studies"); return loadCases(false); }
export async function getPublishedCases() { return (await draftMode()).isEnabled ? loadCases(true) : cachedCases(); }

async function loadServices(preview: boolean) {
  if (!process.env.DATABASE_URI) return [...seedServices];
  try { const payload = await payloadClient(); const result = await payload.find({ collection: "services", where: preview ? undefined : { _status: { equals: "published" } }, sort: "sortOrder", limit: 100, draft: preview, overrideAccess: preview }); if (!result.docs.length) { if (process.env.NODE_ENV !== "production") return [...seedServices]; throw new Error("No published services exist"); } return result.docs.map((doc) => { const base = seedServices.find((item) => item.slug === doc.slug); if (!base) throw new Error(`Service ${doc.slug} is missing its renderer seed`); return { ...base, title: String(doc.title), problem: String(doc.problem) }; }); } catch (error) { if (process.env.NODE_ENV !== "production") return [...seedServices]; throw error; }
}
async function cachedServices() { "use cache"; cacheTag("services"); return loadServices(false); }
export async function getPublishedServices() { return (await draftMode()).isEnabled ? loadServices(true) : cachedServices(); }
