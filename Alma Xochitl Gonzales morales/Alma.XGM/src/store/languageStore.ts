import { create } from "zustand"

type Language = "es" | "en"

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es",
  setLanguage: (lang) => set({ language: lang }),
}))
