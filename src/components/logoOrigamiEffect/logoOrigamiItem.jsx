export function LogoOrigamiItem({ className = "", style,children }) {
  return (
    <div
      style={style}
      className={[
        "grid h-40 w-50  place-content-center rounded-2xl bg-neutral-700 text-6xl text-neutral-50  ",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
