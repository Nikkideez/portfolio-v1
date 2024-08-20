import React from 'react'
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

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
const ProjectContainer = ({ index, title, text, img, stackIcons, gitLink, readMoreLink, websiteLink }) => {
  const h2Style = "text-[20px] text-[#E9E3E6] font-bold mt-1"
  const pStyle = "mt-2 text-gray-300 text-[14px] leading-tight"
  const iDivStyle = "flex mt-4"
  const iconStyle = "text-[2rem] mx-2 hover:text-pink-500 text-gray-500"
  const buttonDivStyle = "flex mt-4 items-center"
  const gitButtonStyle = "mr-4 ml-2 hover:text-emerald-500 text-[#C3BABA]"
  const readMoreButtonStyle = "border-2 p-2 text-[0.75rem] rounded-sm hover:text-emerald-500 hover:border-emerald-500 text-[#C3BABA] border-[#C3BABA]"
  return (
    <div className="break-inside-avoid mb-7 group">
      <div className='relative'>
        <img src={img} className='w-full rounded-sm' />
        <div
          className={`absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300 flex flex-col items-end`}
        >
          {websiteLink &&
            <a
              className='my-2'
              href={websiteLink}
            >
              <ArrowUpRightIcon className="text-gray-700 size-8 hover:size-10 hover:text-teal-600 transition-all duration-300" />
            </a>
          }
          <a
            href={gitLink}
          >
            <i className="devicon-github-original text-gray-700 text-[2rem] hover:text-[2.5rem] hover:text-pink-500 transition-all duration-300"></i>
          </a>
        </div>
      </div>
      <h2 className={`${h2Style}`}>{title}</h2>
      <p className='text-[0.75rem] text-gray-400'>2024</p>
      <h3 className='text-yellow-300'>Fullstack lead</h3>
      <p className={`${pStyle}`}>{text}</p>
      <div className={`${iDivStyle} justify-start`}>
        {stackIcons.map((iconClass, index) => (
          <i key={index} className={`${iconClass} ${iconStyle}`}></i>
        ))}
      </div>
      {/* <div className={`${buttonDivStyle} justify-start`}>
        <a href={gitLink} className={`${gitButtonStyle}`}>
          <i className="devicon-github-original text-[2rem]"></i>
        </a>
        <a href={readMoreLink} className={`${readMoreButtonStyle}`}>
          Read More
        </a>
      </div> */}
    </div>
  );
}

const Works = () => {
  const columns = 3;
  const reorderedProjects = reorderProjects(projects, columns);

  return (
    <>
      <h1 className='clamped-text-3 font-medium text-center'>Projects</h1>
      <div className={`columns-1 md:columns-2 lg:columns-3 gap-9 mt-9`}>
        {reorderedProjects.map((project, index) => (
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
          />
        ))}
      </div>
      {/* <div className='border-b-[1px] border-gray-700 mt-9'/> */}
    </>
  );
};

export default SectionWrapper(Works, "work");
