const buttons = (isDisplayingAdultMode: boolean, isDisplayingAdminMode: boolean) => [
  {
    key: 0,
    url: "/number-of-teams",
    icon: "dice",
    label: "Classic Mode",
    displayCondition: true
  },
  {
    key: 2,
    url: "/wip",
    icon: "stopwatch",
    label: "Time Attack",
    displayCondition: true
  },
  {
    key: 3,
    url: "/wip",
    icon: "sitemap",
    label: "Head-to-Head",
    displayCondition: true
  },
  {
    key: 4,
    url: "/custom-mode",
    icon: "sliders",
    label: "Custom Mode",
    displayCondition: true
  },
  {
    key: 5,
    url: "/wip",
    icon: "champagne-glasses",
    label: "Adult Mode",
    displayCondition: isDisplayingAdultMode && isDisplayingAdultMode
  },
  {
    key: 6,
    url: "/admin",
    icon: "key",
    label: "Admin",
    displayCondition: isDisplayingAdminMode && isDisplayingAdminMode
  }
]

export default buttons
