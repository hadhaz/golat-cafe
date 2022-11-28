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
        deepOrange: "#e04609",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
