import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 500,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: false,
                opacity: 0.1,
              },
              move: {
                direction: "center",
                speed: 10,
              },
              size: {
                value: 1,
              },
              opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 1,
                    sync: true
                  },
                  random: {
                    enable: true,
                    minimumValue: 0.05
                  },
                  value: 1
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
