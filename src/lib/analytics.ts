/**
 * Privacy-conscious client-side analytics event dispatcher.
 * Strictly forbids PII (no names, emails, phone numbers, or freeform text).
 */

type AllowedEvent =
  | "primary_cta_click"
  | "case_study_view"
  | "case_study_evidence_open"
  | "package_inquiry_click"
  | "service_inquiry_click"
  | "audit_form_submit_start"
  | "audit_form_submit_success"
  | "audit_form_submit_error";

type NonPiiProperties = {
  cta_label?: string;
  destination?: string;
  case_slug?: string;
  category?: string;
  package_name?: string;
  service_title?: string;
  market?: string;
  shop_stage?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(eventName: AllowedEvent, properties?: NonPiiProperties): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...properties,
  };

  // Dispatch to GTM / dataLayer if present
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Also dispatch standard custom event for flexibility
  try {
    window.dispatchEvent(new CustomEvent("portfolio:analytics", { detail: payload }));
  } catch {
    // Ignore in unsupported environments
  }
}
