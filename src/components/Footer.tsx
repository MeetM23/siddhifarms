import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, ArrowUpRight, Sprout } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";
import { CROPS_DATA } from "@/data/crops";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory/90 pt-16 pb-12 border-t border-forest-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-forest-light/60">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block focus:outline-none focus:ring-1 focus:ring-sage rounded" aria-label="Siddhi Organic - Return to top">
              <Image
                src="/images/logo-white.png"
                alt="Siddhi Organic Vegetables & Fruits"
                width={170}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain hover:opacity-95 transition-opacity"
              />
            </Link>

            <p className="text-ivory/70 text-sm leading-relaxed max-w-md pt-2">
              We grow fresh vegetables and fruits on our own farmland, using vermicompost to enrich the soil as part of our responsible cultivation practices.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-sage/80 pt-2 border-t border-forest-light/40">
              <Sprout className="w-4 h-4 text-botanical-light shrink-0" strokeWidth={1.75} />
              <span>Own Farmland • 1 Polyhouse • Vermicompost Soil Enrichment</span>
            </div>
          </div>

          {/* Fresh Produce Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-ivory font-medium">
              What We Grow
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-ivory/70">
              {CROPS_DATA.map((crop) => (
                <li key={crop.id}>
                  <Link
                    href={`/our-farm#${crop.id}`}
                    className="hover:text-sage transition-colors duration-200"
                  >
                    {crop.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-ivory font-medium">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/70">
              <li>
                <Link href="/" className="hover:text-sage transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-farm" className="hover:text-sage transition-colors">
                  Our Farm
                </Link>
              </li>
              <li>
                <Link href="/our-farm#cultivation" className="hover:text-sage transition-colors">
                  Growing Practices
                </Link>
              </li>
              <li>
                <Link href="/our-farm#gallery" className="hover:text-sage transition-colors">
                  Farm Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-sage transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg tracking-wider text-ivory font-medium">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-ivory/75">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-sage/80 block mb-0.5">
                  Phone & WhatsApp
                </span>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="hover:text-ivory transition-colors flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-botanical-light" strokeWidth={1.75} />
                  <span>{BRAND.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] tracking-widest uppercase text-sage/80 block mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-ivory transition-colors flex items-center space-x-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-botanical-light shrink-0" strokeWidth={1.75} />
                  <span>{BRAND.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-sage hover:text-ivory font-medium transition-colors border-b border-sage/40 pb-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} />
                  <span>WhatsApp Message</span>
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/60 space-y-4 sm:space-y-0">
          <p>© {currentYear} {BRAND.fullName}. All rights reserved.</p>
          <p className="text-ivory/50 tracking-wider">
            Natural Cultivation • Own Farmland • Protected Polyhouse
          </p>
        </div>
      </div>
    </footer>
  );
}
