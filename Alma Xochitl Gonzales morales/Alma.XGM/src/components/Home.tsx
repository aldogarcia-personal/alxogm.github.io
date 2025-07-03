import React from "react"
import Nav from "./Nav"
import { useMenuContext } from "../context/MenuContext"
import { useEffect } from "react"
import Lenis from "lenis"

const Home: React.FC = () => {
  const { showCloseIcon } = useMenuContext()
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    })
    return () => {
      lenis.destroy?.()
    }
  }, [])
  return (
    <>
      <Nav />
      <div
        className={` relative transition-all duration-200 z-[-1] transform ${
          showCloseIcon ? "translate-y-70px" : ""
        } bg-black min-h-screen `}
      ></div>
    </>
  )
}

export default Home
