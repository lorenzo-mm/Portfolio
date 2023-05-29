/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tech-bg': "url('/imagenes/tech-bg.jpg')"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary')
              }
            },
            code: {
              backgroundColor: theme('colors.primary'),
              borderRadius: '0.25rem!important',
              fontWeight: '400!important'
            }
          }
        },
        dark: {
          css: {
            code: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.black')
            },
            pre: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.black')
            }
          }
        }
      })
    }
  },
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#2c2c6c',

          secondary: '#4db5ff',

          variant: '#4db5ff66',

          white: '#fff',

          light: '#0d1117'
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#034a1fe0',

          secondary: '#43ff9e',

          variant: '#034a1fcc',

          white: '#000000',

          light: '#ffffff99'
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
}
