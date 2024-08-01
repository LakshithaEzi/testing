/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Neue: ["Bebas Neue", "sans-serif"],
        ios: ["Oxygen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
