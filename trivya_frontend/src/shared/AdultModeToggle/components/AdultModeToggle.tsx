import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useContext, useState } from "react"
import { AdminModeContext } from "@contexts/AdminModeContext/AdminModeContext"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"

const AdultModeToggle: FC = () => {
  const { isDisplayingAdultMode, toggleAdultModeDisplay } = useContext(AdultModeContext)
  const { setIsDisplayingAdminMode } = useContext(AdminModeContext)

  const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout>()
  const holdDuration = 5000

  const handleHold = () => setIsDisplayingAdminMode(true)

  const onHoldStart = () => setHoldTimer(setTimeout(handleHold, holdDuration))

  const onHoldEnd = () => clearTimeout(holdTimer)

  return (
    <button
      type="button"
      aria-label="Toggle 18+"
      onClick={toggleAdultModeDisplay}
      onMouseDown={onHoldStart}
      onMouseUp={onHoldEnd}
      onTouchStart={onHoldStart}
      onTouchEnd={onHoldEnd}
      className={`${isDisplayingAdultMode ? "grayscale" : ""} 
        "cursor-pointer select-none rounded-full FLEX-CENTER absolute top-3 right-3 w-12 laptopL:w-20 h-12 laptopL:h-20 bg-primary`}
        >
      <p className="text-secondary text-3xl laptopL:text-5xl font-bold z-10">
        <FontAwesomeIcon
          icon={["fas", "champagne-glasses"]}
          className="w-10 laptopL:w-18 h-10 laptopL:h-18 z-20"
          />
      </p>
    </button>
  )
}

export default AdultModeToggle
