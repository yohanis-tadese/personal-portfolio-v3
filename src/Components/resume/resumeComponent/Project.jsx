import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Projects I Developed By Me
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>

          <span style={{ fontSize: "14px" }}>
            Cafeteria Management System: Cafe Management System is a windows
            form application developed in programming language to carry out and
            manage basic cafe operations efficiently.
          </span>
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1  text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "14px" }}>
            Job Portal System: Online Job portal system is an application which
            connects employers and job seekers where employers are the source of
            the resources and the job seeker can find and apply for their
            targeted job.
          </span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Project;
