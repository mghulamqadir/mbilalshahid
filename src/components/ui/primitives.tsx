import React from "react";
import Link from "next/link";

export function ArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  inverted = false,
  as: Component = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  inverted?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      {eyebrow && (
        <div
          className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${
            inverted ? "text-purple-200" : "text-[#51284B]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <Component
        className={`text-3xl md:text-5xl font-editorial tracking-tight leading-[1.12] mb-4 ${
          inverted ? "text-[#FAF8F4]" : "text-[#241B24]"
        }`}
      >
        {title}
      </Component>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${inverted ? "text-gray-300" : "text-[#746970]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium text-sm transition-all duration-200";

  let styles = "";
  if (variant === "primary") {
    styles = "bg-[#35172F] text-[#FAF8F4] hover:bg-[#51284B] shadow-sm hover:shadow-md";
  } else if (variant === "secondary") {
    styles = "bg-[#EEE5E1] text-[#241B24] hover:bg-[#DCC9DA]";
  } else {
    styles = "border border-[#35172F] text-[#35172F] hover:bg-[#35172F]/5";
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
