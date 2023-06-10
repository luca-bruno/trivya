interface MenuButtonDetailsTypes {
  key: number
  url: string
  icon: string
  label: string
  condition?: boolean
}

interface MenuButtonTypes {
  button: MenuButtonDetailsTypes
}

export { MenuButtonTypes, MenuButtonDetailsTypes }
