/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: "#150E28",
        purple: "#D434FE", // #903AFF
        pink: "#ff26b9",
        deepPurple: "#903AFF",
        blue: "#00A3FF",
        red: "#FF0000"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
    },
  },
  plugins: [],
};
