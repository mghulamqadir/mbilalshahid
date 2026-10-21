import "server-only";
import { payloadClient } from "@/lib/payload";
export async function requireOwner(request: Request) { const payload = await payloadClient(); const { user } = await payload.auth({ headers: request.headers }); if (!user || (user as { role?: string }).role !== "owner") throw new Error("UNAUTHORIZED"); return user; }
