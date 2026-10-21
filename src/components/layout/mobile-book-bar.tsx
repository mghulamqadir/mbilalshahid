import Link from "next/link";
export function MobileBookBar() { return <aside className="mobile-book-bar" aria-label="Book a consultation"><Link href="/book">Book a Free Call <span aria-hidden>↗</span></Link><Link href="/contact">Inquiry</Link></aside>; }
