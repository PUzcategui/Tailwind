/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
        white: "#FFFF",
        gray: "rgb(209 213 219)",
        gray2: "rgb(229 231 235)",
        cyan: "rgb(8 145 178)",
      },
      boxShadow: {
        shadowButton: "0px 2px 7px rgba(0 0 0 / 0.25)",
      },
      ringColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
