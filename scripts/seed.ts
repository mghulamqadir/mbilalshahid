import { getPayload } from "payload";
import config from "@payload-config";
import { cases, services, site } from "@/content/seed";
import { encryptSecret } from "@/lib/crypto";

const payload = await getPayload({ config });
const richText = (text: string) => ({ root: { type: "root", children: [{ type: "paragraph", version: 1, children: [{ type: "text", text, version: 1 }] }], direction: "ltr" as const, format: "" as const, indent: 0, version: 1 } });
async function upsert(collection: "case-studies" | "services", slug: string, data: Record<string, unknown>) { const existing = await payload.find({ collection, where: { slug: { equals: slug } }, limit: 1, overrideAccess: true }); if (existing.docs[0]) return payload.update({ collection, id: existing.docs[0].id, data: data as never, draft: false, overrideAccess: true }); return payload.create({ collection, data: data as never, draft: false, overrideAccess: true }); }

for (const study of cases) await upsert("case-studies", study.slug, { title: study.title, slug: study.slug, sector: study.sector, role: study.role, summary: study.summary, outcome: study.outcome, period: study.period, metrics: study.metrics, challenge: richText(study.challenge), strategy: richText(study.strategy.join(" ")), featured: study.featured, sortOrder: cases.indexOf(study), _status: "published" });
for (const service of services) await upsert("services", service.slug, { title: service.title, slug: service.slug, problem: service.problem, body: richText(service.problem), deliverables: service.responsibilities.map((item) => ({ item })), bookEnabled: true, sortOrder: services.indexOf(service), _status: "published" });
await payload.updateGlobal({ slug: "site-settings", data: { siteName: site.name, siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000", email: site.email, showPhone: false, footerDisclaimer: site.disclaimer, _status: "published" }, overrideAccess: true });
await payload.updateGlobal({ slug: "navigation", data: { items: site.nav, _status: "published" }, overrideAccess: true });

const ownerEmail = process.env.ADMIN_EMAILS?.split(",")[0]?.trim().toLowerCase(); const password = process.env.ADMIN_INITIAL_PASSWORD; const totp = process.env.ADMIN_TOTP_SECRET;
if (ownerEmail && password && totp) { const existing = await payload.find({ collection: "admin-users", where: { email: { equals: ownerEmail } }, limit: 1, overrideAccess: true }); if (!existing.docs[0]) await payload.create({ collection: "admin-users", data: { email: ownerEmail, password, name: "Owner", role: "owner", mfaEnabled: true, totpSecretEncrypted: encryptSecret(totp) }, overrideAccess: true }); }
payload.logger.info("Seed complete.");
process.exit(0);
