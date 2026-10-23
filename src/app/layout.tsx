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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bilalshahid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Bilal Shahid — TikTok Shop growth specialist helping US & UK brands scale through creator affiliate programmes, GMV Max campaigns, and Seller Center operations. 4+ years, documented results.",
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "TikTok Shop growth specialist for US & UK brands. Documented case studies with Seller Center evidence — creator affiliate programmes, GMV Max campaigns, and shop operations.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [
      {
        url: "/media/cases/thumb-apparel-q4.png",
        width: 1200,
        height: 630,
        alt: "Bilal Shahid — TikTok Shop Growth Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description:
      "TikTok Shop growth specialist for US & UK brands. Documented case studies with Seller Center evidence.",
    images: ["/media/cases/thumb-apparel-q4.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#241B24]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#35172F] focus:text-[#FAF8F4] focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FAF8F4]"
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
