import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import MainMenu from './MainMenu'

const App = () => {

	return (
    <div className="bg-secondary w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainMenu />}/>
        </Routes>
      </BrowserRouter>
    </div>
	)
}

export default App