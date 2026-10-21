import Link from "next/link";
import { MonoLabel } from "@/components/ui/primitives";
import { site } from "@/content/seed";

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="brand" href="/"><strong>BS.</strong><span>/ GROWTH SYSTEMS</span></Link><p>{site.description}</p></div><div className="footer-links"><MonoLabel>Explore</MonoLabel><Link href="/results">Work</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div><div className="footer-links"><MonoLabel>Contact</MonoLabel><a href={`mailto:${site.email}`}>{site.email}</a></div><p className="footer-disclaimer">{site.disclaimer}</p></div></footer>;
}
