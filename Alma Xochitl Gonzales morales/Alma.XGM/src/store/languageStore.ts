import { create } from "zustand"

type Language = "es" | "en"

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: (localStorage.getItem("language") as Language)
    ? (localStorage.getItem("language") as Language)
    : "es", // Default to 'es' if not set
  setLanguage: (lang) => {
    localStorage.setItem("language", lang)
    set({ language: lang })
  },
}))
