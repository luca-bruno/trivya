import { MouseEvent } from "react"

const tilt3dElement = (e: MouseEvent) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  const xPct = mouseX / rect.width - 0.5
  const yPct = mouseY / rect.height - 0.5

  const tiltX = -yPct * 25
  const tiltY = xPct * 25

  return {
    transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    boxShadow: `${-tiltY * 1.75}px ${tiltX * 1.75}px 0px rgba(0, 0, 0, 0.2)`
  }
}

export default tilt3dElement
