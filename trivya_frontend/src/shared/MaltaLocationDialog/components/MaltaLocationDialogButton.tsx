import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { MaltaLocationDialogButtonTypes } from "../types/MaltaLocationDialogButton.interface"

const MaltaLocationDialogButton: React.FC<MaltaLocationDialogButtonTypes> = ({ button }) => {
  const { key, label, action, text, icon } = button

  return (
    <button
      type="button"
      aria-label={label}
      onClick={action}
      className={`w-full rounded-lg text-md xl:text-2xl text-primary bg-secondary ml-1 p-1 ${key === 0 ? "my-1" : ""}`}
    >
      {text}
      <FontAwesomeIcon icon={["fas", icon as IconName]} className="pl-2" />
    </button>
  )
}

export default MaltaLocationDialogButton
