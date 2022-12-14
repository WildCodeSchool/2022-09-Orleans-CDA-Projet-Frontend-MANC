/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greyblue: "#506F79",
        lightgreen: "#C7F6C3",
        lightblue: "#A1EDF2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
