import { useMalteseQuestions } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"
import { CircleFlag } from "react-circle-flags"

const MalteseQuestionsToggle = () => {
  const flag = <CircleFlag countryCode="mt" className="w-12 laptopL:w-20 h-12 laptopL:h-20" />

  const { isDisplayingMalteseQuestions, setIsDisplayingMalteseQuestions } = useMalteseQuestions()

  const toggleDisplayingMalteseQuestions = () => setIsDisplayingMalteseQuestions(prev => !prev)

  return (
    <button
      type="button"
      aria-label="Toggle Maltese questions"
      onClick={toggleDisplayingMalteseQuestions}
      className="cursor-pointer absolute right-[4.5rem] laptopL:right-[7rem] top-1 pt-2 z-20 select-none"
    >
      {isDisplayingMalteseQuestions ? flag : <div className="grayscale opacity-80">{flag}</div>}
    </button>
  )
}

export default MalteseQuestionsToggle
