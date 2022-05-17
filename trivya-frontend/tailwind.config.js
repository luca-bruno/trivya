module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Righteous', 'sans-serif'],
        'secondary': ['Rubik', 'sans-serif']
      },
    },
    colors: {
      'primary': '#F96815', // Pantone 16-1358 TCX Orange Tiger
      'secondary': '#0F4C81 ', // Pantone 19-4052 Classic Blue
      'tertiary': '#3f3cbb',
      'quaternary': '#3f3cbb'
    }
  },
  plugins: [],
}