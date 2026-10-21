import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/public-shell";
import { site } from "@/content/seed";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: site.name, template: `%s | ${site.name}` }, description: site.description, alternates: { canonical: "/" }, openGraph: { type: "website", title: site.name, description: site.description, url: siteUrl }, twitter: { card: "summary_large_image", title: site.name, description: site.description } };

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Person", name: "Bilal Shahid", url: siteUrl, email: site.email, jobTitle: "Creator-commerce operator" }, { "@type": "ProfessionalService", name: "BS. Growth Systems", url: siteUrl, email: site.email, description: site.description, areaServed: "US", founder: { "@type": "Person", name: "Bilal Shahid" } }] };
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><PublicShell>{children}</PublicShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></body></html>;
}
