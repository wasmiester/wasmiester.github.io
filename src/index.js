import { Component } from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import anime from "animejs";
import "../src/style.scss";
import $ from "jquery";
import ProfilePic from "./ProfilePic.jpg";
import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { fas } from "@fortawesome/free-solid-svg-icons";
import UBCLogo from "./UBC-logo-2018-crest-white-rgb72.png";
import DouglasCollege from "./DouglasCollege.png";
//import "animate.css/animate.min.css";

library.add(fab, fas);
//const anime = require('animejs')
//window.addEventListener("resize", Coolio);
// Hook
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

function Coolio() {
  let GridBoxes = [];
  var GridWave = [];
  var { width, height } = useWindowSize();
  var NumberOfColumns = parseInt(width / 100) + 1;
  var NumberOfRows = parseInt(height / 100) + 1;
  var NumberOfSquares = NumberOfColumns * NumberOfRows;
  GridWave["--grid-template-columns"] = "repeat(" + NumberOfColumns + ", 100px)";
  GridWave["--grid-template-rows"] = "repeat(" + NumberOfRows + ", 100px)";

  console.log("squares = " + NumberOfSquares);
  console.log(width + " columns = " + NumberOfColumns);
  console.log(height + " rows = " + NumberOfRows);

  var midButtinArray = [];
  midButtinArray["top"] = (height / 2) - 25+ "px";
  midButtinArray["left"] = (width / 2) - 110 + "px";
  console.log(midButtinArray);
  for (var i = 0; i < NumberOfSquares; i++) {
    GridBoxes.push(<div className="square" id="tiles" />);
  }
  return (
    <div id="GridLayer" className="grid" style={GridWave}>
      {GridBoxes}
      <button
        className="WelcomeButton glow-on-hover"
        id="WelcomeBtn"
        style={midButtinArray}
        onClick={() =>WelcomeHome(NumberOfColumns, NumberOfRows)}
      >
        Hello World!
      </button>
    </div>
  );
  document
    .getElementById("WelcomeBtn")
    .addEventListener("click", WelcomeHome, false);
}

ReactDOM.render(<Coolio />, document.getElementById("boxes"));

function blah(){
  document
    .getElementById("WelcomeBtn")
    .addEventListener("click", WelcomeHome, false);
}
  

//document.getElementById("WelcomeBtn").onclick = console.log(document.querySelectorAll("#tiles"));

$(function () {
  var signalz = new Signalz("#cvs");
});

//Line model

var Line = function (x, y) {
  this.location = {
    x: x,
    y: y,
  };

  this.width = Math.random() * 3 + 0.25;
  this.color = "hsla(" + ~~(Math.random() * 360) + ", 100%, 70%, 1)";
};

//Signalz;

var Signalz = function (element) {
  this.canvas = null;
  this.ctx = null;
  this.center = { x: null, y: null };
  this.drawNo = 0;

  this.linesNo = 50;
  this.linesSize = 20;
  this.lines = [];

  // init
  this.init(element);
};

Signalz.prototype.init = function (element) {
  // setup & attach to canvas
  this.setup(element);

  // create lines
  for (var i = 0; i < this.linesNo; i++)
    this.lines.push(new Line(this.center.x, this.center.y));

  // animate
  this.animate();
};

Signalz.prototype.setup = function (element) {
  var cvs = document.querySelector(element);

  // set canvas to full window size
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;

  // set pointers
  this.canvas = cvs;
  this.ctx = cvs.getContext("2d");

  // calc center of stage/window
  this.center.x = Math.round(this.canvas.width / 2);
  this.center.y = Math.round(this.canvas.height / 2);

  // handle window resize
  window.addEventListener("resize", this.onScreenResize.bind(this));
};

Signalz.prototype.onScreenResize = function () {
  // reset canvas to full window size
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;

  // recalc center of stage/window
  this.center.x = Math.round(this.canvas.width / 2);
  this.center.y = Math.round(this.canvas.height / 2);

  // recenter lines
  if (this.lines.center)
    this.lines.forEach(function (line) {
      line.location.x = this.center.x;
      line.location.y = this.center.y;
    });
};

Signalz.prototype.animate = function () {
  // request new frame
  requestAnimationFrame(this.animate.bind(this));
  this.draw();
};

