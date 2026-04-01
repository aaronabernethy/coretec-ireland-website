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
        // Deep forest green — primary backgrounds, hero, footer, dark sections
        navy: {
          DEFAULT: "#142C07",
          50: "#EAF3DC",
          100: "#D1E8B5",
          200: "#A2D06A",
          300: "#74B82A",
          400: "#529E14",
          500: "#3D840C",
          600: "#326B09",
          700: "#275307",
          800: "#1E4005",
          900: "#142C07",
          950: "#0A1603",
        },
        // Leaf green — accent, links, hover states
        steel: {
          DEFAULT: "#4A8018",
          50: "#F0F8E6",
          100: "#DBF0C0",
          200: "#B6E080",
          300: "#8EC840",
          400: "#6AAF22",
          500: "#4A8018",
          600: "#3D6B14",
          700: "#305610",
          800: "#23400C",
          900: "#162B08",
        },
        // Golden amber — CTA buttons, highlights
        orange: {
          DEFAULT: "#B87C08",
          50: "#FAF3DF",
          100: "#F5E7C0",
          200: "#ECCF80",
          300: "#E2B740",
          400: "#D09E1C",
          500: "#B87C08",
          600: "#9A6806",
          700: "#7B5405",
          800: "#5C3F04",
          900: "#3E2A02",
        },
        grey: {
          DEFAULT: "#F5F7FA",
          50: "#FFFFFF",
          100: "#F5F7FA",
          200: "#E5E9F0",
          300: "#D5DBE5",
          400: "#B5BFCF",
          500: "#8A96AA",
          600: "#6B7A91",
          700: "#4F5D73",
          800: "#344155",
          900: "#1A2537",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
