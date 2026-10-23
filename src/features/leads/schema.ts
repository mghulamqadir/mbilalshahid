import { z } from "zod";

export const contactFormSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
    email: z.string().trim().email("Enter a valid email address.").max(254).optional(),
    businessEmail: z.string().trim().email("Enter a valid email address.").max(254).optional(),
    brandName: z.string().trim().min(1, "Please enter your brand or company name.").max(250).optional(),
    brandWebsite: z.string().trim().min(1, "Please enter your brand name or website URL.").max(250).optional(),
    websiteUrl: z.string().trim().max(500).optional().or(z.literal("")),
    service: z.string().trim().max(100).optional(),
    serviceInterest: z.string().trim().max(100).optional(),
    targetMarket: z.string().trim().max(100).optional(),
    productCategory: z.string().trim().max(100).optional(),
    shopStage: z.string().trim().max(150).optional(),
    monthlyGmv: z.string().trim().max(100).optional(),
    monthlyRevenue: z.string().trim().max(100).optional(),
    goals: z.string().trim().min(10, "Please tell me a little about what you need help with (minimum 10 characters).").max(5000).optional(),
    message: z.string().trim().min(10, "Please provide brief details about your shop or goals (minimum 10 characters).").max(5000).optional(),
    websiteHoneypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
  })
  .refine(
    (data) => Boolean(data.email || data.businessEmail),
    {
      message: "Enter a valid email address.",
      path: ["email"],
    }
  )
  .refine(
    (data) => Boolean(data.brandName || data.brandWebsite),
    {
      message: "Please enter your brand or company name.",
      path: ["brandName"],
    }
  )
  .refine(
    (data) => Boolean(data.goals || data.message),
    {
      message: "Please tell me a little about what you need help with.",
      path: ["goals"],
    }
  );

export type ContactFormData = z.infer<typeof contactFormSchema>;
