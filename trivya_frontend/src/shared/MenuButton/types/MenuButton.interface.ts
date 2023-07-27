interface MenuButtonDetailsTypes {
  key: number
  url: string
  icon: string
  label: string
  displayCondition?: boolean
}

interface MenuButtonTypes {
  button: MenuButtonDetailsTypes
}

export { MenuButtonTypes, MenuButtonDetailsTypes }
