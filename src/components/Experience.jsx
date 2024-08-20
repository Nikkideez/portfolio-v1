import React from 'react'
import { SectionWrapper } from "../hoc";
import { jobs } from "../constants";
// import '../assets/company/icomoon/style.css'


const JobExperience = ({ index, logoSrc, company, title, period, type, responsibilities }) => {
  const colClasses = ["col-start-1", "col-start-2", "col-start-3"]
  return (
    <>
      {/* <div className={`col-span-1 col-start-${index+2} flex items-center justify-end flex-col mt-[55px]`}>
        <i className={`${iconClass} text-[3rem]`} />
      </div> */}
      {/* <div className={`col-span-1 flex items-center`}> */}
      <div className='mt-[8px] col-span-2 md:col-span-1 md:col-start-1 flex items-center justify-center'>
        <img src={logoSrc} className='h-[4rem]' />
      </div>
      <div className='col-span-6 md:col-span-3 col-start-3 md:col-start-2 '>
        <h2 className='text-[1.1rem]'>{title}</h2>
        <p >{company}</p>
        <p>{period}</p>
        <p>{type}</p>
      </div>
      <div className={`col-span-8 md:col-span-6 md:col-start-5 mb-[40px] md:mb-[0]`}>
        <ul className='list-none'>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="before:content-['→'] before:mr-2 before:text-gray-500 text-[14px]">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='col-span-10 border-b-2 border-gray-300'/> */}
    </>
  );
};

const Experience = () => {

  return (
    <div className='flex flex-col justify-center items-center my-[100px] '>
      <div className='grid grid-cols-8 md:grid-cols-10 mt-[5px] items-start gap-y-6 md:gap-y-20 gap-x-1'>
        <h1 className='clamped-text-2 col-span-8 md:col-span-9 md:col-start-4'>Experience</h1>
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
        {/* <div className='col-span-3'>
        </div> */}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");