import React from "react";
import { SectionHeading } from "./primitives";

export interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  centered = false,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`pt-16 pb-12 md:pt-24 md:pb-16 bg-[#FAF8F4] border-b border-[#DDD3D7] ${className}`}>
      <div className={`container-editorial ${centered ? "text-center max-w-4xl mx-auto" : ""}`}>
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          centered={centered}
        />
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
