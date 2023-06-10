import { useEffect } from "react"
import useBackgroundGradientTypes from "./types/useBackgroundGradient.interface"

const useBackgroundGradient = ({
  numberOfTeams = 1, team1BackgroundColour, team2BackgroundColour,
  team3BackgroundColour, team4BackgroundColour
}: useBackgroundGradientTypes) => {
  const secondary = "#0F4C81"

  useEffect(() => {
    const e: (HTMLHtmlElement | null) = document.querySelector("html")

    switch (numberOfTeams) {
      case 1:
        if (e !== null) {
          e.style.cssText = `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);`
        }
        break

      case 2:
        if (e !== null) {
          e.style.cssText = `background: linear-gradient(180deg, ${team1BackgroundColour} 50%, ${team2BackgroundColour} 50%);`
        }
        break

      case 3:
        if (e !== null) {
          e.style.cssText = `background: linear-gradient(to right, ${team1BackgroundColour} 0%, ${team1BackgroundColour} 50%, 
            ${team2BackgroundColour} 50%, ${team2BackgroundColour} 100%), 
            linear-gradient(to right, ${team3BackgroundColour} 0%, ${team3BackgroundColour} 50%, ${team3BackgroundColour} 50%, 
            ${team3BackgroundColour} 100%);
            background-size: 100% 50.1%;
            background-position: center top, center bottom;
            background-repeat: no-repeat;`
        }
        break

      case 4:
        if (e !== null) {
          e.style.cssText = `background: linear-gradient(to right, ${team1BackgroundColour} 0%, ${team1BackgroundColour} 50%, 
            ${team2BackgroundColour} 50%, ${team2BackgroundColour} 100%), 
            linear-gradient(to right, ${team3BackgroundColour} 0%, ${team3BackgroundColour} 50%, ${team4BackgroundColour} 50%, 
            ${team4BackgroundColour} 100%);
            background-size: 100% 50.1%;
            background-position: center top, center bottom;
            background-repeat: no-repeat;`
        }
        break

      default:
        break
    }
  }, [numberOfTeams, secondary, team1BackgroundColour, team2BackgroundColour, team3BackgroundColour, team4BackgroundColour])
}

export default useBackgroundGradient
