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
              fontFamily: 'Josefin Sans',
            },
            h2: {
              margin: '1rem 0',
              textDecoration: 'none',
              fontFamily: 'Josefin Sans',
              letterSpacing: '-0.05em',
              fontSize: '2rem',
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