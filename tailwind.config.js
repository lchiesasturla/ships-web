module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Source Sans Pro'],
      'serif': ['Source Serif Pro'],
    },
    width: {
      '96': '96px',
      '48perc': '48%',
      '100perc': '100%'
    },
    height: {
      '96': '96px',
      '480': '480px',
      '16vh': '16vh',
      '84vh': '84vh',
      '100vh': '100vh'
    },
    spacing:{
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'xl': '32px',
      '4perc': '4%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
