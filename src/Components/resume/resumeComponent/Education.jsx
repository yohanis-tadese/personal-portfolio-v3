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
        January 2023 - 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>
           Data Science and Data analytics for beginner 
          </span>
          <span style={{ fontSize: "15px" }}>
          Data structures and Algorithms 
          </span>
          <span style={{ fontSize: "15px" }}>
          C++ and Phyton Programming language. 
          </span>
        </li>
           <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
       </span>
          <span style={{ fontSize: "15px" }}>
          Data structures and Algorithms 
          </span>
         
        </li>
                <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
      
          <span style={{ fontSize: "15px" }}>
          C++ and Phyton Programming language. 
          </span>
        </li>
      </ul>

      <br />
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">Google Developer Student Clubs Addis Ababa </h3>
      <p className="text-sm mt-1 font-medium text-textroyalBlue">June 2022-2023 </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-textroyalBlue">
            <FaArrowAltCircleRight />
          </span>
          <span style={{ fontSize: "15px" }}>Front-end developer and Python programming</span>
        </li>
      </ul>
    </motion.div>
  );
};

export default Education;
