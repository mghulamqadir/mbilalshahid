import type { Metadata } from "next";
import Link from "next/link";
import { CaseArt } from "@/components/ui/case-art";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Arrow, MonoLabel } from "@/components/ui/primitives";
import { getPublishedCases } from "@/features/content/queries";
export const metadata: Metadata = { title: "Results", description: "Five source-aligned creator-commerce program case studies.", alternates: { canonical: "/results" } };
export default async function ResultsPage() { const cases = await getPublishedCases(); return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Work / five programs</MonoLabel><h1>REAL EXECUTION.<br /><em>LABELED OUTCOMES.</em></h1><p>Every result carries its metric type and reporting period. Total shop context is never presented as creator-attributed performance.</p></div></section><section className="section section--dark"><div className="container card-grid">{cases.map((study) => <article className="editorial-card" key={study.slug}><CaseArt study={study} /><MonoLabel>{study.sector} / {study.period.label}</MonoLabel><h3>{study.title}</h3><p>{study.summary}</p><strong>{study.outcome}</strong><br /><Link className="text-link" href={`/results/${study.slug}`}>Read full case <Arrow /></Link></article>)}</div></section><ClosingCta /></>; }
