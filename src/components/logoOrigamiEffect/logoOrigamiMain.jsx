import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function LogoOrigamiMain({
  children,
  delay = 2.5,
  duration = 1.5,
  className = "",
}) {
  const items = Array.isArray(children) ? children : [children];
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (items.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, delay * 1000);

    return () => clearInterval(intervalRef.current);
  }, [items.length, delay]);

  if (items.length === 0) return null;

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className={[
        "relative z-0 h-44 w-60 shrink-0",
        className,
      ].join(" ")}
    >
      {/* Static upper */}
      <div
        style={{
          clipPath: "polygon(0 0,100% 0,100% 50%,0 50%)",
          backfaceVisibility: "hidden",
          zIndex: -999,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {items[(activeIndex + 1) % items.length]}
      </div>

      {/* Static lower */}
      <div
        style={{
          clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)",
          backfaceVisibility: "hidden",
          zIndex: -999,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {items[activeIndex % items.length]}
      </div>

      {/* Upper flip */}
      <motion.div
        key={activeIndex}
        style={{
          clipPath: "polygon(0 0,100% 0,100% 50%,0 50%)",
          backfaceVisibility: "hidden",
          zIndex: -activeIndex,
        }}
        initial={{
          rotateX: "0deg",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          rotateX: "-180deg",
        }}
        transition={{
          duration,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2"
      >
        {items[activeIndex % items.length]}
      </motion.div>

      {/* Lower flip */}
      <motion.div
        key={(activeIndex + 1) * 2}
        style={{
          clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)",
          backfaceVisibility: "hidden",
          zIndex: activeIndex,
        }}
        initial={{
          rotateX: "180deg",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          rotateX: "0deg",
        }}
        transition={{
          duration,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2"
      >
        {items[(activeIndex + 1) % items.length]}
      </motion.div>

      {/* Divider */}
      <hr
        style={{ transform: "translateZ(1px)" }}
        className="absolute w-50 top-1/2 left-5 right-[15px] -translate-y-1/2 border-t-2 border-neutral-800 z-[999]"
      />
    </div>
  );
}
