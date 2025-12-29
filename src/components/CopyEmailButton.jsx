import { motion,AnimatePresence } from "motion/react"
// Images
import copyImg from "../assets/copy.svg"
import copyDoneImg from "../assets/copy-done.svg"
import { useState } from "react"


export default function CopyEmailButton() {
  const [copied,setCopied]   = useState(false)
  const myemail = "sayeed034278@gmail.com"

  function copyToClipboard(){
    navigator.clipboard.writeText(myemail)
    setCopied(prev=>!prev)

    setTimeout(()=>{
      setCopied(prev=>!prev)
    },2000)
  }



  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative p-4 text-sm text-center  w-25 h-25 md:w-50 rounded-full  font-extralight bg-primary  cursor-pointer overflow-hidden"
    >
      {/* AnimatePresence to let the react know about the motion while using state i guess??? */}
      <AnimatePresence mode="wait"> 
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-1 md:gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src={copyDoneImg} className="w-4 md:w-6" alt="copy Done Icon" />
            Email  Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-1 md:gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src={copyImg} className="w-4  md:w-6" alt="copy icon" />
            Copy Email
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  )
}