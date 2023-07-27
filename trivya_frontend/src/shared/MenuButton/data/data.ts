const mainMenuButtons = (isAdultMode: boolean) => [
  {
    key: 0,
    url: "/number-of-teams",
    icon: "clock",
    label: "Classic Mode",
    displayCondition: true
  },
  {
    key: 1,
    url: "/number-of-teams",
    icon: "champagne-glasses",
    label: "Adult Mode",
    displayCondition: isAdultMode && isAdultMode
  },
  {
    key: 2,
    url: "/custom-mode",
    icon: "sliders",
    label: "Custom Mode",
    displayCondition: true
  },
  {
    key: 3,
    url: "/admin",
    icon: "key",
    label: "Admin",
    displayCondition: true
  }
]

export default mainMenuButtons
