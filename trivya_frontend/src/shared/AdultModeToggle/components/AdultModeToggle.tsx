import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import AdultModeToggleTypes from "../types/AdultModeToggle.interface"

const AdultModeToggle: React.FC<AdultModeToggleTypes> = ({ isAdultMode, toggleAdultMode }) => (
  <div className={`${isAdultMode ? "bg-secondary" : "bg-primary"} 
    rounded-full flex justify-center items-center absolute top-3 right-3 w-12 xl:w-20 h-12 xl:h-20`}
  >
    <button
      type="button"
      aria-label="Toggle 18+"
      onClick={toggleAdultMode}
      className="cursor-pointer select-none"
    >
      <p className={`${!isAdultMode ? "text-secondary" : "text-primary"} text-3xl xl:text-5xl font-bold z-10`}>18</p>

      { isAdultMode &&
        <FontAwesomeIcon icon={["fas", "ban"]}
          className="text-red-primary text-5xl xl:text-7xl absolute top-0 right-0 xl:right-0 w-12 xl:w-20 h-12 xl:h-20 z-20"
        />
      }
    </button>
  </div>
)

export default AdultModeToggle
