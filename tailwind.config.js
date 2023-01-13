/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html|ts'],
  theme: {
    extend: {
      fontFamily: {
        'alienencounter': ['alien_encountersregular', 'sans-serif'],
        'neonretro': ['neon_retro', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'yellowtail': ['Yellowtail', 'cursive']
      },
      textNeon: {
        pink: '0px 0px 0.5em #ec4899'
      },
      backgroundImage: {
        'home': 'url(\'assets/home-bg.png\')'
      }
    },
    colors: {
      'body': '#160741',
      'secondary': '#3F2192',
      'secondary-dark': '#39207D',
      'white': '#ffffff',
      'purple': '#EA67FF',
      'purple-dark': '#38166E',
      'blue': '#5FE2FF',
      'blue-dark': '#0A1D61',
      'blue-light': '#72FFF7',
      'pink': '#FF66DD',
    }
  }
}
