import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react"
import AdminModeContextValueTypes from "./AdminModeContext.interface"

export const AdminModeContext = createContext<AdminModeContextValueTypes>({
  isDisplayingAdminMode: false,
  setIsDisplayingAdminMode: () => undefined
})

export const AdminModeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDisplayingAdminMode, setIsDisplayingAdminMode] = useState(false)

  const contextValue: AdminModeContextValueTypes = useMemo(
    () => ({
      isDisplayingAdminMode,
      setIsDisplayingAdminMode
    }),
    [isDisplayingAdminMode]
  )

  return <AdminModeContext.Provider value={contextValue}>{children}</AdminModeContext.Provider>
}

export const useAdminMode = () => useContext(AdminModeContext)
