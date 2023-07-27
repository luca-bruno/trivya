import React, { createContext, useState } from "react"

export const AdultModeContext = createContext(false)

export const AdultModeContextProvider = props => {
  const [isAdultMode, setAdultMode] = useState(false)

  return (
    <AdultModeContext.Provider value={[isAdultMode, setAdultMode]}>
      {props.children}
    </AdultModeContext.Provider>
  )
}
