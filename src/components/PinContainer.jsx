"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const PinContainer = ({
  children,
  title,
  href,
  title2,
  href2,
  className,
  containerClassName,
}) => {
  const [isActive, setIsActive] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const transform = prefersReducedMotion
    ? "translate(-50%,-50%)"
    : isActive
      ? "translate(-50%,-50%) rotateX(40deg) scale(0.8)"
      : "translate(-50%,-50%) rotateX(0deg) scale(1)";

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  const handleEnter = () => {
    if (!isTouch) setIsActive(true);
  };

  const handleLeave = () => {
    if (!isTouch) setIsActive(false);
  };

  const handleClick = () => {
    if (isTouch) setIsActive((prev) => !prev);
  };

  return (
    <div
      className={twMerge(
        "relative group/pin cursor-pointer",
        containerClassName
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      {/* CARD */}
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4
        -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 top-1/2 p-4 flex items-start
          rounded-2xl bg-black border border-white/[0.1]
          shadow-[0_8px_16px_rgb(0_0_0/0.4)]
          transition duration-700 overflow-hidden"
        >
          <div className={twMerge("relative z-50", className)}>
            {children}
          </div>
        </div>
      </div>

      {/* AMBIENT EFFECT */}
      <PinPerspective
        active={isActive}
        title={title}
        href={href}
        title2={title2}
        href2={href2}
      />
    </div>
  );
};


const FloatingLink = ({ title, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        pointer-events-auto
        relative flex items-center
        rounded-full bg-zinc-950
        py-0.5 px-4
        ring-1 ring-white/10
      "
    >
      <span className="text-white text-xs font-bold py-0.5">
        {title}
      </span>

      <span
        className="
          absolute -bottom-0 left-[1.125rem]
          h-px w-[calc(100%-2.25rem)]
          bg-gradient-to-r
          from-emerald-400/0
          via-emerald-400/90
          to-emerald-400/0
        "
      />
    </a>
  );
};

export const PinPerspective = ({
  active,
  title,
  href,
  title2,
  href2,
}) => {
  return (
    <motion.div
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="
        pointer-events-none
        w-96 h-80
        flex items-center justify-center
        z-[60]
      "
    >
      <div className="relative w-full h-full -mt-7">

        {/* LINKS */}
        <div className="absolute top-0 inset-x-0 flex flex-col items-center gap-2 pointer-events-auto">
          {title && href && (
            <FloatingLink title={title} href={href} />
          )}
          {title2 && href2 && (
            <FloatingLink title={title2} href={href2} />
          )}
        </div>


        {/* =================== PIN LINE (THICKER + VISIBLE) ================== */}
        <div className="absolute right-1/2 bottom-1/2 translate-y-[14px] pointer-events-none">

          {/* main vertical beam */}
          <div className="w-[3px] h-32 from-cyan-400/0 via-cyan-400 to-cyan-500 blur-[1px] bg-gradient-to-b" />

          {/* soft glow behind beam */}
          <div
            className="absolute inset-x-0 top-0 w-[10px]  h-36 -translate-x-[3.5px] bg-cyan-400/40 blur-[10px]" />

          {/* bright core dot */}
          <div className=" absolute top-full left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-cyan-300 blur-[1px]" />

          {/* outer glow dot */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-cyan-400/40 blur-[8px]" />

        </div>
      </div>
    </motion.div>
  );
};

