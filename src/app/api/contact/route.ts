import { addDays, addMinutes, subDays } from "date-fns";
import { NextResponse } from "next/server";
import { leadSchema } from "@/features/leads/schema";
import { sendTransactional } from "@/features/notifications/email";
import { env } from "@/lib/env";
import { payloadClient } from "@/lib/payload";

export async function POST(request: Request) {
  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const payload = await payloadClient();
  const key = `contact:${ip}`;
  const recentAttempts = await payload.count({ collection: "rate-limits", where: { and: [{ key: { equals: key } }, { expiresAt: { greater_than: new Date().toISOString() } }] }, overrideAccess: true });
  if (recentAttempts.totalDocs >= 5) return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  await payload.create({ collection: "rate-limits", data: { key, expiresAt: addMinutes(new Date(), 15).toISOString() }, overrideAccess: true });
  const existing = await payload.find({ collection: "leads", where: { and: [{ email: { equals: parsed.data.email } }, { createdAt: { greater_than: subDays(new Date(), 30).toISOString() } }] }, limit: 1, overrideAccess: true });
  const receivedAt = new Date().toISOString();
  const lead = existing.docs[0]
    ? await payload.update({ collection: "leads", id: existing.docs[0].id, data: { messages: [...(existing.docs[0].messages ?? []), { message: parsed.data.challenge, receivedAt }], status: "new" }, overrideAccess: true })
    : await payload.create({ collection: "leads", data: { name: parsed.data.name, email: parsed.data.email, brand: parsed.data.brand, website: parsed.data.website, reason: parsed.data.reason, messages: [{ message: parsed.data.challenge, receivedAt }], consent: parsed.data.consent, status: "new", retentionUntil: addDays(new Date(), 730).toISOString() }, overrideAccess: true });
  await payload.create({ collection: "events", data: { type: "inquiry_confirmed", resource: String(lead.id) }, overrideAccess: true });
  await Promise.all([
    sendTransactional({ to: parsed.data.email, subject: "Your inquiry was received", text: `Hi ${parsed.data.name},\n\nThanks for reaching out. I received your note about ${parsed.data.brand} and will reply personally within two business days.\n\nBilal` }),
    sendTransactional({ to: env.ADMIN_EMAILS.split(",")[0] || "bilalshahid1609@gmail.com", subject: `New inquiry — ${parsed.data.brand}`, text: `${parsed.data.name} (${parsed.data.email})\n\n${parsed.data.challenge}` }),
  ]);
  return NextResponse.json({ ok: true }, { status: 201 });
}
