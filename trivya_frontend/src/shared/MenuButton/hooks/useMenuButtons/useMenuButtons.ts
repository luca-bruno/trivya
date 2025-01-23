import { useMemo } from "react"

const useMenuButtons = (isDisplayingAdultMode: boolean, isDisplayingAdminMode: boolean) =>
  useMemo(
    () =>
      [
        {
          id: 0,
          url: "/number-of-teams",
          icon: "dice",
          label: "Classic Mode"
        },
        {
          id: 1,
          url: "/wip",
          icon: "stopwatch",
          label: "Time Attack"
        },
        {
          id: 2,
          url: "/wip",
          icon: "sitemap",
          label: "Head-to-Head"
        },
        {
          id: 3,
          url: "/custom-mode",
          icon: "sliders",
          label: "Custom Mode"
        },
        {
          id: 4,
          url: "/wip",
          icon: "champagne-glasses",
          label: "Adult Mode",
          isDisplayed: isDisplayingAdultMode
        },
        {
          id: 5,
          url: "/admin",
          icon: "key",
          label: "Admin",
          isDisplayed: isDisplayingAdminMode
        }
      ].filter(({ isDisplayed }) => isDisplayed === undefined || isDisplayed),
    [isDisplayingAdultMode, isDisplayingAdminMode]
  )

export default useMenuButtons
