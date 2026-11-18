import React from "react";
import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";

export default function ClosingCtaSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 text-ivory overflow-hidden bg-forest-dark">
      {/* Background Photograph with Editorial Forest Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/12-field-beds-trellis.jpg"
          alt="Farmland and fresh crop fields at Siddhi Organic Farm"
          fill
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Deep rich forest green overlay for high contrast and luxury feel */}
        <div className="absolute inset-0 bg-forest-dark/85 sm:bg-forest/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/75 to-forest-dark/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 space-y-4 sm:space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-sage font-medium block">
          Direct Farm Harvest
        </span>

        <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-ivory font-medium tracking-tight">
          Fresh from Our Farm. Ready to Connect?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-ivory/85 max-w-2xl mx-auto leading-relaxed font-light">
          Interested in our fresh produce or want to know more about our farming? We&apos;d love to hear from you.
        </p>

        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2.5 text-xs uppercase tracking-widest font-semibold bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-200 shadow-md group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </a>

          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/20 active:bg-white/25 text-ivory border border-ivory/40 hover:border-ivory px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            <Phone className="w-4 h-4 text-sage" strokeWidth={1.75} />
            <span>Call Now ({BRAND.phone})</span>
          </a>
        </div>

        <p className="text-[11px] sm:text-xs text-sage/75 pt-2 leading-relaxed">
          Direct communication with the grower • Fresh vegetable availability verified instantly
        </p>
      </div>
    </section>
  );
}
