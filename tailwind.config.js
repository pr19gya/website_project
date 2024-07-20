/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow" : "spin 3s linear infinite"
      }
    },
  },
  fontFamily:{
    f_1:["Merriweather", "serif"],
    f_2:["Poppins", "sans-serif"],
    f_3:["Rubik", "sans-serif"]
  },
  plugins: [],
}

