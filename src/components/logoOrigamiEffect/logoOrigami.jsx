import { LogoOrigamiItem } from "./logoOrigamiItem";
import { LogoOrigamiMain } from "./logoOrigamiMain";

export default function LogoOrigami() {
  return (
    <LogoOrigamiMain delay={2} duration={1.4} className="absolute right-8 bottom-4 ">
      <LogoOrigamiItem style={{background: "#24344a"}}><img src="src/assets/logos/cplusplus.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#3a2418"}}><img src="src/assets/logos/html5.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#1e2f44"}}><img src="src/assets/logos/css3.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#2a1d1a"}}><img src="src/assets/logos/git.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#fff"}}><img src="src/assets/logos/github.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#3a360f"}}><img src="src/assets/logos/javascript.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#102a33"}}><img src="src/assets/logos/react.svg" alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#0f2a33"}}><img src="src/assets/logos/tailwindcss.svg" alt="" className="w-30"/></LogoOrigamiItem>

    </LogoOrigamiMain>
  );
}