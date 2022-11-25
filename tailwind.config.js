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
        dairyCream: "#F4E6CD",
        rifleGreen: "#31452C",
      },
    },
  },
  plugins: [],
};
