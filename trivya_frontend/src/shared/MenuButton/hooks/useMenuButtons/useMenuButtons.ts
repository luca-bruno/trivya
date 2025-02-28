import { useMemo } from "react"

const useMenuButtons = (isDisplayingAdultMode: boolean, isDisplayingAdminMode: boolean) =>
  useMemo(
    () =>
      [
        {
          id: 0,
          targetPath: "number-of-teams",
          icons: ["dice"],
          label: "Classic Mode"
        },
        {
          id: 1,
          targetPath: "wip",
          icons: ["stopwatch"],
          label: "Time Attack"
        },
        {
          id: 2,
          targetPath: "wip",
          icons: ["sitemap"],
          label: "Head-to-Head"
        },
        {
          id: 3,
          targetPath: "game-settings",
          icons: ["sliders"],
          label: "Custom Mode"
        },
        {
          id: 4,
          targetPath: "wip",
          icons: ["champagne-glasses"],
          label: "Adult Mode",
          isDisplayed: isDisplayingAdultMode
        },
        {
          id: 5,
          targetPath: "admin",
          icons: ["key"],
          label: "Admin",
          isDisplayed: isDisplayingAdminMode
        }
      ].filter(({ isDisplayed }) => isDisplayed === undefined || isDisplayed),
    [isDisplayingAdultMode, isDisplayingAdminMode]
  )

export default useMenuButtons
