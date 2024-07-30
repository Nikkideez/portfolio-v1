import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const staggerElements = stagger(0.1, { startDelay: 0.2 });
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'div > *',
      { opacity: 1, y: 0 },
      { duration: 0.4, delay: staggerElements }
    );
  }, [animate]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5" ref={scope}>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I'm <span className='text-[#915eff]'>Nikhil</span>

            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              className={`${styles.heroHeadText} text-white`}
            >
              I like to build stuff.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              I like to build stuff
            </motion.p>
          </div>
        </div>
      </div>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
    </section>
  );
};

export default Hero;