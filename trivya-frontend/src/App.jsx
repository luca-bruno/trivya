import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import MainMenu from './MainMenu'
import TeamSelection from "./TeamSelection"

const App = () => {
  // FIXME: Tailwind background-gradient limitation
  // FIXME: Redundant colour codes same as in tailwind.config.js - required because direct styling of html selector does not support custom colours
  const secondary = '#0F4C81'
  
	return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainMenu />}/>
          <Route path="/team-selection" element={<TeamSelection />}/>
        </Routes>
      </BrowserRouter>
    </div>
	)
}

export default App