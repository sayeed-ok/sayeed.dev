import Project from "../components/Project"
import { useRevealOnce } from "../utilities/useRevealOnce"
import { Lamp } from "../components/Lamp"

export default function Projects() {
    const [sectionRef, active] = useRevealOnce();

  return (
    <section id="projects" ref={sectionRef} className="relative c-space section-spacing">
      
      <h2 className="text-heading">My Selected Projects</h2>      
      <div className={`lamp-line ${active ? "is-active" : ""}`} />
      <div className="md:h-screen w-full flex flex-wrap items-center justify-center my-7 md:my-0">
       
        
        <Project
          projectTitle={"🧊 The Bare Minimum Workspace"}
          projectContent={"— simple note-taking with absolutely no clutter."}
          title={"/bare-minimum-workspace"}
          href={"https://bare-minimum-workspace.vercel.app/"}
          title2={"for Github"}
          href2={"https://github.com/sayeed-ok/The-Bare-Minimum-Workspace"}
          src={"/src/assets/projects/bare-minimum.png"}
        />
        
          
      </div>
    </section>
  )
}

