/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#b8860b",   // Goldenrod
        brown: "#8b4513",  // SaddleBrown
      },
    },
  },
  plugins: [],
};
