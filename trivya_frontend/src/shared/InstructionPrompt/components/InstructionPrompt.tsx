import React from "react"

const InstructionPrompt: React.FC<{ text: string }> = ({ text }) => (
  <div className="absolute m-auto top-0 left-0 right-0 pt-0.5 bg-secondary w-[95%] h-9 rounded-br-xl rounded-bl-xl shadow-lg">
    <p className="text-primary text-center text-xl px-3 rounded-br-xl rounded-bl-xl">{text}</p>
  </div>
)

export default InstructionPrompt
