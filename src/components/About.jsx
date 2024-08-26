import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { Face } from "./canvas"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[140px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25+2, 0.75)}
      className='w-full bg-gray-600 hover:bg-pink-500 p-[1px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary  py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-blue-50 text-[1rem] font-thin text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <div className="grid lg:grid-cols-2 gid-cols-1 items-center">
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.75)}
          className="aspect-square ml-0 lg:ml-[-30px] order-last lg:order-first mt-12 lg:mt-0">
          <Face />
        </motion.div>

        <div>
            <ReactTyped
              strings={["$ cat About.txt"]}
              typeSpeed={50}
              backSpeed={50}
              backDelay={1000}
              startWhenVisible={true}
              className={styles.sectionHeadText}
            />
          <motion.p
            variants={fadeIn("", "", 1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Hello, I’m Nikhil! I’m a software engineer who’s endlessly fascinated by all the cool things that can be built with code.
          </motion.p>
          <div className='mt-20 flex flex-wrap gap-3'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");