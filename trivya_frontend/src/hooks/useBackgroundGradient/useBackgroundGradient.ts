import { useEffect } from "react"
import useBackgroundGradientTypes from "./types/useBackgroundGradient.interface"

const useBackgroundGradient = ({
  numberOfTeams = 1,
  team1BackgroundColour,
  team2BackgroundColour,
  team3BackgroundColour,
  team4BackgroundColour,
  reset
}: useBackgroundGradientTypes) => {
  const secondary = "#0F4C81"
  const e: HTMLHtmlElement | null = document.querySelector("html")

  if (reset) {
    if (e !== null) {
      e.style.cssText = `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);`
    }
  }

  useEffect(() => {
    switch (numberOfTeams) {
      case 1:
        if (e !== null) {
          e.style.cssText = `background: linear-gradient(180deg, ${secondary} 0%, #125793 25%, #1461a4 50%, #1461a4 80%, #1668b0 100%)`
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
  }, [e, numberOfTeams, secondary, team1BackgroundColour, team2BackgroundColour, team3BackgroundColour, team4BackgroundColour])
}

export default useBackgroundGradient
