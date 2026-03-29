import { useState } from "react";

function Navbar() {
    const  [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="flex justify-between items-center px-8 py-5 shadow-md sticky top-0 bg-white z-50">

          <h1 className="font-bold text-2xl text-primary">
              Emmanuel Ojetunde
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#skills" className="hover:text-primary">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>

          {/* Mobile Menu */}
          <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsOpen(!isOpen)}>
              <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>

          <div
              className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 
              ${isOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"}`}>

              <ul className="flex flex-col items-center gap-4 text-gray-700">
                  <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                  <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                  <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                  <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>

              </ul>
          </div>
      </nav>





  )
}

export default Navbar