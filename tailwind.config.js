/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#35B1E5"
      }
    },
    fontFamily: {
      'primary': ['Boogaloo', 'cursive'],
      'secondary': ['Nunito', 'sans-serif'],
      'tertiary': ['Merriweather', 'serif'],
    }
  },
  plugins: [require("daisyui")],
}

