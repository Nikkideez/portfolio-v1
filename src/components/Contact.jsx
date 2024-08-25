import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { Paperplane } from "./canvas"


const Contact = () => {

  return (
    <>
      <div className="grid lg:grid-cols-2 gid-cols-1 items-center">
        <div>
          <div >
            <ReactTyped
              strings={["Still keen ? ^1000 Contact me."]}
              typeSpeed={50}
              backSpeed={0}
              backDelay={1000}
              startWhenVisible={true}
              className={styles.sectionHeadText}
            />
            <motion.a
              className='flex flex-row items-center mt-2 group'
              variants={fadeIn("", "", 3, 1)}
              href='mailto:n.deo@hotmail.co.uk'
            >
              <i className='icon-mail4 text-secondary text-[1.6rem] text-[#E9E3E6] mr-2 group-hover:text-teal-500' />
              <p className='text-pink-500 text-[1.2rem] group-hover:underline group-hover:text-teal-500'>n.deo@hotmail.co.uk</p>
            </motion.a>
            <motion.a
              className='flex flex-row items-center mt-2 group'
              variants={fadeIn("", "", 3.2, 1)}
              href="https://www.linkedin.com/in/ndeo/"
            >
              <i className='icon-linkedin text-secondary text-[1.6rem] text-[#E9E3E6] mr-2 group-hover:text-teal-500' />
              <p className='text-pink-300 text-[1.2rem] group-hover:underline group-hover:text-teal-500'>www.linkedin.com/in/ndeo</p>
            </motion.a>
          </div>
        </div>
        <motion.div variants={fadeIn("left","",3.3,1)} className="aspect-square ml-0 lg:ml-[-230px] lg:mt-[-400px] lg:mr-[-100px] order-last">
          <Paperplane />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");