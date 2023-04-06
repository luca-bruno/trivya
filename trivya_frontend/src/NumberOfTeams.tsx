import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import InstructionPrompt from "./InstructionPrompt"

const NumberOfTeams = () => {
  const [teamQuantitySelected, setTeamQuantitySelected] = useState(0)

  useEffect(() => {
    console.log(teamQuantitySelected)
  }, [teamQuantitySelected])

  return (
    <>
      <InstructionPrompt text="Tap to select number of teams!" />
      <div className="flex justify-center items-center m-auto h-full">
        <div>
          <div>
            <Link to="/team-selection">
              <button type="button" className="m-3 bg-primary text-secondary rounded-xl w-24 h-24 text-6xl"
                onClick={() => setTeamQuantitySelected(1)}>
                <p className="pb-2">1</p>
              </button>
            </Link>
            <Link to="/team-selection">
              <button type="button" className="m-3 bg-primary text-secondary rounded-xl w-24 h-24 text-6xl"
                onClick={() => setTeamQuantitySelected(2)}>
                <p className="pb-2">2</p>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/team-selection">
              <button type="button" className="m-3 bg-primary text-secondary rounded-xl w-24 h-24 text-6xl"
                onClick={() => setTeamQuantitySelected(3)}>
                <p className="pb-2">3</p>
              </button>
            </Link>
            <Link to="/team-selection">
              <button type="button" className="m-3 bg-primary text-secondary rounded-xl w-24 h-24 text-6xl"
                onClick={() => setTeamQuantitySelected(4)}>
                <p className="pb-2">4</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NumberOfTeams
