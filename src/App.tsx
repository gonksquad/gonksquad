import "./App.css";
// import Section from "./section";
import "./fonts/SFDistantGalaxy.ttf";
import { useEffect } from "react";
// import TypingParagraph from "./typingparagraph";
// import Events from "./events.tsx";
// import CodeBlock from "./codeblock.tsx";
//hello:)
function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.documentElement.style.setProperty(
          "--hero-color-1",
          "rgb(0, 110, 120)"
        );
        document.documentElement.style.setProperty(
          "--hero-color-2",
          "rgb(92, 0, 0)"
        );
      }
      if (window.scrollY === 0) {
        document.documentElement.style.setProperty(
          "--hero-color-1",
          "rgb(0, 0, 0)"
        );
        document.documentElement.style.setProperty(
          "--hero-color-2",
          "rgb(0, 0, 0)"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="hero">
          <div className="herocase">
            <h1 className="star-wars">gonk squad</h1>
            <img
              className="gonk"
              src="./GonkWhite.png"
              alt="Gonk droid image"
            />
          </div>
        </div>
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            top: 0,
            bottom: 0,
            width: "100%",
          }}
        >
          <nav className="nav">
            <ul
              className="navlist"
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-between",
                width: "90vw",
                alignItems: "center",
                margin: 0,
              }}
            >
              <li>
                <a href="http://localhost:5173/#top" className="gonk-logo">
                  <img
                    src="./GonkWhite.png"
                    className="gonk-logo"
                    alt="Gonk droid logo"
                  />
                </a>
              </li>
              <li>
                <h1 className="nav-text">team 701 gonk squad</h1>
              </li>
              {/* Uncomment and use these if needed
        <li><a className="nav-text" href="#events">Events</a></li>
        <li><a className="nav-text" href="#gallery">Gallery</a></li>
        <li><a className="nav-text" href="#about">About Us</a></li>
        <li><a className="nav-text" href="#blog">Blog</a></li>
        <li><a className="nav-text" href="#contact">Contact Us</a></li>
        */}
            </ul>
          </nav>
        </header>
        <img style={{ width: "100%" }} src="/teamcrop.jpg" alt="Team image" />
        <div className="outreach">outreach</div>
        <div className="aboutTheRobot">about the robot</div>
        <div className="programming">programming</div>
        <footer
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "0px",
            }}
          >
            <li>
              <a href="https://github.com/orgs/gonksquad/">
                <img
                  className="social-icon"
                  src="./github.png"
                  alt="GitHub icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@gonksquad_701">
                <img
                  className="social-icon"
                  src="./tiktok.png"
                  alt="TikTok icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@701gonkatrucks9?">
                <img
                  className="social-icon"
                  src="./youtube.png"
                  alt="YouTube icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ftcteam701/">
                <img
                  className="social-icon"
                  src="./facebook.png"
                  alt="Facebook icon"
                />
              </a>
            </li>
          </ul>
          <li>
            Social Media Icons Designed by{" "}
            <a className="social-link" href="https://www.freepik.com">
              Freepik
            </a>
          </li>
        </footer>
      </div>
      <div>
        <ul>
          <li>
            Outreach
            <ul>
              <li>Sponsors</li>
              <li>Industry Connections</li>
              <li>Goals</li>
              <li>Events</li>
              <li>Conclusion</li>
            </ul>
          </li>
          <li>
            About the Robot
            <ul>
              <li>Design Process</li>
              <li>Overview</li>
              <li>Subsystems</li>
              <li>Strategy</li>
            </ul>
          </li>
          <li>
            Programming
            <ul>
              <li>LED Indicators</li>
              <li>Autonomous</li>
              <li>Odometry</li>
              <li>Vision</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
