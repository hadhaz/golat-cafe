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
        whiteOverlay: "rgba(0, 0, 0, 0.4)",
        deepOrange: "#e04609",
        
        grayAvailable: "#D9D9D9",
      },
      backgroundImage: {
        greenOrange:
        "linear-gradient(180deg, rgba(49,69,44,1) 16%, rgba(224,127,9,1) 80%)",
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