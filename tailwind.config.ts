import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#183B2A",
          dark: "#0F261B",
          light: "#214E38",
        },
        botanical: {
          DEFAULT: "#54734D",
          light: "#6A8C62",
          dark: "#415A3C",
        },
        ivory: {
          DEFAULT: "#F7F5ED",
          warm: "#FAF9F4",
          dark: "#EFECE0",
        },
        sage: {
          DEFAULT: "#DCE5D6",
          light: "#EAF0E6",
          dark: "#CAD7C2",
        },
        earth: {
          DEFAULT: "#8B6748",
          light: "#A47E5B",
          dark: "#6F5137",
        },
        charcoal: {
          DEFAULT: "#282C27",
          light: "#3E433D",
          dark: "#1A1D1A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
        tightest: "-.03em",
      },
    },
  },
  plugins: [],
};
export default config;
