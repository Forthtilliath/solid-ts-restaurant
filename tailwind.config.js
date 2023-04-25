const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      courgette: ["Courgette", "cursive"],
    },
    colors: {
      ...colors,
      ori: {
        black: "#0e0b0d",
        green: {
          DEFAULT: "hsl(163,100%,15%)",
          light: "hsl(163,100%,25%)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".flame": {
          "@apply absolute content-['🔥'] text-xs": {},
        },
        ".flame-under::after": {
          "@apply flame top-5 left-1/2 -translate-x-1/2": {},
        },
        ".flame-around": {
          "&::before": {
            "@apply flame -left-6 translate-y-1/2": {},
          },
          "&::after": {
            "@apply flame -right-6 translate-y-1/2": {},
          },
        },
        ".h2": {
          "@apply text-[#f7630c] font-bold text-4xl relative flame before:flame before:text-4xl before:-left-12 after:flame after:text-4xl after:-right-12 before:-scale-x-100":
            {},
        },
      });
    }),
  ],
  screens: {
    "max-sm": { max: "767px" },
  },
};
