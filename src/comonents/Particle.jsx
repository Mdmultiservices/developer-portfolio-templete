import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

const Particle = () => {
  const particlesInit = async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 5000,
            },
          },
          color: {
            value: "#010326",
          },
          shape: {
            type: "circle",
            // character: {
            //   value: ".",
            //   font: "Verdana",
            //   style: "",
            //   weight: "400",
            //   fill: true,
            // },
          },
          stroke: {
            width: 1,
            color: "#010326",
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: false,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#010326",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "#fff",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default Particle;
