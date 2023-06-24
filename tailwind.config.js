/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
        body: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
