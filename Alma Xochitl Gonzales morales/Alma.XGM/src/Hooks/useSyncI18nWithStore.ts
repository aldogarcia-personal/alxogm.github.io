import { useEffect } from "react"
import { useLanguageStore } from "../store/languageStore"
import { useTranslation } from "react-i18next"

export function useSyncI18nWithStore() {
  const { i18n } = useTranslation()
  const { language, setLanguage } = useLanguageStore()
  useEffect(() => {
    if (language !== i18n.language) {
      setLanguage(i18n.language as "es" | "en")
    }

    const handler = (lng: string) => {
      setLanguage(lng as "es" | "en")
    }
    i18n.on("languageChanged", handler)
    return () => {
      i18n.off("languageChanged", handler)
    }
  }, [setLanguage])
}
