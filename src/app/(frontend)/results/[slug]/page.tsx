import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CaseArt } from "@/components/ui/case-art";
import { ClosingCta } from "@/components/ui/closing-cta";
import { Arrow, ButtonLink, MonoLabel } from "@/components/ui/primitives";
import { cases as seedCases } from "@/content/seed";
import { formatMetric, metricPeriod } from "@/features/content/format";
import { getPublishedCases } from "@/features/content/queries";
import { resolveSlugRedirect } from "@/features/publishing/redirects";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return seedCases.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const study = (await getPublishedCases()).find((item) => item.slug === slug); return study ? { title: study.sector, description: study.summary, alternates: { canonical: `/results/${study.slug}` } } : {}; }
export default async function CasePage({ params }: Props) {
  const { slug } = await params; const studies = await getPublishedCases(); const study = studies.find((item) => item.slug === slug);
  if (!study) { const destination = await resolveSlugRedirect(`/results/${slug}`); if (destination) redirect(destination); notFound(); }
  const related = studies.find((item) => item.slug !== study.slug)!;
  return <><section className="page-hero section--dark"><div className="container editorial-grid"><div><MonoLabel>{study.sector} / {study.code}</MonoLabel><h1>{study.outcome.toUpperCase()}</h1><p>{study.title}</p><p>{study.period.label} · {study.role}</p></div><CaseArt study={study} /></div></section><section className="section section--light"><div className="container editorial-grid"><aside><MonoLabel>Metric snapshot</MonoLabel>{study.metrics.slice(0, 4).map((item) => <p key={`${item.metricType}-${item.label}`}><strong>{formatMetric(item)}</strong><br />{item.label} · {metricPeriod(item)}</p>)}<ButtonLink href={`/book?case=${study.slug}`}>Discuss a similar program <Arrow /></ButtonLink></aside><div><MonoLabel>Challenge</MonoLabel><h2>THE OPERATING CONTEXT.</h2><p>{study.challenge}</p><MonoLabel>Responsibilities</MonoLabel><ul>{study.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul><MonoLabel>Strategy</MonoLabel><ol>{study.strategy.map((item) => <li key={item}>{item}</li>)}</ol><MonoLabel>Evidence</MonoLabel><div className="evidence-placeholder"><div><strong>TODO_ASSET</strong><p>Approved, redacted Seller Center evidence required before publication.</p></div></div><MonoLabel>Outcomes</MonoLabel><table className="metric-table"><tbody>{study.metrics.map((item) => <tr key={`${item.metricType}-${item.label}`}><th>{item.label}</th><td>{formatMetric(item)}</td><td>{metricPeriod(item)}</td></tr>)}</tbody></table><MonoLabel>What can fairly be learned</MonoLabel><p>{study.learning}</p><Link className="text-link ink-link" href={`/results/${related.slug}`}>Next case: {related.sector} <Arrow /></Link></div></div></section><ClosingCta /></>;
}
