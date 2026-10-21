import { revalidateTag } from "next/cache";
import type { CollectionAfterChangeHook } from "payload";

export function revalidatePublished(tags: (doc: Record<string, unknown>) => string[]): CollectionAfterChangeHook {
  return async ({ doc, previousDoc, req }) => {
    if (doc._status !== "published" || previousDoc?._status === doc._status && previousDoc?.updatedAt === doc.updatedAt) return doc;
    const wanted = [...new Set(tags(doc))];
    try {
      for (const tag of wanted) revalidateTag(tag, { expire: 0 });
    } catch (error) {
      await req.payload.create({
        collection: "publish-retries",
        data: { tags: wanted.map((tag) => ({ tag })), resource: String(doc.slug ?? doc.id), error: error instanceof Error ? error.message : "Unknown cache error", status: "pending" },
        overrideAccess: true,
      });
    }
    return doc;
  };
}
