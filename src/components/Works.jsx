import React from 'react'
import { SectionWrapper } from "../hoc";
import pImg from '../assets/projects/portfolio-png.png'
import surveyR from '../assets/projects/Nokia TechLab_DSCF4441-Amos Wong_0.jpg'
import squidly from '../assets/projects/squidly.png'


const Works = () => {
  // projects component
  const ProjectContainer = ({ index, title, text, img }) => {
    const h2Style = "text-[20px] font-bold"
    const pStyle = "mt-5 text-gray-100 text-[14px]"
    return ((index+1) % 2 ?
      <>
        <img src={img} className='col-span-3 rounded-sm' />
        <div className='col-start-4 col-span-2'>
          <h2 className={`${h2Style} text-right`}>{title}</h2>
          <p className={`${pStyle} text-right`}>{text}</p>
        </div>
      </>
      :
      <>
        <div className='col-span-2'>
          <h2 className={`${h2Style}`}>{title}</h2>
          <p className={`${pStyle}`}>{text}</p>
        </div>
        <img src={img} className='col-span-3 rounded-sm' />
      </>
    )
  }

  const projects = [
    {
      title: 'This Portfolio',
      text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
      img: pImg
    },
    {
      title: 'Survey Robot',
      text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
      img: surveyR
    },
    {
      title: 'Squidly',
      text: 'Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design. There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations. This resulted in a minimilistic React + ThreeJS project, and while there\'s still a lot I want to improve with the design, I learned a lot as well.',
      img: squidly
    }
  ]

  return (
    <>
      <h1 className='clamped-text-2 text-center'>Projects</h1>
      <div className='grid grid-cols-5 gap-x-6 gap-y-16 mt-9 items-center'>
        {/* <img src={pImg} className='col-span-3 rounded-sm' />
        <div className='col-start-4 col-span-2'>
          <h2 className='text-right'>This Portfolio</h2>
          <p className='text-right'>Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design.
            There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations.
            This resulted in a minimilistic React + ThreeJS project, and while there's still a lot I want to improve with the design, I learned a lot as well.
          </p>
        </div>
        <div className='col-span-2'>
          <h2>Survey Robot</h2>
          <p>Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design.
            There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations.
            This resulted in a minimilistic React + ThreeJS project, and while there's still a lot I want to improve with the design, I learned a lot as well.
          </p>
        </div>
        <img src={surveyR} className='col-span-3 col-start-3 rounded-sm' />
        <img src={squidly} className='col-span-3 rounded-sm' />
        <div className='col-span-2'>
          <h2 className='text-right'>Survey Robot</h2>
          <p className='text-right'>Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design.
            There were projects like Brittany Chiangs that looked incredible with elegant and effective typogography, however I also wanted to learn about 3D animations.
            This resulted in a minimilistic React + ThreeJS project, and while there's still a lot I want to improve with the design, I learned a lot as well.
          </p>
        </div> */}
        {projects.map((project, index) => (
          <ProjectContainer
            key={index}
            index={index}
            title={project.title}
            text={project.text}
            img={project.img}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");