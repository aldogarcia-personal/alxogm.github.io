import Nav from "./Nav"
import { useMenuContext } from "../context/MenuContext"
function OutReach() {
  const { showCloseIcon } = useMenuContext()
  return (
    <>
      <Nav />
      <div
        className={` relative transition-all duration-200 z-[-1] transform ${
          showCloseIcon ? "translate-y-70px" : ""
        } bg-black min-h-screen `}
      >
        <h1 className="text-nav-link">Outreach</h1>
      </div>
    </>
  )
}

export default OutReach
