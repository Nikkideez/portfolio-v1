import React from 'react'
import { SectionWrapper } from "../hoc";



const Works = () => {

  return (
        <h1 className='clamped-text-2 col-span-5 text-right mr-[50px]'>Projects</h1>
  );
};

export default SectionWrapper(Works, "works");