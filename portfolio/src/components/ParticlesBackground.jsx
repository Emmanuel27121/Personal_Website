import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: { value: 60 },

          size: { value: 3 },

          move: {
            enable: true,
            speed: 1
          },

          links: {
            enable: true,
            distance: 150,
            color: "#000000"
          }
        }
      }}
    />
  )
}

export default ParticlesBackground