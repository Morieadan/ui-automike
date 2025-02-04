import type { Config } from "tailwindcss";

export default {
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
        neurodark: "#1A1F2C",
        neuropurple: "#9b87f5",
        neuroorange: "#F97316",
        neurolight: "#FFFFFF",
        neurogray: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "typewriter": "typing 3.5s steps(40, end), blink .75s step-end infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;