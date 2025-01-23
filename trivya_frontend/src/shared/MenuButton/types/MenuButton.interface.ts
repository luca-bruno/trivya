interface OptionOne {
  targetPath: string
  action?: never
}

interface OptionTwo {
  targetPath?: never
  action: () => unknown
}

type xxx = OptionOne | OptionTwo;

type MenuButtonTypes = {
  id: number
  targetPath?: string
  icons: string[]
  label: string
  isDisplayed?: boolean
  value?: string | boolean | number
  backgroundColour?: string
  textColour?: string
  action?: () => unknown
} & xxx

export default MenuButtonTypes



