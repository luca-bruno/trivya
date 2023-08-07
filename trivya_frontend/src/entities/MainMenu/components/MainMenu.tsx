import React, { useContext } from "react"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import { MenuButton } from "@shared/MenuButton"
import buttons from "@shared/MenuButton/data/data"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import MaltaLocationDialogContainer from "@shared/MaltaLocationDialog/containers/MaltaLocationDialogContainer"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"
import BirthdateDialogContainer from "@shared/BirthdateDialog/containers/BirthdateDialogContainer"
import { AdminModeContext } from "@contexts/AdminModeContext/AdminModeContext"
import { MalteseQuestionsContext } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"

const MainMenu = () => {
  const { isDisplayingAdultMode, isBirthdateConfirmed, isBirthdateDialogDisplayed } = useContext(AdultModeContext)
  const { isDisplayingAdminMode } = useContext(AdminModeContext)
  const { isDisplayingMalteseFlag } = useContext(MalteseQuestionsContext)

  useBackgroundGradient({ numberOfTeams: 1 })

  return (
    <div className="pt-32">
      <Logo />

      <div className="flex justify-center items-center m-auto w-11/12">
        <div className="grid grid-cols-2 mobileL:grid-cols-3 gap-x-5 laptop:gap-x-8 gap-y-3 laptop:gap-y-10 place-items-center pt-14 w-screen">
          {buttons(isDisplayingAdultMode, isDisplayingAdminMode).map(button => (
            <MenuButton key={button.key} button={button} />
          ))}

          {isDisplayingMalteseFlag && <MalteseQuestionsToggle />}

          {isBirthdateDialogDisplayed && !isBirthdateConfirmed && <BirthdateDialogContainer />}

          <AdultModeToggle />
        </div>
      </div>

      <MaltaLocationDialogContainer />
    </div>
  )
}

export default MainMenu
