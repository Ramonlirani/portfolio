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
               100: "#FFEAEE",
               300: "#FFA9BB",
               400: "#FF7E99",
               500: "#FF5277",
               600: "#873349",
               700: "#4B2432",
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
