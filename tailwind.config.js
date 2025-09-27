/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'brand': '0 6px 30px rgba(236,72,153,0.25)'
      }
    },
  },
  plugins: [],
}
