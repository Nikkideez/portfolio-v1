import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Paperplane } from "./canvas"
import { InboxIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-white p-[1px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Contact = () => {
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);
  console.log(isTypingComplete);


  return (
    <>
      {/* <p className={styles.sectionSubText}>Introduction</p> */}
      <div className="grid lg:grid-cols-2 gid-cols-1 items-center">

        <div>
          <motion.div variants={textVariant()}>
            {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
            <ReactTyped
              strings={["Still keen ? ^1000 Contact me."]}
              typeSpeed={75}
              backSpeed={0}
              backDelay={1000}
              startWhenVisible={true}
              // onBegin={() => setIsTypingComplete(true)}
              // onComplete={() => setIsTypingComplete(true)}
              // loop
              className={styles.sectionHeadText}
            />
            <motion.div

              className='flex flex-row'
              variants={fadeIn("", "", 4, 1)}
            >
              <InboxIcon className='h-8 w-8 text-[#E9E3E6] mr-2' />
              <p className='text-pink-500 text-[1.2rem]'>n.deo@hotmail.co.uk</p>
            </motion.div>
            <motion.div
              className='flex flex-row'
              variants={fadeIn("", "", 4.2, 1)}
            >
              <UserCircleIcon className='h-8 w-8 text-[#E9E3E6] mr-2' />
              <p className='text-pink-300 text-[1.2rem]'>www.linkedin.com/in/ndeo</p>
            </motion.div>
          </motion.div>
          {/* <motion.p
            variants={fadeIn("", "", 4, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            nixfrfr@sent.com
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 4.2, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            https://www.linkedin.com/in/ndeo/
          </motion.p> */}
          {/* )} */}
          {/* <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div> */}
        </div>
        <div className="aspect-square ml-0 lg:ml-[-230px] lg:mt-[-400px] lg:mr-[-100px] order-last">
          <Paperplane />
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");