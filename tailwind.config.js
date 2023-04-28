const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

// Pour retirer le warning au lancement
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hero: "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
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
        red: "#B02C36",
        orange: "#f7630c",
        yellow: "#fce100",
        green: {
          DEFAULT: "hsl(163,100%,15%)",
          light: "hsl(163,100%,25%)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addComponents({
        ".flame": {
          "@apply absolute content-['🔥'] text-xs": {},
        },
        ".flame-under": {
          "@apply relative": {},
          "&::after": {
            "@apply flame top-5 left-1/2 -translate-x-1/2": {},
          },
        },
        ".flame-around": {
          "@apply relative px-6": {},
          "&::before": {
            "@apply flame top-0 left-0 translate-y-1/2 -scale-x-100": {},
          },
          "&::after": {
            "@apply flame right-0 translate-y-1/2": {},
          },
        },
        ".h2": {
          "@apply text-ori-orange text-center text-shadow-sm shadow-ori-black font-bold relative text-[clamp(1rem,20vw,2.25rem)] leading-[clamp(1rem,20vw,2.25rem)] px-12":
            {},
          "&::before": {
            "@apply flame text-[1em] leading-none top-0 left-0 h-full flex items-center -scale-x-100":
              {},
          },
          "&::after": {
            "@apply flame text-[1em] leading-none right-0 h-full flex items-center top-0":
              {},
          },
        },
        ".h3": {
          "@apply h2 text-2xl px-8": {}
        }
      });
    }),
  ],
  screens: {
    "max-sm": { max: "767px" },
  },
};
