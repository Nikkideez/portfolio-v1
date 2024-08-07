import React from "react";

import { SectionWrapper } from "../hoc";
import { Toolbox } from "./canvas";


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center h-[1000px]'>
      <Toolbox />
    </div>
  );
};

export default Tech;