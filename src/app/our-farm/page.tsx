import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Sprout,
  HeartHandshake,
  ArrowUpRight,
  Layers,
  CheckCircle,
} from "lucide-react";
import { CROPS_DATA } from "@/data/crops";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";
import FarmGallerySection from "@/components/FarmGallerySection";
import ContactForm from "@/components/ContactForm";
import ClosingCtaSection from "@/components/ClosingCtaSection";

export const metadata: Metadata = {
  title: "Our Farm | Growing Naturally, Caring Deeply",
  description:
    "Explore Siddhi Organic Vegetables & Fruits. Learn about our own farmland, vermicompost soil enrichment, and 1 dedicated polyhouse for protected cultivation.",
  openGraph: {
    title: "Our Farm | Siddhi Organic Vegetables & Fruits",
    description:
      "Closer to Nature. Connected to Every Harvest. Discover our farming practices and our 7 fresh crops.",
  },
};

export default function OurFarmPage() {
  return (
    <>
      {/* SECTION A: PAGE HERO */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh] flex items-end pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden bg-forest">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/09-farmland-landscape.jpg"
            alt="Panoramic view of agricultural farmland"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 sm:via-charcoal/40 to-charcoal/30" />
          <div className="absolute inset-0 bg-forest/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-sage font-semibold block">
              The Heart of Siddhi
            </span>
            <h1 className="font-serif text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-6xl text-ivory font-normal leading-[1.12] sm:leading-[1.1] tracking-tight">
              Closer to Nature. Connected to Every Harvest.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-ivory/85 font-light leading-relaxed max-w-2xl pt-1 sm:pt-2">
              We approach farming with patience and simplicity. By prioritizing living soil enriched with vermicompost and employing protected cultivation, we cultivate fresh produce with genuine care.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION B: OUR STORY */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-[#F7F5ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Principles */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block">
                Who We Are
              </span>
              <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-[1.18] sm:leading-[1.15]">
                Our Farmland, Our Commitment.
              </h2>
              <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">
                <strong className="text-forest font-semibold">{BRAND.fullName}</strong> is grounded in the direct reality of farming. We own our agricultural land, which gives us complete responsibility over how each plant is sown, nourished, and harvested.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-sage/70">
                <div className="flex items-start space-x-3 sm:space-x-3.5">
                  <div className="w-8 h-8 rounded-sm bg-sage/40 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <Sprout className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-forest uppercase tracking-wider">
                      Respecting the Soil
                    </h4>
                    <p className="text-xs text-charcoal/75 mt-0.5 leading-relaxed">
                      We treat soil not as an inert container, but as a living ecosystem requiring organic nourishment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-3.5">
                  <div className="w-8 h-8 rounded-sm bg-sage/40 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-forest uppercase tracking-wider">
                      Vermicompost Enriched
                    </h4>
                    <p className="text-xs text-charcoal/75 mt-0.5 leading-relaxed">
                      Organic compost produced through earthworm digestion is folded into beds for optimal soil fertility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-3.5">
                  <div className="w-8 h-8 rounded-sm bg-sage/40 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-forest uppercase tracking-wider">
                      Careful & Honest Tending
                    </h4>
                    <p className="text-xs text-charcoal/75 mt-0.5 leading-relaxed">
                      Daily inspection of leaves, natural trellising, balanced hydration, and harvesting strictly on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Image */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 pt-2 sm:pt-4 lg:pt-0">
              <div className="relative h-60 min-[400px]:h-72 sm:h-80 md:h-96 rounded-sm overflow-hidden border border-sage/80 shadow-md">
                <Image
                  src="/images/15-table-assortment.jpg"
                  alt="Fresh farm harvest from Siddhi Farm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="bg-white p-5 sm:p-7 md:p-9 rounded-sm border border-sage/70 space-y-3 sm:space-y-4 text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed">
                <p>
                  Farming well starts by asking simple questions: How does this crop naturally want to grow? What supports the root without exhausting the earth?
                </p>
                <p>
                  At Siddhi, we don&apos;t rush the harvest or rely on artificial boosters. We prepare our ground with quality vermicompost, watch the weather carefully, and utilize our single polyhouse structure to provide shelter when open conditions become too harsh for delicate flowering plants.
                </p>
                <p className="font-serif italic text-forest text-sm sm:text-base md:text-lg pt-1">
                  &ldquo;We take pride in knowing every crop by its bed, watching the first blossoms set, and hand-picking vegetables that are firm, natural, and full of honest taste.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: WHAT WE CULTIVATE */}
      <section id="cultivate" className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-ivory border-t border-b border-sage/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
              Full Crop Roster
            </span>
            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
              What We Cultivate
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
              We focus our efforts on seven key vegetables and herbs that thrive under our soil conditions and protected polyhouse care. Each crop is described factually according to how we grow it.
            </p>
          </div>

          {/* Detailed Crop Cards */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {CROPS_DATA.map((crop, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={crop.id}
                  id={crop.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center bg-white p-4 sm:p-7 lg:p-10 rounded-sm border border-sage/80 shadow-2xs hover:border-botanical transition-all"
                >
                  {/* Photo: Top on mobile (order-1), alternating on desktop */}
                  <div
                    className={`order-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } lg:col-span-5 relative h-52 min-[400px]:h-60 sm:h-72 md:h-80 rounded-sm overflow-hidden bg-sage/20`}
                  >
                    <Image
                      src={crop.image}
                      alt={`Fresh ${crop.name} grown at Siddhi Farm`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-forest/90 text-ivory text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 font-medium rounded-xs">
                      {crop.category}
                    </div>
                    {crop.hindiName && (
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-ivory/95 text-forest text-xs px-2.5 py-1 font-medium rounded-xs shadow-2xs">
                        Local name: {crop.hindiName}
                      </div>
                    )}
                  </div>

                  {/* Informative Content: Below on mobile (order-2), alternating on desktop */}
                  <div
                    className={`order-2 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } lg:col-span-7 space-y-3 sm:space-y-4`}
                  >
                    <div className="flex items-baseline justify-between border-b border-sage/50 pb-2 gap-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                        {crop.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-earth font-medium shrink-0">
                        {crop.aspect}
                      </span>
                    </div>

                    <p className="text-charcoal/80 text-xs sm:text-sm leading-relaxed">
                      {crop.shortDescription}
                    </p>

                    <div className="bg-[#FAF9F4] p-3.5 sm:p-4 rounded-sm border-l-2 border-botanical text-xs text-charcoal/85 space-y-1">
                      <span className="font-semibold text-forest uppercase tracking-wider block text-[10px] sm:text-[11px]">
                        Cultivation Method
                      </span>
                      <p className="leading-relaxed">{crop.farmDescription}</p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="inline-flex items-center text-xs text-botanical-dark font-medium">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-botanical shrink-0" strokeWidth={1.75} />
                        {crop.harvestNote}
                      </span>

                      <a
                        href={createWhatsAppUrl(`Hello Siddhi Organic Farm, I would like to inquire about fresh ${crop.name} availability.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-forest hover:text-botanical-dark border-b border-forest/40 hover:border-forest pb-0.5 transition-colors self-start sm:self-auto"
                      >
                        <span>Inquire about {crop.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION D: OUR GROWING PRACTICES (Timeline) */}
      <section id="cultivation" className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-[#F2EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
              Methodology
            </span>
            <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium tracking-tight">
              Our Growing Practices
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed font-light">
              From soil regeneration through vermicompost to controlled shelter inside our polyhouse, each step is designed for healthy, vigorous growth without unnecessary complexity.
            </p>
          </div>

          {/* Timeline Sequence */}
          <div className="relative border-l border-botanical/30 ml-3 sm:ml-6 md:ml-8 pl-4 sm:pl-7 md:pl-10 space-y-10 sm:space-y-14 lg:space-y-16">
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[53px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-forest text-ivory text-xs flex items-center justify-center font-bold shadow-xs">
                1
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-earth font-semibold">
                    Step One • Earth Foundation
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-forest font-medium">
                    Soil Enrichment Through Vermicompost
                  </h3>
                  <p className="text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed">
                    Prior to planting, our soil beds receive generous applications of vermicompost. Unlike raw chemical inputs that deplete soil structure over time, vermicompost enriches the soil with gentle, biological organic matter. It boosts aeration, encourages earthworms, stabilizes moisture, and ensures that root systems have natural access to micro-nutrients.
                  </p>
                </div>
                <div className="lg:col-span-5 relative h-48 min-[400px]:h-56 sm:h-64 md:h-72 rounded-sm overflow-hidden border border-sage/80">
                  <Image
                    src="/images/11-vermicompost-soil.jpg"
                    alt="Vermicompost enriched soil and organic matter"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[53px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-forest text-ivory text-xs flex items-center justify-center font-bold shadow-xs">
                2
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-earth font-semibold">
                    Step Two • Daily Attention
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-forest font-medium">
                    Careful Crop Cultivation
                  </h3>
                  <p className="text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed">
                    We practice active crop management: erecting string trellises for cucumbers and tomatoes to keep fruit off wet ground, careful spacing for air circulation, and timely weeding by hand. Water is administered thoughtfully, matching the transpiration needs of the plant during hot hours to prevent moisture shock.
                  </p>
                </div>
                <div className="lg:col-span-5 relative h-48 min-[400px]:h-56 sm:h-64 md:h-72 rounded-sm overflow-hidden border border-sage/80">
                  <Image
                    src="/images/12-field-beds-trellis.jpg"
                    alt="Agricultural rows and thoughtful cultivation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[53px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-forest text-ivory text-xs flex items-center justify-center font-bold shadow-xs">
                3
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-earth font-semibold">
                    Step Three • Climate Protection
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-forest font-medium">
                    Protected Cultivation in 1 Polyhouse
                  </h3>
                  <p className="text-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed">
                    Our farm includes one polyhouse specifically dedicated to protected cultivation. By filtering harsh solar radiation and shielding plants from abrupt storms, the polyhouse provides a balanced microclimate. This protection allows crops like capsicums and tomatoes to develop consistent size, uniform color, and unblemished skin.
                  </p>
                </div>
                <div className="lg:col-span-5 relative h-48 min-[400px]:h-56 sm:h-64 md:h-72 rounded-sm overflow-hidden border border-sage/80">
                  <Image
                    src="/images/10-polyhouse-interior.jpg"
                    alt="Protected polyhouse cultivation at Siddhi Farm"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: FARM GALLERY */}
      <FarmGallerySection />

      {/* SECTION F: CONTACT SECTION */}
      <ContactForm id="contact" />

      {/* CLOSING BANNER */}
      <ClosingCtaSection />
    </>
  );
}
