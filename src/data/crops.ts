export interface Crop {
  id: string;
  name: string;
  hindiName?: string;
  category: "Fruit Vegetable" | "Leafy Green" | "Herb & Spice";
  shortDescription: string;
  farmDescription: string;
  image: string;
  aspect: string;
  harvestNote: string;
}

export const CROPS_DATA: Crop[] = [
  {
    id: "cucumber",
    name: "Cucumber",
    hindiName: "Kheera",
    category: "Fruit Vegetable",
    shortDescription: "Crisp, mild, and hydrating, grown under monitored moisture and protected conditions.",
    farmDescription:
      "Cultivated with careful trellis support and vermicompost soil nourishment to produce tender, uniform cucumbers with thin skin and natural sweetness.",
    image: "/images/01-cucumber.jpg",
    aspect: "Tall & crisp",
    harvestNote: "Harvested at peak tenderness",
  },
  {
    id: "tomato",
    name: "Tomato",
    hindiName: "Tamatar",
    category: "Fruit Vegetable",
    shortDescription: "Sun-ripened, juicy tomatoes with deep natural color and balanced sweetness.",
    farmDescription:
      "Nurtured on organic compost-enriched beds. We allow each cluster to develop naturally on the vine for genuine flavor and firm flesh.",
    image: "/images/02-tomato.jpg",
    aspect: "Vine-ripened",
    harvestNote: "Hand-picked for ripeness",
  },
  {
    id: "capsicum",
    name: "Capsicum",
    hindiName: "Shimla Mirch",
    category: "Fruit Vegetable",
    shortDescription: "Glossy, thick-walled green bell peppers with a crisp snap and gentle sweetness.",
    farmDescription:
      "Grown both in our polyhouse and open beds to protect delicate blossoms from wind stress, producing robust, uniform peppers.",
    image: "/images/03-capsicum.jpg",
    aspect: "Glossy & firm",
    harvestNote: "Clean, thick-walled harvest",
  },
  {
    id: "brinjal",
    name: "Brinjal",
    hindiName: "Baingan",
    category: "Fruit Vegetable",
    shortDescription: "Glossy purple eggplants with tender skin and rich, creamy culinary texture.",
    farmDescription:
      "Cultivated on warm, vermicompost-fortified soil beds. We manage natural aeration to ensure clean skin and tender, seed-light flesh.",
    image: "/images/04-brinjal.jpg",
    aspect: "Deep violet lustre",
    harvestNote: "Harvested when skin is taut and glossy",
  },
  {
    id: "coriander",
    name: "Coriander",
    hindiName: "Dhaniya",
    category: "Herb & Spice",
    shortDescription: "Fragrant, bright green coriander with delicate aroma and crisp tender stems.",
    farmDescription:
      "Raised in loose, compost-rich soil with gentle overhead misting, yielding intense aroma and crisp green leaves for culinary use.",
    image: "/images/05-coriander.jpg",
    aspect: "Aromatic bunch",
    harvestNote: "Early morning harvest for maximum aroma",
  },
  {
    id: "green-chilli",
    name: "Green Chilli",
    hindiName: "Hari Mirch",
    category: "Herb & Spice",
    shortDescription: "Crisp, lively green chillies offering authentic heat and sharp, fresh aroma.",
    farmDescription:
      "Cultivated with balanced soil moisture and sunlight. Our careful cultivation preserves firmness, spice oils, and long-lasting freshness.",
    image: "/images/06-green-chilli.jpg",
    aspect: "Crisp & vibrant",
    harvestNote: "Selected for color and firmness",
  },
  {
    id: "spinach",
    name: "Spinach",
    hindiName: "Palak",
    category: "Leafy Green",
    shortDescription: "Tender, broad-leafed dark green spinach grown in nourished, organic soil.",
    farmDescription:
      "Our spinach thrives on moisture-retentive, vermicompost-dense soil beds, resulting in succulent leaves harvested fresh at peak vitality.",
    image: "/images/07-spinach.jpg",
    aspect: "Tender broad-leaf",
    harvestNote: "Cut fresh at cool dawn hours",
  },
];
