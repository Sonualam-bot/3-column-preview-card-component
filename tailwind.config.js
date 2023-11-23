/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      shoulders: ["Big Shoulders Display", "sans-serif"],
      lexend: ["Lexend Deca", "sans-serif"],
    },
    screens: {
      xs: "0px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
