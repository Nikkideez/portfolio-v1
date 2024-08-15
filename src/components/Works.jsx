import React from 'react'
import { SectionWrapper } from "../hoc";
import pImg from '../assets/projects/portfolio-png.png'
import surveyR from '../assets/projects/Nokia TechLab_DSCF4441-Amos Wong_0.jpg'


const Works = () => {

  return (
    <>
      <h1 className='clamped-text-2 text-center'>Projects</h1>
      <div className='grid grid-cols-5 gap-6 mt-9 items-center'>
        <img src={pImg} className='col-span-3'  />
        <div className='col-start-4 col-span-2'>
          <h2>This Portfolio</h2>
          <p>Needed to start somewhere with a digital portfolio. The most challenging part of this was figuring out the right design.
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
        <img src={surveyR} className='col-span-3 col-start-3'  />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");