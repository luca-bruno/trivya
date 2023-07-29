import React, { createContext, useMemo, useState } from "react"

interface MalteseQuestionsContextValue {
  isDisplayingMalteseQuestions: boolean
  setDisplayingMalteseQuestions: React.Dispatch<React.SetStateAction<boolean>>
}

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
