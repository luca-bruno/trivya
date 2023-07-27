import React, { useState, useContext } from "react"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import { MenuButton } from "@shared/MenuButton"
import mainMenuButtons from "@shared/MenuButton/data/data"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import MaltaLocationDialogContainer from "@shared/MaltaLocationDialog/containers/MaltaLocationDialogContainer"
import { AdultModeContext } from "@contexts/AdultModeContext"

const MainMenu = () => {
  useBackgroundGradient({ numberOfTeams: 1 })

  const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)

  const [isAdultMode, setAdultMode] = useContext(AdultModeContext)

  // TODO: move to context
  const toggleAdultMode = () => {
    setAdultMode(prev => !prev)
  }

  return (
    <div className="pt-32">
      <Logo />

      <div className="flex justify-center items-center m-auto w-11/12 sm:w-screen">
        <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-3 gap-x-5 lg:gap-x-8 gap-y-3 lg:gap-y-10 place-items-center pt-14 w-screen">
          { mainMenuButtons(isAdultMode).map(button => <MenuButton key={button.key} button={button} />) }

          { isMaltaDisplayed && <MalteseQuestionsToggle /> }

          <AdultModeToggle {...{ isAdultMode, toggleAdultMode }} />
        </div>
      </div>

      <MaltaLocationDialogContainer {...{ setMaltaDisplayed }} />

    </div>
  )
}

export default MainMenu
