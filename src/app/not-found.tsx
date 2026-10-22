import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 bg-[#FAF8F4]">
      <div className="container-editorial text-center max-w-lg">
        <span className="font-editorial text-7xl font-bold text-[#51284B] block mb-4">
          404
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl text-[#241B24] mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-[#746970] leading-relaxed mb-8">
          The dossier or page you requested could not be located. It may have moved or been renamed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-plum text-xs">
            <span>Return Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link href="/results" className="btn-outline-plum text-xs">
            <span>Explore Case Studies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
