const tailwindcss = require("tailwindcss");

module.exports = {
  darkMode: 'class',
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '6/10': '60%',
      '8/10': '80%'
     },
     maxHeight: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '6/10': '60%',
      '8/10': '80%'
     },
    extend: {
      fontFamily: {
        'body': ["Inter", "sans-serif"],
        'header': ["WindSong", "sans-serif"],
        'hand': ["Marck Script", "sans-serif"]
       },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              textDecoration: 'none',
              color: '#CE3F37',
              borderBottom: '2px solid #fcd34d', 
              '&:hover': {
                borderBottom: '0px solid #fcd34d', 
              },
            },
          },
        },
        dark: {
          css: {
              color: theme('colors.gray.300'),
              a: {
                  textDecoration: 'none',
                  color: '#CE3F37',
                  borderBottom: '2px solid #D97706',
                  '&:hover': {
                    borderBottom: '2px solid #CE3F37', 
                  },
                  border: theme('border-b-2')
              },

              h1: {
                  color: theme('colors.gray.300'),
              },
              h2: {
                  color: theme('colors.gray.300'),
              },
              h3: {
                  color: theme('colors.gray.300'),
              },
              h4: {
                  color: theme('colors.gray.300'),
              },
              h5: {
                  color: theme('colors.gray.300'),
              },
              h6: {
                  color: theme('colors.gray.300'),
              },

              strong: {
                  color: theme('colors.gray.300'),
              },

              code: {
                  color: theme('colors.gray.300'),
              },

              figcaption: {
                  color: theme('colors.gray.500'),
              },
          },
        },
      }),
    }
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [ require('@tailwindcss/typography') ],
}
