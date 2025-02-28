import { FC } from "react"
import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface MultiselectTypes {
  value: string
  options: [
    {
      id: number
      name: string
    }
  ]
}

const Multiselect: FC<MultiselectTypes> = ({ value, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const toggleOption = option => {
    setSelectedOptions(prevSelected => (prevSelected.includes(option) ? prevSelected.filter(o => o !== option) : [...prevSelected, option]))
  }

  return (
    <div className="">
      <Listbox as="div" className="relative" value={selectedOptions} onChange={toggleOption}>
        <Listbox.Button className="w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm">
          {selectedOptions.length > 0 ? selectedOptions.map(o => o.name).join(", ") : "Select options..."}
          {/* <FontAwesomeIcon
            icon={["fas", `fa-chevron-up-down`] as unknown as IconProp}
            className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          /> */}
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options?.map(option => (
              <Listbox.Option key={option.id} value={option} as={Fragment}>
                {({ active }) => (
                  <li
                    className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? "bg-blue-500 text-white" : "text-gray-900"}`}
                    onClick={() => toggleOption(option)}
                  >
                    <span className={`block truncate ${selectedOptions.includes(option) ? "font-medium" : "font-normal"}`}>{option.name}</span>
                    {selectedOptions.includes(option) && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                        <FontAwesomeIcon icon={["fas", `fa-check`] as unknown as IconProp} className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </span>
                    )}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default Multiselect
