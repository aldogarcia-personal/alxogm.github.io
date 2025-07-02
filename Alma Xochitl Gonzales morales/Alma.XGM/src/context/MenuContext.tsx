import React, { createContext, useContext } from "react"
import { useMenuToggle } from "../Hooks/useNavigationTransition"

const MenuContext = createContext<ReturnType<typeof useMenuToggle> | null>(null)

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const menu = useMenuToggle()
  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>
}

export const useMenuContext = () => {
  const ctx = useContext(MenuContext)
  if (!ctx) throw new Error("useMenuContext debe usarse dentro de MenuProvider")
  return ctx
}
