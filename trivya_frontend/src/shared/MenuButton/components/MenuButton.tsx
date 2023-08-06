import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import { MenuButtonTypes } from "../types/MenuButton.interface"

const MenuButton: React.FC<MenuButtonTypes> = ({ button }) => {
  const { url, icon, label, displayCondition: condition } = button

  return (
    condition && (
      <button
        type="button"
        aria-label={label}
        className="bg-primary rounded-lg cursor-pointer w-full laptopL:w-[25rem] h-28 mobileL:h-28 laptop:h-40 laptopL:h-44"
      >
        <Link to={url}>
          <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl laptop:text-5xl laptopL:text-6xl flex m-auto pb-3" />
          <p className="text-secondary text-md laptop:text-2xl laptopL:text-3xl font-medium font-secondary select-none">{label}</p>
        </Link>
      </button>
    )
  )
}

export default MenuButton
