/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        "background-primary": "#3490dc",
        "background-secondary": "#ffed4a",
      },
    },
  },
  plugins: [],
};
