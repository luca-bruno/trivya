import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import "./icons"
import { Admin } from "@entities/Admin"
import { DiceRoll } from "@entities/DiceRoll"
import { Instructions } from "@entities/Instructions"
import { MainMenu } from "@entities/MainMenu"
import { NumberOfTeams } from "@entities/NumberOfTeams"
import { TeamSelection } from "@entities/TeamSelection"

const App = () => (
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
        <Route path="/*" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
