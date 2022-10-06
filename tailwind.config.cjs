/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      strokeWidth: {
        0.5: "0.5px",
      },
      colors: {
        greyblue: "#506F79",
        lightgreen: "#C7F6C3",
        lightblue: "#A1EDF2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
