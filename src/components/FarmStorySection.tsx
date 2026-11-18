import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/data/farmData";

export default function FarmStorySection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Farm Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[520px] rounded-sm overflow-hidden border border-sage/80 shadow-md">
              <Image
                src="/images/09-farmland-landscape.jpg"
                alt="Agricultural farmland and crop rows at Siddhi Farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>

            {/* Overlapping small detail badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-6 bg-[#FAF9F4] p-5 sm:p-6 rounded-sm border border-sage/80 shadow-lg max-w-[240px] sm:max-w-[280px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-earth font-bold block mb-1">
                Authentic Cultivation
              </span>
              <p className="font-serif text-base sm:text-lg text-forest leading-snug">
                Own Farmland & Vermicompost Living Soil
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-botanical-dark font-semibold block">
                The Soil Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-[1.15]">
                Good Food Begins with Good Soil.
              </h2>
            </div>

            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
              <p>
                At <span className="font-medium text-forest">{BRAND.fullName}</span>, we believe that true taste, nutrition, and crispness are not created in a laboratory — they originate deep inside nourished, living earth.
              </p>
              <p>
                We grow our vegetables on our own farmland, relying heavily on vermicompost — organic compost enriched through earthworms. This practice restores essential natural microbes, improves water retention in the roots, and builds sustained vitality across every row.
              </p>
              <p>
                Paired with our single dedicated polyhouse for climate-sensitive crops, our approach combines thoughtful agricultural tradition with measured shelter. The result is honest produce harvested at its prime.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-sage/60 text-xs text-charcoal/80">
              <div>
                <span className="font-serif text-xl sm:text-2xl text-forest block font-medium">
                  Own Land
                </span>
                <span className="text-charcoal/60 text-[11px] uppercase tracking-wider">
                  Dedicated agricultural space
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl text-forest block font-medium">
                  Vermicompost
                </span>
                <span className="text-charcoal/60 text-[11px] uppercase tracking-wider">
                  Active biological nourishment
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-6">
              <Link
                href="/our-farm"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-forest hover:bg-forest-light text-ivory px-6 py-3.5 rounded-sm transition-all shadow-sm group"
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
