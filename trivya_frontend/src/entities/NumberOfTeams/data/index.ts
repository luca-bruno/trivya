const renderIcon = (qty: number) => Array(qty).fill("user")

const buttons = [
  {
    id: 0,
    value: 1,
    icons: ["user"],
    label: "Solo",
    backgroundColour: "bg-red-tertiary",
    textColour: "text-red-primary"
  },
  {
    id: 1,
    value: 2,
    icons: ["user", "user"],
    label: "2-Player",
    backgroundColour: "bg-blue-secondary",
    textColour: "text-blue-primary"
  },
  {
    id: 2,
    value: 3,
    icons: ["user", "user", "user"],
    label: "3-Player",
    backgroundColour: "bg-green-secondary",
    textColour: "text-green-primary"
  },
  {
    id: 3,
    value: 4,
    icons: ["user", "user", "user", "user"],
    label: "4-Player",
    backgroundColour: "bg-purple-secondary",
    textColour: "text-purple-primary"
  }
]

export default buttons
