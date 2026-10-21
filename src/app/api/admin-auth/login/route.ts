import { NextResponse } from "next/server";
import { z } from "zod";
const schema = z.object({ email: z.email(), password: z.string().min(1), code: z.string().regex(/^\d{6}$/) });
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  const response = await fetch(new URL("/cms-api/admin-users/login", request.url), { method: "POST", headers: { "Content-Type": "application/json", "x-totp-code": parsed.data.code }, body: JSON.stringify({ email: parsed.data.email, password: parsed.data.password }), cache: "no-store" });
  const body = await response.text(); const result = new NextResponse(body, { status: response.status, headers: { "Content-Type": response.headers.get("content-type") ?? "application/json" } });
  for (const cookie of response.headers.getSetCookie()) result.headers.append("Set-Cookie", cookie);
  return result;
}
