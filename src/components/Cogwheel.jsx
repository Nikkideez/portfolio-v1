import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

const Cogwheel = () => {
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, { damping: 50, stiffness: 100 });
  const scrollYSpringSlow = useTransform(scrollYSpring, (value) => value/4);
  const rotateReverse = useTransform(scrollYSpring, (value) => -value/4);

  return (
      <div className='col-span-4 flex h-full w-[200px]'>

        <div className="relative">
          <motion.div
            className="absolute w-[80px] h-[80px] top-[-40px] left-[20px]"
            style={{ rotate: rotateReverse }}
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
            className="absolute w-[150px] h-[150px] left-[90px] top-[-48px]"
            style={{ rotate: scrollYSpringSlow }}
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
            className="absolute w-[100px] h-[100px] top-[33px] left-[0px] "
            style={{ rotate: scrollYSpringSlow }}
          >
            <svg id="yellow" viewBox="0 0 100 100" className='stroke-secondary stroke-[1px] hover:stroke-pink-500 rotate-[-4deg]'>
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
      </div>
  );
};

export default Cogwheel;
