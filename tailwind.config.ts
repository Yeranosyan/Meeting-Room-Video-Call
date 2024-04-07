import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#222222",
          2: "#272727",
        },
        gray: {
          1: "#A6A6A6",
        },
        orange: {
          1: "#FAA381",
        },
        sky: {
          1: "#5B85AA",
        },
        green: {
          1: "#98C9A3",
        },
        yellow: {
          1: "#F4D06F",
        },
        red: {
          1: "#E0777D",
        },
        purple: {
          1: "#4A4063",
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
