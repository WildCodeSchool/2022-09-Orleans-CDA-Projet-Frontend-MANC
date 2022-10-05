/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#C7F6C3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
