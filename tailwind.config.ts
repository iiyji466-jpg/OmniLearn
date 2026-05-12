import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0,0,0,.55)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config;
