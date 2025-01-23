import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import tilt3dElement from "@shared/helpers/tilt3dElement"
import { useNavigation } from "@contexts/NavigationContext/NavigationContext"
import MenuButtonTypes from "../types/MenuButton.interface"

const MenuButton: React.FC<MenuButtonTypes> = ({ targetPath, icons, label, isDisplayed = true, backgroundColour, textColour, action }) => {
  const mediaQueries =
    "w-72 h-72 laptopL:h-72 laptopL:w-72 laptop:w-64 laptop:h-64 mobileL:h-56 mobileL:w-56 mobileM:h-52 mobileM:w-52 mobileS:h-48 mobileS:w-48"

  const textColourCondition = textColour || "text-secondary"

  const [style, setStyle] = useState({})

  const handleMouseMove = (e: React.MouseEvent) => {
    setStyle(tilt3dElement(e))
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      boxShadow: "none",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
      perspective: "1000px"
    })
  }

  const buttonContents = (
    <>
      {icons.map(icon => (
        <FontAwesomeIcon
          key={icon}
          icon={["fas", icon as IconName]}
          style={{ color: textColour }}
          className={`${textColourCondition} text-4xl laptop:text-5xl laptopL:text-6xl px-2 m-auto pb-3`}
        />
      ))}
      <p className={`${textColourCondition} text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none`}>{label}</p>
    </>
  )

  const { navigate } = useNavigation()

  return (
    isDisplayed && (
      <div className={`FLEX-CENTER ${mediaQueries}`}>
        <button
          type="button"
          onClick={!targetPath ? () => action : () => navigate(targetPath)}
          aria-label={label}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={style}
          className={`${backgroundColour || "bg-primary"} rounded-lg cursor-pointer ${mediaQueries}`}
        >
          {buttonContents}
        </button>
      </div>
    )
  )
}

export default MenuButton
