import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0b14",
        surface: "#12131f",
        border: "rgba(255,255,255,0.08)",
        primary: { DEFAULT: "#6d5efc", hover: "#5a4af0" },
        accent: "#22d3ee",
        muted: "#8b8da3",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        display: ["Clash Display", "Geist", "sans-serif"],
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
      },
      animation: { "fade-up": "fade-up .5s ease forwards" },
    },
  },
  plugins: [],
};
export default config;
