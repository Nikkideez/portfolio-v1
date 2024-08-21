import React from "react";

import { SectionWrapper } from "../hoc";
import { Toolbox3 } from "./canvas";
import { toolbox, iconList } from "../constants";
import { color } from "framer-motion";


const Tech = () => {
  const allKeys = Object.keys(iconList);
  const remaining = allKeys.filter(key => !toolbox["core"].includes(key));
  
  const createList = (list, color) => {
    return list.map((toolName, index) => {
      const isLast = index === list.length - 1;
      return (
        <span key={index}>
          <a href={iconList[toolName][1]} className={`hover:text-${color}`}>{iconList[toolName][2]}</a>
          {!isLast && ", "}
        </span>
      );
    })
  }
  
  const coreList = createList(toolbox["core"], "pink-500");
  const knowledgeList = createList(remaining, "pink-500");

  return (
    <div className="grid lg:grid-cols-5 gid-cols-1 items-center">
      <div className="col-span-2">
        <h2 className="clamped-text-2 text-tertiary">
          Toolbox
        </h2>
        <h3 className="text-[1.4rem] font-thin text-secondary mt-3">Core</h3>
        <p className="break-words text-yellow-500 ">
          {coreList}
        </p>
        <h3 className="text-[1.4rem] font-thin text-secondary mt-5">Knowledgeable</h3>
        <p className="break-words text-[#d7d0c8] ">
          {knowledgeList}
        </p>
      </div>
      <div className="aspect-square col-span-3">
        <Toolbox3 />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");