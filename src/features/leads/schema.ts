import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email address"),
  brandWebsite: z.string().min(3, "Please enter your brand name or website URL"),
  serviceInterest: z.string().min(1, "Please select an area of focus"),
  monthlyRevenue: z.string().optional(),
  message: z.string().min(10, "Please provide brief details about your shop or goals (minimum 10 characters)"),
  websiteHoneypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
