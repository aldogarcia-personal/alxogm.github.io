import SelectLanguage from "./language"
import { Link } from "react-router-dom"
import { useLanguageStore } from "../store/languageStore"

interface RouteItem {
  path: string
  label: string
}

const routes: Record<"es" | "en", RouteItem[]> = {
  es: [
    { path: "/inicio", label: "Inicio" },
    { path: "/investigación", label: "Investigación" },
    { path: "/divulgación", label: "Divulgación" },
    { path: "/enseñanza", label: "Enseñanza" },
    { path: "/blog", label: "Blog" },
    { path: "/contacto", label: "Contacto" },
    { path: "/cv", label: "CV" },
  ],
  en: [
    { path: "/home", label: "Home" },
    { path: "/research", label: "Research" },
    { path: "/outreach", label: "Outreach" },
    { path: "/teaching", label: "Teaching" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" },
  ],
}

function Nav(): JSX.Element {
  const { language } = useLanguageStore()

  return (
    <nav className="bg-nav-blue  flex justify-between items-center p-4 shadow-md">
      <h1 className="text-nav-logo">Alma Xochitl Gonzales Morales</h1>
      <img src="" alt="" />
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-6">
          {routes[language].map((route: RouteItem) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="text-nav-link no-underline hover:text-nav-hover p-4"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <SelectLanguage />
      </div>
    </nav>
  )
}

export default Nav
