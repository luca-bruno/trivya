import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react"
import NavigationContextValueTypes from "./NavigationContext.interface"

export const NavigationContext = createContext<NavigationContextValueTypes>({ 
  currentView: "/", 
  navigate: () => undefined
})

export const NavigationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState("/")

  const navigate = (view: string) => {
    setCurrentView(view)
  }

  const contextValue: NavigationContextValueTypes = useMemo(
    () => ({ currentView, navigate }), [currentView]
  )

  return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>
}

export const useNavigation = () => useContext(NavigationContext)
