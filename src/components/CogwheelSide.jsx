import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
// Just testing what the wheel would look like on stuck the side of the screen next to scrollbar
// Doesn't look as nice as the original cogwheel
// Will probably remove this component

const CogwheelSide = () => {
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, { damping: 100, stiffness: 400 });
  const scrollYSpringSlow = useTransform(scrollYSpring, (value) => value/10);
  const rotateReverse = useTransform(scrollYSpring, (value) => -(value/10));

  return (
    <div className="fixed bottom-0 right-0 w-[100px] h-[100px] z-10">
      <motion.div
        className="absolute w-[40px] h-[40px] top-[-0px] left-[55px]"
        style={{ rotate: rotateReverse }}
        // initial={{ rotate: 0 }}
        // animate={{ rotate: rotate.current }}
        // transition={{ ease: "linear", stiffness: 200 }}
      >
        <svg id="blue" viewBox="0 0 100 100" className='stroke-secondary stroke-[1px] hover:stroke-pink-500'>
          <path
            d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6
            c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3
            l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9
            c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-[60px] h-[60px] left-[35px] top-[35px]"
        style={{ rotate: scrollYSpringSlow }}
        // initial={{ rotate: 0 }}
        // animate={{ rotate: -rotate.current }} // Reverse direction
        // transition={{ type: "spring", stiffness: 50 }}
      >
        <svg id="pink" viewBox="0 0 100 100" className='stroke-secondary stroke-[1px] hover:stroke-pink-500 rotate-6'>
          <path
            d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6
            c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3
            l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9
            c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute w-[40px] h-[40px] top-[55px] left-[-2px] "
        style={{ rotate: rotateReverse }}
        // initial={{ rotate: 0 }}
        // animate={{ rotate: rotate.current }}
        // transition={{ type: "spring", stiffness: 50 }}
      >
        <svg id="yellow" viewBox="0 0 100 100" className='stroke-secondary stroke-[1px] hover:stroke-pink-500 rotate-[-1deg]'>
          <path
            d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6
            c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3
            l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9
            c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CogwheelSide;
