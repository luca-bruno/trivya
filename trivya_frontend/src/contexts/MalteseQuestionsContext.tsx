import React, { createContext, useMemo, useState } from "react"
import MalteseQuestionsContextValue from "./MalteseQuestionsContext.interface"

export const MalteseQuestionsContext = createContext<MalteseQuestionsContextValue>({
  isDisplayingMalteseQuestions: false,
  setDisplayingMalteseQuestions: () => undefined
})

export const MalteseQuestionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDisplayingMalteseQuestions, setDisplayingMalteseQuestions] = useState(false)

  const contextValue: MalteseQuestionsContextValue = useMemo(() => ({
    isDisplayingMalteseQuestions,
    setDisplayingMalteseQuestions
  }), [isDisplayingMalteseQuestions])

  return (
    <MalteseQuestionsContext.Provider value={contextValue}>
      { children }
    </MalteseQuestionsContext.Provider>
  )
}
