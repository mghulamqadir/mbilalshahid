import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a TikTok Shop Growth Audit | Bilal Shahid",
  description:
    "Get in touch to request a TikTok Shop growth audit. Share your brand details, product category, and current shop stage to start a conversation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
