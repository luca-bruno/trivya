import { FC, useEffect, useState } from "react"
import { InstructionPrompt } from "@shared/InstructionPrompt"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import colours from "@shared/data/data"
import Header from "@shared/Header"
import eventType from "../types/TeamSelection.interface"
import TeamSelectionPalette from "./TeamSelectionPalette"
import { useNavigation } from "@contexts/NavigationContext/NavigationContext"

const TeamSelection: FC = () => {
  const { navigate } = useNavigation()

  // TODO: put in custom hook maybe?
  const [teams] = useState(parseInt(numberOfPlayers || "0", 10))

  useEffect(() => {
    if (teams <= 1 || teams > 4 || Number.isNaN(teams)) {
      navigate("/")
    }
  }, [navigate, teams])

  const [team1Name, setTeam1Name] = useState("Alpha")
  const [team2Name, setTeam2Name] = useState("Beta")
  const [team3Name, setTeam3Name] = useState("Charlie")
  const [team4Name, setTeam4Name] = useState("Delta")
  const [team1TextColour, setTeam1TextColour] = useState("text-primary")
  const [team2TextColour, setTeam2TextColour] = useState("text-primary")
  const [team3TextColour, setTeam3TextColour] = useState("text-primary")
  const [team4TextColour, setTeam4TextColour] = useState("text-primary")
  const [team1BackgroundColour, setTeam1BackgroundColour] = useState(colours.secondary)
  const [team2BackgroundColour, setTeam2BackgroundColour] = useState(colours.secondary)
  const [team3BackgroundColour, setTeam3BackgroundColour] = useState(colours.secondary)
  const [team4BackgroundColour, setTeam4BackgroundColour] = useState(colours.secondary)

  useBackgroundGradient({
    numberOfTeams: teams,
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

  const selectTeam1Colour = (backgroundColour: string, textColour: string) => {
    setTeam1TextColour(textColour)
    setTeam1BackgroundColour(colours[backgroundColour as keyof typeof colours])
  }

  const selectTeam2Colour = (backgroundColour: string, textColour: string) => {
    setTeam2TextColour(textColour)
    setTeam2BackgroundColour(colours[backgroundColour as keyof typeof colours])
  }

  const selectTeam3Colour = (backgroundColour: string, textColour: string) => {
    setTeam3TextColour(textColour)
    setTeam3BackgroundColour(colours[backgroundColour as keyof typeof colours])
  }

  const selectTeam4Colour = (backgroundColour: string, textColour: string) => {
    setTeam4TextColour(textColour)
    setTeam4BackgroundColour(colours[backgroundColour as keyof typeof colours])
  }

  const handleSubmit = () => {
    if (team1Name === "") setTeam1Name("Alpha")
    if (team2Name === "") setTeam2Name("Beta")
    if (team3Name === "") setTeam3Name("Charlie")
    if (team4Name === "") setTeam4Name("Delta")
  }

  // TODO: move to separate file
  const data = [
    {
      btn1: ["red-secondary", "text-red-tertiary", "bg-red-secondary"],
      btn2: ["blue-secondary", "text-blue-primary", "bg-blue-secondary"],
      btn3: ["green-secondary", "text-green-primary", "bg-green-secondary"],
      btn4: ["purple-secondary", "text-purple-primary", "bg-purple-secondary"]
    },
    {
      btn1: ["red-primary", "text-red-tertiary", "bg-red-primary"],
      btn2: ["blue-primary", "text-blue-secondary", "bg-blue-primary"],
      btn3: ["green-primary", "text-green-secondary", "bg-green-primary"],
      btn4: ["purple-primary", "text-purple-secondary", "bg-purple-primary"]
    },
    {
      btn1: [
        teams === 4 ? "red-primary" : "red-tertiary",
        teams === 4 ? "text-red-tertiary" : "text-red-primary",
        teams === 4 ? "bg-red-primary" : "bg-red-tertiary"
      ],
      btn2: [
        teams === 4 ? "blue-primary" : "blue-tertiary",
        teams === 4 ? "text-blue-tertiary" : "text-blue-primary",
        teams === 4 ? "bg-blue-primary" : "bg-blue-tertiary"
      ],
      btn3: [
        teams === 4 ? "green-primary" : "green-tertiary",
        teams === 4 ? "text-green-tertiary" : "text-green-primary",
        teams === 4 ? "bg-green-primary" : "bg-green-tertiary"
      ],
      btn4: [
        teams === 4 ? "purple-primary" : "purple-tertiary",
        teams === 4 ? "text-purple-tertiary" : "text-purple-primary",
        teams === 4 ? "bg-purple-primary" : "bg-purple-tertiary"
      ]
    },
    {
      btn1: ["red-secondary", "text-red-tertiary", "bg-red-secondary"],
      btn2: ["blue-secondary", "text-blue-primary", "bg-blue-secondary"],
      btn3: ["green-secondary", "text-green-primary", "bg-green-secondary"],
      btn4: ["purple-secondary", "text-purple-primary", "bg-purple-secondary"]
    }
  ]

  const teamNameStyles = "focus:outline-none focus:font-bold w-36 bg-transparent font-secondary text-2xl laptop:text-5xl laptop:w-64 absolute"
  const teamRightSidePositioningStyles = "laptop:right-20 right-10 bottom-20"

  return (
    <div className="w-full h-full">
      <Header backNavigationTarget="number-of-teams" displayBackButton nextNavigationTarget={`dice-roll`} displayNextButton />

      <form>
        <input
          type="text"
          className={`${team1TextColour} ${teamNameStyles} laptop:left-20 left-10 top-20`}
          maxLength={10}
          value={team1Name}
          onChange={handleTeam1Name}
        />
        <input
          type="text"
          className={`${team2TextColour} ${teamNameStyles} text-right ${
            teams >= 3 ? "laptop:right-20 right-10 top-20" : teamRightSidePositioningStyles
          }`}
          maxLength={10}
          value={team2Name}
          onChange={handleTeam2Name}
        />
        <input
          type="text"
          className={`${team3TextColour} ${teamNameStyles} ${teams >= 3 ? "visible" : "hidden"} laptop:left-20 left-10 bottom-20`}
          maxLength={10}
          value={team3Name}
          onChange={handleTeam3Name}
        />
        <input
          type="text"
          className={`${team4TextColour} ${teamNameStyles} text-right ${teams === 4 ? "visible" : "hidden"} ${teamRightSidePositioningStyles}`}
          maxLength={10}
          value={team4Name}
          onChange={handleTeam4Name}
        />
      </form>

      <div className={`w-full ${teams >= 3 ? "grid grid-cols-2 h-[50%]" : "flex flex-col h-full"}`}>
        <TeamSelectionPalette data={data[0]} selectTeamColour={selectTeam1Colour} teamName={team1Name} teams={teams} />
        <TeamSelectionPalette data={data[1]} selectTeamColour={selectTeam2Colour} teamName={team2Name} teams={teams} />
      </div>

      {teams >= 3 && (
        <div className={`w-full ${teams >= 4 ? "grid grid-cols-2 h-[50%]" : "flex flex-col h-[50%]"}`}>
          <TeamSelectionPalette data={data[2]} selectTeamColour={selectTeam3Colour} teamName={team3Name} teams={teams} />

          {teams >= 4 && <TeamSelectionPalette data={data[3]} selectTeamColour={selectTeam4Colour} teamName={team4Name} teams={teams} />}
        </div>
      )}

      <InstructionPrompt text="Tap on a team's name to edit!" position="centre" />
    </div>
  )
}

export default TeamSelection
