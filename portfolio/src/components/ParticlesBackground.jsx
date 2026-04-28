import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {

  const [init, setInit] = useState(false);

  // This should only run once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute top-0 left-0 w-full h-full"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#000000" },
          links: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 200 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground