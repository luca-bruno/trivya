import React, { createContext, useMemo, useState } from "react"
import AdminModeContextValue from "./AdminModeContext.interface"

export const AdminModeContext = createContext<AdminModeContextValue>({
  isDisplayingAdminMode: false,
  setIsDisplayingAdminMode: () => undefined
})

export const AdminModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDisplayingAdminMode, setIsDisplayingAdminMode] = useState(false)

  const contextValue: AdminModeContextValue = useMemo(
    () => ({
      isDisplayingAdminMode,
      setIsDisplayingAdminMode
    }),
    [isDisplayingAdminMode]
  )

  return <AdminModeContext.Provider value={contextValue}>{children}</AdminModeContext.Provider>
}
