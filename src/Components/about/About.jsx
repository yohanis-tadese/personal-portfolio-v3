import "./about.scss";
import my_image from "../../assets/core-image/messi-hero.jpg";
import SectionTitle from "../SectionTitle";
import { FaArrowAltCircleRight } from "react-icons/fa";

function About() {
  return (
    <div id="About" className="about">
      <div className="portfolio-title">
        <SectionTitle title="About me" />
      </div>
      <div className="about-content">
        <div className="about-image">
          <img
            src={my_image}
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>

        <div className="about-detail">
          <h3>Full Stack (MERN) Developer </h3>
          <span>
            Hello! I'm Meseret Bolled and I'm a passionate and dedicated data analysis driven by a passion for crafting impactful digital solutions and also Big data with machine learning. My strength lies in creating user-friendly interfaces and robust backend systems  of big data that elevate the user experience
          </span>
          <ul>
            <h4>Here are a Few Highlights:</h4>
                <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Passionate about Data Analyst and Machine Learning</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Full Stack web application developer.</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Python programmer</i>
            </li>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Managing database (MySQL, MongoDB).</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
