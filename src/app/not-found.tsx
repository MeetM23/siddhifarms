import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-24 bg-ivory">
      <div className="max-w-md text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.25em] text-earth font-semibold block">
          Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium">
          Off the Farm Path
        </h1>
        <p className="text-sm text-charcoal/75 leading-relaxed">
          The page you are looking for does not exist or may have been moved. Return to our main fields to explore our fresh harvest.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-forest text-ivory hover:bg-forest-light px-6 py-3 rounded-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
