import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { AdminUsers } from "@/payload/collections/AdminUsers";
import { CaseStudies, Pages, Services } from "@/payload/collections/Content";
import { Events, Leads, MediaAssets, PublishRetries, RateLimits, SlugRedirects } from "@/payload/collections/Operations";
import { Homepage, Navigation, SiteSettings } from "@/payload/globals";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const payloadSecret = process.env.PAYLOAD_SECRET ?? (() => { if (process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build") throw new Error("PAYLOAD_SECRET is required in production"); return "local-development-secret-change-before-deploying"; })();

export default buildConfig({
  admin: { user: AdminUsers.slug, importMap: { baseDir: path.resolve(dirname) }, meta: { titleSuffix: "— BS. Growth Systems" } },
  secret: payloadSecret,
  db: mongooseAdapter({ url: process.env.DATABASE_URI ?? "mongodb://127.0.0.1:27017/bilalshahid" }),
  editor: lexicalEditor(),
  collections: [AdminUsers, CaseStudies, Services, Pages, MediaAssets, Leads, Events, PublishRetries, SlugRedirects, RateLimits],
  globals: [Homepage, SiteSettings, Navigation],
  routes: { api: "/cms-api", admin: "/admin" },
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
