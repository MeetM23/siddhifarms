import React from "react";
import HomeHero from "@/components/HomeHero";
import FarmStorySection from "@/components/FarmStorySection";
import ProduceGallery from "@/components/ProduceGallery";
import FarmingApproachSection from "@/components/FarmingApproachSection";
import PolyhouseFeature from "@/components/PolyhouseFeature";
import ContactForm from "@/components/ContactForm";
import ClosingCtaSection from "@/components/ClosingCtaSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* Brand & Soil Story */}
      <FarmStorySection />

      {/* Produce Gallery */}
      <ProduceGallery />

      {/* Farming Approach */}
      <FarmingApproachSection />

      {/* Polyhouse Feature */}
      <PolyhouseFeature />

      {/* Contact Section */}
      <ContactForm id="contact" />

      {/* Closing CTA */}
      <ClosingCtaSection />
    </>
  );
}
