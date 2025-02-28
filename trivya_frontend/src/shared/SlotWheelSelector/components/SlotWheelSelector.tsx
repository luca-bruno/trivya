import { FC, useState, useCallback } from "react"

interface SlotWheelSelectorTypes {
  minValue: number
  maxValue: number
  defaultValue?: number
  setValue: (value: number) => number | void
  value: number
  valueMapper?: Record<string | number, string>
  incrementStep?: number
}

const SlotWheelSelector: FC<SlotWheelSelectorTypes> = ({ minValue, maxValue, defaultValue, setValue, value, valueMapper, incrementStep = 1 }) => {
  const [touchStart, setTouchStart] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [lastTouchY, setLastTouchY] = useState(0)

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0) {
        setValue(prev => Math.min(maxValue, prev + incrementStep))
      } else {
        setValue(prev => Math.max(minValue, prev - incrementStep))
      }
    },
    [minValue, maxValue, setValue]
  )

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.changedTouches[0].clientY)
    setLastTouchY(e.changedTouches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return

    const touchMove = e.changedTouches[0].clientY
    const deltaY = touchMove - lastTouchY
    if (Math.abs(deltaY) > 10) {
      setValue(prev => (deltaY > 0 ? Math.max(minValue, prev - incrementStep) : Math.min(maxValue, prev + incrementStep)))
      setLastTouchY(touchMove)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setTouchStart(0)
    setLastTouchY(0)
  }

  return (
    <div
      className="FLEX-CENTER w-32 h-32 border-2 border-gray-300 rounded-lg bg-gray-50 relative cursor-pointer select-none overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="FLEX-CENTER flex-col space-y-2">
        <div className={`text-lg font-bold text-gray-500 ${value === minValue ? "opacity-0 select-none invisible" : ""}`}>
          {value >= minValue && valueMapper ? valueMapper[value - incrementStep] : value - incrementStep}
        </div>

        <div className="text-3xl font-bold text-gray-700 bg-gray-200 rounded-md px-16 py-2">
          {valueMapper ? valueMapper[value] : value || defaultValue || minValue}
        </div>
        {value < maxValue && (
          <div className="text-lg font-bold text-gray-500">{valueMapper ? valueMapper[value + incrementStep] : value + incrementStep}</div>
        )}
      </div>
    </div>
  )
}

export default SlotWheelSelector
