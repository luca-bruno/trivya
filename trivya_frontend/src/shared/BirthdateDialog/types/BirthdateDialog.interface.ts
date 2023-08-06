interface BirthdateDialogTypes {
    cancelButtonRef: React.MutableRefObject<null>
    open?: boolean
    closeDialog: () => void
    submitDialog: () => void
    handleDecrement: (field: string) => void
    handleIncrement: (field: string) => void
    day: number
    month: number
    year: number
    setDay: (day: number) => void
    setMonth: (month: number) => void
    setYear: (year: number) => void
}

type BirthdateDialogSlotsTypes = Omit<BirthdateDialogTypes, "cancelButtonRef" | "open" | "closeDialog" | "submitDialog">

type BirthdateDialogButtonsTypes = Pick<BirthdateDialogTypes, "closeDialog" | "submitDialog">

export { BirthdateDialogTypes, BirthdateDialogSlotsTypes, BirthdateDialogButtonsTypes }
