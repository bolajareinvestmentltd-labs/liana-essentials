/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F5F5DC', 
        accent: '#D4AF37', // Gold Placeholder
      }
    },
  },
  plugins: [],
}
