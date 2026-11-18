"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Compass } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-screen flex items-end pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pb-24 overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/08-hero-fresh-harvest.jpg"
          alt="Freshly harvested organic vegetables at Siddhi Farm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] sm:object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Responsive editorial gradient overlays for readability and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 sm:via-charcoal/45 to-charcoal/30 sm:to-charcoal/20" />
        <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />
      </div>

      {/* Floating editorial badge - Top Right on Desktop */}
      <div className="hidden md:flex absolute top-28 right-8 lg:right-12 z-10 flex-col items-end text-right text-ivory/90">
        <span className="text-[10px] tracking-[0.28em] uppercase font-semibold text-sage border-b border-sage/40 pb-1">
          Rooted in Nature. Grown with Care.
        </span>
        <span className="text-[11px] text-ivory/80 tracking-wider font-light mt-1">
          Own Farmland &bull; 1 Polyhouse Unit &bull; Vermicompost
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 sm:space-x-2.5">
            {/* <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" /> */}
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-sage font-semibold">
              Siddhi Organic Vegetables & Fruits
            </span>
          </div>

          {/* Editorial Serif Headline */}
          <h1 className="font-serif text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory font-normal leading-[1.12] sm:leading-[1.05] tracking-tight">
            Freshness, Grown with Care.
          </h1>

          {/* Supporting Subtext */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ivory/90 font-light leading-relaxed max-w-2xl">
            From our farmland to your table. We grow fresh vegetables with thoughtful farming practices and a deep respect for nature.
          </p>

          {/* CTAs */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/our-farm"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-ivory text-forest hover:bg-white active:bg-ivory/90 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all duration-200 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            >
              <span>Explore Our Farm</span>
              <Compass className="w-4 h-4 text-forest transition-transform group-hover:rotate-45" strokeWidth={1.75} />
            </Link>

            <a
              href="#contact"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-transparent hover:bg-ivory/15 active:bg-ivory/20 text-ivory border border-ivory/60 hover:border-ivory px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
            >
              <span>Get in Touch</span>
              <ArrowDown className="w-4 h-4 text-sage" strokeWidth={1.75} />
            </a>
          </div>

          {/* Mobile Micro-Badge */}
          <div className="md:hidden pt-3 border-t border-ivory/20 text-[10px] uppercase tracking-widest text-sage/90">
            ROOTED IN NATURE • GROWN WITH CARE
          </div>
        </div>
      </div>
    </section>
  );
}
