document.addEventListener("DOMContentLoaded",
  function () {
    new SweetScroll({}),
    particlesJS("particles-js",
      {
        particles: {
          number: {
            value: 100,
            density: {
              enable: !0,
              value_area: 700
            }
          },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: { nb_sides: 5 },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: .5,
            random: !1,
            anim: {
              enable: !1,
              speed: 1,
              opacity_min: .1,
              sync: !1
            }
          },
          size: {
            value: 3,
            random: !0,
            anim: {
              enable: !1,
              speed: 19.18081918081918,
              size_min: .1,
              sync: !1
            }
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
          },
          move: {
            enable: !0,
            speed: 5,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
              enable: !0,
              rotateX: 600,
              rotateY: 1200
            }
          },
          nb: 80
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: !0,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: !0
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: { opacity: 1 }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: .4
            },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: !0
      })
  },
  !1);