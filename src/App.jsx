// Hooks
import { useState } from 'react'
// Sections
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto max-w-7xl">    
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>    
    </div>
  )
}

export default App
