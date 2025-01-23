import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react"
import MalteseQuestionsContextValueTypes from "./MalteseQuestionsContext.interface"

export const MalteseQuestionsContext = createContext<MalteseQuestionsContextValueTypes>({
  isDisplayingMalteseQuestions: false,
  setIsDisplayingMalteseQuestions: () => undefined,
  isDisplayingMalteseFlag: false,
  setIsDisplayingMalteseFlag: () => undefined
})

export const MalteseQuestionsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDisplayingMalteseQuestions, setIsDisplayingMalteseQuestions] = useState(false)
  const [isDisplayingMalteseFlag, setIsDisplayingMalteseFlag] = useState(false)

  const contextValue: MalteseQuestionsContextValueTypes = useMemo(
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

export const useMalteseQuestions = () => useContext(MalteseQuestionsContext)
