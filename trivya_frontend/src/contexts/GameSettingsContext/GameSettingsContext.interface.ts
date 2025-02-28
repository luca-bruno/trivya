import { Dispatch, SetStateAction } from "react"

interface GameSettingsContextValueTypes {
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  questionsQty: number
  setQuestionsQty: Dispatch<SetStateAction<number>>
  difficulty: string
  setDifficulty: Dispatch<SetStateAction<string>>
  isBasedOnScore: boolean
  setIsBasedOnScore: Dispatch<SetStateAction<boolean>>
  isScoreRelativeToDifficulty: boolean
  setIsScoreRelativeToDifficulty: Dispatch<SetStateAction<boolean>>
  isTimed: boolean
  setIsTimed: Dispatch<SetStateAction<boolean>>
  secondsPerTurn: number
  setSecondsPerTurn: Dispatch<SetStateAction<number>>
  isScoreRelativeToTime: boolean
  setIsScoreRelativeToTime: Dispatch<SetStateAction<boolean>>
  isDisplayingFacts: boolean
  setIsDisplayingFacts: Dispatch<SetStateAction<boolean>>
}

export default GameSettingsContextValueTypes
