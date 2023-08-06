import { MalteseQuestionsContext } from "@contexts/MalteseQuestionsContext"
import React, { useContext } from "react"
import { CircleFlag } from "react-circle-flags"

const MalteseQuestionsToggle = () => {
  const flag = <CircleFlag countryCode="mt" className="w-12 xl:w-20 h-12 xl:h-20" />

  const { isDisplayingMalteseQuestions, setDisplayingMalteseQuestions } = useContext(MalteseQuestionsContext)

  const toggleDisplayingMalteseQuestions = () => setDisplayingMalteseQuestions(prev => !prev)

  return (
    <button
      type="button"
      aria-label="Toggle Maltese questions"
      onClick={toggleDisplayingMalteseQuestions}
      className="cursor-pointer absolute right-[4.5rem] xl:right-[7rem] top-1 pt-2 z-20 select-none"
    >
      { isDisplayingMalteseQuestions ? flag : <div className="grayscale opacity-80">{ flag }</div> }
    </button>
  )
}

export default MalteseQuestionsToggle
