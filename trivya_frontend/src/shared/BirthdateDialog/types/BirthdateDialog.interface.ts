interface BirthdateDialogTypes {
  cancelButtonRef: React.MutableRefObject<null>
  open: boolean
  closeDialog: () => void
  submitDialog: () => void
  day: number
  month: number
  year: number
  setDay: (day: number) => void
  setMonth: (month: number) => void
  setYear: (year: number) => void
  getMaxDayForMonth: (month: number, year: number) => 29 | 28 | 30 | 31
  handleMonthChange: (newMonth: number) => void
  handleYearChange: (newYear: number) => void
}

type BirthdateDialogSlotsTypes = Omit<BirthdateDialogTypes, "cancelButtonRef" | "open" | "closeDialog" | "submitDialog">

export { BirthdateDialogTypes, BirthdateDialogSlotsTypes }
