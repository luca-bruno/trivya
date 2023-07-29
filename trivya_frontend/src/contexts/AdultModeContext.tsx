import React, { createContext, useMemo, useState } from "react"

interface AdultModeContextValue {
  isAdultMode: boolean
  setAdultMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const AdultModeContext = createContext<AdultModeContextValue>({
  isAdultMode: false,
  setAdultMode: () => undefined
})

export const AdultModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdultMode, setAdultMode] = useState(false)

  const contextValue: AdultModeContextValue = useMemo(() => ({
    isAdultMode,
    setAdultMode
  }), [isAdultMode])

  return (
    <AdultModeContext.Provider value={contextValue}>
      { children }
    </AdultModeContext.Provider>
  )
}
