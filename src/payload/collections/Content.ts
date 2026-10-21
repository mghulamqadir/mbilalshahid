import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { assertEditorCannotPublish, isAuthenticated, isOwner, publicOrAuthenticated } from "@/payload/access";
import { metricsField } from "@/payload/fields/metrics";
import { seoField } from "@/payload/fields/seo";
import { revalidatePublished } from "@/payload/hooks/revalidate";
import { validateCaseForPublish } from "@/features/publishing/validation";

const commonAccess = { create: isAuthenticated, read: publicOrAuthenticated, update: isAuthenticated, delete: isOwner };
const versions = { drafts: { autosave: { interval: 1000 } }, maxPerDoc: 50 } as const;

export const CaseStudies: CollectionConfig = {
  slug: "case-studies", admin: { useAsTitle: "title", defaultColumns: ["title", "sector", "_status", "updatedAt"], group: "Content" },
  access: commonAccess, versions, hooks: { beforeChange: [assertEditorCannotPublish, ({ data }) => validateCaseForPublish(data ?? {})], afterChange: [revalidatePublished((doc) => ["case-studies", `case-study:${doc.slug}`, "home", "sitemap"])] },
  fields: [
    { name: "title", type: "text", required: true }, { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "sector", type: "text", required: true }, { name: "role", type: "text", required: true },
    { name: "summary", type: "textarea", required: true }, { name: "outcome", type: "text", required: true },
    { name: "period", type: "group", fields: [{ name: "from", type: "date", required: true }, { name: "to", type: "date", required: true }, { name: "label", type: "text", required: true }] },
    metricsField,
    { name: "challenge", type: "richText", editor: lexicalEditor(), required: true },
    { name: "strategy", type: "richText", editor: lexicalEditor(), required: true },
    { name: "featured", type: "checkbox", defaultValue: false }, { name: "sortOrder", type: "number", defaultValue: 0 }, seoField,
  ],
};

export const Services: CollectionConfig = {
  slug: "services", admin: { useAsTitle: "title", group: "Content" }, access: commonAccess, versions,
  hooks: { beforeChange: [assertEditorCannotPublish], afterChange: [revalidatePublished((doc) => ["services", `service:${doc.slug}`, "home", "sitemap"])] },
  fields: [
    { name: "title", type: "text", required: true }, { name: "slug", type: "text", required: true, unique: true, index: true }, { name: "problem", type: "textarea", required: true },
    { name: "body", type: "richText", editor: lexicalEditor(), required: true }, { name: "deliverables", type: "array", fields: [{ name: "item", type: "text", required: true }] },
    { name: "bookEnabled", type: "checkbox", defaultValue: true }, { name: "sortOrder", type: "number", defaultValue: 0 }, seoField,
  ],
};

export const Pages: CollectionConfig = {
  slug: "pages", admin: { useAsTitle: "title", group: "Content" }, access: commonAccess, versions,
  hooks: { beforeChange: [assertEditorCannotPublish], afterChange: [revalidatePublished((doc) => [`page:${doc.slug}`, "sitemap"])] },
  fields: [{ name: "title", type: "text", required: true }, { name: "slug", type: "text", required: true, unique: true, index: true }, { name: "body", type: "richText", editor: lexicalEditor(), required: true }, seoField],
};
