import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import "./icons"
import MainMenu from "./MainMenu"
import DiceRoll from "./DiceRoll"
import NumberOfTeams from "./NumberOfTeams"
import TeamSelection from "./TeamSelection"
import Admin from "./Admin"
import Instructions from "./Instructions"

function App() {
  // FIXME: Tailwind background-gradient limitation
  // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct
  // styling of html selector does not support custom colours

  // const secondary = '#0F4C81'

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainMenu />} />
          <Route path="/number-of-teams" element={<NumberOfTeams />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/team-selection" element={<TeamSelection />} />
          <Route path="/dice-roll" element={<DiceRoll />} />
          {/* <Route path="/quiz" element={<Quiz />}/> */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
