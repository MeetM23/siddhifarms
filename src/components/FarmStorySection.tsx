import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/data/farmData";

export default function FarmStorySection() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Farm Photograph (Image first on mobile) */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-64 min-[400px]:h-72 sm:h-80 md:h-[420px] lg:h-[500px] rounded-sm overflow-hidden border border-sage/80 shadow-md">
              <Image
                src="/images/09-farmland-landscape.jpg"
                alt="Agricultural farmland and crop rows at Siddhi Farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>

            {/* Overlapping detail badge - safely positioned for mobile */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:-bottom-6 md:-right-6 bg-[#FAF9F4]/95 sm:bg-[#FAF9F4] backdrop-blur-xs sm:backdrop-blur-none p-3.5 sm:p-5 rounded-sm border border-sage/80 shadow-lg max-w-[210px] sm:max-w-[250px] md:max-w-[280px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-earth font-bold block mb-1">
                Authentic Cultivation
              </span>
              <p className="font-serif text-sm sm:text-base md:text-lg text-forest leading-snug">
                Own Farmland & Vermicompost Living Soil
              </p>
            </div>
          </div>

          {/* Storytelling Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 pt-4 sm:pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block">
                The Soil Philosophy
              </span>
              <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-[1.18] sm:leading-[1.15]">
                Good Food Begins with Good Soil.
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-charcoal/80 text-sm sm:text-base leading-relaxed">
              <p>
                At <span className="font-semibold text-forest">{BRAND.fullName}</span>, we believe that true taste, nutrition, and crispness are not created in a laboratory — they originate deep inside nourished, living earth.
              </p>
              <p>
                We grow our vegetables on our own farmland, relying heavily on vermicompost — organic compost enriched through earthworms. This practice restores essential natural microbes, improves water retention in the roots, and builds sustained vitality across every row.
              </p>
              <p>
                Paired with our single dedicated polyhouse for climate-sensitive crops, our approach combines thoughtful agricultural tradition with measured shelter. The result is honest produce harvested at its prime.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-t border-b border-sage/60 text-xs text-charcoal/80">
              <div>
                <span className="font-serif text-lg sm:text-xl md:text-2xl text-forest block font-medium">
                  Own Land
                </span>
                <span className="text-charcoal/60 text-[10px] sm:text-[11px] uppercase tracking-wider block mt-0.5">
                  Dedicated agricultural space
                </span>
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl md:text-2xl text-forest block font-medium">
                  Vermicompost
                </span>
                <span className="text-charcoal/60 text-[10px] sm:text-[11px] uppercase tracking-wider block mt-0.5">
                  Active biological nourishment
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/our-farm"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-forest hover:bg-forest-light active:bg-forest-dark text-ivory px-6 py-3.5 rounded-sm transition-all shadow-xs group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Read Full Farm Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
