/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";

var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>Somesh SD</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#services">service</a>
              </li>
              <li>
                <a href="#">pages</a>
              </li>
              <div className="drop">
                <li>
                  <a href="https://medium.com/@sddahatonde22/how-to-get-a-full-refund-of-linkedin-premium-1129dd5675b8">
                    blog
                  </a>
                </li>
              </div>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>HELLO</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["I AM SOMESH"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "I'm Full-Stack Developer",

                  "Freelancer",
                  "&",
                  "Desiginer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          {/* <div className="about1">
            <h5>Full Stack Developer</h5>
          </div> */}
          <div className="btn">
            <button>hire me</button>
            <div className="hire">
              <button>get cv</button>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
                My name is Somesh Dahatonde and I have more than two years of
                work experience as a full-stack developer working on the web. I
                have extensive expertise in both frontend and backend
                development. I've been using JavaScript and TypeScript
                professionally for more than two years. Additionally, I am an
                expert in designing fully responsive websites that are optimised
                for all devices using frontend frameworks like ReactJS, NextJS,
                VueJS, Gatsby, etc. I also comprehend the most recent
                contemporary UI Trends and have a strong foundation in UI/UX
                Designing. I am knowledgeable with NodeJS and ExpressJS, as well
                as Koa, Django, and Laravel for the backend. Additionally, I
                have extensive experience constructing APIs and use the tools
                hopscotch, insomnia, and postman for designing and developing
                databases SQL and NoSQL databases are two types I am familiar
                with. I am familiar with MySQL, PostgreSQL, MongoDB, CrateDB,
                Cassandra, MS SQL, Redis, and Neo4j. Understand DevOps for AWS
                (Amazon Web Services), Google Cloud, MS Azure, and Digital Ocean
                as well. I am familiar with serverless architecture and
                microservices for cloud architecture, and I primarily utilise
                the tools for cloud formation listed below (Kubernetes, Jenkins,
                Jira, GitLab, Github Action, AWS Lambda, and S3). Know a lot
                about Git, Version Control, and Github while talking about team
                collaboration. My expertise in project management and product
                design is also quite strong. I'm also really good at solving
                difficulties and picking up knowledge on my own.
              </p>
            </div>
            <div className="download-btn">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineHtml5 style={{ color: "orange", fontSize: "70px" }} />
                <p>HTML 5</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <FaCss3Alt style={{ color: "blue", fontSize: "70px" }} />
                <p>css 3</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandJavascript
                  style={{ color: "yellow", fontSize: "70px" }}
                />
                <p>javascript</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <FaBootstrap style={{ color: "purple", fontSize: "70px" }} />
                <p>bootstrap</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>tailwindcss</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "blue", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <SiSvelte style={{ color: "red  ", fontSize: "50px" }} />
                <p>svelte</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiMongodb style={{ color: "green", fontSize: "60px" }} />
                <p>mongodb</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <img src={Logo3} alt="" />
                <p>HTML 5</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1>2+</h1>
                <h3>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>call us now</p>
                  <h2 type="tel">(+91) 902146****</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>service offers</h1>
          <p>
            Is give may shall likeness made yielding spirit a itself togeth
            created after sea
            <br />
            is in beast beginning signs open god you're gathering ithe
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Wp developing</h2>
            <p>
              Creeping for female light years <br />
              that lesser can't evening <br />
              heaven isn't bearing tree
            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="" />
            <h2>Wp developing</h2>
            <p>
              Creeping for female light years <br />
              that lesser can't evening <br />
              heaven isn't bearing tree
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Wp developing</h2>
            <p>
              Creeping for female light years <br />
              that lesser can't evening <br />
              heaven isn't bearing tree
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>Wp developing</h2>
            <p>
              Creeping for female light years <br />
              that lesser can't evening <br />
              heaven isn't bearing tree
            </p>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="project">
          <h1>
            quality work <br />
            Recently done project
          </h1>
        </div>
      </section>
      <section className="update-main" id="contact">
        <div className="update">
          <div className="text">
            <h2>get update from anywhere</h2>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid.
            </p>
          </div>
          <div className="btns">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email address"
            />
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="text">
            <h1>SOMESH</h1>
            <h2>follow me</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/in/somesh-dahatonde-7a04151b4/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-instagram" aria-hidden="true"></i>
              <a href="https://github.com/Somesh-Dahatonde">
                {" "}
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <p>
            Copyright ©2022 All rights reserved | This template is made with
            <span>
              <a href="https://github.com/Somesh-Dahatonde ">
                {" "}
                Somesh Dahatonde{" "}
              </a>
            </span>
            with 💓
          </p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
