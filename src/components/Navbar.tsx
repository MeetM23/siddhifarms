"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollPos > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Farm", href: "/our-farm" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5ED]/95 backdrop-blur-md shadow-sm border-b border-[#DCE5D6]/90 py-3"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm transition-transform"
            aria-label="Siddhi Organic Vegetables & Fruits - Home"
          >
            <Image
              src={isScrolled ? "/images/logo-dark.png" : "/images/logo-white.png"}
              alt="Siddhi Organic Vegetables & Fruits"
              width={160}
              height={57}
              className="h-8 sm:h-9 md:h-11 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
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
                  className={`text-sm tracking-widest uppercase transition-colors duration-200 py-1 relative font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest rounded-xs ${
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
              className={`hidden lg:flex items-center text-xs tracking-wider uppercase font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest rounded-xs py-1 ${
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
              className={`inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
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

          {/* Mobile Header Actions */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Quick WhatsApp Icon */}
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded transition-colors ${
                isScrolled
                  ? "text-forest hover:bg-sage/40"
                  : "text-white hover:bg-white/10 drop-shadow-xs"
              }`}
              aria-label="Direct WhatsApp Enquiry"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded focus:outline-none focus:ring-1 focus:ring-forest transition-colors ${
                isScrolled
                  ? "text-charcoal hover:text-forest"
                  : "text-white hover:text-white/80 drop-shadow-xs"
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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

      {/* Simple, Clean, Non-Fancy Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-menu"
        className={`fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#FAF9F4] p-6 pt-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-sage/70 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Logo & Close */}
          <div>
            <div className="flex items-center justify-between border-b border-sage/60 pb-5 mb-6">
              <Image
                src="/images/logo-dark.png"
                alt="Siddhi Organic Vegetables & Fruits"
                width={150}
                height={54}
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal/70 hover:text-forest transition-colors"
                aria-label="Close menu drawer"
              >
                <X className="w-6 h-6" strokeWidth={1.75} />
              </button>
            </div>

            {/* Clean, Simple Text Links */}
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
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
                    className={`text-xl font-serif py-2 transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-forest font-semibold"
                        : "text-charcoal/85 hover:text-forest"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-forest" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Simple Contact & CTA */}
          <div className="border-t border-sage/60 pt-6 space-y-4">
            <div className="text-xs text-charcoal/80 space-y-2.5">
              <p className="font-semibold text-forest uppercase tracking-wider text-[11px]">
                Direct Contacts
              </p>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center space-x-2 text-sm text-charcoal/90 hover:text-forest transition-colors"
              >
                <Phone className="w-4 h-4 text-forest" strokeWidth={1.75} />
                <span>{BRAND.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center space-x-2 text-xs text-charcoal/75 hover:text-forest transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-forest shrink-0" strokeWidth={1.75} />
                <span>{BRAND.email}</span>
              </a>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[46px] flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white py-3.5 px-4 text-xs uppercase tracking-widest font-semibold rounded-sm shadow-sm transition-colors"
            >
              <span>Enquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
