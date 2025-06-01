import SelectLanguage from "./language"
import { Link } from "react-router-dom"
import { useLanguageStore } from "../store/languageStore"
import { useMenuToggle } from "../Hooks/useNavigationTransition"
import { useMenuAnimation } from "../Hooks/useFloatingNavMenu"
import HomeIcon from "@mui/icons-material/Home"
import ScienceIcon from "@mui/icons-material/Science"
import CampaignIcon from "@mui/icons-material/Campaign"
import SchoolIcon from "@mui/icons-material/School"
import ArticleIcon from "@mui/icons-material/Article"
import EmailIcon from "@mui/icons-material/Email"
import DescriptionIcon from "@mui/icons-material/Description"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

interface RouteItem {
  path: string
  label: string
  icon: JSX.Element
}

const routes: Record<"es" | "en", RouteItem[]> = {
  es: [
    { path: "/inicio", label: "Inicio", icon: <HomeIcon /> },
    { path: "/investigación", label: "Investigación", icon: <ScienceIcon /> },
    { path: "/divulgación", label: "Divulgación", icon: <CampaignIcon /> },
    { path: "/enseñanza", label: "Enseñanza", icon: <SchoolIcon /> },
    { path: "/blog", label: "Blog", icon: <ArticleIcon /> },
    { path: "/contacto", label: "Contacto", icon: <EmailIcon /> },
    { path: "/cv", label: "CV", icon: <DescriptionIcon /> },
  ],
  en: [
    { path: "/home", label: "Home", icon: <HomeIcon /> },
    { path: "/research", label: "Research", icon: <ScienceIcon /> },
    { path: "/outreach", label: "Outreach", icon: <CampaignIcon /> },
    { path: "/teaching", label: "Teaching", icon: <SchoolIcon /> },
    { path: "/blog", label: "Blog", icon: <ArticleIcon /> },
    { path: "/contact", label: "Contact", icon: <EmailIcon /> },
    { path: "/cv", label: "CV", icon: <DescriptionIcon /> },
  ],
}

function Nav(): JSX.Element {
  const { language } = useLanguageStore()
  const { open, buttonOnTop, handleMenu } = useMenuAnimation()

  return (
    <nav
      className={`transition-all duration-500 ${
        open ? "-translate-y-0-1vh" : ""
      }`}
    >
      <button
        onClick={handleMenu}
        className={`fixed z-50 w-14 h-14 rounded-full bg-btn text-white flex items-center justify-center shadow-lg transition-all duration-500
        ${
          buttonOnTop
            ? "top-4 right-4 bottom-auto"
            : "bottom-4 right-4 top-auto"
        }
      `}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? (
          <CloseIcon className="text-white" />
        ) : (
          <MenuIcon className="text-white" />
        )}
      </button>
      {open && (
        <div className="bg-nav-blue flex justify-between items-center p-4 shadow-md">
          <h1 className="text-nav-logo">Alma Xochitl Gonzales Morales</h1>
          <img src="" alt="" />
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-6">
              {routes[language].map((route: RouteItem) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    onClick={handleMenu}
                    className="text-nav-link no-underline hover:text-nav-hover p-4"
                  >
                    {route.icon}
                    <span>{route.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <SelectLanguage />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
