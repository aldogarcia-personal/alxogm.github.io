import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useLanguageStore } from "../store/languageStore"
export function useSyncLanguageRoutes(routeMap: any) {
  const { language } = useLanguageStore()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const pathToRouteName = (path: string) => {
      for (const [name, route] of Object.entries(
        routeMap[language === "es" ? "en" : "es"]
      )) {
        if (route === path) return name
      }
      return null
    }

    const routeName = pathToRouteName(location.pathname)
    if (routeName && routeMap[language][routeName] !== location.pathname) {
      navigate(routeMap[language][routeName], { replace: true })
    }
  }, [language, location.pathname, navigate, routeMap])
}
