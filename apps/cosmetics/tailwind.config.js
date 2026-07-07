/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F5F5DC', // Soft Cream Placeholder
        accent: '#556B2F', // Olive Green Placeholder
      }
    },
  },
  plugins: [],
}
