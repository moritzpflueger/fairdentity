/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // primary: '#f28402',
        // secondary: '#2b4592',
      },
      backgroundImage: {
        noise: "url('~/public/images/noise.png')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}