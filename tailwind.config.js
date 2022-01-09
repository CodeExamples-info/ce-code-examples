/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['pages/**/*.{ts,tsx}', 'common/**/*.{ts,tsx}', 'modules/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Inter"', ...defaultTheme.fontFamily.sans] },
      colors: {
        accent: {
          base: '#D7A349',
          dark: '#C88C41',
        },
        primary: '#102032',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
