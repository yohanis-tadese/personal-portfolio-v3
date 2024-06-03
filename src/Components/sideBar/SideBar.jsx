import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import "./sideBar.scss";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="side">
        <li>
          <a
            href="https://github.com/Meseretbolled"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/meseret-bolled-8b395325b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:meseretbolled@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
      </div>
    </div>
  );
}

export default SideBar;
