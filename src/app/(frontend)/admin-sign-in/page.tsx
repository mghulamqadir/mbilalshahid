import type { Metadata } from "next";
import { AdminSignIn } from "@/features/publishing/admin-sign-in";
import { MonoLabel } from "@/components/ui/primitives";
export const metadata: Metadata = { title: "Admin sign in", robots: { index: false, follow: false } };
export default function Page() { return <section className="page-hero section--light"><div className="container"><MonoLabel>Owner and editor access</MonoLabel><h1>SECURE SIGN IN.</h1><AdminSignIn /></div></section>; }
