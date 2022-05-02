import { Component } from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import anime from "animejs";
import ProfilePic from "./ProfilePic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { fas } from "@fortawesome/free-solid-svg-icons";
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Scrollspy from "react-scrollspy";
//import { Marker} from "react-google-maps"
import Particles from "react-tsparticles";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.scss";

import Atomic47 from "./Atomic47.png";
import UBCLogo from "./UBC-logo-2018-crest-white-rgb72.png";
import DouglasCollege from "./DouglasCollege.png";

import {
  DiJava,
  DiPhp,
  DiPython,
  DiHtml5,
  DiCss3,
  DiAndroid,
  DiReact,
  DiNodejsSmall,
  DiMysql,
} from "react-icons/di";

import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiR,
  SiNestjs,
  SiFlutter,
  SiDart,
  SiFirebase,
} from "react-icons/si";

//import "animate.css/animate.min.css";

library.add(fab, fas);

ReactDOM.render(<FaceProfile />, document.getElementById("Home"));
ReactDOM.render(<Education />, document.getElementById("Education"));
ReactDOM.render(<Experience />, document.getElementById("Experience"));
ReactDOM.render(<Skills />, document.getElementById("Skills"));
ReactDOM.render(<Navigation />, document.getElementById("navigation"));
ReactDOM.render(<BgParticles />, document.getElementById("tsparticles"));
//ReactDOM.render(<MapContainer />, document.getElementById("locationMap"));

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

