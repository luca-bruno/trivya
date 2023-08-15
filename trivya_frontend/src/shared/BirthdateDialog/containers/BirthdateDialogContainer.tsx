import React, { useContext, useRef, useState } from "react"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"
import BirthdateDialog from "../components/BirthdateDialog"
import { MAX_YEAR, MIN_YEAR } from "../constants"

const BirthdateDialogContainer = () => {
  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(MAX_YEAR)
  const [open, setOpen] = useState(true)

  const isYearValid = year >= MIN_YEAR && year <= MAX_YEAR
  const isValidMonth = month >= 1 && month <= 12
  const isValidDay = () => {
    if (day < 1 || day > 31) return false

    if (month === 2) {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      return (isLeapYear && day <= 29) || (!isLeapYear && day <= 28)
    }

    const monthsWithThirtyDays = [4, 6, 9, 11]
    if (monthsWithThirtyDays.includes(month)) return day <= 30

    return true
  }

  const { setIsBirthdateConfirmed, isBirthdateConfirmed, setIsBirthdateDialogDisplayed, setIsDisplayingAdultMode } = useContext(AdultModeContext)

  const closeDialog = () => {
    setOpen(false)
    setIsBirthdateDialogDisplayed(false)
  }

  const correctBirthdateFormat = () => new Date(year, month - 1, day)

  const compareDate = () => {
    const eighteenYearsAgo = new Date()
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18)

    return correctBirthdateFormat() <= eighteenYearsAgo
  }

  const validateDate = () => {
    if (isYearValid && isValidMonth && isValidDay()) {
      if (compareDate()) {
        setIsBirthdateConfirmed(true)
      }
    }
  }

  const submitDialog = () => {
    validateDate()
    if (isBirthdateConfirmed) {
      setIsDisplayingAdultMode(true)
    }
    closeDialog()
  }

  const handleIncrement = (field: string) => {
    switch (field) {
      case "day":
        setDay(prevDay => (prevDay < 31 ? prevDay + 1 : prevDay))
        break
      case "month":
        setMonth(prevMonth => (prevMonth < 12 ? prevMonth + 1 : prevMonth))
        break
      case "year":
        setYear(prevYear => (prevYear < MAX_YEAR ? prevYear + 1 : prevYear))
        break
      default:
        break
    }
  }

  const handleDecrement = (field: string) => {
    switch (field) {
      case "day":
        setDay(prevDay => (prevDay > 1 ? prevDay - 1 : prevDay))
        break
      case "month":
        setMonth(prevMonth => (prevMonth > 1 ? prevMonth - 1 : prevMonth))
        break
      case "year":
        setYear(prevYear => (prevYear > MIN_YEAR ? prevYear - 1 : prevYear))
        break
      default:
        break
    }
  }

  const cancelButtonRef = useRef(null)

  return (
    <BirthdateDialog
      {...{
        cancelButtonRef,
        open,
        closeDialog,
        submitDialog,
        handleDecrement,
        handleIncrement,
        day,
        month,
        year,
        setDay,
        setMonth,
        setYear
      }}
    />
  )
}

export default BirthdateDialogContainer
