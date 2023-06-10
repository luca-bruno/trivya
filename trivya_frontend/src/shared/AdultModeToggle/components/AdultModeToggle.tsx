import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import AdultModeToggleTypes from "../types/AdultModeToggleTypes.interface"

const AdultModeToggle: React.FC<AdultModeToggleTypes> = ({ isAdultMode, toggleAdultMode }) => (
  <button type="button" aria-label="Toggle 18+" onClick={toggleAdultMode}
    className="cursor-pointer absolute right-0 sm:right-3 top-1 pt-1 select-none">
    <p className={`${!isAdultMode ? "text-secondary" : "text-primary"} text-3xl font-bold absolute right-5 top-2 pt-1 z-10`}>18</p>
    { isAdultMode
      ? <FontAwesomeIcon icon={["fas", "ban"]} className="text-red text-5xl absolute right-3 top-1 pt-1 z-20" />
      : <FontAwesomeIcon icon={["fas", "circle"]} className="text-primary text-5xl absolute right-3 top-1 pt-1 z-0" />}
  </button>
)

export default AdultModeToggle
