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
        className="bg-primary rounded-lg cursor-pointer
          w-full sm:w-28 md:w-56 lg:w-80 xl:w-[25rem]
          h-28 sm:h-28 lg:h-40 xl:h-44"
      >
        <Link to={url}>
          <FontAwesomeIcon icon={["fas", icon as IconName]} className="text-secondary text-4xl sm:text-5xl xl:text-6xl flex m-auto pb-3" />
          <p className="text-secondary text-md sm:text-xl lg:text-2xl xl:text-3xl font-medium font-secondary select-none">{label}</p>
        </Link>
      </button>
    )
  )
}

export default MenuButton
