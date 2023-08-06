import { Transition, Dialog } from "@headlessui/react"
import React, { Fragment } from "react"
import BirthdateDialogButtons from "./BirthdateDialogButtons"
import { BirthdateDialogTypes } from "../types/BirthdateDialog.interface"
import BirthdateDialogHeader from "./BirthdateDialogHeader"
import BirthdateDialogSlots from "./BirthdateDialogSlots"

const BirthdateDialog: React.FC<BirthdateDialogTypes> = ({
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
}) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50" initialFocus={cancelButtonRef} onClose={closeDialog}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/50 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex h-[65%] items-end justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <Dialog.Panel
              className="relative transform overflow-hidden rounded-lg bg-secondary
              text-left shadow-xl transition-all"
            >
              <div className="px-4 pb-4 pt-5">
                <div className="">
                  <div className="mt-3 text-center text-primary">
                    <BirthdateDialogHeader />

                    <BirthdateDialogSlots
                      {...{
                        handleIncrement,
                        handleDecrement,
                        day,
                        month,
                        year,
                        setDay,
                        setMonth,
                        setYear
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex px-4 py-3">
                <BirthdateDialogButtons {...{ closeDialog, submitDialog }} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

export default BirthdateDialog
