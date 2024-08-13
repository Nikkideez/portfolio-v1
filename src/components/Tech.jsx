import React from "react";

import { SectionWrapper } from "../hoc";
import { Toolbox3 } from "./canvas";


const Tech = () => {
  return (
    <div className="grid lg:grid-cols-5 gid-cols-1 items-center">
      <div className="col-span-2">
        <h2 className="clamped-text-2">
          Toolbox
        </h2>
        <p>
          React, JavaScript, Three.js, React-Three-Fiber, React-Spring, React-Router-Dom, TailwindCSS,
        </p>
      </div>
      <div className="aspect-square col-span-3">
        <Toolbox3 />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");