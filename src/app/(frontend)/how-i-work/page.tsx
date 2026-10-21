import type { Metadata } from "next";
import { processSteps } from "@/content/seed";
import { MonoLabel } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";
export const metadata: Metadata={title:"How I Work",description:"A five-stage creator-commerce operating process.",alternates:{canonical:"/how-i-work"}};
export default function ProcessPage(){return <><section className="page-hero section--dark"><div className="container"><MonoLabel>Process / five connected stages</MonoLabel><h1>GROWTH ISN&apos;T<br />GUESSWORK.<br /><em>IT&apos;S A SYSTEM.</em></h1><p>A clear progression from understanding the program to improving what happens next.</p></div></section><section className="section section--light"><div className="container process-detail">{processSteps.map(([n,title,copy])=><article key={n}><span>{n}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section><ClosingCta /></>}
