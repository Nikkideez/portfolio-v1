import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { ndlogo1, menu, close } from '../assets'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log(latest)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  })
  return (
    <motion.nav
      className={`${styles.paddingX} w-[100vw] sm:w-full flex items-center justify-between py-5 fixed top-0 z-20 bg-primary`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden && !toggle ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={ndlogo1} alt="logo" className="w-9 h-9 object-contain" />
          {/* <p className="text-white text-[18px] font-bold cursor-pointer">Nikhil Deo</p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.slice(1).map((link) => (
            <li key={link.id} className={`${active === link.title
              ? "text-white"
              : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20 color-secondary"
            onClick={() => setToggle(!toggle)}
          />
          <motion.div 
          variants={{
            hidden: { opacity: 0, transitionEnd: { display: "none" } },
            visible: { opacity: 1, display: "flex" }
          }}
          animate={toggle ? "visible" : "hidden"}
          initial="hidden"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`sm:hidden p-6 fixed top-0 left-0 w-[100vw] sm:w-full h-screen z-10 rounded-xl items-center justify-center backdrop-blur-sm`}>
            <ul className="list-none flex justify-end flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] text-center`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar