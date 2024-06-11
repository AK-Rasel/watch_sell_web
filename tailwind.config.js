/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    extend: {
      colors: {
        primary_color: "#7D1EFF",
        primary_hover_color: "#AA6DFF",
        text_hover_color: "#919191",
        secondary_color: "#2B2B2B",
        secondary_background_color: "#363636",
        text_white: "#F4F4F4",
        text_black: "#F4F4F4",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
