import React, { createContext, useCallback, useContext, useMemo, useState } from "react"
import AdultModeContextValueTypes from "./AdultModeContext.interface"

export const AdultModeContext = createContext<AdultModeContextValueTypes>({
  isDisplayingAdultMode: false,
  setIsDisplayingAdultMode: () => undefined,
  isBirthdateConfirmed: false,
  setIsBirthdateConfirmed: () => undefined,
  isBirthdateDialogDisplayed: false,
  setIsBirthdateDialogDisplayed: () => undefined,
  toggleAdultModeDisplay: () => undefined
})

export const AdultModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDisplayingAdultMode, setIsDisplayingAdultMode] = useState(false)
  const [isBirthdateConfirmed, setIsBirthdateConfirmed] = useState(false)
  const [isBirthdateDialogDisplayed, setIsBirthdateDialogDisplayed] = useState(false)

  const toggleAdultModeDisplay = useCallback(() => {
    if (!isBirthdateDialogDisplayed && !isBirthdateConfirmed) {
      setIsBirthdateDialogDisplayed(true)
    } else {
      setIsDisplayingAdultMode(prev => !prev)
    }
  }, [isBirthdateConfirmed, isBirthdateDialogDisplayed])

  const contextValue: AdultModeContextValueTypes = useMemo(
    () => ({
      isDisplayingAdultMode,
      setIsDisplayingAdultMode,
      isBirthdateConfirmed,
      setIsBirthdateConfirmed,
      isBirthdateDialogDisplayed,
      setIsBirthdateDialogDisplayed,
      toggleAdultModeDisplay
    }),
    [isBirthdateConfirmed, isBirthdateDialogDisplayed, isDisplayingAdultMode, toggleAdultModeDisplay]
  )

  return <AdultModeContext.Provider value={contextValue}>{children}</AdultModeContext.Provider>
}

export const useAdultMode = () => useContext(AdultModeContext)
