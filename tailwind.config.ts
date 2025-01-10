import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          "50": "#FFD400",
          "55": "#FFD819",
          "70": "#FFE566",
          "80": "#FFEE99",
          "90": "#FFF6CC",
          "95": "#FFFAE5",
          "97": "#FFFCF0",
          "99": "#FFFEFA",
        },
        grey: {
          "10": "#1A1A1A",
          "15": "#262626",
          "20": "#333333",
          "30": "#4C4C4D",
          "35": "#59595A",
          "40": "#656567",
          "60": "#98989A",
          "70": "#B3B3B3",
        },
        white: {
          "90": "#E6E6E6",
          "95": "#F1F1F3",
          "97": "#F7F7F8",
          "99": "#FCFCFD",
        },
        absolute: {
          "black": "#000000",
          "white": "#FFFFFF",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
