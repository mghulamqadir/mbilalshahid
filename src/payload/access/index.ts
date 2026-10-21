import type { Access, FieldAccess } from "payload";
import { adminEmails } from "@/lib/env";

type User = { role?: "owner" | "editor"; email?: string } | null;
export const isAuthenticated: Access = ({ req }) => Boolean(req.user);
export const isOwner: Access = ({ req }) => (req.user as User)?.role === "owner";
export const ownerFieldAccess: FieldAccess = ({ req }) => (req.user as User)?.role === "owner";
export const publicOrAuthenticated: Access = ({ req }) => req.user ? true : { _status: { equals: "published" } };
export const allowedAdminCreate: Access = ({ req, data }) => {
  const user = req.user as User;
  const email = typeof data?.email === "string" ? data.email.toLowerCase() : "";
  if (!adminEmails.has(email)) return false;
  return user?.role === "owner" || (!req.user && adminEmails.size > 0);
};

export function assertEditorCannotPublish({ data, req }: { data?: Record<string, unknown>; req: { user?: unknown } }) {
  const user = req.user as User;
  if (user?.role === "editor" && data?._status === "published") throw new Error("Editors can save drafts but cannot publish.");
  return data;
}
