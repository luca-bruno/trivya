import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { InstructionPrompt } from "@shared/InstructionPrompt"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"

const TeamSelection = () => {
  // FIXME: Tailwind background-gradient limitation
  // FIXME: Redundant colour codes same as in tailwind.config.js - required because
  // direct styling of html selector does not support custom colours

  const primary = "#F96815"
  const secondary = "#0F4C81"
  const red = "#DA291C"
  const redSecondary = "#831F1F"
  const blue = "#4589C6"
  const blueSecondary = "#003098"
  const green = "#01855B"
  const greenSecondary = "#002C17"
  const purple = "#6050A8"
  const purpleSecondary = "#501F60"
  //   const black = '#000'

  const [tempPlayers, setTempPlayers] = useState(4)

  type eventType = { target: { value: React.SetStateAction<string>, className: string } }

  const [team1Name, setTeam1Name] = useState("Alpha")
  const [team2Name, setTeam2Name] = useState("Beta")
  const [team3Name, setTeam3Name] = useState("Charlie")
  const [team4Name, setTeam4Name] = useState("Delta")
  const [team1TextColour, setTeam1TextColour] = useState("text-primary")
  const [team2TextColour, setTeam2TextColour] = useState("text-primary")
  const [team3TextColour, setTeam3TextColour] = useState("text-primary")
  const [team4TextColour, setTeam4TextColour] = useState("text-primary")
  const [team1BackgroundColour, setTeam1BackgroundColour] = useState(secondary)
  const [team2BackgroundColour, setTeam2BackgroundColour] = useState(secondary)
  const [team3BackgroundColour, setTeam3BackgroundColour] = useState(secondary)
  const [team4BackgroundColour, setTeam4BackgroundColour] = useState(secondary)

  useBackgroundGradient({
    numberOfTeams: tempPlayers,
    team1BackgroundColour,
    team2BackgroundColour,
    team3BackgroundColour,
    team4BackgroundColour
  })

  const handleTeam1Name = (event: eventType) => {
    setTeam1Name(event.target.value)
  }

  const handleTeam2Name = (event: eventType) => {
    setTeam2Name(event.target.value)
  }

  const handleTeam3Name = (event: eventType) => {
    setTeam3Name(event.target.value)
  }

  const handleTeam4Name = (event: eventType) => {
    setTeam4Name(event.target.value)
  }

  const selectTeam1Colour = (event: eventType) => {
    const colour = event.target.className
    console.log(colour)

    if (colour.includes("bg-red")) {
      setTeam1TextColour("text-red")
      setTeam1BackgroundColour(redSecondary)
    } else if (colour.includes("bg-blue")) {
      setTeam1TextColour("text-blue")
      setTeam1BackgroundColour(blueSecondary)
    } else if (colour.includes("bg-green")) {
      setTeam1TextColour("text-green")
      setTeam1BackgroundColour(greenSecondary)
    } else if (colour.includes("bg-purple")) {
      setTeam1TextColour("text-purple")
      setTeam1BackgroundColour(purpleSecondary)
    }
  }

  const selectTeam2Colour = (event: eventType) => {
    const colour = event.target.className
    console.log(colour)

    if (colour.includes("bg-red")) {
      setTeam2TextColour("text-red-secondary")
      setTeam2BackgroundColour(red)
    } else if (colour.includes("bg-blue")) {
      setTeam2TextColour("text-blue-secondary")
      setTeam2BackgroundColour(blue)
    } else if (colour.includes("bg-green")) {
      setTeam2TextColour("text-green-secondary")
      setTeam2BackgroundColour(green)
    } else if (colour.includes("bg-purple")) {
      setTeam2TextColour("text-purple-secondary")
      setTeam2BackgroundColour(purple)
    }
  }

  const selectTeam3Colour = (event: eventType) => {
    const colour = event.target.className
    console.log(colour)

    if (colour.includes("bg-red")) {
      setTeam3TextColour("text-red-secondary")
      setTeam3BackgroundColour(red)
    } else if (colour.includes("bg-blue")) {
      setTeam3TextColour("text-blue-secondary")
      setTeam3BackgroundColour(blue)
    } else if (colour.includes("bg-green")) {
      setTeam3TextColour("text-green-secondary")
      setTeam3BackgroundColour(green)
    } else if (colour.includes("bg-purple")) {
      setTeam3TextColour("text-purple-secondary")
      setTeam3BackgroundColour(purple)
    }
  }

  const selectTeam4Colour = (event: eventType) => {
    const colour = event.target.className
    console.log(colour)

    if (colour.includes("bg-red")) {
      setTeam4TextColour("text-red")
      setTeam4BackgroundColour(redSecondary)
    } else if (colour.includes("bg-blue")) {
      setTeam4TextColour("text-blue")
      setTeam4BackgroundColour(blueSecondary)
    } else if (colour.includes("bg-green")) {
      setTeam4TextColour("text-green")
      setTeam4BackgroundColour(greenSecondary)
    } else if (colour.includes("bg-purple")) {
      setTeam4TextColour("text-purple")
      setTeam4BackgroundColour(purpleSecondary)
    }
  }

  const handleSubmit = () => {
    // this.context.changeTeamName1(this.state.teamName1);
    // this.context.changeTeamName2(this.state.teamName2);
    // this.context.changeTeamFontColour1(this.state.fontColour1);
    // this.context.changeTeamFontColour2(this.state.fontColour2);

    // // default team names to catch errors
    // if (this.state.teamName1 ==== undefined) {
    //     this.context.changeTeamName1("Alpha");
    // }
    // if (this.state.teamName2 ==== undefined) {
    //     this.context.changeTeamName2("Beta");
    // }
  }

  return (
    <>
      <form>
        <input type="text" className={`${team1TextColour} 
        w-36 bg-transparent border-transparent border-2 rounded-lg font-secondary text-2xl lg:text-5xl lg:w-64 absolute lg:left-20 left-10 top-20`}
          maxLength={10} value={team1Name} onChange={handleTeam1Name} />
        <input type="text" className={`${team2TextColour} 
        text-right w-36 bg-transparent border-transparent border-2 rounded-lg font-secondary text-2xl lg:text-5xl lg:w-64 absolute 
        ${tempPlayers >= 3 ? "lg:right-20 right-10 top-20" : "lg:right-20 right-10 bottom-20"}`}
          maxLength={10} value={team2Name} onChange={handleTeam2Name} />
        <input type="text" className={`${team3TextColour} 
        w-36 bg-transparent border-transparent border-2 rounded-lg font-secondary text-2xl lg:text-5xl lg:w-64 absolute 
        ${tempPlayers >= 3 ? "visible" : "hidden"} lg:left-20 left-10 bottom-20`}
          maxLength={10} value={team3Name} onChange={handleTeam3Name} />
        <input type="text" className={`${team4TextColour} 
        text-right w-36 bg-transparent border-transparent border-2 rounded-lg font-secondary text-2xl lg:text-5xl lg:w-64 absolute 
        ${tempPlayers === 4 ? "visible" : "hidden"} lg:right-20 right-10 bottom-20`}
          maxLength={10} value={team4Name} onChange={handleTeam4Name} />
      </form>

      <div className="absolute top-40 left-6 flex-col">
        <div className="-mb-2">
          <button type="button" aria-label={`Select ${team1Name} colour`} onClick={selectTeam1Colour}
            className="h-16 w-16 bg-red-secondary rounded-tl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team1Name} colour`} onClick={selectTeam1Colour}
            className="h-16 w-16 bg-blue-secondary rounded-tr-xl shadow-lg shadow-black/50" />
        </div>
        <div className="">
          <button type="button" aria-label={`Select ${team1Name} colour`} onClick={selectTeam1Colour}
            className="h-16 w-16 bg-green-secondary rounded-bl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team1Name} colour`} onClick={selectTeam1Colour}
            className="h-16 w-16 bg-purple-secondary rounded-br-xl shadow-lg shadow-black/50" />
        </div>
      </div>

      <div className="absolute top-40 right-6 flex-col">
        <div className="-mb-2">
          <button type="button" aria-label={`Select ${team2Name} colour`} onClick={selectTeam2Colour}
            className="h-16 w-16 bg-red rounded-tl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team2Name} colour`} onClick={selectTeam2Colour}
            className="h-16 w-16 bg-blue rounded-tr-xl shadow-lg shadow-black/50" />
        </div>
        <div className="">
          <button type="button" aria-label={`Select ${team2Name} colour`} onClick={selectTeam2Colour}
            className="h-16 w-16 bg-green rounded-bl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team2Name} colour`} onClick={selectTeam2Colour}
            className="h-16 w-16 bg-purple rounded-br-xl shadow-lg shadow-black/50" />
        </div>
      </div>

      <div className="absolute bottom-40 left-6 flex-col">
        <div className="-mb-2">
          <button type="button" aria-label={`Select ${team3Name} colour`} onClick={selectTeam3Colour}
            className="h-16 w-16 bg-red rounded-tl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team3Name} colour`} onClick={selectTeam3Colour}
            className="h-16 w-16 bg-blue rounded-tr-xl shadow-lg shadow-black/50" />
        </div>
        <div className="">
          <button type="button" aria-label={`Select ${team3Name} colour`} onClick={selectTeam3Colour}
            className="h-16 w-16 bg-green rounded-bl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team3Name} colour`} onClick={selectTeam3Colour}
            className="h-16 w-16 bg-purple rounded-br-xl shadow-lg shadow-black/50" />
        </div>
      </div>

      <div className="absolute bottom-40 right-6 flex-col">
        <div className="-mb-2">
          <button type="button" aria-label={`Select ${team4Name} colour`} onClick={selectTeam4Colour}
            className="h-16 w-16 bg-red-secondary rounded-tl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team4Name} colour`} onClick={selectTeam4Colour}
            className="h-16 w-16 bg-blue-secondary rounded-tr-xl shadow-lg shadow-black/50" />
        </div>
        <div className="">
          <button type="button" aria-label={`Select ${team4Name} colour`} onClick={selectTeam4Colour}
            className="h-16 w-16 bg-green-secondary rounded-bl-xl shadow-lg shadow-black/50" />
          <button type="button" aria-label={`Select ${team4Name} colour`} onClick={selectTeam4Colour}
            className="h-16 w-16 bg-purple-secondary rounded-br-xl shadow-lg shadow-black/50" />
        </div>
      </div>

      <InstructionPrompt text="Tap on a team&apos;s name to edit!" />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex mb-2 justify-center items-center">
          <Link to="/">
            <button
              type="button" aria-label="Go to main menu"
              className="w-28 rounded-lg text-primary bg-secondary ml-1 p-1 mr-8"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
              Main Menu
            </button>
          </Link>

          <Link to="/dice-roll">
            <button
              type="button" aria-label="Confirm teams"
              className="w-28 rounded-lg text-primary bg-secondary ml-8 p-1"
              onClick={handleSubmit}
            >
              Confirm
              <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TeamSelection
