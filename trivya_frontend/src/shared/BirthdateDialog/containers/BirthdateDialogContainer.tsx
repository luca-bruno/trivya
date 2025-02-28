import { useContext, useRef, useState, useCallback, useEffect } from "react"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"
import BirthdateDialog from "../components/BirthdateDialog"
import { MAX_YEAR, MIN_YEAR } from "@shared/constants"

const BirthdateDialogContainer = () => {
  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(MAX_YEAR)
  const [open, setOpen] = useState(true)

  // Function to get the max days for the given month and year
  const getMaxDayForMonth = useCallback((month: number, year: number) => {
    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      return isLeapYear ? 29 : 28
    }
    const monthsWith30Days = [4, 6, 9, 11]
    return monthsWith30Days.includes(month) ? 30 : 31
  }, [])

  // Automatically adjust the day if it's invalid for the selected month/year
  useEffect(() => {
    const maxDayInMonth = getMaxDayForMonth(month, year)
    if (day > maxDayInMonth) {
      setDay(maxDayInMonth) // Adjust the day to the max day of the selected month/year
    }
  }, [month, year, day, getMaxDayForMonth]) // Trigger this effect when month, year, or day changes

  // Handle changes in month
  const handleMonthChange = useCallback((newMonth: number) => {
    setMonth(newMonth)
  }, [])

  // Handle changes in year
  const handleYearChange = useCallback((newYear: number) => {
    setYear(newYear)
  }, [])

  // Validation checks for year, month, and day
  const isYearValid = year >= MIN_YEAR && year <= MAX_YEAR
  const isValidMonth = month >= 1 && month <= 12
  const isValidDay = day > 0 && day <= getMaxDayForMonth(month, year)

  const { setIsBirthdateConfirmed, setIsBirthdateDialogDisplayed, setIsDisplayingAdultMode } = useContext(AdultModeContext)

  const closeDialog = () => {
    setOpen(false)
    setIsBirthdateDialogDisplayed(false)
  }

  // Function to validate the birthdate is over 18 years ago
  const correctBirthdateFormat = () => new Date(year, month - 1, day)

  const compareDate = useCallback(() => {
    const eighteenYearsAgo = new Date()
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18)
    return correctBirthdateFormat() <= eighteenYearsAgo
  }, [year, month, day])

  // Validate the birthdate and confirm if valid
  const validateDate = useCallback(() => {
    if (isYearValid && isValidMonth && isValidDay && compareDate()) {
      setIsBirthdateConfirmed(true)
    }
  }, [isYearValid, isValidMonth, isValidDay, compareDate, setIsBirthdateConfirmed])

  const submitDialog = () => {
    validateDate()
    if (isYearValid && isValidMonth && isValidDay && compareDate()) {
      setIsDisplayingAdultMode(true)
    }
    closeDialog()
  }

  const cancelButtonRef = useRef(null)

  return (
    <BirthdateDialog
      cancelButtonRef={cancelButtonRef}
      open={open}
      closeDialog={closeDialog}
      submitDialog={submitDialog}
      day={day}
      month={month}
      year={year}
      setDay={setDay}
      setMonth={setMonth}
      setYear={setYear}
      getMaxDayForMonth={getMaxDayForMonth}
      handleMonthChange={handleMonthChange}
      handleYearChange={handleYearChange}
    />
  )
}

export default BirthdateDialogContainer
