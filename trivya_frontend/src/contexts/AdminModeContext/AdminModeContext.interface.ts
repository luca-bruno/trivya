import { Dispatch, SetStateAction } from "react"

interface AdminModeContextValueTypes {
  isDisplayingAdminMode: boolean
  setIsDisplayingAdminMode: Dispatch<SetStateAction<boolean>>
}

export default AdminModeContextValueTypes
