"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { CROPS_DATA } from "@/data/crops";
import { createWhatsAppUrl } from "@/data/farmData";

export default function ProduceGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Fruit Vegetable", "Leafy Green", "Herb & Spice"];

  const filteredCrops =
    activeCategory === "All"
      ? CROPS_DATA
      : CROPS_DATA.filter((crop) => crop.category === activeCategory);

  return (
    <section id="produce" className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 pb-6 sm:pb-8 border-b border-sage/70 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
              Grown on Our Farmland
            </span>
            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
              What We Grow
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal/75 leading-relaxed">
              Seven seasonal vegetable and herb crops, nurtured with vermicompost-enriched soil, pure attention, and protected polyhouse care.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
            <span className="text-xs text-charcoal/50 uppercase tracking-widest mr-1 hidden sm:inline-flex items-center">
              <Filter className="w-3 h-3 mr-1" strokeWidth={1.75} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] sm:text-xs uppercase tracking-wider px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-sm transition-all duration-200 min-h-[36px] flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest ${
                  activeCategory === cat
                    ? "bg-forest text-ivory font-medium shadow-xs"
                    : "bg-sage/40 text-charcoal/80 hover:bg-sage/70 active:bg-sage/90"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Produce Grid */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {filteredCrops.map((crop, idx) => {
            let colSpan = "lg:col-span-4";
            if (activeCategory === "All") {
              if (idx === 0) colSpan = "lg:col-span-7";
              else if (idx === 1) colSpan = "lg:col-span-5";
              else if (idx === 2) colSpan = "lg:col-span-4";
              else if (idx === 3) colSpan = "lg:col-span-4";
              else if (idx === 4) colSpan = "lg:col-span-4";
              else if (idx === 5) colSpan = "lg:col-span-6";
              else if (idx === 6) colSpan = "lg:col-span-6";
            }

            const isHeroCard = activeCategory === "All" && (idx === 0 || idx === 1);

            return (
              <div
                key={crop.id}
                className={`${colSpan} group relative bg-white border border-sage/70 rounded-sm overflow-hidden flex flex-col justify-between hover:border-botanical hover:shadow-md transition-all duration-300`}
              >
                {/* Crop Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-sage/20 h-48 min-[400px]:h-52 sm:h-56 ${
                    isHeroCard ? "lg:h-80" : "lg:h-64"
                  }`}
                >
                  <Image
                    src={crop.image}
                    alt={`Fresh organic ${crop.name} grown at Siddhi Farm`}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] uppercase tracking-widest font-semibold px-2 sm:px-2.5 py-1 bg-ivory/95 backdrop-blur-xs text-forest rounded-xs border border-forest/10 shadow-2xs">
                    {crop.category}
                  </span>

                  {/* Hindi Name Badge */}
                  {crop.hindiName && (
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 bg-forest/85 backdrop-blur-xs text-ivory rounded-xs shadow-2xs">
                      {crop.hindiName}
                    </span>
                  )}

                  {/* Harvest note overlay tag */}
                  <span className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 text-[10px] sm:text-[11px] text-ivory/95 font-medium tracking-wide drop-shadow-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 shrink-0" />
                    {crop.harvestNote}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between mb-1 sm:mb-2 gap-2">
                      <h3 className="font-serif text-xl min-[400px]:text-2xl lg:text-3xl text-forest font-medium">
                        {crop.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-earth font-medium shrink-0">
                        {crop.aspect}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed line-clamp-3">
                      {crop.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-sage/50 flex flex-wrap items-center justify-between gap-2">
                    <Link
                      href={`/our-farm#${crop.id}`}
                      className="min-h-[36px] text-xs uppercase tracking-wider text-forest font-semibold hover:text-botanical-dark transition-colors inline-flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest rounded-xs"
                    >
                      <span>Farm details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </Link>

                    <a
                      href={createWhatsAppUrl(`Hello Siddhi Organic Farm, I would like to inquire about fresh ${crop.name} availability.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[36px] text-xs uppercase tracking-wider text-botanical-dark hover:text-forest transition-colors font-medium border-b border-botanical/40 hover:border-forest inline-flex items-center"
                    >
                      Enquire for harvest
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on natural authenticity */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-xs text-charcoal/65 tracking-wider max-w-2xl mx-auto leading-relaxed">
            All produce is cultivated on our own land using vermicompost soil enrichment. We harvest to order to maintain authentic crispness and taste.
          </p>
        </div>
      </div>
    </section>
  );
}
