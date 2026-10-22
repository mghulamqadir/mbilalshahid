import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/features/leads/schema";

describe("Contact form validation schema", () => {
  it("accepts a valid submission", () => {
    const valid = {
      fullName: "Sarah Founder",
      email: "sarah@beautybrand.com",
      brandWebsite: "beautybrand.com",
      serviceInterest: "Full Creator Program Management",
      monthlyRevenue: "$25K – $75K",
      message: "We need an operator to handle creator recruitment and sample scaling for Q4.",
      websiteHoneypot: "",
    };

    const result = contactFormSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects invalid email addresses", () => {
    const invalidEmail = {
      fullName: "Sarah Founder",
      email: "not-an-email",
      brandWebsite: "beautybrand.com",
      serviceInterest: "Creator Sourcing & Scoring",
      message: "Need creator outreach.",
    };

    const result = contactFormSchema.safeParse(invalidEmail);
    expect(result.success).toBe(false);
  });

  it("rejects messages shorter than 10 characters", () => {
    const shortMsg = {
      fullName: "Sarah",
      email: "sarah@brand.com",
      brandWebsite: "brand.com",
      serviceInterest: "Shop Audit",
      message: "Hi",
    };

    const result = contactFormSchema.safeParse(shortMsg);
    expect(result.success).toBe(false);
  });

  it("rejects oversized message payloads", () => {
    const result = contactFormSchema.safeParse({
      fullName: "Sarah Founder",
      email: "sarah@brand.com",
      brandWebsite: "brand.com",
      serviceInterest: "Shop Audit",
      message: "a".repeat(5001),
    });

    expect(result.success).toBe(false);
  });
});
