import React, { createContext, useState } from "react"

export const MalteseQuestionsContext = createContext(false)

export const MalteseQuestionsContextProvider = props => {
  const [isDisplayingMalteseQuestions, setDisplayingMalteseQuestions] = useState(false)

  return (
    <MalteseQuestionsContext.Provider value={[isDisplayingMalteseQuestions, setDisplayingMalteseQuestions]}>
      {props.children}
    </MalteseQuestionsContext.Provider>
  )
}
