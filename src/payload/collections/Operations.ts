import type { CollectionConfig } from "payload";
import { isAuthenticated, isOwner } from "@/payload/access";

const privateAccess = { create: () => false, read: isAuthenticated, update: isAuthenticated, delete: isOwner };
export const MediaAssets: CollectionConfig = { slug: "media-assets", admin: { useAsTitle: "alt", group: "Media" }, access: { create: isAuthenticated, read: () => true, update: isAuthenticated, delete: isOwner }, fields: [
  { name: "publicId", type: "text", required: true, unique: true }, { name: "resourceType", type: "select", required: true, options: ["image", "video"] }, { name: "mimeType", type: "text", required: true },
  { name: "width", type: "number", required: true }, { name: "height", type: "number", required: true }, { name: "bytes", type: "number", required: true },
  { name: "alt", type: "text", required: true }, { name: "caption", type: "textarea" }, { name: "usage", type: "array", fields: [{ name: "resource", type: "text" }] },
] };
export const Leads: CollectionConfig = { slug: "leads", admin: { useAsTitle: "email", group: "Operations" }, access: privateAccess, fields: [
  { name: "name", type: "text", required: true }, { name: "email", type: "email", required: true, index: true }, { name: "brand", type: "text", required: true }, { name: "website", type: "text" }, { name: "reason", type: "text", required: true },
  { name: "messages", type: "array", fields: [{ name: "message", type: "textarea", required: true }, { name: "receivedAt", type: "date", required: true }] }, { name: "consent", type: "checkbox", defaultValue: false },
  { name: "status", type: "select", required: true, defaultValue: "new", options: ["new", "reviewed", "qualified", "call_booked", "closed", "not_a_fit"] }, { name: "retentionUntil", type: "date", index: true },
] };
export const Events: CollectionConfig = { slug: "events", admin: { group: "Operations" }, access: privateAccess, fields: [{ name: "type", type: "select", required: true, options: ["inquiry_confirmed"] }, { name: "resource", type: "text", required: true }, { name: "metadata", type: "json" }] };
export const PublishRetries: CollectionConfig = { slug: "publish-retries", admin: { group: "Administration" }, access: privateAccess, fields: [{ name: "resource", type: "text", required: true }, { name: "tags", type: "array", required: true, fields: [{ name: "tag", type: "text", required: true }] }, { name: "error", type: "textarea", required: true }, { name: "status", type: "select", options: ["pending", "resolved"], defaultValue: "pending" }] };
export const SlugRedirects: CollectionConfig = { slug: "slug-redirects", admin: { group: "Content" }, access: { create: isAuthenticated, read: () => true, update: isAuthenticated, delete: isOwner }, fields: [{ name: "from", type: "text", required: true, unique: true }, { name: "to", type: "text", required: true }, { name: "resourceType", type: "select", required: true, options: ["case-study", "service", "page"] }] };
export const RateLimits: CollectionConfig = { slug: "rate-limits", admin: { hidden: true }, access: { create: () => false, read: isOwner, update: () => false, delete: isOwner }, fields: [{ name: "key", type: "text", required: true, index: true }, { name: "expiresAt", type: "date", required: true, index: true }] };
