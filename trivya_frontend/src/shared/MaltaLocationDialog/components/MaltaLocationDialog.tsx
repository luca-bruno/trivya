import React from "react"
import MaltaLocationDialogTypes from "../types/MaltaLocationDialog.interface"
import maltaLocationDialogButtons from "../data/data"
import MaltaLocationDialogButton from "./MaltaLocationDialogButton"

const MaltaLocationDialog: React.FC<MaltaLocationDialogTypes> = ({ acceptMalteseQuestions, declineMalteseQuestions }) => (
  <div className="absolute bottom-0 left-0 right-0 flex m-auto items-center justify-center
    pt-0.5 bg-primary w-72 xl:w-[30rem] h-24 xl:h-36 rounded-tr-xl rounded-tl-xl"
  >
    <p className="flex text-secondary text-md xl:text-2xl sm:text-xl text-left px-3 pt-1">
      Joining from Malta? 🇲🇹
      <br />
      Would you like for Malta
      <br />
      questions to be included?
    </p>

    <div className="flex flex-col">
      {maltaLocationDialogButtons(acceptMalteseQuestions, declineMalteseQuestions).map(button => (
        <MaltaLocationDialogButton key={button.key} button={button} />
      ))}
    </div>
  </div>

)

export default MaltaLocationDialog
