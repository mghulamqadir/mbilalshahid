import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, MonoLabel } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";
import { getPublishedServices } from "@/features/content/queries";
export const metadata: Metadata = { title: "Services", description: "Six connected services for creator-led TikTok Shop programs.", alternates: { canonical: "/services" } };
export default async function ServicesPage() { const services = await getPublishedServices(); return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Services / creator-commerce operations</MonoLabel><h1>YOUR STORE.<br /><em>MY OPERATING SYSTEM.</em></h1><p>Six connected areas of work, shaped around the constraint in front of your program.</p></div></section><section className="section section--light"><div className="container card-grid">{services.map((service, index) => <article className="editorial-card" key={service.slug}><MonoLabel>{String(index + 1).padStart(2, "0")}</MonoLabel><h3>{service.title}</h3><p>{service.problem}</p><ul>{service.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link ink-link" href={`/services/${service.slug}`}>Explore service <Arrow /></Link></article>)}</div></section><ClosingCta /></>; }
