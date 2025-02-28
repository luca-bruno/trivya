import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react"
import GameSettingsContextValueTypes from "./GameSettingsContext.interface"

export const GameSettingsContext = createContext<GameSettingsContextValueTypes>({
  includedCategories: [],
  setIncludedCategories: () => undefined,
  excludedCategories: [],
  setExcludedCategories: () => undefined,
  questionsQty: 0,
  setQuestionsQty: () => undefined,
  difficulty: "",
  setDifficulty: () => undefined,
  isBasedOnScore: false,
  setIsBasedOnScore: () => undefined,
  isScoreRelativeToDifficulty: false,
  setIsScoreRelativeToDifficulty: () => undefined,
  isTimed: false,
  setIsTimed: () => undefined,
  secondsPerTurn: 0,
  setSecondsPerTurn: () => undefined,
  isScoreRelativeToTime: false,
  setIsScoreRelativeToTime: () => undefined,
  isDisplayingFacts: false,
  setIsDisplayingFacts: () => undefined
})

export const GameSettingsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [includedCategories, setIncludedCategories] = useState<string[]>([])
  const [excludedCategories, setExcludedCategories] = useState<string[]>([])
  const [questionsQty, setQuestionsQty] = useState(0)
  const [difficulty, setDifficulty] = useState("")
  const [isBasedOnScore, setIsBasedOnScore] = useState(false)
  const [isScoreRelativeToDifficulty, setIsScoreRelativeToDifficulty] = useState(false)
  const [isTimed, setIsTimed] = useState(false)
  const [secondsPerTurn, setSecondsPerTurn] = useState(0)
  // this relies on turns being timed so secondsPerTurn > 0 && isBasedOnScore
  const [isScoreRelativeToTime, setIsScoreRelativeToTime] = useState(false)
  const [isDisplayingFacts, setIsDisplayingFacts] = useState(false)

  const contextValue: GameSettingsContextValueTypes = useMemo(
    () => ({
      includedCategories,
      setIncludedCategories,
      excludedCategories,
      setExcludedCategories,
      questionsQty,
      setQuestionsQty,
      difficulty,
      setDifficulty,
      isBasedOnScore,
      setIsBasedOnScore,
      isScoreRelativeToDifficulty,
      setIsScoreRelativeToDifficulty,
      isTimed,
      setIsTimed,
      secondsPerTurn,
      setSecondsPerTurn,
      isScoreRelativeToTime,
      setIsScoreRelativeToTime,
      isDisplayingFacts,
      setIsDisplayingFacts
    }),
    [
      includedCategories,
      excludedCategories,
      questionsQty,
      difficulty,
      isBasedOnScore,
      isScoreRelativeToDifficulty,
      isTimed,
      secondsPerTurn,
      isScoreRelativeToTime,
      isDisplayingFacts
    ]
  )

  //   - Categories [include, exclude, etc - checklist]
  // - Quantity of questions
  // - Difficulty [include, exclude - checklist]
  // - Point-based Y/N
  //     - Points scale respective to difficulty? Y/N
  // - Time-based Y/N
  //     - x seconds per turn
  //     - Points scale respective to time ie. like intelligent time attack ? Y/N
  // - Display facts? Y/N

  return <GameSettingsContext.Provider value={contextValue}>{children}</GameSettingsContext.Provider>
}

export const useGameSettings = () => useContext(GameSettingsContext)
