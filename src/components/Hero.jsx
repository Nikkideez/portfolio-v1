import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { ModelCanvas } from './canvas';
import { socials } from '../constants';
import hardHat from '../assets/DALL·E 2024-08-03 00.32.24 - A polygon mesh art of a hardhat with a wireframe appearance-Photoroom.png'
import { InboxIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const staggerElements = stagger(0.1, { startDelay: 0.2 });
  const [scope, animate] = useAnimate();
  const [textChange, setTextChange] = useState("building things")

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
        // animate={{
        //   y: [0, 24, 0],
        // }}
        // transition={{
        //   duration: 1.5,
        //   // repeat: Infinity,
        //   // repeatType: "loop",
        // }}
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5 justify-evenly`}
      >
        <div className="grid lg:grid-cols-5 md:mt-5 md:pt-[150px] grid-cols-1" ref={scope}>
          {/* <div className="w-[1050px]">
            <h2 className="text-[288px] leading-[288px]">
              NIKHIL
            </h2>
            <div className="flex flex-row w-full">
              <div className="flex-shrink-0 w-[calc(100%-520px)] aspect-square block">
                <EarthCanvas  />
              </div>
              <div className="w-[520px]">
                <h2 className="text-[288px] leading-[288px]">
                  DEO
                </h2>
                <p className="mx-6 text-[24px] leading-[42px] text-secondary">
                  PASSIONATE ABOUT BUILDING THINGS
                </p>
              </div>
            </div>
          </div> */}
          {/* <div>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I'm <span className='text-[#915eff]'>Nikhil</span>

            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              className={`${styles.heroHeadText} text-white`} > I like to build stuff.  </motion.h2> <motion.p initial={{ opacity: 0, y: -10 }} className={`${styles.heroSubText} mt-2 text-white-100`} >
              I like to build stuff
            </motion.p>
          </div> */}
          <div className='col-span-2 lg:mr-[-4vw]'>
            <motion.h1 initial={{ opacity: 0, y: -10 }} className='md:pt-[150px] text-[#C3BABA]'>Hello, my name is</motion.h1>
        
            <motion.h2 initial={{ opacity: 0, y: -10 }} className='clamped-text font-black text-purple-50 my-2 text-[#E9E3E6]'>Nikhil Deo</motion.h2>
            <motion.h2 initial={{ opacity: 0, y: -10 }} className='clamped-text-2 leading-[0.9] font-medium text-[#C3BABA]'>I'm a <span className='text-teal-600'>software engineer</span> who's passionate about <span className='text-pink-600'>{textChange}</span>.</motion.h2>
            <motion.button initial={{ opacity: 0, y: -10 }} className='mt-[50px] border-2 p-2 text-[1rem] rounded-sm hover:text-emerald-500 hover:border-emerald-500 text-[#C3BABA] border-[#C3BABA]'>Download Resume</motion.button>
            <motion.div initial={{ opacity: 0, y: -10 }} className='flex flex-row gap-3 mt-7 ml-1'>
              {socials.map((social, index) => (
                <a href={social.link} key={index}>
                  <i className={`${social.className} text-[2rem] text-secondary hover:text-pink-500`} />
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: -10 }} className='col-span-3 aspect-square overflow-visible'>
            <ModelCanvas setTextChange={setTextChange} />
          </motion.div>
        </div>
        <div className='xs:bottom-10 bottom-32 flex w-full justify-start items-center'>
          {/* <a href='#about'>
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
        </a> */}
          {/* <div className='flex flex-row gap-3 mt-7 ml-1'>
            {socials.map((social, index) => (
              <a href={social.link} key={index}>
                <i className={`${social.className} text-[2rem] text-secondary hover:text-pink-500`} />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;