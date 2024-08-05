import type { Config } from "tailwindcss";

const config: Config = {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        boxShadow: {
          sm: "rgba(0, 0, 0, 0.075) 0 1px",
        },
        surface: {
          n10: "",
          n20: "",
          n30: "",
        },
        neutral: {
          white: "var(--neutral-white)",
          DEFAULT: "#F9F8F6",
          n10: "var(--neutral-n10)",
          n20: "var(--neutral-n20)",
          n30: "var(--neutral-n30)",
          n40: "var(--neutral-n40)",
          n50: "#636269",
          n60: "var(--neutral-n60)",
          n70: "#2f2e33",
        },
        rm: {
          DEFAULT: "#F4D35E", // ^? RapiMozo Yellow #FCAE40 <-- original logo color
        },
        alert: {
          n10: "#FAF8FF",
        },
      },
      fontSize: {
        "display-small": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "headline-medium": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "headline-small": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-large": [
          "22px",
          { lineHeight: "28px", fontWeight: "500", letterSpacing: "0px" },
        ],
        "title-medium": [
          "16px",
          { lineHeight: "24px", fontWeight: "600", letterSpacing: "0.15px" },
        ],
        "body-large": [
          "16px",
          { lineHeight: "24px", fontWeight: "400", letterSpacing: "0.5px" },
        ],
        "body-medium": [
          "14px",
          { lineHeight: "20px", fontWeight: "500", letterSpacing: "0.25px" },
        ],
        "body-small": [
          "12px",
          { lineHeight: "16px", fontWeight: "400", letterSpacing: "0px" },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
};

export default config;
