import profile from "../assets/profile.jpg"
import ParticlesBackground from "./ParticlesBackground"

function Hero() {
  return (

    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-deepblue via-indigo-600 to-redish text-white">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

        <img
          src={profile}
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        <div>

          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Emmanuel Ojetunde
          </h1>

          <p className="text-xl opacity-90 mb-6">
            Computer Science Student | Software Developer
          </p>

          <div className="flex gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero