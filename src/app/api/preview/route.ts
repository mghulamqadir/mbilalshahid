import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { verifyState } from "@/lib/signed-state";
export async function GET(request: Request) { const url = new URL(request.url); const token = url.searchParams.get("token"); const path = url.searchParams.get("path"); if (!token || !verifyState(token) || !path?.startsWith("/") || path.startsWith("//")) return NextResponse.json({ error: "Invalid preview link" }, { status: 401, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } }); (await draftMode()).enable(); return NextResponse.redirect(new URL(path, request.url), { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } }); }
