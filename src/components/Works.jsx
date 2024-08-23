import React, { useState, useEffect, useMemo } from 'react'
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { iconList } from '../constants';

// Function to reorder the projects array
const reorderProjects = (projects, columns) => {
  let reordered = [];
  for (let i = 0; i < columns; i++) {
    for (let j = i; j < projects.length; j += columns) {
      reordered.push(projects[j]);
    }
  }
  return reordered;
}

// projects component
const ProjectContainer = ({ index, title, text, img, stackIcons, gitLink, readMoreLink, websiteLink, leafNodes }) => {
  const h2Style = "text-[20px] text-[#E9E3E6] font-bold mt-1"
  const pStyle = "mt-2 text-gray-300 text-[14px] leading-tight"
  const iDivStyle = "flex mt-1 pb-9"
  const iconStyle = "text-[2rem] mx-2 hover:text-pink-500 text-gray-500"
  const buttonDivStyle = "flex mt-4 items-center"
  const gitButtonStyle = "mr-4 ml-2 hover:text-emerald-500 text-[#C3BABA]"
  const readMoreButtonStyle = "border-2 p-2 text-[0.75rem] rounded-sm hover:text-emerald-500 hover:border-emerald-500 text-[#C3BABA] border-[#C3BABA]"
  const [isHovered, setIsHovered] = useState(false)
  // console.log(leafNodes)
  // console.log(window.innerWidth)

  return (
    <motion.div
      // layout
      className={`break-inside-avoid mb-7 group ${(!leafNodes.includes(index)) && "break-after-avoid"}`}
      whileHover={{ scale: 1.10 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(!isHovered)}
    >
      <div className='relative'>
        <img src={img} className='w-full rounded-sm' />
        <div
          className={`absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300 flex flex-col items-end`}
        >
          {websiteLink &&
            <a className='my-2' href={websiteLink}>
              <ArrowUpRightIcon className="text-gray-700 size-8 hover:size-10 hover:text-teal-600 transition-all duration-300" />
            </a>
          }
          {gitLink &&
            <a href={gitLink}>
              <i className="devicon-github-original text-gray-700 text-[2rem] hover:text-[2.5rem] hover:text-pink-500 transition-all duration-300"></i>
            </a>
          }
        </div>
      </div>
      <h2 className={`${h2Style}`}>{title}</h2>
      <p className='text-[0.75rem] text-gray-400'>2024</p>
      <h3 className='text-yellow-500'>Fullstack lead</h3>
      <motion.p
        className="mt-2 text-zinc-300 text-[14px] leading-tight overflow-hidden"
        // initial={{ opacity: 0 }}
        animate={{ maxHeight: isHovered ? '10em' : '0px', marginBottom: isHovered ? '15px' : '0px' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.p>
      <div className={`${iDivStyle} justify-start flex-wrap`}>
        {stackIcons.map((iconName, index) => (
          <a key={index} href={iconList[iconName][1]}>
            <i className={`devicon-${iconList[iconName][0]} ${iconStyle}`}></i>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

const Works = () => {
  const columns = 3;
  const orderedProjects = reorderProjects(projects, columns);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // const findLeafNodes = (totalElements, columns) => {
  //   const baseItemsPerColumn = Math.floor(totalElements / columns);
  //   const remainder = totalElements % columns;

  //   // Initialize the first value
  //   let accumulatedValue = -1;

  //   const leafIndexes = Array.from({ length: columns }, (_, i) => {
  //     const value = i < remainder ? baseItemsPerColumn + 1: baseItemsPerColumn ;
  //     accumulatedValue += value;
  //     return accumulatedValue;
  //   });

  //   return leafIndexes;
  // }

  // const leafNodes = findLeafNodes(orderedProjects.length, columns)

  // const leafNodes = window.innerWidth < 

  // console.log(window.innerWidth)


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const leafNodes = useMemo(() => {
    return windowSize > 1024 ? [2, 4, 6] : [3, 6];
  }, [windowSize]);


  return (
    <>
      <h1 className='clamped-text-3 font-black text-center'>Projects</h1>
      <div className={`columns-1 md:columns-2 lg:columns-3 gap-9 mt-9`}>
        {orderedProjects.map((project, index) => (
          <ProjectContainer
            key={index}
            index={index}
            title={project.title}
            text={project.text}
            img={project.img}
            stackIcons={project.icons}
            gitLink={project.gitLink}
            readMoreLink={project.readMoreLink}
            websiteLink={project.websiteLink}
            leafNodes={leafNodes}
          />
        ))}
      </div>
      {/* <div className='border-b-[1px] border-gray-700 mt-9'/> */}
    </>
  );
};

export default SectionWrapper(Works, "work");
