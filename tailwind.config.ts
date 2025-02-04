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
        neuroorange: "#cc9933",
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
        "letter-bounce": "letterBounce 1s ease-in-out infinite",
        "color-shift": "colorShift 3s ease-in-out forwards",
      },
      keyframes: {
        letterBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        colorShift: {
          "0%": { color: "#9b87f5" },
          "100%": { color: "#cc9933" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;