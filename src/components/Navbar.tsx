"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Farm", href: "/our-farm" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5ED]/95 backdrop-blur-md shadow-sm border-b border-[#DCE5D6]/90 py-3"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none focus:ring-1 focus:ring-forest rounded transition-transform"
            aria-label="Siddhi Organic Vegetables & Fruits - Home"
          >
            <Image
              src={isScrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
              alt="Siddhi Organic Vegetables & Fruits"
              width={160}
              height={57}
              className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/#contact";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 py-1 relative font-medium ${
                    isScrolled
                      ? isActive
                        ? "text-forest font-semibold"
                        : "text-charcoal/85 hover:text-forest"
                      : isActive
                      ? "text-white font-semibold drop-shadow-sm"
                      : "text-white/90 hover:text-white drop-shadow-xs"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-colors ${
                        isScrolled ? "bg-forest" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className={`hidden lg:flex items-center text-xs tracking-wider uppercase font-medium transition-colors ${
                isScrolled
                  ? "text-charcoal/80 hover:text-forest"
                  : "text-white/95 hover:text-white drop-shadow-xs"
              }`}
              title="Call us directly"
            >
              <Phone
                className={`w-3.5 h-3.5 mr-1.5 transition-colors ${
                  isScrolled ? "text-botanical" : "text-white"
                }`}
                strokeWidth={1.75}
              />
              <span>{BRAND.phone}</span>
            </a>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-200 group ${
                isScrolled
                  ? "bg-forest hover:bg-forest-light text-ivory font-medium shadow-sm hover:shadow"
                  : "bg-white text-forest hover:bg-ivory font-semibold shadow-md hover:shadow-lg"
              }`}
            >
              <span>Enquire Now</span>
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>

          {/* Mobile Menu Button & WhatsApp Quick Icon */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded transition-colors ${
                isScrolled
                  ? "text-forest hover:bg-sage/40"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                isScrolled
                  ? "text-charcoal hover:text-forest"
                  : "text-white hover:text-white/80"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.75} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-ivory p-6 pt-20 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-sage/70 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button in drawer */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-charcoal/70 hover:text-forest transition-colors"
            aria-label="Close menu drawer"
          >
            <X className="w-6 h-6" strokeWidth={1.75} />
          </button>

          <div className="space-y-6">
            <div className="border-b border-sage/60 pb-5">
              <Image
                src="/images/logo-dark.png"
                alt="Siddhi Organic Vegetables & Fruits"
                width={160}
                height={57}
                className="h-10 w-auto object-contain"
              />
            </div>

            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation Links">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href) && link.href !== "/#contact";

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg tracking-wider font-serif py-1.5 transition-colors flex items-center justify-between ${
                      isActive ? "text-forest font-semibold" : "text-charcoal hover:text-forest"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t border-sage/60 pt-6 space-y-4">
            <div className="text-xs text-charcoal/75 space-y-2.5">
              <p className="font-semibold text-forest uppercase tracking-wider text-[11px]">
                Direct Contacts
              </p>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="hover:text-forest transition-colors flex items-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4 text-botanical" strokeWidth={1.75} />
                <span>{BRAND.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="hover:text-forest transition-colors flex items-center space-x-2 text-xs break-all"
              >
                <MessageCircle className="w-4 h-4 text-botanical shrink-0" strokeWidth={1.75} />
                <span>{BRAND.email}</span>
              </a>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-forest hover:bg-forest-light text-ivory py-3.5 px-4 text-xs uppercase tracking-widest font-semibold rounded-sm shadow-sm transition-colors"
            >
              <span>Enquire via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
