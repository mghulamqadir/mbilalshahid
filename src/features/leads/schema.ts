import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().transform((value) => value.toLowerCase()),
  brand: z.string().trim().min(2).max(140),
  website: z.union([z.literal(""), z.url()]).optional(),
  reason: z.enum(["creator-program", "tiktok-shop", "affiliate-operations", "program-review", "other"]),
  category: z.string().trim().max(120).optional(),
  stage: z.string().trim().max(120).optional(),
  challenge: z.string().trim().min(10).max(5000),
  consent: z.boolean().default(false),
  source: z.string().max(200).optional(),
});
