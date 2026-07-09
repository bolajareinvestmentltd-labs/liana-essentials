/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4A5D4E', // Rich Sage Green
          gold: '#D4AF37',  // Warm Gold
        }
      }
    },
  },
  plugins: [],
}
