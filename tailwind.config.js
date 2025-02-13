/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif" , "syne"], // Add Archivo font
      },
    },
  },
  plugins: [],
}