// src/Hooks/useMenuToggle.ts
import { useState, useRef } from "react"

export function useMenuToggle() {
  const [animate, setAnimate] = useState(false)
  const [open, setOpen] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(true)
  const [showNavContent, setShowNavContent] = useState(true)
  const iconTimeout = useRef<NodeJS.Timeout | null>(null)
  const animTimeout = useRef<NodeJS.Timeout | null>(null)
  const navContentTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMenu = () => {
    if (!open) {
      setAnimate(true)
      iconTimeout.current = setTimeout(() => setShowCloseIcon(true), 50)
      animTimeout.current = setTimeout(() => {
        setOpen(true)
        setAnimate(false)
      }, 200) // igual a la duración de la animación
      navContentTimeout.current = setTimeout(() => {
        setShowNavContent(true)
      }, 800)
    } else {
      setOpen(false)
      setAnimate(false)
      setShowCloseIcon(false)
      setShowNavContent(false)
      if (iconTimeout.current) clearTimeout(iconTimeout.current)
      if (animTimeout.current) clearTimeout(animTimeout.current)
      if (navContentTimeout.current) clearTimeout(navContentTimeout.current)
    }
  }

  const closeMenu = () => {
    setOpen(false)
    setShowCloseIcon(false)
    setShowNavContent(false)
    if (iconTimeout.current) clearTimeout(iconTimeout.current)
    if (animTimeout.current) clearTimeout(animTimeout.current)
    if (navContentTimeout.current) clearTimeout(navContentTimeout.current)
  }
  return { open, animate, showCloseIcon, showNavContent, handleMenu, closeMenu }
}
