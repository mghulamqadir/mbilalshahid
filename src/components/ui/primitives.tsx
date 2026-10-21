import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mono-label ${className}`.trim()}>{children}</p>;
}

export function ButtonLink({ href, children, variant = "primary", ...props }: ComponentProps<typeof Link> & { children: ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  return <Link className={`button button--${variant}`} href={href} {...props}>{children}</Link>;
}

export function Arrow() { return <span aria-hidden="true">↗</span>; }

export function SectionHeading({ label, title, intro, light = false }: { label: string; title: ReactNode; intro?: string; light?: boolean }) {
  return <header className={`section-heading ${intro ? "section-heading--split" : ""} ${light ? "section-heading--light" : ""}`}><div><MonoLabel>{label}</MonoLabel><h2>{title}</h2></div>{intro && <p>{intro}</p>}</header>;
}
