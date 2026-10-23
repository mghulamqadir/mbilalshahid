import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bilal Shahid | TikTok Shop Growth Audit",
  description:
    "Contact Bilal Shahid to discuss TikTok Shop launch services, creator affiliate growth, shop management, and an initial growth audit.",
  openGraph: {
    title: "Contact Bilal Shahid | TikTok Shop Growth Audit",
    description:
      "Contact Bilal Shahid to discuss TikTok Shop launch services, creator affiliate growth, shop management, and an initial growth audit.",
    type: "website",
    url: "https://mbilalshahid.vercel.app/contact",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
