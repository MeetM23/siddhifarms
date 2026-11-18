import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FarmingApproachSection() {
  const pillars = [
    {
      num: "01",
      icon: Leaf,
      title: "Vermicompost Enrichment",
      lead: "Nourishing the earth from below",
      text: "We use vermicompost to enrich the soil and support healthy crop growth. Earthworm-processed organic compost revitalizes natural soil texture, preserves beneficial microorganisms, and provides steady, balanced nutrition to our roots.",
      image: "/images/11-vermicompost-soil.jpg",
      tag: "Soil Life",
    },
    {
      num: "02",
      icon: HeartHandshake,
      title: "Thoughtful Cultivation",
      lead: "Daily attention to every row",
      text: "We focus on careful farming practices throughout the growing process. From bed preparation and seed selection to trellising and timely watering, our cultivation philosophy revolves around patient, hands-on attention.",
      image: "/images/12-field-beds-trellis.jpg",
      tag: "Field Attention",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Protected Cultivation",
      lead: "Balanced shelter in 1 dedicated polyhouse",
      text: "Our farm includes one polyhouse for protected crop cultivation. This protected environment buffers sensitive vegetables like capsicums and tomatoes from sudden heat, wind pressure, and pest stress, ensuring uniform crop vigor.",
      image: "/images/10-polyhouse-interior.jpg",
      tag: "1 Polyhouse Structure",
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-[#F2EFE6] border-t border-b border-sage/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
            Our Foundation
          </span>
          <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
            Growing Naturally. Caring Deeply.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-charcoal/80 leading-relaxed font-light">
            Quality produce is not accidental. It is the result of working with the soil, respecting the plant cycle, and maintaining honest agricultural discipline on our own land.
          </p>
        </div>

        {/* Features Stack: Mobile-first vertical stack, alternating on desktop */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {pillars.map((pillar, i) => {
            const isReversed = i % 2 === 1;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-sm border border-sage/80 shadow-2xs"
              >
                {/* Image: Always on top for mobile (order-1), alternating on desktop */}
                <div
                  className={`order-1 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  } lg:col-span-6 relative h-52 min-[400px]:h-60 sm:h-72 md:h-80 lg:h-96 rounded-sm overflow-hidden bg-sage/20`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-forest/90 text-ivory text-[10px] sm:text-xs uppercase tracking-widest px-2.5 sm:px-3 py-1 font-medium rounded-xs backdrop-blur-xs">
                    {pillar.tag}
                  </div>
                </div>

                {/* Content: Below image on mobile (order-2), alternating on desktop */}
                <div
                  className={`order-2 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  } lg:col-span-6 space-y-3 sm:space-y-4 pt-1 sm:pt-2 lg:pt-0`}
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3 text-earth">
                    <span className="font-serif text-xl sm:text-2xl font-light">{pillar.num}</span>
                    <span className="w-6 sm:w-8 h-[1px] bg-earth/40" />
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-earth" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-forest font-medium">
                    {pillar.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs uppercase tracking-widest text-botanical-dark font-medium">
                    {pillar.lead}
                  </p>

                  <p className="text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed pt-0.5 sm:pt-1">
                    {pillar.text}
                  </p>

                  <div className="pt-2 sm:pt-3">
                    <Link
                      href="/our-farm#cultivation"
                      className="min-h-[40px] inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-forest font-semibold hover:text-botanical-dark transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest rounded-xs"
                    >
                      <span>Read practice details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
