import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { BirthdateDialogSlotsTypes } from "../types/BirthdateDialog.interface"

const BirthdateDialogSlots: React.FC<BirthdateDialogSlotsTypes> = ({
  handleIncrement, handleDecrement, day, month, year, setDay, setMonth, setYear
}) => (
  <div className="flex justify-center m-auto">
    <span className="flex flex-col">
      <FontAwesomeIcon
        icon={["fas", "caret-up"]}
        className="text-primary text-4xl"
        onClick={() => handleIncrement("day")}
      />
      <input
        type="number"
        value={day}
        className="h-16 sm:h-[4.5rem] md:h-20 w-12 sm:w-[4.5rem] md:w-20 border-[3px] md:border-4 border-primary
                            text-primary text-3xl md:text-5xl mx-4 text-center rounded-lg bg-secondary"
        maxLength={2}
        onChange={e => setDay(parseInt(e.target.value, 10))}
    />

      <FontAwesomeIcon
        icon={["fas", "caret-down"]}
        className="text-primary text-4xl"
        onClick={() => handleDecrement("day")}
                          />

    </span>

    <span className="flex flex-col">
      <FontAwesomeIcon
        icon={["fas", "caret-up"]}
        className="text-primary text-4xl"
        onClick={() => handleIncrement("month")}
                          />

      <input
        type="number"
        value={month}
        className="h-16 sm:h-[4.5rem] md:h-20 w-12 sm:w-[4.5rem] md:w-20 border-[3px] md:border-4 border-primary
                            text-primary text-3xl md:text-5xl mx-4 text-center rounded-lg bg-secondary"
        maxLength={2}
        onChange={e => setMonth(parseInt(e.target.value, 10))}
                          />

      <FontAwesomeIcon
        icon={["fas", "caret-down"]}
        className="text-primary text-4xl "
        onClick={() => handleDecrement("month")}
                          />
    </span>

    <span className="flex flex-col">
      <FontAwesomeIcon
        icon={["fas", "caret-up"]}
        className="text-primary text-4xl "
        onClick={() => handleIncrement("year")}
                          />

      <input
        type="number"
        value={year}
        className="h-16 sm:h-[4.5rem] md:h-20 w-24 sm:w-36 md:w-40 border-[3px] md:border-4 border-primary
                            text-primary text-3xl md:text-5xl mx-4 text-center rounded-lg bg-secondary"
        maxLength={4}
        onChange={e => setYear(parseInt(e.target.value, 10))}
                          />

      <FontAwesomeIcon
        icon={["fas", "caret-down"]}
        className="text-primary text-4xl "
        onClick={() => handleDecrement("year")}
                          />

    </span>
  </div>
)

export default BirthdateDialogSlots
