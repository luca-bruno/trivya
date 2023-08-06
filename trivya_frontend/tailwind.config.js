import colors from "tailwindcss/colors"

export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
export const theme = {
  screens: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    "4K": "2560px"
  },
  extend: {
    fontFamily: {
      primary: ["Righteous", "sans-serif"],
      secondary: ["Rubik", "sans-serif"],
      tertiary: ["Paytone One", "sans-serif"]
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
    ...colors,
    transparent: "transparent",
    current: "currentColor",
    primary: "#F96815",
    secondary: "#0F4C81",
    tertiary: "#3f3cbb",
    quaternary: "#3f3cbb",
    "red-primary": "#cc0000",
    "red-secondary": "#b30000",
    "red-tertiary": "#800000",
    "blue-primary": "#4589C6",
    "blue-secondary": "#003098",
    "blue-tertiary": "#001f63",
    "green-primary": "#01855B",
    "green-secondary": "#002C17",
    "green-tertiary": "#001c0e",
    "purple-primary": "#6050A8",
    "purple-secondary": "#501F60",
    "purple-tertiary": "#32103d",
    black: "#000"
  }
}
export const plugins = []
