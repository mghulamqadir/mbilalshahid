"use client";

import React, { useState } from "react";
import { site, faqs } from "@/content/seed";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { trackEvent } from "@/lib/analytics";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:ring-2 focus:ring-[#51284B]/30 focus:border-[#51284B] transition-colors";
const LABEL_CLASS =
  "block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2";

type FormState = {
  fullName: string;
  email: string;
  brandWebsite: string;
  targetMarket: string;
  productCategory: string;
  shopStage: string;
  serviceInterest: string;
  monthlyGmv: string;
  message: string;
  websiteHoneypot: string;
};

const DEFAULT_FORM: FormState = {
  fullName: "",
  email: "",
  brandWebsite: "",
  targetMarket: "US",
  productCategory: "",
  shopStage: "Shop exists — needs more affiliate sales",
  serviceInterest: "Full TikTok Shop Growth Management",
  monthlyGmv: "",
  message: "",
  websiteHoneypot: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(DEFAULT_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      trackEvent("audit_form_submit_start", {
        market: formData.targetMarket,
        shop_stage: formData.shopStage,
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        trackEvent("audit_form_submit_success", {
          market: formData.targetMarket,
          shop_stage: formData.shopStage,
        });
      } else {
        setStatus("error");
        trackEvent("audit_form_submit_error");
        setErrorMessage(
          data.message || "Failed to submit. Please email bilalshahid1609@gmail.com directly."
        );
      }
    } catch {
      setStatus("error");
      trackEvent("audit_form_submit_error");
      setErrorMessage("Network error. Please reach out via email directly.");
    }
  }

  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <SectionHeading
            as="h1"
            eyebrow="TikTok Shop Growth Audit"
            title="Request a Free Growth Audit"
            subtitle="Tell me about your shop, product category, and current growth goals. I review every inquiry personally and reply within 24&ndash;48 hours."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* ── Form Column ────────────────────────────────────────── */}
            <div className="lg:col-span-7 bg-[#FFFCF8] p-8 md:p-10 rounded-2xl border border-[#DDD3D7] shadow-sm">
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#241B24]">Audit Request Received</h3>
                  <p className="text-sm text-[#746970] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Bilal will review your shop details and respond within
                    24&ndash;48 hours to discuss next steps.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => { setStatus("idle"); setFormData(DEFAULT_FORM); }}
                      className="btn-outline-plum text-xs"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="websiteHoneypot"
                      value={formData.websiteHoneypot}
                      onChange={update("websiteHoneypot")}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className={LABEL_CLASS}>
                      Your Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={update("fullName")}
                      autoComplete="name"
                      className={INPUT_CLASS}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={LABEL_CLASS}>
                      Business Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@yourbrand.com"
                      value={formData.email}
                      onChange={update("email")}
                      autoComplete="email"
                      className={INPUT_CLASS}
                    />
                  </div>

                  {/* Brand / TikTok Shop URL */}
                  <div>
                    <label htmlFor="brandWebsite" className={LABEL_CLASS}>
                      Brand Name or TikTok Shop URL <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="brandWebsite"
                      required
                      placeholder="yourbrand.com or @yourtiktokshop"
                      value={formData.brandWebsite}
                      onChange={update("brandWebsite")}
                      className={INPUT_CLASS}
                    />
                  </div>

                  {/* Target Market + Product Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="targetMarket" className={LABEL_CLASS}>
                        Target Market <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="targetMarket"
                        value={formData.targetMarket}
                        onChange={update("targetMarket")}
                        className={INPUT_CLASS}
                      >
                        <option>US</option>
                        <option>UK</option>
                        <option>US &amp; UK</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="productCategory" className={LABEL_CLASS}>
                        Product Category <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="productCategory"
                        value={formData.productCategory}
                        onChange={update("productCategory")}
                        className={INPUT_CLASS}
                      >
                        <option value="">Select a category</option>
                        <option>Apparel &amp; Fashion</option>
                        <option>Beauty &amp; Skincare</option>
                        <option>Health &amp; Wellness</option>
                        <option>Sports Nutrition</option>
                        <option>Fine Jewellery &amp; Accessories</option>
                        <option>Home &amp; Living</option>
                        <option>Food &amp; Beverage</option>
                        <option>Electronics &amp; Tech</option>
                        <option>Pet Products</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Shop Stage + Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="shopStage" className={LABEL_CLASS}>
                        Current Shop Stage
                      </label>
                      <select
                        id="shopStage"
                        value={formData.shopStage}
                        onChange={update("shopStage")}
                        className={INPUT_CLASS}
                      >
                        <option>Not yet launched on TikTok Shop</option>
                        <option>Just launched — fewer than 10 sales</option>
                        <option>Shop exists — needs more affiliate sales</option>
                        <option>Growing — ready to scale with creators</option>
                        <option>Established — optimising existing programme</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className={LABEL_CLASS}>
                        Required Service
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={update("serviceInterest")}
                        className={INPUT_CLASS}
                      >
                        <option>TikTok Shop Launch &amp; Setup</option>
                        <option>Creator Affiliate Growth</option>
                        <option>Full TikTok Shop Growth Management</option>
                        <option>GMV Max Campaign Management</option>
                        <option>Creator Sourcing &amp; Scoring Only</option>
                        <option>Shop Audit &amp; Consultation</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Monthly GMV (optional) */}
                  <div>
                    <label htmlFor="monthlyGmv" className={LABEL_CLASS}>
                      Current Monthly GMV (Optional)
                    </label>
                    <select
                      id="monthlyGmv"
                      value={formData.monthlyGmv}
                      onChange={update("monthlyGmv")}
                      className={INPUT_CLASS}
                    >
                      <option value="">Prefer not to say</option>
                      <option>Pre-launch / No sales yet</option>
                      <option>Under $5K</option>
                      <option>$5K &ndash; $25K</option>
                      <option>$25K &ndash; $75K</option>
                      <option>$75K &ndash; $150K</option>
                      <option>$150K+</option>
                    </select>
                  </div>

                  {/* Goals & Challenges */}
                  <div>
                    <label htmlFor="message" className={LABEL_CLASS}>
                      Goals &amp; Current Challenges <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="What is your biggest priority right now on TikTok Shop? (E.g., recruiting creators, getting affiliate videos posted daily, scaling ad ROI, improving post rates from seeded creators...)"
                      value={formData.message}
                      onChange={update("message")}
                      className={INPUT_CLASS}
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-disabled={status === "submitting"}
                    className="btn-plum w-full py-4 text-sm font-semibold"
                  >
                    {status === "submitting"
                      ? "Sending Details\u2026"
                      : "Request TikTok Shop Growth Audit \u2197"}
                  </button>

                  <p className="text-[11px] text-center text-[#746970]">
                    Your information is kept strictly confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ── Contact Details Column ─────────────────────────────── */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#FFFCF8] p-8 rounded-2xl border border-[#DDD3D7]">
                <h3 className="font-editorial text-xl text-[#241B24] mb-4">
                  Prefer Direct Communication?
                </h3>
                <p className="text-xs text-[#746970] leading-relaxed mb-6 font-light">
                  If you have an urgent campaign brief already prepared, reach out directly via email
                  or WhatsApp.
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-medium text-[#241B24] hover:text-[#51284B] underline"
                    >
                      {site.email}
                    </a>
                  </div>

                  {site.whatsappUrl && site.phone && (
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#51284B] block mb-1">
                        WhatsApp / Mobile
                      </span>
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#241B24] hover:text-[#51284B] underline"
                      >
                        {site.phone}
                      </a>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block mb-1">
                      Markets Served
                    </span>
                    <span className="text-sm text-[#746970]">{site.location}</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-[#35172F] text-[#FAF8F4] p-8 rounded-2xl">
                <span className="text-[10px] uppercase font-semibold text-[#DCC9DA] block mb-2">
                  What Happens Next?
                </span>
                <h4 className="font-editorial text-lg text-[#FAF8F4] mb-3">
                  Clear &amp; Prompt Response
                </h4>
                <ol className="space-y-2 text-xs text-[#DCC9DA] list-decimal list-inside">
                  <li>Review of your shop URL, category, and current creator presence</li>
                  <li>Initial assessment of creator fit, sampling economics, and growth levers</li>
                  <li>
                    If there&apos;s a good fit, we&apos;ll schedule a 25-minute strategy call
                  </li>
                </ol>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-[#746970] leading-relaxed">
                Bilal Shahid is an independent TikTok Shop specialist. Not affiliated with,
                endorsed by, or sponsored by TikTok or ByteDance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-[#FFFCF8] border-t border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Straightforward answers about operational fit, guarantees, and timelines."
          />

          <div className="space-y-4 mt-8">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-[#DDD3D7] rounded-xl bg-[#FAF8F4] p-6 transition-colors open:bg-[#FFFCF8]"
              >
                <summary className="font-editorial text-lg text-[#241B24] cursor-pointer list-none flex items-center justify-between font-medium">
                  <span>{faq.question}</span>
                  <span className="text-lg font-mono text-[#51284B] group-open:rotate-45 transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-[#746970] leading-relaxed pt-3 border-t border-[#DDD3D7]/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
