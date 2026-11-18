import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BRAND } from "@/data/farmData";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhiorganicfarm.in"),
  title: {
    default: "Siddhi Organic Vegetables & Fruits | Fresh from Our Farmland",
    template: "%s | Siddhi Organic Vegetables & Fruits",
  },
  description:
    "Siddhi Organic Vegetables & Fruits grows fresh cucumber, tomato, capsicum, brinjal, coriander, green chilli, and spinach on own farmland with vermicompost soil enrichment and polyhouse cultivation.",
  keywords: [
    "Siddhi Organic Vegetables & Fruits",
    "Fresh vegetables farm",
    "Vermicompost farming",
    "Fresh cucumber, tomato and capsicum",
    "Polyhouse vegetable farming",
    "Organic farming approach",
    "Fresh farm produce",
  ],
  authors: [{ name: "Siddhi Organic Vegetables & Fruits" }],
  openGraph: {
    title: "Siddhi Organic Vegetables & Fruits | Fresh from Our Farmland",
    description:
      "Grown on our own farmland with vermicompost enrichment and 1 polyhouse for protected cultivation. Discover our fresh harvest.",
    url: "https://siddhiorganicfarm.in",
    siteName: "Siddhi Organic Vegetables & Fruits",
    images: [
      {
        url: "/images/09-farmland-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Siddhi Farmland and Cultivation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AgriculturalBusiness",
    name: BRAND.fullName,
    alternateName: BRAND.name,
    description: BRAND.shortDescription,
    telephone: BRAND.phone,
    email: BRAND.email,
    knowsAbout: [
      "Organic farming approach",
      "Vermicompost soil enrichment",
      "Polyhouse protected cultivation",
      "Cucumber",
      "Tomato",
      "Capsicum",
      "Brinjal",
      "Coriander",
      "Green Chilli",
      "Spinach",
    ],
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ivory text-charcoal min-h-screen flex flex-col selection:bg-forest selection:text-ivory">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
