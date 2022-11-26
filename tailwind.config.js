/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mangoTango: "#E07F09",
        mango: "#ffbc6b",
        dairyCream: "#F4E6CD",
        rifleGreen: "#31452C",
        whiteOverlay: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
