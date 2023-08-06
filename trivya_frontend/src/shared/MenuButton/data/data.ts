const buttons = (isDisplayingAdultMode: boolean, isDisplayingAdminMode: boolean) => [
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
    displayCondition: isDisplayingAdultMode && isDisplayingAdultMode
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
    displayCondition: isDisplayingAdminMode && isDisplayingAdminMode
  }
]

export default buttons
