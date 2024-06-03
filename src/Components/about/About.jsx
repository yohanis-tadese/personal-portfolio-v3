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
            Hello! I'm Meseret Bolled and I'm passionate about bringing ideas to
            life on the internet. My expertise lies in crafting robust and
            dynamic web applications tailored to meet diverse client needs. With
            a keen eye for detail and a passion for innovation, I excel in
            leveraging the latest tools and techniques in web development, data
            analytics, and machine learning to deliver high-quality solutions.
          </span>
          <ul>
            <h4>Here are a Few Highlights:</h4>
            <li>
              <span>
                <FaArrowAltCircleRight />
              </span>
              <i>Data Analyst and Machine Learning Specialist</i>
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
              <i>Managing database (MySQL, MongoDB).</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
