import { motion } from "motion/react"
import { useState,useEffect, useRef } from "react"



export default function Navbar() {
  const [isMenuopen, setIsMenuopen] = useState(false)

  const shellRef = useRef(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 30) {
        shellRef.current.style.transform = "translateY(-20px)";
      } else {
        shellRef.current.style.transform = "translateY(0)";
      }

      lastScrollY.current = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  function Navigation() {
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-link" href="#home" onClick={() => setIsMenuopen(prev => !prev)}>
            Home
          </a>
        </li>
        <li className="nav-li onClick={() => setIsMenuopen(prev => !prev)}">
          <a className="nav-link" href="#about" onClick={() => setIsMenuopen(prev => !prev)}>
            About
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#projects" onClick={() => setIsMenuopen(prev => !prev)}>
            Work
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-link" href="#contact" onClick={() => setIsMenuopen(prev => !prev)}>
            Contact
          </a>
        </li>
      </ul>
    );
  }

  return (
    <div ref={shellRef} className="fixed  inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">

      <div className="mx-auto c-space max-w-7xl flex items-center justify-between py-2 sm:py-0">
        <a href="/"
          className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
        > Boring</a>

        <button onClick={() => setIsMenuopen(prev => !prev)}
          className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
        > <img src={isMenuopen ? "src/assets/close.svg" : "src/assets/menu.svg"} className="w-6 h-6" alt="" /></button>

        <nav className="hidden sm:flex">
          <Navigation />
        </nav>
      </div>

      {isMenuopen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, y:-10  }}
          animate={{ opacity: 1,  y:0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: .3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}







    </div>
  )
}