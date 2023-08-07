import useReactIpLocation from "react-ip-details"
import React, { useContext, useEffect, useState } from "react"
import { MaltaLocationDialog } from "@shared/MaltaLocationDialog"
import { MalteseQuestionsContext } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"

const MaltaLocationDialogContainer = () => {
  const [isMaltaUserLocation, setMaltaUserLocation] = useState(false)
  const [isModalDisplayed, setModalDisplayed] = useState(false)

  const { setIsDisplayingMalteseQuestions, setIsDisplayingMalteseFlag } = useContext(MalteseQuestionsContext)

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
      setMaltaUserLocation(true)
      setModalDisplayed(true)
    }
  }, [countryName, setMaltaUserLocation, setModalDisplayed])

  return isMaltaUserLocation && isModalDisplayed && <MaltaLocationDialog {...{ acceptMalteseQuestions, declineMalteseQuestions }} />
}

export default MaltaLocationDialogContainer
