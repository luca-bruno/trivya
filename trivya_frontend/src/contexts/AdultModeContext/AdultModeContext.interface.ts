import { Dispatch, SetStateAction } from "react"

interface AdultModeContextValueTypes {
  isDisplayingAdultMode: boolean
  setIsDisplayingAdultMode: Dispatch<SetStateAction<boolean>>
  isBirthdateConfirmed: boolean
  setIsBirthdateConfirmed: Dispatch<SetStateAction<boolean>>
  isBirthdateDialogDisplayed: boolean
  setIsBirthdateDialogDisplayed: Dispatch<SetStateAction<boolean>>
  toggleAdultModeDisplay: () => void
}

export default AdultModeContextValueTypes
