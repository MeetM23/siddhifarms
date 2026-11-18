export const BRAND = {
  name: "Siddhi",
  fullName: "Siddhi Organic Vegetables & Fruits",
  tagline: "Rooted in Nature. Grown with Care.",
  subTitle: "Organic Vegetables & Fruits",
  shortDescription:
    "We grow fresh vegetables and fruits on our own farmland, using vermicompost as part of our cultivation practices.",
  phone: "+91 9829781637",
  phoneRaw: "+919829781637",
  whatsappNumber: "919829781637",
  email: "ashaifeb@gmail.com",
  defaultWhatsAppMessage:
    "Hello Siddhi Organic Vegetables & Fruits, I would like to know more about your fresh produce.",
  polyhouseCount: "1 Polyhouse for Protected Cultivation",
  farmingPillars: [
    {
      title: "Vermicompost Enrichment",
      short: "Soil Health",
      description:
        "We use vermicompost to enrich the soil naturally, fostering active microbial life and supporting healthy crop growth.",
      badge: "Organic Soil Food",
    },
    {
      title: "Thoughtful Cultivation",
      short: "Careful Tending",
      description:
        "We focus on careful farming practices throughout the growing process, tending each crop with daily attention.",
      badge: "Hands-on Practice",
    },
    {
      title: "Protected Cultivation",
      short: "Climate Care",
      description:
        "Our farm includes one polyhouse for protected crop cultivation, allowing us greater control over the growing environment.",
      badge: "1 Dedicated Polyhouse",
    },
  ],
  gallery: [
    {
      title: "Morning Sun on Farmland",
      category: "Our Farmland",
      image: "/images/09-farmland-landscape.jpg",
      description: "Sunlight illuminating our agricultural fields where cultivation begins with soil nourishment.",
    },
    {
      title: "Inside the Polyhouse",
      category: "Protected Growing",
      image: "/images/10-polyhouse-interior.jpg",
      description: "Controlled environment inside our polyhouse nurturing healthy vegetable vines and flowering crops.",
    },
    {
      title: "Vermicompost Enriched Soil",
      category: "Soil Health",
      image: "/images/11-vermicompost-soil.jpg",
      description: "Rich, dark soil structured with vermicompost to provide vital nutrients to developing plants.",
    },
    {
      title: "Fresh Morning Harvest",
      category: "Harvesting",
      image: "/images/08-hero-fresh-harvest.jpg",
      description: "Freshly gathered vegetables showing natural color, firm texture, and honest farm freshness.",
    },
    {
      title: "Crop Beds & Trellising",
      category: "Field Rows",
      image: "/images/12-field-beds-trellis.jpg",
      description: "Meticulously lined agricultural rows designed for clean irrigation and root aeration.",
    },
    {
      title: "Young Plant Vitality",
      category: "Growth Cycle",
      image: "/images/13-young-seedling.jpg",
      description: "Early seedlings establishing firm root systems in fertile compost-prepared earth.",
    },
    {
      title: "Cluster Ripening",
      category: "Crop Care",
      image: "/images/14-vine-ripening.jpg",
      description: "Crops maturing steadily under ambient sunlight and responsible organic care.",
    },
    {
      title: "Farm Produce Assortment",
      category: "Farm-to-Table",
      image: "/images/15-table-assortment.jpg",
      description: "Crisp, flavorful harvest ready for table use directly from our own cultivation.",
    },
  ],
};

export const createWhatsAppUrl = (customMessage?: string) => {
  const msg = encodeURIComponent(customMessage || BRAND.defaultWhatsAppMessage);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${msg}`;
};
