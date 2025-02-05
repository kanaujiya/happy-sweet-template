/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        firstcolor: "crimson",
        cardcolor_1: "#45291c",
        cardcolor_2: "#e23e4e",
        cardcolor_3: "#467f05",
        cardcolor_4: "#a9715c",
      },
      boxShadow: {
        "myboxshadow": "rgba(0,0,0,0.15) 1.95px 1.95px 2.6px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      fontFamily: {
        Playball: ["Playball", "cursive"],
        Kalnia: ["Kalnia", "serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
