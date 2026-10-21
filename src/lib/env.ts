import { z } from "zod";

const serverSchema = z.object({
  DATABASE_URI: z.string().min(1).optional(),
  PAYLOAD_SECRET: z.string().min(32).optional(),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  ADMIN_EMAILS: z.string().default(""),
  INTEGRATION_ENCRYPTION_KEY: z.string().optional(),
  BREVO_API_KEY: z.string().optional(),
  BREVO_SENDER_EMAIL: z.email().optional(),
  BREVO_SENDER_NAME: z.string().default("BS. Growth Systems"),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  PREVIEW_SECRET: z.string().optional(),
});

export const env = serverSchema.parse(process.env);
export const adminEmails = new Set(env.ADMIN_EMAILS.split(",").map((email) => email.trim().toLowerCase()).filter(Boolean));

export function requireEnv<K extends keyof typeof env>(key: K): NonNullable<(typeof env)[K]> {
  const value = env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value as NonNullable<(typeof env)[K]>;
}
