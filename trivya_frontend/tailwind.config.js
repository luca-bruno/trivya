module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px"
    },
    extend: {
      fontFamily: {
        primary: ["Righteous", "sans-serif"],
        secondary: ["Rubik", "sans-serif"]
      },
      animation: {
        "spin-slow": "diceRoll 2s forwards"
      },
      keyframes: {
        diceRoll: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" }
        }
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#F96815", // Pantone 16-1358 TCX Orange Tiger
      secondary: "#0F4C81", // Pantone 19-4052 Classic Blue
      tertiary: "#3f3cbb",
      quaternary: "#3f3cbb",
      red: "#DA291C", // Pantone 485 C
      "red-secondary": "#831F1F", // Pantone 57 Heinz Red
      blue: "#4589C6", // Pantone 112-22 Brady Blue
      "blue-secondary": "#003098", // Pantone 17-4139 Azure Blue
      green: "#01855B", // Pantone 17-6030 Jelly Bean
      "green-secondary": "#002C17", // Pantone 627 C
      purple: "#6050A8", // Pantone 18-3940 TN Simply Purple
      "purple-secondary": "#501F60", // Pantone 19-3528 Imperial Purple
      black: "#000"
    }
  },
  plugins: []
}
