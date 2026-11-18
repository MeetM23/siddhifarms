import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CloudSun, Shield, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "@/data/farmData";

export default function PolyhouseFeature() {
  return (
    <section className="py-24 lg:py-32 bg-forest text-ivory relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-botanical/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-botanical-dark/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-sage font-medium px-3 py-1 bg-forest-light/60 border border-sage/20 rounded-xs">
              <Sparkles className="w-3.5 h-3.5 text-botanical-light" strokeWidth={1.75} />
              <span>Protected Agriculture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-medium leading-[1.15]">
              A Better Environment for Growing.
            </h2>

            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Our polyhouse supports protected cultivation, giving us greater control over the growing environment. By moderating harsh weather spikes, our crops thrive with consistent natural energy.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-4 bg-forest-dark/70 border border-forest-light/40 rounded-sm">
                <CloudSun className="w-5 h-5 text-sage mb-2" strokeWidth={1.75} />
                <h3 className="font-serif text-lg text-ivory font-medium">
                  Microclimate Moderation
                </h3>
                <p className="text-xs text-ivory/70 mt-1 leading-relaxed">
                  Diffused natural sunlight shields delicate blossoms and leaves from midday scorch.
                </p>
              </div>

              <div className="p-4 bg-forest-dark/70 border border-forest-light/40 rounded-sm">
                <Shield className="w-5 h-5 text-sage mb-2" strokeWidth={1.75} />
                <h3 className="font-serif text-lg text-ivory font-medium">
                  Weather Shielding
                </h3>
                <p className="text-xs text-ivory/70 mt-1 leading-relaxed">
                  Buffers sensitive crops from unseasonal rains, gusty winds, and physical stress.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppUrl("Hello Siddhi Organic Farm, I would like to know what crops are currently thriving in your polyhouse.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-sage hover:bg-white text-forest px-6 py-3.5 rounded-sm transition-all shadow-sm"
              >
                <span>Inquire About Polyhouse Crops</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <Link
                href="/our-farm#cultivation"
                className="text-xs uppercase tracking-widest text-ivory/80 hover:text-ivory transition-colors font-medium border-b border-ivory/40 pb-0.5"
              >
                Learn our farming story
              </Link>
            </div>
          </div>

          {/* Large Editorial Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] rounded-sm overflow-hidden border border-forest-light/60 shadow-2xl">
              <Image
                src="/images/10-polyhouse-interior.jpg"
                alt="Agricultural Polyhouse protected cultivation at Siddhi Organic Farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-forest-dark/90 backdrop-blur-md border border-forest-light/50 rounded-sm">
                <span className="text-[10px] uppercase tracking-widest text-sage block font-semibold">
                  Farm Infrastructure
                </span>
                <p className="text-sm font-serif text-ivory mt-0.5">
                  1 dedicated polyhouse unit dedicated to protected vegetable cultivation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
