/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryDark: '#5651e5', // Example primary color
        primaryLight: '#709dff', //
      }
    },
  },
  plugins: [],
}