import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import buttons from "../data/data"
import { BirthdateDialogButtonsTypes } from "../types/BirthdateDialog.interface"

const BirthdateDialogButtons: React.FC<BirthdateDialogButtonsTypes> = ({ closeDialog, submitDialog }) => (
  <>
    {buttons(closeDialog, submitDialog).map(({ action, icon, key }) => (
      <button
        key={key}
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2
        text-sm font-semibold text-white shadow-sm mx-3"
        onClick={action}
      >
        <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl" />
      </button>
    ))}
  </>
)

export default BirthdateDialogButtons
