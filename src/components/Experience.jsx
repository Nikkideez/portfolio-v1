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
      <div className={`col-span-6 mt-[55px] col-start-${index + 2} flex items-center`}>
        <div className='pr-[20px]'>
          <img src={logoSrc} className='h-[4rem]' />
        </div>
        <div>
          <h2 className='text-[20px]'>{title}</h2>
          <p >{company}</p>
          <p>{period}</p>
          <p>{type}</p>
        </div>
      </div>
      <div className={`col-span-6 col-start-${index + 2}`}>
        <ul className='list-none'>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="before:content-['→'] before:mr-2 before:text-gray-500 text-[14px]">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Experience = () => {

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='grid grid-cols-10 mt-[20px] max-w-[1000px]'>
        <h1 className='clamped-text-2 col-span-5 ml-[20px]'>Experience</h1>
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
        <div className='col-span-3'>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");