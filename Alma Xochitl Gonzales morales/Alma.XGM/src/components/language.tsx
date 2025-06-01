import { faLanguage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useLanguageStore } from "../store/languageStore"

function SelectLanguage(): JSX.Element {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useLanguageStore()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "es" | "en" | null
    if (!savedLanguage) {
      i18n.changeLanguage("es")
      setLanguage("es")
      localStorage.setItem("language", "es")
    } else if (language !== i18n.language) {
      setLanguage(i18n.language as "es" | "en")
    }
  }, [i18n.language, language, setLanguage])

  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng)
    setLanguage(lng as "es" | "en")
    localStorage.setItem("language", lng)
  }

  return (
    <>
      <FontAwesomeIcon icon={faLanguage} className="text-xl text-nav-link " />
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-btn text-f5f5dc hover:bg-btn-hover hover:text-nav-text-hover border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </>
  )
}

export default SelectLanguage
