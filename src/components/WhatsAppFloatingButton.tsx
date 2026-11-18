"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND, createWhatsAppUrl } from "@/data/farmData";

export default function WhatsAppFloatingButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Subtle floating prompt badge */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2 bg-ivory text-charcoal shadow-lg border border-sage/80 py-2 px-3.5 rounded-full mr-3 text-xs tracking-wider font-medium transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat directly on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-charcoal/40 hover:text-charcoal ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" strokeWidth={1.75} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Siddhi Organic Vegetables & Fruits on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <span className="sr-only">Contact on WhatsApp</span>
        <MessageCircle className="w-7 h-7" strokeWidth={1.75} />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
