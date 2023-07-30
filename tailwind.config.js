/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marvel_color: "#e62429",
      },
    },
    backgroundImage: {
      marvel_bg: "url('/bg.jpg')",
    },
  },
  plugins: [],
};
