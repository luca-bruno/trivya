import React, { useState, useContext } from "react"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import { MenuButton } from "@shared/MenuButton"
import buttons from "@shared/MenuButton/data/data"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import MaltaLocationDialogContainer from "@shared/MaltaLocationDialog/containers/MaltaLocationDialogContainer"
import { AdultModeContext } from "@contexts/AdultModeContext"
import BirthdateDialogContainer from "@shared/BirthdateDialog/containers/BirthdateDialogContainer"

const MainMenu = () => {
  useBackgroundGradient({ numberOfTeams: 1 })

  const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)

  const {
    isDisplayingAdultMode,
    setIsDisplayingAdultMode,
    isBirthdateConfirmed,
    setIsBirthdateConfirmed,
    isBirthdateDialogDisplayed,
    setIsBirthdateDialogDisplayed
  } = useContext(AdultModeContext)

  // TODO: move to context
  const toggleAdultModeDisplay = () => {
    if (!isBirthdateDialogDisplayed && !isBirthdateConfirmed) {
      setIsBirthdateDialogDisplayed(true)
    } else {
      setIsDisplayingAdultMode(prev => !prev)
    }
  }

  // TODO: context
  const [isDisplayingAdminMode, setIsDisplayingAdminMode] = useState(false)

  return (
    <div className="pt-32">
      <Logo />

      <div className="flex justify-center items-center m-auto w-11/12">
        <div className="grid grid-cols-2 mobileL:grid-cols-3 gap-x-5 laptop:gap-x-8 gap-y-3 laptop:gap-y-10 place-items-center pt-14 w-screen">
          {buttons(isDisplayingAdultMode, isDisplayingAdminMode).map(button => (
            <MenuButton key={button.key} button={button} />
          ))}

          {isMaltaDisplayed && <MalteseQuestionsToggle />}

          {isBirthdateDialogDisplayed && !isBirthdateConfirmed && <BirthdateDialogContainer />}

          <AdultModeToggle {...{ isDisplayingAdultMode, toggleAdultModeDisplay, setIsDisplayingAdminMode }} />
        </div>
      </div>

      <MaltaLocationDialogContainer {...{ setMaltaDisplayed }} />
    </div>
  )
}

export default MainMenu
