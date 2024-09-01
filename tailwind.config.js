/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1c2130",
      secondaryGray: "#2d2f34",
      "gray-500": "#4c4d4f",
    },
  },
  plugins: [],
};
