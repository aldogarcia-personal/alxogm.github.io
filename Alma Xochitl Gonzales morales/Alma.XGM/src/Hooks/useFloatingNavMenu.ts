import { useState } from "react"

function useMenuAnimation() {
  const [open, setOpen] = useState(false)
  const [buttonOnTop, setButtonOnTop] = useState(false)

  const handleMenu = () => {
    if (!open) {
      setButtonOnTop(true)
      setTimeout(() => {
        setOpen(true)
        setButtonOnTop(false)
      }, 500)
    } else {
      setOpen(false)
    }
  }
  return { open, buttonOnTop, handleMenu }
}
