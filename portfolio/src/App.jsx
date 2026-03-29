import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
        <Projects />
      <Skills />
      <Contact />
      <Footer />
        <Analytics />
    </>
  )
}

export default App