Signalz.prototype.draw = function () {
  // clear canvas

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  // update draw number
  this.drawNo++;
  if (this.drawNo % 2 === 1) {
    return;
  }

  // draw & update lines
  for (var idx = 0; idx < this.lines.length; idx++) {
    // get line
    var line = this.lines[idx];
    var lineSize = this.linesSize;

    // random direction
    var dir = ~~(Math.random() * 3) * 90;
    if (idx % 4 === dir / 90) {
      dir = 270;
    }

    // begin line path
    this.ctx.lineWidth = line.width;
    this.ctx.strokeStyle = line.color;
    this.ctx.beginPath();
    this.ctx.moveTo(line.location.x, line.location.y);

    // switch direction
    switch (dir) {
      case 0:
        line.location.y -= lineSize;
        break;
      case 90:
        line.location.x += lineSize;
        break;
      case 180:
        line.location.y += lineSize;
        break;
      case 270:
        line.location.x -= lineSize;
        break;
      default:
        break;
    }

    // move line to
    this.ctx.lineTo(line.location.x, line.location.y);

    // reset line location if offscreen
    if (
      line.location.x < 0 ||
      line.location.x > this.canvas.width ||
      line.location.y < 0 ||
      line.location.y > this.canvas.height
    ) {
      line.location.x = this.center.x;
      line.location.y = this.center.y;
    }

    // stroke line
    this.ctx.stroke();
  }
};




function WelcomeHome(NumberOfColumns, NumberOfRows) {

  anime({
    targets: document.querySelectorAll("#tiles"),
    scale: [{ value: 0, easing: "easeOutSine", duration: 500 }],
    delay: anime.stagger(200, {
      grid: [NumberOfColumns, NumberOfRows],
      from: "center",
    }),
  });
  anime({
    targets: ".WelcomeButton",
    opacity: [{ value: 0, easing: "easeOutSine", duration: 1000 }],
  });
  anime({
    targets: "#cvs",
    opacity: [{ value: 0, easing: "easeOutSine", duration: 1000 }],
  });
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById("SplashScreen"));
    document.getElementById("SplashScreen").remove();
  }, 2000);

  setTimeout(() => {
    ReactDOM.render(
      <div className="container">
        <img
          src={ProfilePic}
          alt="Profile picture"
          className="ProfilePic"
        ></img>
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
            <div className="ContactBox tooltip" href="https://github.com/wasmiester">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="ContactIcon"
              />
              <span class="tooltiptext">Github</span>
            </div>
            <div className="ContactBox tooltip" href="https://www.linkedin.com/in/wasi-raza/">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="ContactIcon"
              />
              <span class="tooltiptext">Linkedin</span>
            </div>
            <div className="ContactBox tooltip"  href="mailto:wasiulhassanraza@gmail.com">
              <FontAwesomeIcon icon="envelope" className="ContactIcon" />
              <span class="tooltiptext">Email</span>
            </div>
            <div className="ContactBox tooltip">
              <FontAwesomeIcon icon="file" className="ContactIcon" href="./Resume20211119.pdf" download/>
              <span class="tooltiptext">Resume</span>
            </div>
          </div>
        </div>
        <a className="scrollDownLeft">Scroll Down-&#62;</a>
        <a className="scrollDownRight">Scroll Down-&#62;</a>
      </div>,
      document.getElementById("root")
    );
  }, 1000);
  ReactDOM.render(<Education />, document.getElementById("education"));
}

function Education() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-10%");
  return (
    <div className="largeText">
      <p className="heading">Education</p>
      <div className="ContactFlexBox">
        <img src={UBCLogo} className="ubcPic" alt="UBC logo"></img>
        <div ref={ref}>
          {onScreen ? <div className="verticleLine"></div> : <></>}
        </div>
        <a>
          Bachelors in Computer Science <br />
          Sept 2017 – Aug 2022
        </a>
      </div>
      <br />
      <br />
      <div className="ContactFlexBox">
        <img
          src={DouglasCollege}
          className="educationPic"
          alt="Douglas College"
        ></img>
        <div ref={ref}>
          {onScreen ? <div className="verticleLine"></div> : <></>}
        </div>
        <a>
          Dimploma in Computer Science and information Systems <br />
          Sept 2017 – Aug 2022
        </a>
      </div>
    </div>
  );

  // return (<div className="largeText">Education{ubco}<br/><br/>{dougy}</div>,document.getElementById("education"));
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
