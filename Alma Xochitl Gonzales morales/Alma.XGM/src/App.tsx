import React from "react"
import { Routes, Route } from "react-router-dom"
import { useSyncLanguageRoutes } from "./Hooks/useSyncLanguageRoutes"
import { routeMap } from "./routes/routeMap"
import Home from "./components/Home"
import Research from "./components/Research"
import OutReach from "./components/OutReach"
import Teaching from "./components/Teaching"
import Blog from "./components/blog"
import Contact from "./components/contact"
import CV from "./components/team"

const App: React.FC = () => {
  useSyncLanguageRoutes(routeMap)
  return (
    <div>
      <Routes>
        {/* Rutas en inglés */}
        <Route path="/home" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/outreach" element={<OutReach />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        {/* Rutas en español */}
        <Route path="/inicio" element={<Home />} />
        <Route path="/investigación" element={<Research />} />
        <Route path="/divulgación" element={<OutReach />} />
        <Route path="/enseñanza" element={<Teaching />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </div>
  )
}

export default App
