const maltaLocationDialogButtons = (acceptMalteseQuestions: () => void, declineMalteseQuestions: () => void) => [
  {
    key: 0,
    label: "Accept Maltese Questions",
    action: acceptMalteseQuestions,
    text: "Yes",
    icon: "thumbs-up"
  },
  {
    key: 1,
    label: "Decline Maltese Questions",
    action: declineMalteseQuestions,
    text: "No",
    icon: "thumbs-down"
  }
]

export default maltaLocationDialogButtons
