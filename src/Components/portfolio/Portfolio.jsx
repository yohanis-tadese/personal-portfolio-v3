import portal from "../../assets/images/portal.jpg";
import cafe from "../../assets/images/cafe.jpg";

import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import "./portfolio.scss";
import SectionTitle from "../SectionTitle";

const Portfolio = () => {
  return (
    <div
      id="Project"
      className="Myportfolio max-w-container mx-auto lgl:px-20 py-24  "
    >
      <div className="portfolio-title">
        <SectionTitle title="Some Things I have Built" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* *************** Project one ******************** */}
        <div
          className="flex flex-col xl:flex-row gap-6"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "20px",
            background: "#F5F8FD",
          }}
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/yohanis-tadese/Internship-placement-system"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={portal}
                alt="placement-image"
              />
              <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold">Online Job portal system</h3>
            </div>
            <p
              style={{ color: "#fff" }}
              className="bg-[#0794C9] text-sm md:text-base p-2 md:p-6 rounded-md  "
            >
              Job Portal System -Online Job portal system is an application
              which connects employers and job seekers where employers are the
              source of the resources and the job seeker can find and apply for
              their targeted job.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>MYSQL</li>
              <li>PHP</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textBlack duration-300"
                href="https://github.com/yohanis-tadese/Internship-placement-system"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>

        {/* *************** Project two ******************** */}
        <div
          className="flex flex-col xl:flex-row-reverse gap-6"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "20px",
            background: "#F5F8FD",
          }}
        >
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Meseretbolled/Cafeteria-Management-System"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={cafe}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textBlack/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold">
                Cafteria management system new
              </h3>
            </div>
            <p
              style={{ color: "#fff" }}
              className="text-sm md:text-base bg-[#0794C9] p-2 md:p-6 rounded-md xl:-mr-16  "
            >
              Cafeteria Management System is based on a concept to maintain
              orders and management of a particular items. This project is
              developed in C++. language and Microsoft SQL database used. The
              role of the User is to maintain information including operations
              like modifying, deleting, updating the items records and customer
              order records in the system.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C++</li>
              <li>SQL</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textBlack duration-300"
                href="https://github.com/Meseretbolled/Cafeteria-Management-System"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
