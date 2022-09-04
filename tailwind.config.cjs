/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      purpleBlue: '#13152a',
    },
    extend: {
      width: {
        '98': '50rem'
      }
    },
  },
  plugins: [],
}
