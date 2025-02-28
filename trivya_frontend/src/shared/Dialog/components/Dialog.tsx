import { FC, MutableRefObject, ReactNode } from "react"
import { Fragment } from "react"
import { Transition, Dialog as HeadlessDialog } from "@headlessui/react"
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface DialogTypes {
  open: boolean
  closeDialog: () => void
  height?: string
  buttons?: {
    label?: string
    icon?: string
    onClick: () => void
  }[]
  cancelButtonRef?: MutableRefObject<null>
  children: ReactNode
}

const Dialog: FC<DialogTypes> = ({ open, closeDialog, height = "60%", buttons, cancelButtonRef, children }) => (
  <Transition.Root show={open} as={Fragment}>
    <HeadlessDialog as="div" className="FLEX-CENTER inset-0 overflow-y-auto z-50" initialFocus={cancelButtonRef} onClose={closeDialog}>
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

      <div className="fixed FLEX-CENTER inset-0 z-10 overflow-y-auto">
        <div className={`flex h-[${height}] items-end justify-center p-4 text-center`}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <HeadlessDialog.Panel
              className="relative transform overflow-hidden rounded-lg bg-secondary
              text-left shadow-xl transition-all"
            >
              <div className="px-4 pb-4 pt-5">
                <div>
                  <div className="mt-3 text-center text-primary">{children}</div>
                </div>
              </div>
              <div className="flex px-4 py-3">
                {buttons?.map(({ label, icon, onClick }) => (
                  <button
                    type="button"
                    className="w-full FLEX-CENTER rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm mx-3"
                    onClick={onClick}
                  >
                    {icon && <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl" />}
                    {label}
                  </button>
                ))}
              </div>
            </HeadlessDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HeadlessDialog>
  </Transition.Root>
)

export default Dialog
