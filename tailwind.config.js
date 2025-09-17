module.exports = {

  purge: [],

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Satoshi', 'system-ui', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}