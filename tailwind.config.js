/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // primary: '#f28402',
        // secondary: '#2b4592',
      },
      backgroundImage: {
        noise: "url('~/public/assets/noise.png')"
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        roboto: ['Roboto Condensed']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}