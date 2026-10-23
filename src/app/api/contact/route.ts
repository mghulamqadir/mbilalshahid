import { NextResponse } from "next/server";
import { contactFormSchema } from "@/features/leads/schema";
import { sendTransactional } from "@/features/notifications/email";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const submissionAttempts = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };
  return value.replace(/[&<>'"]/g, (character) => entities[character] ?? character);
}

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const attempt = submissionAttempts.get(key);
  if (!attempt || attempt.resetAt <= now) {
    submissionAttempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  attempt.count += 1;
  return attempt.count > MAX_SUBMISSIONS_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && origin !== new URL(request.url).origin) {
      return NextResponse.json({ success: false, message: "Invalid request origin." }, { status: 403 });
    }

    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json(
        { success: false, message: "Too many submissions. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    const json = await request.json();
    const result = contactFormSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      businessEmail,
      brandName,
      brandWebsite,
      websiteUrl,
      targetMarket,
      productCategory,
      shopStage,
      service,
      serviceInterest,
      monthlyGmv,
      monthlyRevenue,
      goals,
      message,
      websiteHoneypot,
    } = result.data;

    // Silent drop for bot submissions
    if (websiteHoneypot && websiteHoneypot.length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    const effectiveEmail = email || businessEmail || "";
    const effectiveBrand = brandName || brandWebsite || "Brand not provided";
    const effectiveUrl = websiteUrl || brandWebsite || "Not provided";
    const effectiveGoals = goals || message || "";
    const effectiveService = service || serviceInterest || "I'm Not Sure Yet";
    const gmv = monthlyGmv || monthlyRevenue || "Not specified";
    const market = targetMarket || "US & UK";
    const category = productCategory || "Not specified";
    const stage = shopStage || "Not specified";

    const safe = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(effectiveEmail),
      brand: escapeHtml(effectiveBrand),
      websiteUrl: escapeHtml(effectiveUrl),
      targetMarket: escapeHtml(market),
      productCategory: escapeHtml(category),
      shopStage: escapeHtml(stage),
      serviceInterest: escapeHtml(effectiveService),
      monthlyGmv: escapeHtml(gmv),
      goals: escapeHtml(effectiveGoals).replace(/\n/g, "<br />"),
    };

    const emailSubject = `TikTok Shop Growth Audit Request: ${effectiveBrand} — ${fullName}`;
    const emailBody = `
New TikTok Shop Growth Audit inquiry submitted via portfolio:

Name: ${fullName}
Work Email: ${effectiveEmail}
Brand / Store: ${effectiveBrand}
Website / Shop URL: ${effectiveUrl}
Target Market: ${market}
Service Required: ${effectiveService}

Goals & Challenges:
${effectiveGoals}

Submitted at: ${new Date().toISOString()}
`.trim();

    const emailHtml = `
<div style="font-family: sans-serif; line-height: 1.6; color: #241B24; max-width: 600px; margin: 0 auto; border: 1px solid #DDD3D7; border-radius: 8px; padding: 24px;">
  <h2 style="color: #35172F; margin-top: 0;">New TikTok Shop Growth Audit Request</h2>
  <p><strong>Name:</strong> ${safe.fullName}</p>
  <p><strong>Work Email:</strong> ${safe.email}</p>
  <p><strong>Brand / Store:</strong> ${safe.brand}</p>
  <p><strong>Website / Shop URL:</strong> ${safe.websiteUrl}</p>
  <p><strong>Target Market:</strong> ${safe.targetMarket}</p>
  <p><strong>Service Required:</strong> ${safe.serviceInterest}</p>
  <hr style="border: none; border-top: 1px solid #DDD3D7; margin: 20px 0;" />
  <p><strong>Goals & Challenges:</strong></p>
  <blockquote style="background: #FAF8F4; border-left: 4px solid #35172F; margin: 0; padding: 12px 16px;">
    ${safe.goals}
  </blockquote>
  <p style="font-size: 12px; color: #746970; margin-top: 24px;">Received via Bilal Shahid Growth Portfolio system.</p>
</div>
`.trim();

    const emailResult = await sendTransactional({
      subject: emailSubject,
      text: emailBody,
      html: emailHtml,
    });

    if (!emailResult.delivered) {
      return NextResponse.json(
        { success: false, message: "Inquiry delivery is temporarily unavailable. Please email Bilal directly." },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      delivered: emailResult.delivered,
      message: "Thank you for reaching out. Bilal will review your details and respond within 24–48 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please email bilalshahid1609@gmail.com directly." },
      { status: 500 }
    );
  }
}
