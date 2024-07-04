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
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginTop: '5rem',
              marginBottom: '1rem',
            },
            h2: {
              marginTop: '2rem',
              marginBottom: '1rem',
              textDecoration: 'none',
              a: {
                textDecoration: 'none',
              }
            }
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}