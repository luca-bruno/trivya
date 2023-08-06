interface AdultModeContextValue {
    isDisplayingAdultMode: boolean
    setIsDisplayingAdultMode: React.Dispatch<React.SetStateAction<boolean>>
    isBirthdateConfirmed: boolean
    setIsBirthdateConfirmed: React.Dispatch<React.SetStateAction<boolean>>
    isBirthdateDialogDisplayed: boolean
    setIsBirthdateDialogDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

export default AdultModeContextValue
