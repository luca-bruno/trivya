import React from "react"

const InstructionPrompt: React.FC<{ text: string; position: string }> = ({ text, position }) => {
  const centre = position === "centre" ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : ""
  // const x = position === "centre" ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : ""

  return (
    <div className={`absolute m-auto bg-secondary w-[95%] h-20 rounded-xl shadow-lg ${centre}`}>
      <p className="flex justify-center items-center transform: translate(-50%, -50%);m-auto h-full text-primary text-center text-xl px-3">{text}</p>
    </div>
  )
}

export default InstructionPrompt
