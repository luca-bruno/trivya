const buttons = (closeDialog: () => void, submitDialog: () => void) => [
  {
    key: 0,
    icon: "caret-left",
    action: closeDialog
  },
  {
    key: 1,
    icon: "check",
    action: submitDialog
  }
]

export default buttons
