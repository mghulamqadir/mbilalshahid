import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid work email address").max(254),
  brandWebsite: z.string().trim().min(3, "Please enter your brand name or website URL").max(250),
  targetMarket: z.string().trim().max(100).optional(),
  productCategory: z.string().trim().max(100).optional(),
  shopStage: z.string().trim().max(150).optional(),
  serviceInterest: z.string().trim().min(1, "Please select an area of focus").max(100),
  monthlyGmv: z.string().trim().max(100).optional(),
  monthlyRevenue: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please provide brief details about your shop or goals (minimum 10 characters)").max(5000),
  websiteHoneypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
