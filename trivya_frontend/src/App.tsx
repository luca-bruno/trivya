import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./icons"
import ParticleBackground from "@entities/ParticleBackground"
import NavigationController from "@shared/NavigationController/components/NavigationController"
import Header from "@shared/Header"

const App = () => (
  <div className="h-screen">
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticleBackground />
      <BrowserRouter>
        <Routes>
          <Route index element={<NavigationController />} />
          <Route path="/*" element={<NavigationController />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
)

export default App
