const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         screens: {
            xs: "475px",
            ...defaultTheme.screens,
         },
         colors: {
            neutral: colors.slate,
            bgDarkMode: "#0E141B",
            primary: {
               50: "#f0fdf4",
               100: "#dcfce7",
               200: "#bbf7d0",
               300: "#86efac",
               400: "#4ade80",
               500: "#22c55e",
               600: "#16a34a",
               700: "#15803d",
               800: "#166534",
               900: "#14532d",
               950: "#052e16",
            },
         },
         fontFamily: {
            lato: ["Lato", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
         },
         animation: {
            blob: "blob 7s infinite",
         },
         keyframes: {
            blob: {
               "0%": {
                  transform: "translate(0px, 0px) scale(1)",
               },
               "33%": {
                  transform: "translate(30px, -50px) scale(1.1)",
               },
               "66%": {
                  transform: "translate(-20px, 20px) scale(0.9)",
               },
               "100%": {
                  transform: "tranlate(0px, 0px) scale(1)",
               },
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
