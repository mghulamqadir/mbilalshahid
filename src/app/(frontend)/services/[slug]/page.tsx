import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Arrow, ButtonLink, MonoLabel } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";
import { cases, faqs, services as seedServices } from "@/content/seed";
import { getPublishedServices } from "@/features/content/queries";
import { resolveSlugRedirect } from "@/features/publishing/redirects";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return seedServices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const service = (await getPublishedServices()).find((item) => item.slug === slug); return service ? { title: service.title, description: service.problem, alternates: { canonical: `/services/${service.slug}` } } : {}; }
export default async function ServicePage({ params }: Props) {
  const { slug } = await params; const services = await getPublishedServices(); const service = services.find((item) => item.slug === slug);
  if (!service) { const destination = await resolveSlugRedirect(`/services/${slug}`); if (destination) redirect(destination); notFound(); }
  const related = cases.find((item) => item.featured)!;
  return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Service / creator-commerce operations</MonoLabel><h1>{service.title.toUpperCase()}</h1><p>{service.problem}</p><div className="button-group"><ButtonLink href={`/book?service=${service.slug}`}>Book a Free Consultation <Arrow /></ButtonLink><ButtonLink href={`/contact?service=${service.slug}`} variant="secondary">Send Inquiry</ButtonLink></div></div></section><section className="section section--light"><div className="container two-column"><div><MonoLabel>Who it is for</MonoLabel><h2>BRANDS READY TO OPERATE DELIBERATELY.</h2><p>For US DTC teams that need clearer creator-program execution, ownership, and reporting.</p></div><div><MonoLabel>Responsibilities</MonoLabel><ul>{service.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul><MonoLabel>What the brand provides</MonoLabel><p>Product context, offer information, sampling inventory, required approvals, platform access, and timely feedback.</p></div></div></section><section className="section section--dark"><div className="container two-column"><div><MonoLabel>Relevant case</MonoLabel><h2>{related.sector}</h2><p>{related.outcome} · {related.period.label}</p><Link className="text-link" href={`/results/${related.slug}`}>Read the case <Arrow /></Link></div><div><MonoLabel>Service FAQ</MonoLabel>{faqs.slice(0, 3).map(([question, answer]) => <details className="faq-row" key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</div></div></section><ClosingCta /></>;
}
