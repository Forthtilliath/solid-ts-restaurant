const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
    fontFamily: {
      courgette: ["Courgette", "cursive"],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".flame": {
            "@apply absolute content-['🔥'] text-xs": {},
        },
        ".flame-under::after": {
          "@apply flame top-5 left-1/2 -translate-x-1/2": {}
        },
        ".flame-around": {
          "&::before": {
            "@apply flame -left-6 translate-y-1/2": {}
          },
          "&::after": {
            "@apply flame -right-6 translate-y-1/2": {}
          }
        }
      });
    }),
  ],
  screens: {
    "max-sm": { max: "767px" },
  },
};
