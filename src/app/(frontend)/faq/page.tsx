import type { Metadata } from "next";
import { faqs } from "@/content/seed";
import { MonoLabel } from "@/components/ui/primitives";
import { ClosingCta } from "@/components/ui/closing-cta";
export const metadata:Metadata={title:"FAQ",description:"Questions about creator-commerce program work and consultations.",alternates:{canonical:"/faq"}};
export default function FaqPage(){return <><section className="page-hero section--dark"><div className="container"><MonoLabel>FAQ / clear expectations</MonoLabel><h1>QUESTIONS,<br /><em>ANSWERED DIRECTLY.</em></h1></div></section><section className="section section--light"><div className="container faq-page">{faqs.map(([q,a])=><details className="faq-row" key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>)}</div></section><ClosingCta /></>}
