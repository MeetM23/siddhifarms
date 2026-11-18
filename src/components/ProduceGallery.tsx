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
    <section id="produce" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-8 border-b border-sage/70">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-botanical-dark font-semibold block mb-3">
              Grown on Our Farmland
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
              What We Grow
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal/75 leading-relaxed">
              Seven seasonal vegetable and herb crops, nurtured with vermicompost-enriched soil, pure attention, and protected polyhouse care.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-charcoal/50 uppercase tracking-widest mr-1 hidden sm:inline-flex items-center">
              <Filter className="w-3 h-3 mr-1" strokeWidth={1.75} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-forest text-ivory font-medium shadow-xs"
                    : "bg-sage/40 text-charcoal/80 hover:bg-sage/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Produce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
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
                className={`${colSpan} group relative bg-white border border-sage/60 rounded-sm overflow-hidden flex flex-col justify-between hover:border-botanical hover:shadow-md transition-all duration-300`}
              >
                {/* Crop Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-sage/20 ${
                    isHeroCard ? "h-64 sm:h-80" : "h-56 sm:h-64"
                  }`}
                >
                  <Image
                    src={crop.image}
                    alt={`Fresh organic ${crop.name} grown at Siddhi Farm`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-ivory/90 backdrop-blur-xs text-forest rounded-xs border border-forest/10">
                    {crop.category}
                  </span>

                  {/* Hindi Name Badge */}
                  {crop.hindiName && (
                    <span className="absolute top-4 right-4 text-[11px] font-medium px-2 py-0.5 bg-forest/80 backdrop-blur-xs text-ivory rounded-xs">
                      {crop.hindiName}
                    </span>
                  )}

                  {/* Harvest note overlay tag */}
                  <span className="absolute bottom-3 left-4 text-[11px] text-ivory/95 font-medium tracking-wide drop-shadow-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
                    {crop.harvestNote}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-2xl lg:text-3xl text-forest font-medium">
                        {crop.name}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wider text-earth font-medium">
                        {crop.aspect}
                      </span>
                    </div>

                    <p className="text-sm text-charcoal/75 leading-relaxed line-clamp-3">
                      {crop.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-sage/50 flex items-center justify-between">
                    <Link
                      href={`/our-farm#${crop.id}`}
                      className="text-xs uppercase tracking-wider text-forest font-semibold hover:text-botanical-dark transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Farm details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </Link>

                    <a
                      href={createWhatsAppUrl(`Hello Siddhi Organic Farm, I would like to inquire about fresh ${crop.name} availability.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-wider text-botanical-dark hover:text-forest transition-colors font-medium border-b border-botanical/40 hover:border-forest"
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
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal/60 tracking-wider">
            All produce is cultivated on our own land using vermicompost soil enrichment. We harvest to order to maintain authentic crispness and taste.
          </p>
        </div>
      </div>
    </section>
  );
}
