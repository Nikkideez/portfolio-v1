import React from 'react'
import { SectionWrapper } from "../hoc";
import { jobs } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from 'framer-motion';


const JobExperience = ({ index, logoSrc, company, title, period, type, responsibilities }) => {
  const delay = index * 0.5
  return (
    <>
      <motion.div variants={textVariant(delay)} className='mt-[8px] col-span-2 md:col-span-1 md:col-start-1 flex items-center justify-center'>
        <img src={logoSrc} className='h-[4rem]' />
      </motion.div>
      <motion.div variants={textVariant(delay)} className='col-span-6 md:col-span-3 col-start-3 md:col-start-2 '>
        <h2 className='text-white-ish'>{company}</h2>
        <h2 className='text-[1.2rem] text-white-ish'>{title}</h2>
        <p className='text-[0.85em] text-secondary'>{period}</p>
        <p className='text-[0.85em] text-secondary'>{type}</p>
      </motion.div>
      <motion.div variants={textVariant(delay)} className={`col-span-8 md:col-span-6 md:col-start-5 mb-[40px] md:mb-[0] group`}>
        <ul className='list-none'>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="before:content-['→'] before:mr-2 before:text-gray-500 text-[14px] text-secondary group-hover:text-tertiary">
              {responsibility}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

const Experience = () => {

  return (
    <div className='flex flex-col justify-center items-center my-[100px] '>
      <div className='grid grid-cols-8 md:grid-cols-10 mt-[5px] items-start gap-y-6 md:gap-y-20 gap-x-1'>
        <motion.h1 className='clamped-text-2 col-span-8 md:col-span-9 md:col-start-4'>Experience</motion.h1>
        {jobs.map((job, index) => (
          <JobExperience
            key={index}
            index={index}
            logoSrc={job.logoSrc}
            company={job.company}
            title={job.title}
            period={job.period}
            type={job.type}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");