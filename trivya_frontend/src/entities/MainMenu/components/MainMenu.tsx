import React, { useState } from "react"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import { MenuButton } from "@shared/MenuButton"
import mainMenuButtons from "@shared/MenuButton/data/data"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import MaltaLocationDialogContainer from "@shared/MaltaLocationDialog/containers/MaltaLocationDialogContainer"
// import { useGetPokemonByName2Query } from "./services/test2"
// import { useGetPokemonByNameQuery } from "./services/test"

const MainMenu = () => {
  // const { data, error, isSuccess } = useGetPokemonByNameQuery("bulbasaur")
  // const { data: data2, isSuccess: isSuccess2 } = useGetPokemonByName2Query("absol")

  // if (isSuccess) {
  //   console.log(data)
  // }

  // if (isSuccess2) {
  //   console.log(data2)
  // }

  useBackgroundGradient({ numberOfTeams: 1 })

  const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)

  const [isAdultMode, setAdultMode] = useState(false)

  // TODO: move to context
  const toggleAdultMode = () => {
    setAdultMode(prev => !prev)
  }

  return (
    <div className="pt-32">
      <Logo />

      <div className="flex justify-center items-center m-auto w-11/12 sm:w-screen">
        <div className="grid grid-cols-3 gap-x-5 gap-y-3 place-items-center text-tertiary pt-14 w-screen">
          {mainMenuButtons(isAdultMode).map(button => <MenuButton key={button.key} button={button} />)}

          { isMaltaDisplayed && <MalteseQuestionsToggle /> }

          <AdultModeToggle {...{ isAdultMode, toggleAdultMode }} />
        </div>
      </div>

      <MaltaLocationDialogContainer {...{ setMaltaDisplayed }} />

    </div>
  )
}

export default MainMenu
