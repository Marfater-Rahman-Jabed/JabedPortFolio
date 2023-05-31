/** @type {import('tailwindcss').Config} */
// import "daisyui/dist/daisyui.css";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],

}