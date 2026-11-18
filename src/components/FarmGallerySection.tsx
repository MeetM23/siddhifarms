"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/data/farmData";
import { Maximize2, X } from "lucide-react";

export default function FarmGallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    category: string;
    image: string;
    description: string;
  } | null>(null);

  const images = BRAND.gallery;

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-18">
          <span className="text-xs uppercase tracking-[0.25em] text-botanical-dark font-semibold block mb-3">
            Visual Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
            Life Across Our Land
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Moments captured across our open farmland, vermicompost beds, and polyhouse sanctuary — honest agriculture in daylight.
          </p>
        </div>

        {/* Asymmetrical Gallery Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {images.map((item, idx) => {
            let colSpan = "lg:col-span-4";
            let heightClass = "h-72 sm:h-80";

            if (idx === 0) {
              colSpan = "lg:col-span-8";
              heightClass = "h-80 sm:h-96";
            } else if (idx === 1) {
              colSpan = "lg:col-span-4";
              heightClass = "h-80 sm:h-96";
            } else if (idx === 2 || idx === 3 || idx === 4) {
              colSpan = "lg:col-span-4";
              heightClass = "h-72 sm:h-80";
            } else if (idx === 5) {
              colSpan = "lg:col-span-5";
              heightClass = "h-80 sm:h-96";
            } else if (idx === 6) {
              colSpan = "lg:col-span-7";
              heightClass = "h-80 sm:h-96";
            } else if (idx === 7) {
              colSpan = "lg:col-span-12";
              heightClass = "h-64 sm:h-80";
            }

            return (
              <div
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className={`${colSpan} group relative ${heightClass} rounded-sm overflow-hidden bg-sage/30 border border-sage/60 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-ivory/90 backdrop-blur-xs text-forest rounded-xs border border-forest/10 opacity-90">
                    {item.category}
                  </span>
                </div>

                {/* Hover Caption Details */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-ivory">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-medium">
                      {item.title}
                    </h3>
                    <Maximize2 className="w-4 h-4 text-sage" strokeWidth={1.75} />
                  </div>
                  <p className="text-xs text-ivory/80 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Expanded Image View */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-ivory rounded-sm overflow-hidden shadow-2xl border border-sage/80"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal/60 text-ivory flex items-center justify-center hover:bg-forest transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" strokeWidth={1.75} />
              </button>

              <div className="relative h-[340px] sm:h-[480px] w-full bg-charcoal">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div className="p-6 bg-ivory flex flex-col sm:flex-row sm:items-center justify-between border-t border-sage/60 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-botanical-dark font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-2xl text-forest font-medium mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-charcoal/75 mt-1 max-w-xl">
                    {selectedImage.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs uppercase tracking-widest font-semibold px-4 py-2 border border-forest text-forest hover:bg-forest hover:text-ivory transition-colors self-start sm:self-auto rounded-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
