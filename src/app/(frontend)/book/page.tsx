import type { Metadata } from "next";
import { Suspense } from "react";
import { ButtonLink, MonoLabel } from "@/components/ui/primitives";
import { cases, services } from "@/content/seed";

export const metadata: Metadata = { title: "Request a Free Intro Call", description: "Send an inquiry to request a free introductory call.", alternates: { canonical: "/book" } };

type BookSearchParams = Promise<{ service?: string; case?: string }>;

export default function BookPage({ searchParams }: { searchParams: BookSearchParams }) {
  return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Free intro call / by request</MonoLabel><h1>LET&apos;S FIND<br />THE CONSTRAINT.</h1><p>Start with a short inquiry. Bilal will reply personally within two business days to arrange a suitable time.</p></div></section><section className="section section--light"><div className="container"><Suspense fallback={<InquiryPrompt />}><BookInquiry searchParams={searchParams} /></Suspense></div></section></>;
}

async function BookInquiry({ searchParams }: { searchParams: BookSearchParams }) {
  const params = await searchParams;
  const service = services.find((item) => item.slug === params.service);
  const study = cases.find((item) => item.slug === params.case);
  const context = service ? ` about ${service.title}` : study ? ` about a program similar to ${study.sector}` : "";
  const contactHref = service ? `/contact?service=${encodeURIComponent(service.slug)}` : "/contact";

  return <InquiryPrompt context={context} contactHref={contactHref} />;
}

function InquiryPrompt({ context = "", contactHref = "/contact" }: { context?: string; contactHref?: string }) {
  return <div className="form-shell"><MonoLabel>Scheduling / handled personally</MonoLabel><h2>REQUEST AN INTRO CALL.</h2><p className="lead">There is no automated calendar or instant booking. Start with the inquiry form{context} and include the main operating challenge you want to discuss.</p><ButtonLink href={contactHref}>Send an inquiry ↗</ButtonLink></div>;
}
