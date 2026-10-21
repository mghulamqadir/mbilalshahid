import type { GlobalConfig } from "payload";
import { assertEditorCannotPublish, isAuthenticated, isOwner } from "@/payload/access";

const versions = { drafts: { autosave: { interval: 1000 } }, max: 50 } as const;
const hooks = { beforeChange: [assertEditorCannotPublish] };

export const Homepage: GlobalConfig = { slug: "homepage", admin: { group: "Content" }, access: { read: () => true, update: isAuthenticated }, versions, hooks, fields: [
  { name: "heroEyebrow", type: "text", required: true }, { name: "heroTitle", type: "textarea", required: true }, { name: "heroBody", type: "textarea", required: true },
  { name: "sectionVisibility", type: "group", fields: [{ name: "proof", type: "checkbox", defaultValue: true }, { name: "work", type: "checkbox", defaultValue: true }, { name: "process", type: "checkbox", defaultValue: true }, { name: "services", type: "checkbox", defaultValue: true }, { name: "about", type: "checkbox", defaultValue: true }, { name: "faq", type: "checkbox", defaultValue: true }] },
  { name: "proofMetrics", type: "json" },
] };
export const SiteSettings: GlobalConfig = { slug: "site-settings", admin: { group: "Settings" }, access: { read: () => true, update: isOwner }, versions, hooks, fields: [
  { name: "siteName", type: "text", required: true }, { name: "siteUrl", type: "text", required: true }, { name: "email", type: "email", required: true }, { name: "phone", type: "text" }, { name: "showPhone", type: "checkbox", defaultValue: false },
  { name: "footerDisclaimer", type: "textarea", required: true },
] };
export const Navigation: GlobalConfig = { slug: "navigation", admin: { group: "Settings" }, access: { read: () => true, update: isOwner }, versions, hooks, fields: [
  { name: "items", type: "array", required: true, fields: [{ name: "label", type: "text", required: true }, { name: "href", type: "text", required: true }] },
] };
