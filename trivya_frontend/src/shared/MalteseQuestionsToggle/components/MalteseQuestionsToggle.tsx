import React, { useState } from "react"
import { CircleFlag } from "react-circle-flags"

const MalteseQuestionsToggle = () => {
  const [isMaltaMode, setMaltaMode] = useState(true)

  // TODO: move to context
  const toggleMaltaMode = () => {
    setMaltaMode(prev => !prev)
  }

  return (
    <button type="button" aria-label="Toggle Maltese questions" onClick={toggleMaltaMode}
      className="cursor-pointer absolute right-logo-spacing sm:right-20 top-1 pt-2 z-20 select-none">
      { isMaltaMode
        ? <CircleFlag countryCode="mt" className="w-12" />
        : (
          <div className="grayscale opacity-80">
            <CircleFlag countryCode="mt" className="w-12" />
          </div>
        )}
    </button>
  )
}

export default MalteseQuestionsToggle
