import React from "react";
import Link from "next/link";
import { site } from "@/content/seed";

export const metadata = {
  title: "Privacy & Data Disclosure",
  description: "Privacy policies and data handling practices for bilalshahid.com.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="container-editorial max-w-3xl">
        <span className="badge-editorial mb-3">Compliance & Trust</span>
        <h1 className="font-editorial text-4xl sm:text-5xl text-[#241B24] mb-8">
          Privacy & Data Handling
        </h1>

        <div className="space-y-8 text-sm text-[#746970] leading-relaxed">
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
              When you submit a consultation request via the Contact page, we collect only the
              information you voluntarily provide: your name, business email, brand or store URL,
              service interest, monthly-revenue range, and message details.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">3. How Your Information Is Used</h2>
            <p>
              Information submitted via the consultation form is used solely to evaluate your store&apos;s
              fit, respond to your inquiry, and arrange strategy discussions. We do not sell, rent, or
              share your contact information with external marketing agencies or data brokers.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">4. Communications</h2>
            <p>
            Form submissions trigger a transactional notification to {site.email} through Brevo&apos;s
            transactional email API. The site does not currently store form submissions in a database;
            delivery depends on the configured email provider.
              We do not add your email to automatic promotional newsletters or cold mailing lists.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">5. Retention</h2>
            <p>
              Because this site does not retain a lead database, submitted information is held only by
              the transactional email provider and the recipient&apos;s email account. You may request
              deletion of received correspondence using the contact method below.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">6. Platform Independence Disclaimer</h2>
            <p>
              Bilal Shahid operates as an independent multichannel e-commerce specialist. Any platform
              names (such as TikTok, TikTok Shop, Shopify, Amazon, Kalodata, FastMoss) are used
              exclusively for descriptive purposes to indicate operational proficiency and do not imply
              formal partnership or endorsement.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-xl text-[#241B24] mb-2">7. Contact & Data Removal</h2>
            <p>
              To request the removal of any submitted inquiry information, please contact Bilal Shahid
              directly at <a href={`mailto:${site.email}`} className="text-[#35172F] underline">{site.email}</a>.
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
