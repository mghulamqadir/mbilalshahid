"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/seed";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}><div className="container nav-inner">
    <Link className="brand" href="/" aria-label="BS. Growth Systems home"><strong>BS.</strong><span>/ GROWTH SYSTEMS</span></Link>
    <nav className="nav-links" aria-label="Primary navigation">{site.nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <Link className="button button--primary nav-cta" href="/book">Book a Call <span aria-hidden>↗</span></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /><span /></summary><div className="mobile-menu__panel">{site.nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link className="button button--primary" href="/book">Book a Call ↗</Link><Link className="mobile-menu__contact" href="/contact">Send an inquiry</Link></div></details>
  </div></header>;
}
