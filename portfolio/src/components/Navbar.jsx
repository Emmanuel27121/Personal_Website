function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md sticky top-0 bg-white">

      <h1 className="font-bold text-2xl text-primary">
        Emmanuel Ojetunde
      </h1>

      <ul className="flex gap-6 text-gray-700">
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#skills" className="hover:text-primary">Skills</a></li>
        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
      </ul>

    </nav>
  )
}

export default Navbar