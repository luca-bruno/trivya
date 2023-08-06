import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import AdultModeToggleTypes from "../types/AdultModeToggle.interface"

const AdultModeToggle: React.FC<AdultModeToggleTypes> = ({ isDisplayingAdultMode, toggleAdultModeDisplay, setIsDisplayingAdminMode }) => {
  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout>()
  const holdDuration = 5000

  const handleHold = () => setIsDisplayingAdminMode(true)

  const onHoldStart = () => setHoldTimer(setTimeout(handleHold, holdDuration))

  const onHoldEnd = () => clearTimeout(holdTimer)

  return (
    <div className={`${isDisplayingAdultMode ? "bg-secondary" : "bg-primary"} 
    rounded-full flex justify-center items-center absolute top-3 right-3 w-12 xl:w-20 h-12 xl:h-20`}
  >
      <button
        type="button"
        aria-label="Toggle 18+"
        onClick={toggleAdultModeDisplay}
        onMouseDown={onHoldStart}
        onMouseUp={onHoldEnd}
        onTouchStart={onHoldStart}
        onTouchEnd={onHoldEnd}
        className="cursor-pointer select-none"
    >
        <p className={`${!isDisplayingAdultMode ? "text-secondary" : "text-primary"} text-3xl xl:text-5xl font-bold z-10`}>18</p>

        { isDisplayingAdultMode &&
          <FontAwesomeIcon icon={["fas", "ban"]}
            className="text-red-primary text-5xl xl:text-7xl absolute top-0 right-0 xl:right-0 w-12 xl:w-20 h-12 xl:h-20 z-20"
          />
        }
      </button>
    </div>
  )
}

export default AdultModeToggle
