import { motion } from "motion/react"



export default function Card({text,image, className,containerRef }){
  return image && !text ?(
    <motion.img 
    src={image}  
    className={`absolute w-15 cursor-grab ${className}`}
    whileHover={{ scale: 1.05 }}
     drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ): (
    <motion.div 
    className={`absolute ring ring-gray-500 rounded-full p-1 w-fit md:w-42 text-nowrap text-center text-xl text-white/40 font-extralight bg-black/20 backdrop-blur-xs cursor-grab ${className}`}        
    whileHover={{ scale: 1.05 }}
     drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  )
}