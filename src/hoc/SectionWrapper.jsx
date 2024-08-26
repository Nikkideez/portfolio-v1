import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, viewAmount=0.50) =>
  function HOC() {
    if(window.innerWidth <= 640) viewAmount = 0.15;
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: viewAmount }}
        className={`${styles.padding} max-w-[90rem] mx-auto relative ${idName==="projects" ? "z-10" : "z-0"}`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;