/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{htm,js}"],
  theme: {
    extend: {
      screens : {
        lg : '960px',
        sm : '480px',
        md : '640px',
        xl : '1200px'
      }
    },
  },
  plugins: [],
}