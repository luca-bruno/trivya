import { Dispatch, SetStateAction } from "react"

interface MalteseQuestionsContextValueTypes {
  isDisplayingMalteseQuestions: boolean
  setIsDisplayingMalteseQuestions: Dispatch<SetStateAction<boolean>>
  isDisplayingMalteseFlag: boolean
  setIsDisplayingMalteseFlag: Dispatch<SetStateAction<boolean>>
}

export default MalteseQuestionsContextValueTypes
