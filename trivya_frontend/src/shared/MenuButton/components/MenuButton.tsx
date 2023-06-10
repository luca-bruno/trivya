import { IconName } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import { MenuButtonTypes } from "../types/MenuButton.interface"

const MenuButton: React.FC<MenuButtonTypes> = ({ button }) => {
  const { url, icon, label } = button

  return (
    <button type="button" aria-label={label} className="bg-primary rounded-lg cursor-pointer w-28 h-28 sm:w-40 sm:h-40">
      <Link to={url}>
        <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl sm:text-5xl flex m-auto pb-3" />
        <p className="text-secondary text-md sm:text-xl font-medium font-secondary select-none">{label}</p>
      </Link>
    </button>
  )
}

export default MenuButton
