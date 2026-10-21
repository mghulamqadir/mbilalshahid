import type { CollectionConfig } from "payload";
import { adminEmails } from "@/lib/env";
import { allowedAdminCreate, isOwner, ownerFieldAccess } from "@/payload/access";
import { decryptSecret } from "@/lib/crypto";
import { verifyTotp } from "@/lib/totp";

export const AdminUsers: CollectionConfig = {
  slug: "admin-users",
  auth: { tokenExpiration: 60 * 60 * 8, maxLoginAttempts: 5, lockTime: 15 * 60 * 1000 },
  admin: { useAsTitle: "email", group: "Administration" },
  access: { create: allowedAdminCreate, read: isOwner, update: isOwner, delete: isOwner },
  hooks: {
    beforeValidate: [({ data }) => {
      if (data?.email && !adminEmails.has(String(data.email).toLowerCase())) throw new Error("This email is not in ADMIN_EMAILS.");
      return data;
    }],
    beforeLogin: [({ user, req }) => {
      if (!user.mfaEnabled || !user.totpSecretEncrypted) throw new Error("MFA setup is required before this account can sign in.");
      const code = req.headers.get("x-totp-code");
      if (!code || !verifyTotp(code, decryptSecret(String(user.totpSecretEncrypted)))) throw new Error("Invalid multi-factor authentication code.");
      return user;
    }],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "select", required: true, defaultValue: "editor", options: ["owner", "editor"], access: { create: ownerFieldAccess, update: ownerFieldAccess } },
    { name: "mfaEnabled", type: "checkbox", defaultValue: false, access: { read: ownerFieldAccess, update: ownerFieldAccess } },
    { name: "totpSecretEncrypted", type: "text", hidden: true, access: { read: () => false, create: ownerFieldAccess, update: ownerFieldAccess } },
  ],
};
