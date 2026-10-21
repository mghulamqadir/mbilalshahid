import Link from "next/link";
import type { Metadata } from "next";
import { MonoLabel } from "@/components/ui/primitives";
export const metadata: Metadata = { title: "Not Found", metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"), robots: { index: false, follow: false } };
export default function NotFound(){return <section className="not-found section--dark"><div className="container"><MonoLabel>404 / route not found</MonoLabel><h1>THIS PATH<br /><em>ISN&apos;T ACTIVE.</em></h1><p>The page may have moved or may not be published yet.</p><div className="button-group"><Link className="button button--primary" href="/">Return home</Link><Link className="button button--secondary" href="/results">Explore work</Link></div></div></section>}
