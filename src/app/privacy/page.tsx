import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { professionalProfile } from "@/content/profile-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Bilal Shahid",
  description:
    "Privacy policy and data handling practices for the Bilal Shahid TikTok Shop growth portfolio. Information on transactional processing and contact rights.",
  openGraph: {
    title: "Privacy Policy | Bilal Shahid",
    description:
      "Privacy policy and data handling practices for the Bilal Shahid TikTok Shop growth portfolio.",
    url: "https://mbilalshahid.vercel.app/privacy",
  },
  alternates: {
    canonical: "https://mbilalshahid.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="container-editorial max-w-3xl">
        <span className="badge-editorial mb-3">Compliance &amp; Trust</span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#241B24] mb-8">
          Privacy Policy &amp; Data Handling
        </h1>

        <div className="space-y-8 text-xs sm:text-sm text-[#746970] leading-relaxed">
          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">1. Overview</h2>
            <p>
              This website serves as the professional portfolio for Bilal Shahid. We respect your
              privacy and are committed to protecting any personal information submitted through this
              website.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">2. Information Collected</h2>
            <p>
              When you submit a growth audit inquiry via the Contact page, we collect only the
              information you voluntarily provide: your full name, business email, brand or store name,
              optional shop URL, optional service preference, target market, and challenge details.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">3. How Your Information Is Used</h2>
            <p>
              Information submitted via the inquiry form is used solely to evaluate your shop&apos;s
              fit, respond to your inquiry, and arrange initial growth discussions. We do not sell, rent, or
              share your contact information with external marketing agencies or data brokers.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">4. Communications &amp; Processing</h2>
            <p>
              Form submissions trigger a transactional notification to {professionalProfile.email} through Brevo&apos;s
              transactional email API. This site does not retain a customer relationship database or marketing email list.
              We do not add your email to promotional newsletters or automated marketing drip campaigns.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">5. Data Retention</h2>
            <p>
              Because this site does not maintain a lead database, submitted information is held only within
              the transactional email provider and the recipient&apos;s secure business mailbox. You may request
              deletion of received correspondence at any time using the contact details below.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">6. Platform Independence Disclaimer</h2>
            <p>
              Bilal Shahid operates as an independent TikTok Shop and e-commerce growth specialist. Platform
              names (such as TikTok, TikTok Shop, Shopify, Amazon, FastMoss, Kalodata) are referenced
              exclusively for descriptive purposes to indicate operational proficiency and do not imply
              formal affiliation, endorsement, or sponsorship by ByteDance or other platform owners.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">7. Contact &amp; Data Removal</h2>
            <p>
              To request the removal of any submitted inquiry information, please contact Bilal Shahid
              directly at{" "}
              <a href={`mailto:${professionalProfile.email}`} className="text-[#35172F] underline font-medium">
                {professionalProfile.email}
              </a>.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#DDD3D7]">
          <Link href="/" className="btn-outline-plum text-xs">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
