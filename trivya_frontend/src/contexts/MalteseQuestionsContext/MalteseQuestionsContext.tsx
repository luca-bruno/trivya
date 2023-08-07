import React, { createContext, useMemo, useState } from "react"
import MalteseQuestionsContextValue from "./MalteseQuestionsContext.interface"

export const MalteseQuestionsContext = createContext<MalteseQuestionsContextValue>({
  isDisplayingMalteseQuestions: false,
  setIsDisplayingMalteseQuestions: () => undefined,
  isDisplayingMalteseFlag: false,
  setIsDisplayingMalteseFlag: () => undefined
})

export const MalteseQuestionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDisplayingMalteseQuestions, setIsDisplayingMalteseQuestions] = useState(false)
  const [isDisplayingMalteseFlag, setIsDisplayingMalteseFlag] = useState(false)

  const contextValue: MalteseQuestionsContextValue = useMemo(
    () => ({
      isDisplayingMalteseQuestions,
      setIsDisplayingMalteseQuestions,
      isDisplayingMalteseFlag,
      setIsDisplayingMalteseFlag
    }),
    [isDisplayingMalteseFlag, isDisplayingMalteseQuestions]
  )

  return <MalteseQuestionsContext.Provider value={contextValue}>{children}</MalteseQuestionsContext.Provider>
}
