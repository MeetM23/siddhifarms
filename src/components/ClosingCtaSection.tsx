import React from "react";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";

export default function ClosingCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#183B2A] text-ivory relative overflow-hidden">
      {/* Decorative subtle botanical line art / blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-botanical/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-sage font-medium block">
          Direct Farm Harvest
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-medium tracking-tight">
          Fresh from Our Farm. Ready to Connect?
        </h2>

        <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed font-light">
          Interested in our fresh produce or want to know more about our farming? We&apos;d love to hear from you.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-sm transition-all duration-200 shadow-md group"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </a>

          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-transparent hover:bg-forest-light text-ivory border border-sage/40 hover:border-ivory px-8 py-4 rounded-sm transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-sage" strokeWidth={1.75} />
            <span>Call Now ({BRAND.phone})</span>
          </a>
        </div>

        <p className="text-xs text-sage/70 pt-2">
          Direct communication with the grower • Fresh vegetable availability verified instantly
        </p>
      </div>
    </section>
  );
}
