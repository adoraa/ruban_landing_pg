/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundImage: {
        'hero-img': "url('./src/images/bg-image01.png')"
      },
      colors: {
        primary: {
          100: '#f0fdf4',
          200: '#009933',
          300: '#006633'
        },
      },
      screens: {
        'phone-s': '320px',
        'phone-m': '375px',
        'phone-l': '425px',
        'p-mini': '540px'
      },
    },
  },
  plugins: [],
}
