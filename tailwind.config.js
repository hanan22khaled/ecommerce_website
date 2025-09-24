/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       screens: {
        'xxl': '1777px',
       },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
         inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

