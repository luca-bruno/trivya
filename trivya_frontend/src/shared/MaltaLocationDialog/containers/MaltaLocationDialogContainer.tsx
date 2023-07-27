import useReactIpLocation from "react-ip-details"
import React, { useEffect, useState } from "react"
import { MaltaLocationDialog } from "@shared/MaltaLocationDialog"
import MaltaLocationDialogContainerTypes from "../types/MaltaLocationDialogContainer.interface"

const MaltaLocationDialogContainer: React.FC<MaltaLocationDialogContainerTypes> = ({ setMaltaDisplayed }) => {
  const [isMaltaLocation, setMaltaLocation] = useState(false)
  const [isModalDisplayed, setModalDisplayed] = useState(false)

  const { ipResponse: userIpLocation } = useReactIpLocation()
  const { country_name: countryName } = userIpLocation || ""

  const acceptMalteseQuestions = () => {
    setModalDisplayed(false)
    setMaltaDisplayed(true)
  }

  const declineMalteseQuestions = () => {
    setModalDisplayed(false)
    setMaltaDisplayed(false)
  }

  useEffect(() => {
    if (countryName === "Malta") {
      setMaltaLocation(true)
      setModalDisplayed(true)
      console.log("MALTA CONNECTED")
    }
  }, [countryName, setMaltaLocation, setModalDisplayed])

  return (
    isMaltaLocation && isModalDisplayed && <MaltaLocationDialog {...{ acceptMalteseQuestions, declineMalteseQuestions }} />
  )
}

export default MaltaLocationDialogContainer
