import React from "react";
import { ServicePackage } from "@/content/services-data";
import { ServicePackageCard } from "./service-package-card";
import { PackageScopeMatrix } from "./package-scope-matrix";
import { SectionHeading } from "@/components/ui/primitives";

interface ServicePackageGridProps {
  packages: ServicePackage[];
}

export function ServicePackageGrid({ packages }: ServicePackageGridProps) {
  return (
    <section id="packages" className="py-16 md:py-24 bg-[#FFFCF8] border-b border-[#DDD3D7] scroll-mt-16">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Three Ways to Work Together"
          title="Structured TikTok Shop Packages"
          subtitle="Choose a service based on where your TikTok Shop is today and the level of operational support you need."
        />

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <ServicePackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Scope Comparison Matrix */}
        <PackageScopeMatrix />
      </div>
    </section>
  );
}
