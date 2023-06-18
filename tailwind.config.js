/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blueM: "#021621",
        greenM: "#56DBC3",
        grayD: "#6B989C",
        grayL: "#BAD7E9",
        purpleL: "#E1D7E9",
        purpleD: "#882D85",
      },
      fontFamily: {
        primary: ["Pacifico"],
        secondary: ["Satisfy"],
        third: ["Alkatra"],
      },
      backgroundImage: {
        Main: "url('./images/pink-g7767ccc68_1920.png')",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
