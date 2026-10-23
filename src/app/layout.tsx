import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/content/seed";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mbilalshahid.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
    template: "%s",
  },
  description:
    "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce. Explore services and results.",
  openGraph: {
    title: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
    description:
      "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce. Explore services and results.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: siteUrl,
    images: [
      {
        url: "/media/cases/thumb-apparel-q4.png",
        width: 1200,
        height: 630,
        alt: "Bilal Shahid — TikTok Shop Growth Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Shop Growth Specialist for US & UK Brands | Bilal Shahid",
    description:
      "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce.",
    images: ["/media/cases/thumb-apparel-q4.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Bilal Shahid — TikTok Shop Growth Specialist",
  description:
    "Bilal Shahid helps US and UK consumer brands with TikTok Shop operations, creator affiliate programs, sampling, and performance-led commerce.",
  publisher: {
    "@type": "Person",
    name: "Bilal Shahid",
    jobTitle: "TikTok Shop Growth & Creator Affiliate Specialist",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#411b36]">
        <a
          href="#main-content"
          className="skip-link btn-plum text-xs z-[9999]"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
