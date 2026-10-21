import type { Field } from "payload";

export const seoField: Field = {
  name: "seo", type: "group", fields: [
    { name: "title", type: "text", maxLength: 70 },
    { name: "description", type: "textarea", maxLength: 170 },
    { name: "image", type: "relationship", relationTo: "media-assets" },
  ],
};
