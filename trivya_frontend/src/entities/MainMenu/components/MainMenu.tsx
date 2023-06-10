import React, { useState, useEffect } from "react"
import useReactIpLocation from "react-ip-details"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MaltaLocationDialog } from "@shared/MaltaLocationDialog"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import { MenuButton } from "@shared/MenuButton"
import mainMenuButtons from "@shared/MenuButton/data/data"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
// import { useGetPokemonByName2Query } from "./services/test2"
// import { useGetPokemonByNameQuery } from "./services/test"

const MainMenu = () => {
  // // FIXME: Tailwind background-gradient limitation
  // // FIXME: Redundant colour codes same as in tailwind.config.js - required because
  // // direct styling of html selector does not support custom colours
  // const { data, error, isSuccess } = useGetPokemonByNameQuery("bulbasaur")
  // const { data: data2, isSuccess: isSuccess2 } = useGetPokemonByName2Query("absol")

  // if (isSuccess) {
  //   console.log(data)
  // }

  // if (isSuccess2) {
  //   console.log(data2)
  // }

  useBackgroundGradient({ numberOfTeams: 1 })

  const { ipResponse } = useReactIpLocation()
  const { country_name: countryName } = ipResponse || ""

  const [isMaltaDisplayed, setMaltaDisplayed] = useState(false)
  const [isMaltaLocation, setMaltaLocation] = useState(false)
  const [isModalDisplayed, setModalDisplayed] = useState(false)

  const [isMaltaMode, setMaltaMode] = useState(false)
  const [isAdultMode, setAdultMode] = useState(false)

  useEffect(() => {
    if (countryName === "Malta") {
      setMaltaLocation(true)
      setModalDisplayed(true)
      console.log("MALTA CONNECTED")
    }
  }, [countryName])

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
          {/* <button type="button" aria-label="Toggle 18+" onClick={() => toggleAdultMode()}
            className="cursor-pointer absolute right-0 sm:right-3 top-1 pt-1 select-none">
            <p className={`${!isAdultMode ? "text-secondary" : "text-primary"} text-3xl font-bold absolute right-5 top-2 pt-1 z-10`}>18</p>
            { isAdultMode
              ? <FontAwesomeIcon icon={["fas", "ban"]} className="text-red text-5xl absolute right-3 top-1 pt-1 z-20" />
              : <FontAwesomeIcon icon={["fas", "circle"]} className="text-primary text-5xl absolute right-3 top-1 pt-1 z-0" />}
          </button> */}
        </div>
      </div>

      { isMaltaLocation && isModalDisplayed && <MaltaLocationDialog {...{ setModalDisplayed, setMaltaDisplayed, setMaltaMode }} /> }
    </div>
  )
}

export default MainMenu
