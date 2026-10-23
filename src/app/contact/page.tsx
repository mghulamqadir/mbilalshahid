"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  professionalProfile,
  serviceOptions,
  getSelectedService,
  contactFAQs,
  ServiceValue,
} from "@/content/profile-data";
import { CheckIcon, SectionHeading } from "@/components/ui/primitives";
import { trackEvent } from "@/lib/analytics";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg border border-[#DDD3D7] bg-[#FAF8F4] text-sm text-[#241B24] focus:outline-none focus:ring-2 focus:ring-[#51284B]/30 focus:border-[#51284B] transition-colors";
const LABEL_CLASS =
  "block text-xs font-semibold uppercase tracking-wider text-[#241B24] mb-2";

type FormState = {
  fullName: string;
  email: string;
  brandName: string;
  websiteUrl: string;
  service: ServiceValue;
  targetMarket: string;
  goals: string;
  websiteHoneypot: string;
};

const DEFAULT_FORM: FormState = {
  fullName: "",
  email: "",
  brandName: "",
  websiteUrl: "",
  service: "not_sure",
  targetMarket: "US",
  goals: "",
  websiteHoneypot: "",
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormState>(DEFAULT_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Preselect service from query string parameter
  useEffect(() => {
    const rawSearch = searchParams.toString();
    if (rawSearch) {
      const resolved = getSelectedService(rawSearch);
      setFormData((prev) => ({ ...prev, service: resolved }));
    }
  }, [searchParams]);

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
        service_title: formData.service,
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessEmail: formData.email,
          email: formData.email,
          brandName: formData.brandName,
          brandWebsite: formData.brandName,
          websiteUrl: formData.websiteUrl,
          service: serviceOptions[formData.service]?.label ?? "I'm Not Sure Yet",
          serviceInterest: serviceOptions[formData.service]?.label ?? "I'm Not Sure Yet",
          targetMarket: formData.targetMarket,
          goals: formData.goals,
          message: formData.goals,
          websiteHoneypot: formData.websiteHoneypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        trackEvent("audit_form_submit_success", {
          market: formData.targetMarket,
          service_title: formData.service,
        });
      } else {
        setStatus("error");
        trackEvent("audit_form_submit_error");
        setErrorMessage(
          data.message ||
            "Your inquiry couldn't be submitted. Please check your connection and try again, or contact me directly by email."
        );
      }
    } catch {
      setStatus("error");
      trackEvent("audit_form_submit_error");
      setErrorMessage(
        "Your inquiry couldn't be submitted. Please check your connection and try again, or contact me directly by email."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckIcon className="w-6 h-6" />
        </div>
        <h3 className="font-editorial text-2xl text-[#241B24]">
          Your Inquiry Has Been Submitted
        </h3>
        <p className="text-xs sm:text-sm text-[#746970] max-w-md mx-auto leading-relaxed font-light">
          Thank you for getting in touch. Your inquiry has been received for review. If there&apos;s a suitable next step, I&apos;ll contact you using the email address you provided.
        </p>
        <div className="pt-6">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData(DEFAULT_FORM);
            }}
            className="btn-outline-plum text-xs"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot for bot detection */}
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

      <div className="border-b border-[#DDD3D7]/60 pb-4 mb-2">
        <h3 className="font-editorial text-2xl text-[#241B24]">
          Tell Me About Your Brand
        </h3>
        <p className="text-xs text-[#746970] font-light mt-1">
          Share a few details so I can better understand your current situation.
        </p>
      </div>

      {/* Field 1: Full Name (Required) */}
      <div>
        <label htmlFor="fullName" className={LABEL_CLASS}>
          Full Name <span className="text-[#51284B]" aria-hidden="true">*</span>
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

      {/* Field 2: Business Email (Required) */}
      <div>
        <label htmlFor="email" className={LABEL_CLASS}>
          Business Email <span className="text-[#51284B]" aria-hidden="true">*</span>
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

      {/* Field 3: Brand / Company Name (Required) */}
      <div>
        <label htmlFor="brandName" className={LABEL_CLASS}>
          Brand / Company Name <span className="text-[#51284B]" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="brandName"
          required
          placeholder="Acme Apparel"
          value={formData.brandName}
          onChange={update("brandName")}
          className={INPUT_CLASS}
        />
      </div>

      {/* Field 4 (Optional): Brand Website or TikTok Shop URL */}
      <div>
        <label htmlFor="websiteUrl" className={LABEL_CLASS}>
          Brand Website or TikTok Shop URL <span className="text-[10px] text-[#746970] font-normal tracking-normal lowercase">(optional)</span>
        </label>
        <input
          type="text"
          id="websiteUrl"
          placeholder="yourbrand.com or @yourtiktokshop"
          value={formData.websiteUrl}
          onChange={update("websiteUrl")}
          className={INPUT_CLASS}
        />
      </div>

      {/* Field 5 (Optional): Service Dropdown + Target Market */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className={LABEL_CLASS}>
            What Do You Need Help With? <span className="text-[10px] text-[#746970] font-normal tracking-normal lowercase">(optional)</span>
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={update("service")}
            className={INPUT_CLASS}
          >
            <option value="not_sure">{serviceOptions.not_sure.label}</option>
            <option value="launch">{serviceOptions.launch.label}</option>
            <option value="affiliate_growth">{serviceOptions.affiliate_growth.label}</option>
            <option value="full_management">{serviceOptions.full_management.label}</option>
          </select>
        </div>

        <div>
          <label htmlFor="targetMarket" className={LABEL_CLASS}>
            Target Market <span className="text-[10px] text-[#746970] font-normal tracking-normal lowercase">(optional)</span>
          </label>
          <select
            id="targetMarket"
            value={formData.targetMarket}
            onChange={update("targetMarket")}
            className={INPUT_CLASS}
          >
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="BOTH">Both US &amp; UK</option>
            <option value="OTHER">Other / Not Sure</option>
          </select>
        </div>
      </div>

      {/* Field 6: Main Challenge or Goal (Required) */}
      <div>
        <label htmlFor="goals" className={LABEL_CLASS}>
          Your Main Challenge or Goal <span className="text-[#51284B]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="goals"
          required
          rows={4}
          placeholder="Tell me a little about your brand, current monthly shop revenue, creator outreach challenges, and what support you are looking for..."
          value={formData.goals}
          onChange={update("goals")}
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 leading-relaxed">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 px-6 rounded-full font-semibold text-xs tracking-wider uppercase bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      >
        {status === "submitting" ? "Sending your inquiry…" : "Request My Growth Audit"}
      </button>

      {/* Privacy Notice */}
      <p className="text-[11px] text-[#746970] text-center leading-relaxed font-light">
        By submitting this form, you are requesting a response to your inquiry. Your information will be processed as explained in the{" "}
        <Link href="/privacy" className="text-[#35172F] underline hover:text-[#51284B]">
          Privacy Policy
        </Link>.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* 01 — Contact Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge-editorial">
              LET&apos;S WORK TOGETHER · TIKTOK SHOP GROWTH
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#51284B] bg-[#EEE5E1] px-2.5 py-1 rounded">
              Focus: US &amp; UK TikTok Shop Brands
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#241B24] tracking-tight leading-[1.15] mb-6">
            Let&apos;s Discuss Your TikTok Shop Growth.
          </h1>

          <div className="space-y-3 text-sm sm:text-base text-[#746970] leading-relaxed font-light">
            <p>
              Whether you&apos;re preparing to launch, looking to improve creator affiliate performance, or need ongoing shop management, I&apos;d like to understand your brand&apos;s goals.
            </p>
            <p>
              Complete the short form below to request an initial growth audit and discuss which service may be appropriate for your business.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Lead Form & 03 — What Happens Next */}
      <section className="py-16 md:py-24 bg-[#FAF8F4] border-b border-[#DDD3D7]">
        <div className="container-editorial max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#FFFCF8] p-8 md:p-10 rounded-2xl border border-[#DDD3D7] shadow-sm">
              <Suspense
                fallback={
                  <div className="p-8 text-center text-xs text-[#746970]">
                    Loading audit form…
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Sidebar: What Happens Next & Direct Contact */}
            <div className="lg:col-span-5 space-y-6">
              {/* 03 — What Happens Next */}
              <div className="bg-[#35172F] text-[#FAF8F4] p-8 rounded-2xl space-y-4">
                <span className="text-[10px] uppercase font-semibold text-[#DCC9DA] tracking-wider block">
                  Process Overview
                </span>
                <h3 className="font-editorial text-2xl text-[#FAF8F4]">
                  What Happens Next?
                </h3>

                <ol className="space-y-4 text-xs text-[#DCC9DA] list-decimal list-inside leading-relaxed">
                  <li>
                    <strong className="text-[#FAF8F4]">01 — Your Inquiry Is Reviewed:</strong>{" "}
                    I&apos;ll review the information you provide to understand your shop stage, priorities, and the support you&apos;re looking for.
                  </li>
                  <li>
                    <strong className="text-[#FAF8F4]">02 — We Discuss Your Needs:</strong>{" "}
                    If your inquiry is a suitable fit, we can discuss your goals, current challenges, and the information needed for an initial assessment.
                  </li>
                  <li>
                    <strong className="text-[#FAF8F4]">03 — We Define the Next Steps:</strong>{" "}
                    If we decide to work together, we&apos;ll agree on the appropriate service scope, responsibilities, timeline, and commercial terms.
                  </li>
                </ol>

                <p className="text-[11px] text-[#DCC9DA]/70 pt-4 border-t border-[#FAF8F4]/15 italic">
                  Submitting an inquiry does not create a service agreement or guarantee acceptance of a project.
                </p>
              </div>

              {/* 05 — Alternative Contact */}
              <div className="card-editorial p-6 sm:p-8 bg-[#FFFCF8] space-y-4 border border-[#DDD3D7]">
                <span className="text-[10px] uppercase font-semibold text-[#51284B] tracking-wider block">
                  Direct Inquiries
                </span>
                <h4 className="font-editorial text-xl text-[#241B24]">
                  Prefer to Contact Me Directly?
                </h4>
                <p className="text-xs text-[#746970] leading-relaxed font-light">
                  For the most useful initial discussion, include your brand name, shop URL if available, and a short description of the challenge you&apos;re trying to solve.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block mb-0.5">
                      Business Email
                    </span>
                    <a
                      href={`mailto:${professionalProfile.email}`}
                      className="font-semibold text-[#35172F] hover:text-[#51284B] hover:underline"
                    >
                      {professionalProfile.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#51284B] block mb-0.5">
                      LinkedIn
                    </span>
                    <a
                      href={professionalProfile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#35172F] hover:text-[#51284B] hover:underline"
                    >
                      linkedin.com/in/mbilalshahid/
                    </a>
                  </div>
                </div>

                <p className="text-xs text-[#51284B] font-medium pt-3 border-t border-[#DDD3D7]/60">
                  Let&apos;s build a clearer, better-organized approach to your TikTok Shop growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Frequently Asked Questions */}
      <section className="py-16 md:py-24 bg-[#FFFCF8]">
        <div className="container-editorial max-w-4xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Straightforward answers about operational fit, guarantees, and engagement options."
          />

          <div className="space-y-4 mt-10">
            {contactFAQs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-[#DDD3D7] rounded-xl bg-[#FAF8F4] p-6 transition-colors open:bg-[#FFFCF8]"
              >
                <summary className="font-editorial text-lg text-[#241B24] cursor-pointer list-none flex items-center justify-between font-medium">
                  <span>{faq.question}</span>
                  <span
                    className="text-lg font-mono text-[#51284B] group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-[#746970] leading-relaxed pt-3 border-t border-[#DDD3D7]/60 font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-xs font-semibold text-[#51284B] hover:text-[#35172F] underline"
            >
              Explore Full Service Packages &amp; Deliverables →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
