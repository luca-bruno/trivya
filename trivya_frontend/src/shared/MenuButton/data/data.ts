const mainMenuButtons = (isAdultMode: boolean) => [
  {
    key: 0,
    url: "/number-of-teams",
    icon: "clock",
    label: "Classic Mode",
    condition: true
  },
  {
    key: 1,
    url: "/number-of-teams",
    icon: "champagne-glasses",
    label: "Adult Mode",
    condition: isAdultMode && isAdultMode
  },
  {
    key: 2,
    url: "/custom-mode",
    icon: "sliders",
    label: "Custom Mode",
    condition: true
  },
  {
    key: 3,
    url: "/admin",
    icon: "key",
    label: "Admin",
    condition: true
  }
]

export default mainMenuButtons
