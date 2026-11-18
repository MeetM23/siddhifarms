import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight, Sprout, ShieldCheck, Leaf } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";
import { CROPS_DATA } from "@/data/crops";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-ivory/90 pt-14 sm:pt-18 pb-10 sm:pb-14 border-t border-forest-light/40 relative overflow-hidden">
      {/* Subtle organic background tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-botanical/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 pb-12 sm:pb-16 border-b border-forest-light/50">
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-sm"
              aria-label="Siddhi Organic - Return to top"
            >
              <Image
                src="/images/logo-white.png"
                alt="Siddhi Organic Vegetables & Fruits"
                width={170}
                height={60}
                className="h-9 sm:h-11 w-auto object-contain hover:opacity-95 transition-opacity"
              />
            </Link>

            <p className="text-ivory/75 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
              Cultivating fresh, authentic vegetables and fruits on our own farmland. We nourish our soil with vermicompost and shelter delicate crops in protected polyhouse beds for peak natural taste.
            </p>

            {/* Pillar Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-sage bg-forest/80 border border-forest-light/60 px-2.5 py-1 rounded-xs">
                <Sprout className="w-3 h-3 text-botanical-light shrink-0" strokeWidth={1.75} />
                <span>Own Farmland</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-sage bg-forest/80 border border-forest-light/60 px-2.5 py-1 rounded-xs">
                <Leaf className="w-3 h-3 text-botanical-light shrink-0" strokeWidth={1.75} />
                <span>Vermicompost Soil</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-sage bg-forest/80 border border-forest-light/60 px-2.5 py-1 rounded-xs">
                <ShieldCheck className="w-3 h-3 text-botanical-light shrink-0" strokeWidth={1.75} />
                <span>1 Polyhouse Unit</span>
              </span>
            </div>
          </div>

          {/* Column 2: What We Grow (3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4">
            <div className="border-b border-forest-light/40 pb-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-sage/80 font-bold block mb-1">
                Harvest
              </span>
              <h3 className="font-serif text-lg tracking-wide text-ivory font-medium">
                What We Grow
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:text-sm text-ivory/70">
              {CROPS_DATA.map((crop) => (
                <li key={crop.id}>
                  <Link
                    href={`/our-farm#${crop.id}`}
                    className="hover:text-sage transition-colors duration-200 py-0.5 inline-flex items-center space-x-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-botanical group-hover:bg-sage transition-colors shrink-0" />
                    <span>{crop.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-1">
              <Link
                href="/our-farm#cultivate"
                className="text-[11px] uppercase tracking-wider text-sage/90 hover:text-white transition-colors inline-flex items-center space-x-1 font-medium border-b border-sage/40 hover:border-white pb-0.5"
              >
                <span>View Full Harvest Roster</span>
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <div className="border-b border-forest-light/40 pb-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-sage/80 font-bold block mb-1">
                Explore
              </span>
              <h3 className="font-serif text-lg tracking-wide text-ivory font-medium">
                Navigation
              </h3>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-ivory/70">
              <li>
                <Link href="/" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-farm" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Our Farm
                </Link>
              </li>
              <li>
                <Link href="/#produce" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Produce Gallery
                </Link>
              </li>
              <li>
                <Link href="/our-farm#cultivation" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Growing Practices
                </Link>
              </li>
              <li>
                <Link href="/our-farm#gallery" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Farm Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-sage transition-colors py-0.5 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Farm Contact (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <div className="border-b border-forest-light/40 pb-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-sage/80 font-bold block mb-1">
                Inquiries
              </span>
              <h3 className="font-serif text-lg tracking-wide text-ivory font-medium">
                Direct Farm Contact
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-ivory/80">
              {/* Phone Card */}
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center space-x-3 p-2.5 rounded-sm bg-forest/60 border border-forest-light/50 hover:border-sage hover:bg-forest transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center text-sage group-hover:text-white shrink-0">
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-sage/75 block">
                    Phone & WhatsApp
                  </span>
                  <span className="font-medium text-ivory group-hover:text-white">
                    {BRAND.phone}
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center space-x-3 p-2.5 rounded-sm bg-forest/60 border border-forest-light/50 hover:border-sage hover:bg-forest transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-forest-light flex items-center justify-center text-sage group-hover:text-white shrink-0">
                  <Mail className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-sage/75 block">
                    Direct Email
                  </span>
                  <span className="font-medium text-ivory group-hover:text-white truncate block">
                    {BRAND.email}
                  </span>
                </div>
              </a>

              {/* Direct WhatsApp Action Link */}
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#2cf078] hover:text-white border border-[#25D366]/40 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with safe right-padding for floating WhatsApp button */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] sm:text-xs text-ivory/60 space-y-3 md:space-y-0 text-center md:text-left pr-0 md:pr-16">
          <p>© {currentYear} {BRAND.fullName}. All rights reserved.</p>
          <p className="text-ivory/50 tracking-wider">
            Natural Cultivation • Own Farmland • Protected Polyhouse
          </p>
        </div>
      </div>
    </footer>
  );
}
