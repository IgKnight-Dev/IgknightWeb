module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/styles.scss"
  ],
  theme: {
    extend: {
      colors: {
        igknightDark: '#0C1424',
        igknightHeader: '#0A1120', // slightly darker than main
        igknightFooter: '#0A1120', // slightly darker than main
      },
      fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
    },
    }
  },
  plugins: [
  require('tailwind-scrollbar-hide')
]
}
