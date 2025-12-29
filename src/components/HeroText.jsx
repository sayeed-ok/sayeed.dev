import { FlipWords } from "./FlipWord"
import { motion } from "motion/react"

export default function HeroText() {
  const words = ["adversarial", "relentless", "indifferent",]
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div className="absolute bottom-0 -z-10 md:h-140  text-center bg-clip-text md:top-50 md:pt-10  md:text-left md:border md:border-white/20 rounded-3xl md:bg-white/10 md:backdrop-blur-md md:backdrop-saturate-110 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_30px_rgba(0,0,0,0.35)]"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .5,ease: "easeIn" }}
    >

      {/* Desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >Hi I'm Sayeed</motion.h1>

        <motion.p
          className="text-5xl font-medium text-white/90"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >A Mandane Developer</motion.p>

        <motion.p
          className="text-3xl font-medium text-white/90"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >Carving
          '<span>
            <FlipWords words={words}
              className="ml-2"
            />
          </span>'
          Designs</motion.p>
      </div>


      {/* Mobile view */}
      <motion.div className="flex flex-col md:hidden  glass-blob"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [3, 2, 1] }}
        transition={{ delay: 1, ease: "easeInOut" }}
      >

        <motion.h1
          className="text-3xl font-medium"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, ease: "easeIn" }}
        >I'm Developer</motion.h1>

        <motion.p
          className="text-3xl font-black text-white/60"
          variants={variants}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, ease: "easeIn" }}
        >Carving</motion.p>

        <motion.p
          className="text-3xl font-black text-white/70"
          variants={variants}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, ease: "easeIn" }}
        >
          <span>
            <FlipWords words={words}
              className="ml-2 font-bold text-white text-4xl"
            />
          </span><br /> Designs
        </motion.p>


      </motion.div>

    </motion.div>)
}