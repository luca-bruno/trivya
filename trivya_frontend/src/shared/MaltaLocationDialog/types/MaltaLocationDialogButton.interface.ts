interface MaltaLocationDialogButtonDetailsTypes {
    key: number
    icon: string
    label: string
    action: () => void
    text: string
}

interface MaltaLocationDialogButtonTypes {
    button: MaltaLocationDialogButtonDetailsTypes
}

export { MaltaLocationDialogButtonTypes, MaltaLocationDialogButtonDetailsTypes }
