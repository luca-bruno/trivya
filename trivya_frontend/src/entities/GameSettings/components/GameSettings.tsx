import { useGameSettings } from "@contexts/GameSettingsContext/GameSettingsContext"
import SlotWheelSelector from "@shared/SlotWheelSelector"
import { useState } from "react"
import Header from "@shared/Header"
import Input from "@shared/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dialog as HeadlessDialog } from "@headlessui/react"
import Dialog from "@shared/Dialog"
import { CATEGORIES } from "@shared/constants"
import { IconName } from "@fortawesome/fontawesome-svg-core"

const GameSettings = () => {
  const {
    selectedCategories,
    setSelectedCategories,
    questionsQty,
    setQuestionsQty,
    difficulty,
    setDifficulty,
    isBasedOnScore,
    setIsBasedOnScore,
    isScoreRelativeToDifficulty,
    setIsScoreRelativeToDifficulty,
    isTimed,
    setIsTimed,
    secondsPerTurn,
    setSecondsPerTurn,
    isScoreRelativeToTime,
    setIsScoreRelativeToTime,
    isDisplayingFacts,
    setIsDisplayingFacts
  } = useGameSettings()

  const [isDisplayingDialog, setIsDisplayingDialog] = useState(false)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  //   - Categories [include, exclude, etc - checklist]
  //   - Quantity of questions
  //   - Difficulty [include, exclude - checklist]
  //   - Point-based Y/N
  //       - Points scale respective to difficulty? Y/N
  //   - Time-based Y/N
  //       - x seconds per turn
  //       - Points scale respective to time ie. like intelligent time attack ? Y/N
  //     - Display facts? Y/N

  const gameSettingsButtons = [
    {
      id: 1,
      component: ({ value }) => {
        const [selected, setSelected] = useState(value)

        return (
          <div className="FLEX-CENTER">
            <button type="button" className="rounded-xl bg-red-500 w-32 h-10" onClick={() => setIsDisplayingDialog(true)}>
              Select
            </button>
            {isDisplayingDialog && (
              <Dialog
                {...{
                  open: isDisplayingDialog,
                  closeDialog: () => setIsDisplayingDialog(false),
                  buttons: [
                    { label: "Select All", onClick: () => setIsDisplayingDialog(true) },
                    { label: "Select None", onClick: () => setIsDisplayingDialog(true) },
                    { label: "Confirm", onClick: () => setIsDisplayingDialog(true) }
                  ]
                }}
              >
                <>
                  <FontAwesomeIcon icon={["fas", "comments"]} className="text-4xl mb-6" />
                  <HeadlessDialog.Title as="h3" className="font-semibold leading-6 text-xl mobileL:text-2xl mb-8">
                    Include/Exclude categories
                  </HeadlessDialog.Title>
                </>

                <div className="flex flex-start flex-col max-h-96 overflow-auto">
                  {CATEGORIES.map((difficulty, index) => (
                    // MAKE BG 3 COLOURS - bg-gray-500/50 unselected - DECIDE ON SELECTED AND HIDDEN higher and lower opacity respectively
                    <div className={`grid grid-cols-5 rounded-xl bg-gray-500/50 py-3 my-1 mx-3`}>
                      <p className="col-span-2 px-2">{difficulty}</p>
                      <p />
                      <FontAwesomeIcon icon={["fas", "check"]} className="text-green-500 m-auto text-xl" />
                      <FontAwesomeIcon icon={["fas", "x"]} className="text-red-500 m-auto text-xl" />
                    </div>
                  ))}
                </div>
              </Dialog>
            )}
          </div>
        )
      },
      label: "Include/Exclude Categories",
      value: selectedCategories
    },
    {
      id: 2,
      component: ({ defaultValue }) => {
        const [x, setX] = useState(defaultValue)

        return (
          <div className="FLEX-CENTER">
            <SlotWheelSelector {...{ minValue: 1, maxValue: 100, defaultValue: x, setValue: setX, value: x }} />
          </div>
        )
      },
      label: "Quantity of Questions",
      defaultValue: questionsQty
    },
    {
      id: 3,
      component: ({ value }) => {
        const [selected, setSelected] = useState(value)

        const difficultyLevels = ["Easy", "Medium", "Hard", "Extreme"]

        return (
          <div className="FLEX-CENTER flex-wrap">
            {difficultyLevels.map((difficulty, index) => (
              <Input
                key={index}
                label={difficulty}
                selected={selected === difficulty.toLowerCase()}
                onChange={() => setSelected(difficulty.toLowerCase())}
              />
            ))}
          </div>
        )
      },
      label: "Difficulty",
      value: difficulty
    },
    {
      id: 4,
      component: ({ value }) => {
        const [x, setX] = useState(value)
        return <Input {...{ selected: x, onChange: () => setX(prev => !prev) }} />
      },
      label: "Point-based Scoring",
      value: isBasedOnScore
    },
    {
      id: 5,
      component: ({ value }) => {
        const [x, setX] = useState(value)
        return <Input {...{ selected: x, onChange: () => setX(prev => !prev) }} />
      },
      label: "Points scale respective to difficulty",
      value: isScoreRelativeToDifficulty
    },
    {
      id: 6,
      component: ({ value }) => {
        const [x, setX] = useState(value)
        return <Input {...{ selected: x, onChange: () => setX(prev => !prev) }} />
      },
      label: "Time-based Gameplay",
      value: isTimed
    },
    {
      id: 7,
      component: ({ value }) => {
        const [x, setX] = useState(value)

        return (
          <div className="FLEX-CENTER">
            <SlotWheelSelector {...{ minValue: 10, maxValue: 90, defaultValue: x, setValue: setX, value: x, incrementStep: 10 }} />
          </div>
        )
      },
      label: "Seconds per turn",
      value: secondsPerTurn,
      default: 30
    },
    {
      id: 8,
      component: ({ value }) => {
        const [x, setX] = useState(value)
        return <Input {...{ selected: x, onChange: () => setX(prev => !prev) }} />
      },
      label: "Points scale respective to time",
      value: isScoreRelativeToTime
    },
    {
      id: 9,
      component: ({ value }) => {
        const [x, setX] = useState(value)
        return <Input {...{ selected: x, onChange: () => setX(prev => !prev) }} />
      },
      label: "Display Facts",
      value: isDisplayingFacts
    }
  ]

  return (
    <>
      <Header displayBackButton backNavigationTarget="/" />
      <div className="overflow-auto mt-[50px] py-6 h-[calc(100vh-50px)]">
        {gameSettingsButtons.map(({ id, label, value, component: Component, ...props }) => (
          <div key={id} className="grid grid-cols-2 gap-4 p-4">
            <label className="text-primary font-medium flex items-center">{label}</label>
            <Component value={value} {...props} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 m-auto FLEX-CENTER z-20">
        {/* <div>SAVE + confirmation - if press on back header add warning dialog</div> */}

        <button
          type="button"
          aria-label={"RESET BUTTON"}
          // onClick={action}
          className={`w-full rounded-lg text-md laptop:text-2xl text-primary bg-red-primary m-4 p-1`}
        >
          RESET BUTTON
        </button>
      </div>
    </>
  )
}

export default GameSettings
