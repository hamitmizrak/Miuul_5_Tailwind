/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    container: {
      center: true
    },

    extend: {
      colors: {
        "miuul-red": "red",
        "miuul-blue": "#0000ff",
        "miuul-yellow": "yellow",
      },
      fontFamily: {
        miuul:['Montserrat', 'sans-serif'],
        open:['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

