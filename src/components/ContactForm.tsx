"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";
import { CROPS_DATA } from "@/data/crops";

interface ContactFormProps {
  initialCrop?: string;
  id?: string;
}

export default function ContactForm({ initialCrop, id = "contact" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cropInterest, setCropInterest] = useState(initialCrop || "General Fresh Produce");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!phone.trim()) {
      newErrors.phone = "Please enter your contact phone number";
    } else if (phone.trim().replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const formattedMessage = `Hello Siddhi Organic Farm,\n\nName: ${name}\nPhone: ${phone}\nProduce Interested in: ${cropInterest}\nMessage: ${message || "I would like to inquire about fresh harvest availability and pricing."}`;

    // Direct WhatsApp enquiry redirect
    const waUrl = createWhatsAppUrl(formattedMessage);
    setSubmittedMessage(formattedMessage);
    setIsSubmitting(false);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id={id} className="py-14 sm:py-16 md:py-20 lg:py-28 bg-[#FAF9F4] border-t border-sage/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Direct Contact & Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-botanical-dark font-semibold block mb-2 sm:mb-3">
                Direct Farm Connection
              </span>
              <h2 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-[1.18] sm:leading-[1.15]">
                Let&apos;s Talk Fresh Produce.
              </h2>
              <p className="mt-3 sm:mt-4 text-charcoal/80 text-sm sm:text-base leading-relaxed">
                Whether you run a kitchen, source for your household, or simply wish to know when our next harvest of tomatoes, cucumbers, or greens is ready — we are just a call or message away.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="space-y-3 sm:space-y-4 pt-1">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center p-3.5 sm:p-4 bg-white rounded-sm border border-sage/70 hover:border-botanical hover:shadow-2xs transition-all group min-h-[56px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-sage/30 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-ivory transition-colors shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
                </div>
                <div className="ml-3 sm:ml-4">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal/60 block font-medium">
                    Call Farm Direct
                  </span>
                  <span className="text-forest font-medium text-sm sm:text-base">
                    {BRAND.phone}
                  </span>
                </div>
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3.5 sm:p-4 bg-white rounded-sm border border-sage/70 hover:border-botanical hover:shadow-2xs transition-all group min-h-[56px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
                </div>
                <div className="ml-3 sm:ml-4">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal/60 block font-medium">
                    Instant WhatsApp Inquiry
                  </span>
                  <span className="text-forest font-medium text-sm sm:text-base">
                    +91 9829781637
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center p-3.5 sm:p-4 bg-white rounded-sm border border-sage/70 hover:border-botanical hover:shadow-2xs transition-all group min-h-[56px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-sage/30 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-ivory transition-colors shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.75} />
                </div>
                <div className="ml-3 sm:ml-4 min-w-0">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-charcoal/60 block font-medium">
                    Email Correspondence
                  </span>
                  <span className="text-forest font-medium text-xs sm:text-base break-all">
                    {BRAND.email}
                  </span>
                </div>
              </a>
            </div>

            <div className="p-3.5 sm:p-4 bg-sage/20 border-l-2 border-botanical rounded-r-sm text-xs text-charcoal/80 leading-relaxed">
              <span className="font-semibold text-forest">Authentic & Direct:</span> You speak straight with the farm. No middlemen, no automated centers — just honest conversations about our fresh crops and cultivation practices.
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-10 rounded-sm border border-sage/80 shadow-xs relative">
            <div className="mb-5 sm:mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-botanical-dark font-medium block">
                Direct Inquiry Form
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium mt-1">
                Send an Inquiry via WhatsApp
              </h3>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                Fill in your details below and click submit to instantly send your structured enquiry directly to our WhatsApp.
              </p>
            </div>

            {submittedMessage && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-sm flex items-start space-x-3 text-emerald-800 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <p className="font-semibold text-emerald-900">Enquiry Prepared!</p>
                  <p className="mt-0.5">
                    WhatsApp opened in a new tab. If it did not open automatically, click below:
                  </p>
                  <a
                    href={createWhatsAppUrl(submittedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 font-semibold text-emerald-900 underline mt-1.5"
                  >
                    <span>Click here to open WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm bg-ivory/50 border rounded-sm focus:outline-none focus:ring-1 transition-colors min-h-[44px] ${
                    errors.name
                      ? "border-red-400 focus:ring-red-400"
                      : "border-sage/80 focus:border-forest focus:ring-forest"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm bg-ivory/50 border rounded-sm focus:outline-none focus:ring-1 transition-colors min-h-[44px] ${
                    errors.phone
                      ? "border-red-400 focus:ring-red-400"
                      : "border-sage/80 focus:border-forest focus:ring-forest"
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Crop Interest */}
              <div>
                <label
                  htmlFor="contact-crop"
                  className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5"
                >
                  Crop of Interest
                </label>
                <select
                  id="contact-crop"
                  value={cropInterest}
                  onChange={(e) => setCropInterest(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm bg-ivory/50 border border-sage/80 rounded-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors min-h-[44px]"
                >
                  <option value="General Fresh Produce">General Produce Inquiry</option>
                  {CROPS_DATA.map((crop) => (
                    <option key={crop.id} value={crop.name}>
                      {crop.name} ({crop.hindiName})
                    </option>
                  ))}
                  <option value="Polyhouse Cultivation">Polyhouse Protected Crops</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5"
                >
                  Inquiry Message (Optional)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for (e.g. approximate quantity, frequency, or farm inquiry)..."
                  className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 text-base sm:text-sm bg-ivory/50 border border-sage/80 rounded-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3.5 sm:py-4 px-6 bg-forest hover:bg-forest-light active:bg-forest-dark text-ivory text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center justify-center space-x-2 transition-all duration-200 shadow-xs hover:shadow cursor-pointer disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>Connect via WhatsApp</span>
                <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
              </button>

              <p className="text-[11px] text-charcoal/65 text-center leading-relaxed">
                Submitting takes you directly into a conversation with Siddhi Organic Vegetables & Fruits on WhatsApp (+91 9829781637).
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
