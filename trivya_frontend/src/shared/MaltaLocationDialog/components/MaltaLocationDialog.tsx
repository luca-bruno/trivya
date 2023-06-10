import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const MaltaLocationDialog = ({ setModalDisplayed, setMaltaDisplayed, setMaltaMode }) => {
  const bruh = () => {
    setModalDisplayed(false)
    setMaltaDisplayed(true)
    setMaltaMode(true)
  }

  const bruh2 = () => {
    setModalDisplayed(false)
    setMaltaDisplayed(false)
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 flex m-auto items-center pt-0.5 bg-primary w-72 h-24 rounded-tr-xl rounded-tl-xl">
      <p className="flex text-secondary text-md sm:text-xl text-left px-3 pt-1">
        Joining from Malta?
        <br />
        Would you like for Malta
        <br />
        questions to be included?
      </p>
      <div className="flex flex-col">
        <button type="button" aria-label="Accept Maltese Questions"
          onClick={() => bruh()}
          className="w-full rounded-lg text-primary bg-secondary ml-1 p-1 my-1">
          Yes
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} className="pl-2" />
        </button>
        <button type="button" aria-label="Decline Maltese Questions"
          onClick={() => bruh2()}
          className="w-full rounded-lg text-primary bg-secondary ml-1 p-1">
          No
          <FontAwesomeIcon icon={["fas", "thumbs-down"]} className="pl-2" />
        </button>
      </div>
    </div>

  )
}

export default MaltaLocationDialog