function FaceProfile() {
  return (
    <div className="profileContainer vh-100">
      <img src={ProfilePic} alt="Profilepicture" className="ProfilePic" />
      <div>
        <Typewriter
          className="typewriter"
          options={{
            strings: "Hi, I'm Wasi! <br/>I am an app and web developer! ",
            autoStart: true,
            wrapperClassName: "typewriter",
            cursorClassName: "typewriterCursor",
            skipAddStyles: true,
          }}
        />
        <div className="ContactFlexBox">
          <a
            className="ContactBox toolTip"
            href="https://github.com/wasmiester"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="ContactIcon" />
            <span class="toolTiptext">Github</span>
          </a>
          <a
            className="ContactBox toolTip"
            href="https://www.linkedin.com/in/wasi-raza/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="ContactIcon"
            />
            <span class="toolTiptext">Linkedin</span>
          </a>
          <a
            className="ContactBox toolTip"
            href="mailto:wasiulhassanraza@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="envelope" className="ContactIcon" />
            <span class="toolTiptext">Email</span>
          </a>
          <a
            className="ContactBox toolTip"
            href="https://github.com/wasmiester/wasmiester.github.io/raw/main/src/WASI_RAZA_Resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="file" className="ContactIcon" />
            <span class="toolTiptext">Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Education() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-10%");
  return (
    <>
      <div className="h-100 ">
        <p className="Experiencenheading" id="Educationheading">
          Education
        </p>
        <div className="EducationContainer  largeText">
          <div className="EducationFlexBox">
            <img src={UBCLogo} className="ubcPic" alt="UBC logo"></img>
            <div ref={ref}>
              {onScreen ? <div className="verticleLine"></div> : <></>}
            </div>
            <p>
              Bachelors in Computer Science <br />
              Sept 2017 – Aug 2022
            </p>
          </div>

          <div className="EducationFlexBox">
            <img
              src={DouglasCollege}
              className="douglasPic"
              alt="Douglas College"
            ></img>
            <div ref={ref}>
              {onScreen ? <div className="verticleLine"></div> : <></>}
            </div>
            <p>
              Diploma in Computer Science and Information Systems <br />
              Oct 2013 – Aug 2017
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <p className="Experiencenheading" id="Experienceheading">
        Experience
      </p>
      <div className="globalUseContainer">
        <div className="experienceDiv">
          <div className="experienceCard">
            <img src={Atomic47} className="experiencePic" alt="Atomic47" />
            <br />
            Software Developer Intern
            <br />
            Jan 2021 – April 2021
            <div className="experienceDetail">
              <br />• Developed, tested, and documented functionality of Nest.js
              API to add, delete, and modify end user profiles. <br />•
              Documented Rest API endpoint that would retrieve a receipt of what
              cryptocurrency the user was holding, buying, or selling. <br />•
              Made a new user sign-in portal using the React.js framework.
              <br /> • Made a React dashboard component that would dynamically
              set user's time zone based on their browser.
              <br /> • Used Postman to automate testing HTTP API requests.
              <br />
            </div>
          </div>

          <div className="experienceCard">
            <img src={UBCLogo} className="experiencePic" alt="UBC" />
            <br />
            Lead Full Stack API Developer
            <br />
            Sept 2019 – Dec2020
            <div className="experienceDetail">
              <br />• Designed and built a bio-data research platform <br />•
              Used HTML and CSS to design front end web pages <br />• Utilized
              JavaScript to construct input logic for relational databases
              focused on patient information.
              <br />• Used PHP and SQL to develop databases and data analysis
              tools. <br />• Helped code and test full-stack Joomla-based web
              application software based on Agile Scrum and Kanban approaches.
              <br />• Wrote unit tests and corrected quality assurance concerns.
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  const Skill = [
    { name: "Java", version: <DiJava /> },
    { name: "Php", version: <DiPhp /> },
    { name: "JavaScript", version: <SiJavascript /> },
    { name: "TypeScript", version: <SiTypescript /> },
    { name: "Python", version: <DiPython /> },
    { name: "HTML 5", version: <DiHtml5 /> },
    { name: "CSS 3", version: <DiCss3 /> },
    { name: "React", version: <DiReact /> },
    { name: "Android", version: <DiAndroid /> },
    { name: "Node.js", version: <DiNodejsSmall /> },
    { name: "C++", version: <SiCplusplus /> },
    { name: "MySQL", version: <DiMysql /> },
    { name: "R", version: <SiR /> },
    { name: "Nest.js", version: <SiNestjs /> },
    { name: "Flutter", version: <SiFlutter /> },
    { name: "Dart", version: <SiDart /> },
    { name: "Firebase", version: <SiFirebase /> },
  ];
  return (
    <>
      <div className="Experiencenheading" id="Skillsheading">
        Skills
      </div>
      <div className="globalUseContainer">
        <div className="SkillsContainer">
          {Object.keys(Skill).map((id) => {
            return (
              <div className="SkillsBox toolTip">
                <div className="SkillsIcon">{Skill[id].version}</div>
                <div class="toolTiptext">{Skill[id].name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Navigation() {
  let tabs = [
    { name: "Home", iconClass: "fas", icon: "home" },
    { name: "Education", iconClass: "fas", icon: "graduation-cap" },
    { name: "Experience", iconClass: "fas", icon: "user-clock" },
    { name: "Skills", iconClass: "fas", icon: "lightbulb" },
  ];
  const Style = {
    display: "contents",
  };
  return (
    <nav class="navigation navbar fixed-bottom ">
      <div class="container-fluid">
        <Scrollspy
          items={["Home", "Education", "Experience", "Skills"]}
          currentClassName="is-current"
          offset={-100}
          style={Style}
        >
          {Object.keys(tabs).map((id) => {
            return (
              <a className="navTab" href={"#" + tabs[id].name}>
                <FontAwesomeIcon icon={[tabs[id].iconClass, tabs[id].icon]} />
                <br />
                {tabs[id].name}
              </a>
            );
          })}
        </Scrollspy>
      </div>
    </nav>
  );
}

function BgParticles() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
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
        autoPlay: true,
        background: {
          color: {
            value: "",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 0,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        fullScreen: {
          enable: true,
          zIndex: -100,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: [],
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: false,
              mode: [],
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 200,
              duration: 0.4,
              mix: false,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 100,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: "#fff",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
            },
          },
          destroy: {
            mode: "none",
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
            },
          },
          gradient: [],
          groups: {},
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          links: {
            blink: false,
            color: {
              value: "#fff",
            },
            consent: false,
            distance: 150,
            enable: true,
            frequency: 1,
            opacity: 1,
            shadow: {
              blur: 5,
              color: {
                value: "#00ff00",
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 100,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
            animation: {
              count: 0,
              enable: false,
              speed: 2,
              sync: false,
              destroy: "none",
              startValue: "random",
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          reduceDuplicates: false,
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
          roll: {
            darken: {
              enable: false,
              value: 0,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: "vertical",
            speed: 25,
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: "circle",
          },
          size: {
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 1,
            animation: {
              count: 0,
              enable: false,
              speed: 5,
              sync: false,
              destroy: "none",
              startValue: "random",
            },
          },
          stroke: {
            width: 0,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: 50,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        themes: [],
        zLayers: 100,
      }}
    />
  );
}

// const lib = ["places"];
// const id = ["794c38c2d628d148"];
// const key = "AIzaSyAHJH3DZvncT-tCT1kDruDXfclLg04tBYU"; // PUT GMAP API KEY HERE
// const defaultLocation = { lat: 49.24881, lng: -122.980507 };
// export class MapContainer extends Component {
//   render() {
//     return (
//       <div>
//         <LoadScript googleMapsApiKey={key} libraries={lib} mapIds={id}>
//           <GoogleMap
//             center={defaultLocation}
//             zoom={10}
//             options={{ mapId: "794c38c2d628d148" }}
//             mapContainerStyle={{ height: "400px", width: "90vw" }}
//           >
//             <Marker position={defaultLocation} />
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     );
//   }
// }
