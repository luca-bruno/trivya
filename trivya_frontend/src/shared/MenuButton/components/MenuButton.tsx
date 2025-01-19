import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import tilt3dElement from "@shared/helpers/tilt3dElement/tilt3dElement"
import { MenuButtonTypes } from "../types/MenuButton.interface"

const MenuButton: React.FC<MenuButtonTypes> = ({ button }) => {
  const { url, icon, label, displayCondition: condition } = button
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

  // eslint-disable-next-line max-len
  const mediaQueries =
    "w-72 h-72 laptopL:h-72 laptopL:w-72 laptop:w-64 laptop:h-64 mobileL:h-56 mobileL:w-56 mobileM:h-52 mobileM:w-52 mobileS:h-48 mobileS:w-48"

  return (
    condition && (
      <div className={`FLEX-CENTER ${mediaQueries}`}>
        <button
          type="button"
          aria-label={label}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={style}
          className={`bg-primary rounded-lg cursor-pointer ${mediaQueries}`}
        >
          <Link to={url}>
            <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" />
            <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">{label}</p>
          </Link>
        </button>
      </div>
    )
  )
}

export default MenuButton
