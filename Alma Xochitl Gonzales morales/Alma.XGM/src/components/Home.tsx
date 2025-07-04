import React from "react"
import Nav from "./Nav"
import { useMenuContext } from "../context/MenuContext"
import { useEffect } from "react"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Lenis from "lenis"
import almaImg from "../assets/images/alma.webp"
const Home: React.FC = () => {
  const { showCloseIcon } = useMenuContext()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy?.()
    }
  }, [])

  useGSAP(() => {
    gsap.to(".box", {
      x: 300,
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    })
  }, [])

  return (
    <>
      <Nav />
      <div
        className={` relative transition-all duration-200 z-[-1] transform ${
          showCloseIcon ? "translate-y-70px" : ""
        } bg-black min-h-screen `}
      >
        <img
          src={almaImg}
          alt="foto de la dr. Alma X. Gonzalez Morales"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </>
  )
}

export default Home
