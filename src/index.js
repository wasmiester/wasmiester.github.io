import { Component } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useEffect, useRef } from "react";
//import anime from "animejs";
import ProfilePic from "./ProfilePic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Scrollspy from "react-scrollspy";
//import { Marker} from "react-google-maps"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import RepoCards from "react-gh-repo-cards";
import "react-gh-repo-cards/dist/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.scss";

import zema from "./ZEMA.png"
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
  DiJira,
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
  SiJira
} from "react-icons/si";


//import "animate.css/animate.min.css";

library.add(fab, fas);



const containerHome = document.getElementById("Home");
const rootHome = createRoot(containerHome); // createRoot(container!) if you use TypeScript
rootHome.render(<FaceProfile />);

const containerEducation = document.getElementById("Education");
const rootEducation = createRoot(containerEducation); // createRoot(container!) if you use TypeScript
rootEducation.render(<Education />);

const containerExperience = document.getElementById("Experience");
const rootExperience = createRoot(containerExperience); // createRoot(container!) if you use TypeScript
rootExperience.render(<Experience />);

const containerSkills = document.getElementById("Skills");
const rootSkills = createRoot(containerSkills); // createRoot(container!) if you use TypeScript
rootSkills.render(<Skills/>);

const containerNav = document.getElementById("navigation");
const rootNav = createRoot(containerNav); // createRoot(container!) if you use TypeScript
rootNav.render(<Navigation />);

const containerProjects = document.getElementById("Projects");
const rootProjects = createRoot(containerProjects); // createRoot(container!) if you use TypeScript
rootProjects.render(<Projects />);

const containerBgParticles = document.getElementById("tsparticles");
const rootBgParticles = createRoot(containerBgParticles); // createRoot(container!) if you use TypeScript
rootBgParticles.render(<BgParticles />);
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
            strings: "Hi, I'm Wasi! <br/>A Software Engineer 😁.",
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
            <span className="toolTiptext">Github</span>
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
            <span className="toolTiptext">Linkedin</span>
          </a>
          <a
            className="ContactBox toolTip"
            href="mailto:wasiulhassanraza@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="envelope" className="ContactIcon" />
            <span className="toolTiptext">Email</span>
          </a>
          <a
            className="ContactBox toolTip"
            href="https://github.com/wasmiester/wasmiester.github.io/raw/main/src/WASI_RAZA_Resume.pdf"
          >
            <FontAwesomeIcon icon="file" className="ContactIcon" />
            <span className="toolTiptext">Resume</span>
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
            <img src={zema} className="experiencePic" alt="ZEPowerGroup" />
            <br />
            Java Developer I
            <br />
            Jan 2021 – April 2021
            <div className="experienceDetail">
              <br />• Conducted investigations, code reviews, and implemented
              solutions on an industrial-scale Oracle and SQL database, managing
              millions of CRUD operations per minute <br />• Created and
              maintained Java application modules to efficiently perform ETL
              functions of data from diverse sources such as JSON, CSV, HTML,
              XML, APIs, and emails, processing billions of entries per day
              <br />• Developed automated test tools to enhance software quality
              and reliability, resulting in a 95\% increase in testing
              efficiency <br />• Participated in client meetings to ensure a
              clear understanding of client requirements and to align
              development efforts with client expectations <br />• Handled
              off-hour calls on a rotational basis, demonstrating dedication to
              ensuring system stability and availability round the clock
              <br />• Automated HTTP API requests using Postman to increase test
              coverage by 95%
              <br />
            </div>
          </div>

          <div className="experienceCard">
            <img src={Atomic47} className="experiencePic" alt="Atomic47" />
            <br />
            Software Developer Intern
            <br />
            Jan 2021 – April 2021
            <div className="experienceDetail">
              <br />• Developed, tested, and documented functionality of Nest.js
              API to add, delete, and modify end user profiles. <br />•
              Implemented REST API endpoints that would retrieve the end-user’s
              cryptocurrency transactions receipts. <br />• Documented API
              endpoints that handled database manipulation end-user profile
              management and transactions. <br />• Added a new sign-in portal
              using React to save millions of users three clicks per
              interaction. <br />• Developed a React dashboard component that
              dynamically sets the user’s time zone based on their browser.
              <br />• Automated HTTP API requests using Postman to increase test
              coverage by 95%
              <br />
            </div>
          </div>

          <div className="experienceCard">
            <img src={UBCLogo} className="experiencePic" alt="UBC" />
            <br />
            Full Stack Developer
            <br />
            Sept 2019 – Dec2020
            <div className="experienceDetail">
              <br />• Designed and built a research platform to record, store
              and analyze bio-data by myself. <br />• Corrected quality
              assurance concerns while in direct contact with client in an agile
              environment. <br />• Employed HTML and CSS to design front end web
              pages. <br />• Developed relational databases and data analysis
              tools using PHP and SQL to examine patient data. <br />• Wrote
              unit tests that gave 98% coverage.
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
    { name: "Jira", version: <SiJira /> },
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
                <div className="toolTiptext">{Skill[id].name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <p className="Experiencenheading" id="Experienceheading">
        Projects
      </p>
      <div className="globalUseContainer">
        <div className="experienceDiv">
          <RepoCards
            repoDetails={[
              {
                user: "wasmiester",
                repoName: "wasmiester.github.io",
                showFullTitle: false,
              },
              {
                user: "wasmiester",
                repoName: "AI-Chatbot",
                showFullTitle: false,
              },
              {
                user: "BCHacks2020",
                repoName: "Avocado-Quest",
                showFullTitle: true,
              },
              {
                user: "wasmiester",
                repoName: "Family-Schedule",
                showFullTitle: false,
              },
            ]}
          />
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
    { name: "Projects", iconClass: "fas", icon: "folder" },
  ];
  const Style = {
    display: "contents",
  };
  console.log([tabs[2].iconClass, tabs[2].icon]);
  return (
    <nav className="navigation navbar fixed-bottom ">
      <div className="container-fluid">
        <Scrollspy
          items={["Home", "Education", "Experience", "Skills", "Projects"]}
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
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
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
        fpsLimit: 30,
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
};
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
