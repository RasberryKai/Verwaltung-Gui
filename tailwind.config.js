/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25262b",
        secondary: "#282b2f",
        accent: "#2f3136",
        orange: "#e27536",
      },
    },
  },
  plugins: [],
};
