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

          // temp solution for circle in bg
          // e.style.cssText = `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);
          // background-image: radial-gradient(circle at center top, rgba(${parseInt(secondary.slice(1, 3), 16)},
          //  ${parseInt(secondary.slice(3, 5), 16)}, ${parseInt(secondary.slice(5, 7), 16)}, 0.9) 50%, ${secondary} 50%);
          // background-size: 100% 100%, 100% 100%;
          // background-position: center top, center bottom;
          // background-repeat: no-repeat;`

          // temp solution for gradient in bg
          // e.style.cssText = `background: linear-gradient(180deg, ${secondary} 50%, ${secondary} 50%);
          // background-image: radial-gradient(circle at center top, rgba(${parseInt(secondary.slice(1, 3), 16)},
          //  ${parseInt(secondary.slice(3, 5), 16)}, ${parseInt(secondary.slice(5, 7), 16)}, 0.9) 70%, ${secondary} 30%);
          // background-size: 100% 100%, 100% 100%;
          // background-position: center top, center bottom;
          // background-repeat: no-repeat;`
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
