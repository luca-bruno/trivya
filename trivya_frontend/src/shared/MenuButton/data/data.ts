const mainMenuButtons = (isAdultMode: boolean) => [
  {
    key: 0,
    url: "/number-of-teams",
    icon: "clock",
    label: "Classic Mode"
  },
  {
    key: 1,
    url: "/number-of-teams",
    icon: "champagne-glasses",
    label: "Adult Mode",
    condition: isAdultMode
  },
  {
    key: 2,
    url: "/custom-mode",
    icon: "sliders",
    label: "Custom Mode"
  },
  {
    key: 3,
    url: "/admin",
    icon: "key",
    label: "Admin"
  }
]

export default mainMenuButtons
