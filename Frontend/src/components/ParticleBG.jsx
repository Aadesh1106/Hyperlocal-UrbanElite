import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBG = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 120, duration: 0.5 },
          },
        },
        particles: {
          color: { value: ["#ffd700", "#bfa14a", "#ffb347", "#fffbe0"] },
          links: {
            color: "#ffd700",
            distance: 130,
            enable: true,
            opacity: 0.25,
            width: 1.5,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 70 },
          opacity: { value: 0.45 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 6 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBG;
