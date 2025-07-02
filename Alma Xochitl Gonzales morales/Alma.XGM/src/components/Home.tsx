import React from "react"
import Nav from "./Nav"
import { useMenuContext } from "../context/MenuContext"

const Home: React.FC = () => {
  const { showCloseIcon } = useMenuContext()
  return (
    <>
      <Nav />
      <div
        className={` relative transition-all duration-200 z-[-1] transform ${
          showCloseIcon ? "translate-y-70px" : ""
        } bg-black min-h-screen `}
      >
        <h1 className="text-nav-link">Home</h1>
      </div>
    </>
  )
}

export default Home
