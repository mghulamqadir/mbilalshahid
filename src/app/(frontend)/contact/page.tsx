import type { Metadata } from "next";
import { ContactForm } from "@/features/leads/contact-form";
import { MonoLabel } from "@/components/ui/primitives";
import { site } from "@/content/seed";
export const metadata: Metadata = { title: "Contact", description: "Send an inquiry about TikTok Shop and creator-commerce operations.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Inquiry / a practical starting point</MonoLabel><h1>TELL ME WHAT<br />YOU&apos;RE BUILDING.</h1><p>Share the operating constraint, not a polished brief. You&apos;ll hear back personally within two business days.</p></div></section><section className="section section--light"><div className="container editorial-grid"><div><MonoLabel>Direct contact</MonoLabel><h3>Prefer email?</h3><p><a className="text-link ink-link" href={`mailto:${site.email}`}>{site.email}</a></p><p>No marketing consent is required to receive a reply.</p></div><ContactForm /></div></section></>; }
