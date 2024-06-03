import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Nativity Girl's School(NGS) Addis Ababa, Ethiopia
      </h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        September 2020 - 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>Natural Science studies</span>
        </li>
      </ul>

      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Udemy</h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">
        January 2022 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>
            Full-Stack Web Application Development (MERN) Stack and Data science
            and data analysis analysis.
          </span>
        </li>
      </ul>

      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">IBM</h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">April-2024</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>Web-fundamentals</span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;
