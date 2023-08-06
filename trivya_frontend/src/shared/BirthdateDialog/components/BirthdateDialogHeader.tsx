import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dialog } from "@headlessui/react"
import React from "react"

const BirthdateDialogHeader = () => (
  <>
    <FontAwesomeIcon
      icon={["fas", "cake"]}
      className="text-4xl mb-6"
    />
    <Dialog.Title as="h3" className="font-semibold leading-6 text-2xl sm:text-3xl mb-8">
      Enter your date of birth
    </Dialog.Title>
  </>
)

export default BirthdateDialogHeader
