import React from "react"
import SlotWheelSelector from "@shared/SlotWheelSelector"
import { BirthdateDialogTypes } from "../types/BirthdateDialog.interface"
import BirthdateDialogHeader from "./BirthdateDialogHeader"
import SlotWheels from "./SlotWheels"
import Dialog from "@shared/Dialog"
import { MIN_YEAR, MAX_YEAR } from "@shared/constants"

const BirthdateDialog: React.FC<BirthdateDialogTypes> = ({
  cancelButtonRef,
  open,
  closeDialog,
  submitDialog,
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  getMaxDayForMonth,
  handleMonthChange,
  handleYearChange
}) => {
  const monthMap = {
    0: "_",
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC"
  }

  return (
    <Dialog
      {...{
        open,
        closeDialog,
        height: "65%",
        buttons: [
          { label: "Select All", icon: "caret-left", onClick: () => closeDialog() },
          { label: "Confirm", icon: "check", onClick: () => submitDialog() }
        ],
        cancelButtonRef
      }}
    >
      <BirthdateDialogHeader />
      <SlotWheels>
        <SlotWheelSelector
          {...{
            minValue: 1,
            maxValue: getMaxDayForMonth(month, year),
            setValue: setDay,
            value: day
          }}
        />
        <SlotWheelSelector
          {...{
            minValue: 1,
            maxValue: 12,
            setValue: newMonth => handleMonthChange(newMonth),
            value: month,
            valueMapper: monthMap
          }}
        />
        <SlotWheelSelector
          {...{
            minValue: MIN_YEAR,
            maxValue: MAX_YEAR,
            defaultValue: MAX_YEAR,
            setValue: newYear => handleYearChange(newYear),
            value: year
          }}
        />
      </SlotWheels>
    </Dialog>
  )
}

export default BirthdateDialog
