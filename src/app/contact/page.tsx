"use client";

import React, { useState } from "react";
import { site, faqs } from "@/content/seed";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    brandWebsite: "",
    serviceInterest: "Full Creator Program Management",
    monthlyRevenue: "Under $25K",
    message: "",
    websiteHoneypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please email bilalshahid1609@gmail.com directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please reach out via email directly.");
    }
  }

  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <SectionHeading
            as="h1"
            eyebrow="Direct Consultation"
            title="Start a Conversation"
            subtitle="Tell me about your store, category, and current growth goals. I review every inquiry personally and reply within 24–48 hours."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-editorial max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#FFFCF8] p-8 md:p-10 rounded-2xl border border-[#DDD3D7] shadow-sm">
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#241B24]">Inquiry Received</h3>
                  <p className="text-sm text-[#746970] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Bilal will review your details and respond within 24–48 hours to discuss next steps.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          fullName: "",
                          email: "",
                          brandWebsite: "",
                          serviceInterest: "Full Creator Program Management",
                          monthlyRevenue: "Under $25K",
                          message: "",
                          websiteHoneypot: "",
                        });
                      }}
                      className="btn-outline-plum text-xs"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="websiteHoneypot"
                      value={formData.websiteHoneypot}
                      onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@yourbrand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                    />
                  </div>

                  {/* Brand / Website */}
                  <div>
                    <label htmlFor="brandWebsite" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                      Brand Name or Store URL *
                    </label>
                    <input
                      type="text"
                      id="brandWebsite"
                      required
                      placeholder="yourbrand.com or TikTok Shop handle"
                      value={formData.brandWebsite}
                      onChange={(e) => setFormData({ ...formData, brandWebsite: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                      >
                        <option>Full Creator Program Management</option>
                        <option>Creator Sourcing & Scoring</option>
                        <option>Affiliate Activation & Scaling</option>
                        <option>TikTok Shop Paid Ads (GMV Max)</option>
                        <option>Multichannel Sync & Integration</option>
                        <option>1-on-1 Shop Audit & Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthlyRevenue" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                        Monthly Store Revenue
                      </label>
                      <select
                        id="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                      >
                        <option>Pre-launch / Under $10K</option>
                        <option>$10K – $25K</option>
                        <option>$25K – $75K</option>
                        <option>$75K – $150K</option>
                        <option>$150K+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2">
                      Goals & Current Bottlenecks *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="What is your biggest current priority on TikTok Shop? (E.g., recruiting creators, sample fulfillment, scaling ad ROI, getting affiliate videos posted daily...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:border-[#51284B]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-plum w-full py-4 text-sm font-semibold"
                  >
                    {status === "submitting" ? "Sending Details..." : "Submit Consultation Request ↗"}
                  </button>

                  <p className="text-[11px] text-center text-[#746970]">
                    Your information is kept strictly confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact & Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#FFFCF8] p-8 rounded-2xl border border-[#DDD3D7]">
                <h3 className="font-editorial text-xl text-[#241B24] mb-4">
                  Prefer Direct Communication?
                </h3>
                <p className="text-xs text-[#746970] leading-relaxed mb-6 font-light">
                  If you have an urgent campaign or brief already prepared, you can reach out via direct email or WhatsApp message.
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block">
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
                      <span className="text-[10px] uppercase font-semibold text-[#51284B] block">
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
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block">
                      Operating Locations
                    </span>
                    <span className="text-sm text-[#746970]">{site.location}</span>
                  </div>
                </div>
              </div>

              {/* Expectations Card */}
              <div className="bg-[#35172F] text-[#FAF8F4] p-8 rounded-2xl">
                <span className="text-[10px] uppercase font-semibold text-[#DCC9DA] block mb-2">
                  What Happens Next?
                </span>
                <h4 className="font-editorial text-lg mb-3">Clear & Prompt Response</h4>
                <ol className="space-y-2 text-xs text-[#DCC9DA] list-decimal list-inside">
                  <li>Review of your shop URL, category, and creator presence</li>
                  <li>Initial assessment of sample economics and fit</li>
                  <li>Schedule an introductory 25-minute strategy discussion</li>
                </ol>
              </div>
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
                  <span className="text-lg font-mono text-[#51284B] group-open:rotate-45 transition-transform">
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
