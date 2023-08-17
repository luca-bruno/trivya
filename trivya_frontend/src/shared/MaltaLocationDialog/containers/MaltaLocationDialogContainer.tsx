import useReactIpLocation from "react-ip-details"
import React, { useContext, useEffect, useState } from "react"
import { MaltaLocationDialog } from "@shared/MaltaLocationDialog"
import { MalteseQuestionsContext } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"

const MaltaLocationDialogContainer = () => {
  const [isModalDisplayed, setModalDisplayed] = useState(false)

  const { setIsDisplayingMalteseQuestions, setIsDisplayingMalteseFlag, isDisplayingMalteseQuestions } = useContext(MalteseQuestionsContext)

  const { ipResponse: userIpLocation } = useReactIpLocation()
  const { country_name: countryName } = userIpLocation || ""

  const acceptMalteseQuestions = () => {
    setModalDisplayed(false)
    setIsDisplayingMalteseFlag(true)
    setIsDisplayingMalteseQuestions(true)
  }

  const declineMalteseQuestions = () => {
    setModalDisplayed(false)
    setIsDisplayingMalteseFlag(false)
  }

  useEffect(() => {
    if (countryName === "Malta") {
      setModalDisplayed(true)
    }
  }, [countryName, setModalDisplayed])

  return !isDisplayingMalteseQuestions && isModalDisplayed && <MaltaLocationDialog {...{ acceptMalteseQuestions, declineMalteseQuestions }} />
}

export default MaltaLocationDialogContainer
