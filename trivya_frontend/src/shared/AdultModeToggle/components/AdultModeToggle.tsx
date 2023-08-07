import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState } from "react"
import { AdminModeContext } from "@contexts/AdminModeContext/AdminModeContext"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"

const AdultModeToggle = () => {
  const { isDisplayingAdultMode, toggleAdultModeDisplay } = useContext(AdultModeContext)
  const { setIsDisplayingAdminMode } = useContext(AdminModeContext)

  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout>()
  const holdDuration = 5000

  const handleHold = () => setIsDisplayingAdminMode(true)

  const onHoldStart = () => setHoldTimer(setTimeout(handleHold, holdDuration))

  const onHoldEnd = () => clearTimeout(holdTimer)

  return (
    <div
      className={`${isDisplayingAdultMode ? "bg-secondary" : "bg-primary"} 
    rounded-full flex justify-center items-center absolute top-3 right-3 w-12 laptopL:w-20 h-12 laptopL:h-20`}
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
        <p className={`${!isDisplayingAdultMode ? "text-secondary" : "text-primary"} text-3xl laptopL:text-5xl font-bold z-10`}>18</p>

        {isDisplayingAdultMode && (
          <FontAwesomeIcon
            icon={["fas", "ban"]}
            className="text-red-primary text-5xl laptopL:text-7xl absolute top-0 right-0 laptopL:right-0 w-12 laptopL:w-20 h-12 laptopL:h-20 z-20"
          />
        )}
      </button>
    </div>
  )
}

export default AdultModeToggle
