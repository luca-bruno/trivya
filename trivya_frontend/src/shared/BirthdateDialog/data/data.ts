const buttons = (closeDialog: () => void, submitDialog: () => void) => [
  {
    key: 0,
    icon: "arrow-left",
    action: closeDialog
  },
  {
    key: 1,
    icon: "check",
    action: submitDialog
  }
]

export default buttons
