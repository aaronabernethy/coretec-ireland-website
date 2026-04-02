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
        // Cortec brand green #009e58 (PMS 355) — accent, links, hover states
        steel: {
          DEFAULT: "#009e58",
          50: "#E5F7EF",
          100: "#CCEFDF",
          200: "#99DFBE",
          300: "#66CF9E",
          400: "#33BF7D",
          500: "#009e58",
          600: "#007B45",
          700: "#005C34",
          800: "#003E23",
          900: "#001F11",
        },
        // Cortec accent amber #F1A102 — CTA buttons, highlights
        orange: {
          DEFAULT: "#F1A102",
          50: "#FEF7E5",
          100: "#FDEECC",
          200: "#FBDD99",
          300: "#F9CB66",
          400: "#F7BA33",
          500: "#F1A102",
          600: "#C18102",
          700: "#916001",
          800: "#604001",
          900: "#302000",
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
        sans: ["Open Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
