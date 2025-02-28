import { FC } from "react"

interface InputTypes {
  label?: string
  selected: boolean
  onChange: () => void
}

const Input: FC<InputTypes> = ({ label, selected, onChange }) => {
  return (
    <div className="FLEX-CENTER flex-col ml-0 m-2">
      <label className="block mb-2">{label}</label>
      <input type="checkbox" checked={selected} onChange={onChange} className="border border-gray-300 rounded scale-150" />
    </div>
  )
}

export default Input
