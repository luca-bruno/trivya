import React, { createContext, useMemo, useState } from "react"
import AdultModeContextValue from "./AdultModeContext.interface"

export const AdultModeContext = createContext<AdultModeContextValue>({
  isDisplayingAdultMode: false,
  setIsDisplayingAdultMode: () => undefined,
  isBirthdateConfirmed: false,
  setIsBirthdateConfirmed: () => undefined,
  isBirthdateDialogDisplayed: false,
  setIsBirthdateDialogDisplayed: () => undefined
})

export const AdultModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDisplayingAdultMode, setIsDisplayingAdultMode] = useState(false)
  const [isBirthdateConfirmed, setIsBirthdateConfirmed] = useState(false)
  const [isBirthdateDialogDisplayed, setIsBirthdateDialogDisplayed] = useState(false)

  const contextValue: AdultModeContextValue = useMemo(() => ({
    isDisplayingAdultMode,
    setIsDisplayingAdultMode,
    isBirthdateConfirmed,
    setIsBirthdateConfirmed,
    isBirthdateDialogDisplayed,
    setIsBirthdateDialogDisplayed
  }), [isBirthdateConfirmed, isBirthdateDialogDisplayed, isDisplayingAdultMode])

  return (
    <AdultModeContext.Provider value={contextValue}>
      { children }
    </AdultModeContext.Provider>
  )
}
