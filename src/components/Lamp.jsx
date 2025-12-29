import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";



export function Lamp({
  children,
  className,
  glowColor = "cyan",
}) {
  return (
    <section
      className={twMerge(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950",
        className
      )}
    >
      {/* Static ambient gradient (NO animation) */}
      <div
        className={twMerge(
          "pointer-events-none absolute top-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl",
          `bg-${glowColor}-500`
        )}
      />

      {/* Single animated glow line (cheap animation) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-0.5 w-64 -translate-x-1/2 -translate-y-24 bg-cyan-400 animate-lamp-line" />

      {/* Content glass (ONE blur only) */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 rounded-xl p-10 shadow-lg">
        {children}
      </div>
    </section>
  );
}
