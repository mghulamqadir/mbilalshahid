"use client";
import Link from "next/link";
import { useState } from "react";
import { Arrow } from "@/components/ui/primitives";
type Service = { slug: string; title: string; problem: string };
export function ServiceAccordion({ services }: { services: Service[] }) { const [open, setOpen] = useState<number | null>(0); return <div className="service-list">{services.map((service, index) => { const expanded = open === index; const panel = `service-panel-${index}`; return <div className="service-row" key={service.slug}><button className="service-summary" type="button" aria-expanded={expanded} aria-controls={panel} onClick={() => setOpen(expanded ? null : index)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><b aria-hidden>{expanded ? "−" : "+"}</b></button><div id={panel} hidden={!expanded}><p>{service.problem}</p><Link className="text-link" href={`/services/${service.slug}`}>View service <Arrow /></Link></div></div>; })}</div>; }
