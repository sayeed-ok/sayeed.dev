import { useRef } from "react"

// components
import Card from "../components/Card"
import { Globe } from "../components/Globe"
import CopyEmailButton from "../components/CopyEmailButton"
import Frameworks from "../components/Frameworks"
import LogoOrigami from "../components/logoOrigamiEffect/logoOrigami"
// Images
import grid1Img from "../assets/coding-pov.png"
import reactImg from "../assets/logos/react.svg"
import viteImg from "../assets/logos/vitejs.svg"
import threejsImg from "../assets/logos/threejs.svg"


export default function About() {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">

      <div
        className="grid grid-cols-3 auto-rows-[12rem]  gap-2 md:gap-4 md:grid-cols-5 md:auto-rows-[10rem] pt-5"
      >

        {/* Grid 1 | Title */}
        <div className="absolute top-12 md:top-30  grid-1 order-1 md:flex md:flex-col">
          <h2 className="text-heading">About..</h2>
        </div>

        {/* Grid 2 | philosophy */}
        <div className="grid-black-color grid-2 order-3 md:order-2 md:h-3/4 md:self-end">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="text-8xl tracking-tight leading-18  text-gray-500 md:text-6xl md:tracking-widest ">
              CODE IS CRAFT
            </p>
            <Card text={"Cosmic"} className="card1" containerRef={grid2Container} />
            <Card image={threejsImg} className="card2" containerRef={grid2Container} />
            <Card image={reactImg} className="card3" containerRef={grid2Container} />
            <Card text={"! Disruptive"} className="card4" containerRef={grid2Container} />
            <Card text={"Just Works"} className="card5" containerRef={grid2Container} />
            <Card image={viteImg} className="card6" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 | About me card*/}
        <div className=" grid-default-color    grid-3 order-2 md:order-3">
          <img src={grid1Img} alt=""
            className="absolute scale-300 left-10 top-20 md:top-10 md:left-10"
          />
          <div className="z-10 absolute bottom-10 left-2">
            <p className="headtext"><span className="text-heading">. </span> I'm Sayeed</p>
            <p className="subtext">
              I build interfaces that stay quiet, work reliably, and respect the device they run on.
            </p>
          </div>
          <div className="absolute inset-x-0 bg-linear-to-t from-black/90 via-black/60 to-transparent bottom-0 
          h-50 md:h-10/12"></div>
        </div>

        {/* Grid 4 | globe */}
        <div className="grid-black-color grid-4 order-4 md:w-11/12 md:justify-self-end">
          <div className="z-10 w-[50%]">
            <p className="headtext">Coordinates</p>
            <p className="subtext">
              Based in Mars🛰️, working remotely across Earth time zones
            </p>
          </div>
          <figure className="absolute left-[18%] md:left-60 top-0">
            <Globe />
          </figure>
        </div>

        {/* Grid 5 | tech stack */}
        <div className="  p-6   relative   grid-5 order-5">
          <LogoOrigami/>          
        </div>

        {/* Grid 6 | contact */}
        <div className="grid-special-color    grid-6 order-6">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="headtext ">
              Contact
            </p>
            <CopyEmailButton />
          </div>
        </div>

      </div>
    </section>
  )
}