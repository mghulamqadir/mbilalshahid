"use client";
import { useState } from "react";

export function ContactForm({ initialReason = "creator-program" }: { initialReason?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(formData: FormData) {
    setState("sending"); setMessage("");
    const data = Object.fromEntries(formData); data.consent = formData.get("consent") === "on" ? "true" : "false";
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, consent: data.consent === "true" }) });
    const result = await response.json();
    if (!response.ok) { setState("error"); setMessage(result.error ?? "Something went wrong. Please retry."); return; }
    setState("success"); setMessage("Your inquiry is in. Bilal will reply personally within two business days.");
  }
  if (state === "success") return <div className="form-shell" role="status"><h2>THANK YOU.</h2><p className="lead">{message}</p></div>;
  return <form className="form-shell" action={submit} noValidate><div className="form-grid">
    <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" /></div>
    <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" required type="email" autoComplete="email" /></div>
    <div className="field"><label htmlFor="brand">Brand</label><input id="brand" name="brand" required autoComplete="organization" /></div>
    <div className="field"><label htmlFor="website">Website / Shop URL <span>(optional)</span></label><input id="website" name="website" type="url" inputMode="url" /></div>
    <div className="field"><label htmlFor="reason">What do you need help with?</label><select id="reason" name="reason" required defaultValue={initialReason}><option value="creator-program">Creator program</option><option value="tiktok-shop">TikTok Shop</option><option value="affiliate-operations">Affiliate operations</option><option value="program-review">Program review</option><option value="other">Something else</option></select></div>
    <div className="field"><label htmlFor="category">Category <span>(optional)</span></label><input id="category" name="category" /></div>
    <div className="field field--full"><label htmlFor="challenge">Main challenge</label><textarea id="challenge" name="challenge" required minLength={10} /></div>
    <label className="field field--full"><span><input name="consent" type="checkbox" /> Send me occasional, relevant updates. Optional.</span></label>
  </div><button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send inquiry ↗"}</button><p className="form-status" role="status" aria-live="polite">{message}</p></form>;
}
