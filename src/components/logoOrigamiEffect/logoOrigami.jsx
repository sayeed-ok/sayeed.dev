import { LogoOrigamiItem } from "./logoOrigamiItem";
import { LogoOrigamiMain } from "./logoOrigamiMain";

// Images
import cppImg from "../../assets/logos/cplusplus.svg"
import htmlImg from "../../assets/logos/html5.svg"
import cssImg from "../../assets/logos/css3.svg"
import gitImg from "../../assets/logos/git.svg"
import githubImg from "../../assets/logos/github.svg"
import jsImg from "../../assets/logos/javascript.svg"
import reactImg from "../../assets/logos/react.svg"
import tailwindImg from "../../assets/logos/tailwindcss.svg"

export default function LogoOrigami() {
  return (
    <LogoOrigamiMain delay={2} duration={1.4} className="absolute right-8 bottom-4 ">
      <LogoOrigamiItem style={{background: "#24344a"}}><img src={cppImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#3a2418"}}><img src={htmlImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#1e2f44"}}><img src={cssImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#2a1d1a"}}><img src={gitImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#fff"}}><img src={githubImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#3a360f"}}><img src={jsImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#102a33"}}><img src={reactImg} alt="" className="w-30"/></LogoOrigamiItem>
      <LogoOrigamiItem style={{background: "#0f2a33"}}><img src={tailwindImg} alt="" className="w-30"/></LogoOrigamiItem>

    </LogoOrigamiMain>
  );
}