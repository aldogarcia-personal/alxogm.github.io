import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useSyncLanguageRoutes } from "./Hooks/useSyncLanguageRoutes"
import { useLanguageStore } from "./store/languageStore"
import { routeMap } from "./routes/routeMap"
import { useSyncI18nWithStore } from "./Hooks/useSyncI18nWithStore"
import { useTranslation } from "react-i18next"
import Home from "./components/Home"
import Research from "./components/Research"
import OutReach from "./components/OutReach"
import Teaching from "./components/Teaching"
import Blog from "./components/blog"
import Contact from "./components/contact"
import CV from "./components/CurriculumVitae"

const App: React.FC = () => {
  const { language } = useLanguageStore()
  const { i18n } = useTranslation()
  useSyncI18nWithStore()
  useSyncLanguageRoutes(routeMap)

  if (language !== i18n.language) {
    console.log("language:", language, "i18n.language:", i18n.language)
    return null
  }
  return (
    <div>
      <Routes>
        {/* Rutas redirigidas */}
        <Route
          path="/"
          element={
            <Navigate to={language === "es" ? "/inicio" : "/home"} replace />
          }
        />
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
