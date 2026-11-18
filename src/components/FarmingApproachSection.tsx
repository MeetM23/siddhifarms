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
    <section className="py-24 lg:py-32 bg-[#F2EFE6] border-t border-b border-sage/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-botanical-dark font-semibold block mb-3">
            Our Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
            Growing Naturally. Caring Deeply.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
            Quality produce is not accidental. It is the result of working with the soil, respecting the plant cycle, and maintaining honest agricultural discipline on our own land.
          </p>
        </div>

        {/* Horizontal Editorial Cards */}
        <div className="space-y-12 lg:space-y-16">
          {pillars.map((pillar, i) => {
            const isReversed = i % 2 === 1;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-sm border border-sage/80 shadow-xs"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative h-72 sm:h-96 rounded-sm overflow-hidden bg-sage/20 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-forest/90 text-ivory text-xs uppercase tracking-widest px-3 py-1 font-medium rounded-xs backdrop-blur-xs">
                    {pillar.tag}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-earth">
                    <span className="font-serif text-2xl font-light">{pillar.num}</span>
                    <span className="w-8 h-[1px] bg-earth/40" />
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                    {pillar.title}
                  </h3>

                  <p className="text-xs uppercase tracking-widest text-botanical-dark font-medium">
                    {pillar.lead}
                  </p>

                  <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed pt-1">
                    {pillar.text}
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/our-farm#cultivation"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-forest font-semibold hover:text-botanical-dark transition-colors group"
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
