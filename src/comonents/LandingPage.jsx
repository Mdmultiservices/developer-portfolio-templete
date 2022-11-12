import "./LandingPage.css";
import FaceSvg from "../assets/mf-avatar.svg";
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <header className="header">
            <nav className="nav_bar">
              <h1>* *</h1>
              <ul className="nav_link">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="hero_section">
            <div className="flex">
              <div>
                <h1>
                  Hey! my name is
                  <span>
                    <i> Somesh</i>
                  </span>
                </h1>
                <p className="type_writter">
                  <Typewriter
                    words={[
                      "I'm Full-Stack Developer",

                      "Freelancer",
                      "&",
                      "Desiginer",
                      "Repeat!",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </div>
              <div>
                <img src={FaceSvg} alt="svg not found " />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
