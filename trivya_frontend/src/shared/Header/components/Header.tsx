import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { useLocation, useNavigate } from "react-router-dom"
import HeaderTypes from "../types/Header.interface"

const Header: React.FC<HeaderTypes> = ({
  displayBackButton,
  displayBackButtonCondition = true,
  backButtonIcon = "fa-caret-left",
  backNavigationTarget,
  displayCountdownTimer,
  displaySoloScore,
  displayNextButton,
  displayNextButtonCondition = true,
  nextButtonIcon = "fa-caret-right",
  nextNavigationTarget
}) => {
  const navigate = useNavigate()

  const absolutePositionedPages = ["team-selection", "dice-roll"]

  const location = useLocation()
  const isOnAbsolutePositionedPage = absolutePositionedPages.some(page => location.pathname.includes(page))

  //   TODO: placeholder for now, store into its own comp
  const score = 99

  const backButton = (icon: string) =>
    displayBackButtonCondition && (
      <button type="button" onClick={() => backNavigationTarget && navigate(backNavigationTarget)}>
        <FontAwesomeIcon icon={["fas", icon] as unknown as IconProp} />
      </button>
    )

  const countdownTimer = (
    <div className="text-lg font-semibold">
      <CountdownCircleTimer
        isPlaying
        duration={100}
        size={50}
        colors="rgb(249 104 21)"
        trailStrokeWidth={0}
        strokeWidth={6}
        onComplete={() => console.log("countdown over")}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )

  const soloScoreCounter = (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon icon={["fas", "fa-heart"] as unknown as IconProp} />
      <span className="text-secondary text-base font-semibold absolute mb-0.5">{score}</span>
    </div>
  )

  const nextButton = (icon: string) =>
    displayNextButtonCondition && (
      <button type="button" onClick={() => nextNavigationTarget && navigate(nextNavigationTarget)}>
        <FontAwesomeIcon icon={["fas", icon] as unknown as IconProp} />
      </button>
    )

  return (
    <div className={`${isOnAbsolutePositionedPage ? "absolute top-0" : ""} w-full`}>
      <div className="grid grid-cols-3 pt-4 mb-5 text-primary text-3xl">
        <div className="w-min m-auto mx-5">{displayBackButton ? backButton(backButtonIcon) : ""}</div>

        <div className="flex justify-center h-[50px]">{displayCountdownTimer ? countdownTimer : ""}</div>

        <div className="flex justify-end w-min m-auto mr-5">
          {displaySoloScore ? soloScoreCounter : ""}
          {displayNextButton ? nextButton(nextButtonIcon) : ""}
        </div>
      </div>
    </div>
  )
}

export default Header
