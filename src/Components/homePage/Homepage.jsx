import React, { useEffect } from "react";
import "./homepage.scss";
import { Link } from "react-scroll";
import TypingSVG from "./TypingSVG";

function Homepage() {
  useEffect(() => {
    const handleScroll = () => {
      addActiveClassToNavLink("home");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addActiveClassToNavLink = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navLink = document.getElementById(`${sectionId}-nav-link`);

    if (!section || !navLink) return;

    const scrollPosition = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  };

  return (
    <div id="Home" className="homepage">
      <div className="left-side">
        <span style={{ color: "#0794c9", fontWeight: "770" }}>
          Hello, my name is
        </span>
        <h4>Meseret Bolled.</h4>
        <h4>
          <TypingSVG />
        </h4>
        <h3>
          I'm a passionate and dedicated data analysis driven by a passion for crafting impactful digital solutions and also Big data with machine learning. My strength lies in creating user-friendly interfaces and robust backend systems  of big data that elevate the user experience
        </h3>

        <div className="buttons">
          <button className="btn button-one">
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              My Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
