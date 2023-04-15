import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <Particles 
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
                background: {
                    color: {
                      value: "black",
                    },
                  },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: false,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                  },
                  particles: {
                    color: {
                      value: "#5ba7d1",
                    },
                    links: {
                      color: "#5ba7d1",
                      distance: 150,
                      enable: true,
                      opacity: 0.1,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 1,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.2,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,          
            }}
        
        />
    )
}

export default Particle


