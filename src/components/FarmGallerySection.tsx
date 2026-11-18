"use client";

import React, { useState, useEffect } from "react";
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

  // Lock body scroll when preview modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-18">
          <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
            Visual Story
          </span>
          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
            Life Across Our Land
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Moments captured across our open farmland, vermicompost beds, and polyhouse sanctuary — honest agriculture in daylight.
          </p>
        </div>

        {/* Asymmetrical Gallery Composition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {images.map((item, idx) => {
            let colSpan = "lg:col-span-4";
            let heightClass = "h-60 sm:h-72 lg:h-80";

            if (idx === 0) {
              colSpan = "lg:col-span-8";
              heightClass = "h-64 sm:h-80 lg:h-96";
            } else if (idx === 1) {
              colSpan = "lg:col-span-4";
              heightClass = "h-64 sm:h-80 lg:h-96";
            } else if (idx === 2 || idx === 3 || idx === 4) {
              colSpan = "lg:col-span-4";
              heightClass = "h-60 sm:h-72 lg:h-80";
            } else if (idx === 5) {
              colSpan = "lg:col-span-5";
              heightClass = "h-64 sm:h-80 lg:h-96";
            } else if (idx === 6) {
              colSpan = "lg:col-span-7";
              heightClass = "h-64 sm:h-80 lg:h-96";
            } else if (idx === 7) {
              colSpan = "lg:col-span-12";
              heightClass = "h-56 sm:h-64 lg:h-80";
            }

            return (
              <div
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className={`${colSpan} group relative ${heightClass} rounded-sm overflow-hidden bg-sage/30 border border-sage/60 cursor-pointer shadow-2xs hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest`}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photo: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedImage(item);
                  }
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Permanent subtle gradient for mobile + hover effect on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2 sm:px-2.5 py-1 bg-ivory/90 backdrop-blur-xs text-forest rounded-xs border border-forest/10 opacity-95">
                    {item.category}
                  </span>
                </div>

                {/* Caption Details: readable on mobile and smooth on desktop hover */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 text-ivory">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base sm:text-lg font-medium leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-charcoal/50 flex items-center justify-center shrink-0 ml-2">
                      <Maximize2 className="w-3.5 h-3.5 text-sage" strokeWidth={1.75} />
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-ivory/80 line-clamp-1 mt-0.5">
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
            className="fixed inset-0 z-50 bg-charcoal/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-ivory rounded-sm overflow-hidden shadow-2xl border border-sage/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-charcoal/70 text-ivory flex items-center justify-center hover:bg-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" strokeWidth={1.75} />
              </button>

              <div className="relative h-60 min-[400px]:h-72 sm:h-96 md:h-[460px] w-full bg-charcoal shrink-0">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div className="p-4 sm:p-6 bg-ivory flex flex-col sm:flex-row sm:items-center justify-between border-t border-sage/60 gap-3 overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-botanical-dark font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-charcoal/75 mt-1 max-w-xl leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="min-h-[40px] text-xs uppercase tracking-widest font-semibold px-5 py-2 border border-forest text-forest hover:bg-forest hover:text-ivory transition-colors self-start sm:self-auto rounded-xs shrink-0"
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
