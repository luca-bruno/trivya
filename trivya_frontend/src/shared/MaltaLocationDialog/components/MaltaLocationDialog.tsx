import React from "react"
import MaltaLocationDialogTypes from "../types/MaltaLocationDialog.interface"
import buttons from "../data/data"
import MaltaLocationDialogButton from "./MaltaLocationDialogButton"

const MaltaLocationDialog: React.FC<MaltaLocationDialogTypes> = ({ acceptMalteseQuestions, declineMalteseQuestions }) => (
  <div
    className="absolute bottom-0 left-0 right-0 flex m-auto items-center justify-center
    pt-0.5 bg-primary w-72 mobileL:w-80 laptop:w-[30rem] h-24 laptop:h-36 rounded-tr-xl rounded-tl-xl"
  >
    <div className="text-secondary text-md laptop:text-2xl text-left mobileL:px-3 mobileL:pt-1 font-secondary">
      <p className="font-semibold">Joining from Malta? 🇲🇹</p>
      <p>
        Would you like for Malta
        <br />
        questions to be included?
      </p>
    </div>

    <div className="flex flex-col">
      {buttons(acceptMalteseQuestions, declineMalteseQuestions).map(button => (
        <MaltaLocationDialogButton key={button.key} button={button} />
      ))}
    </div>
  </div>
)

export default MaltaLocationDialog
