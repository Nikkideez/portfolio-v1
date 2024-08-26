import React from "react";
import { SectionWrapper } from "../hoc";
import { Toolsphere } from "./canvas";
import { toolbox, iconList } from "../constants";
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";


const Toolbox = () => {
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

  // Create list of core and knowledgeable tools
  const coreList = createList(toolbox["core"], "pink-500");
  const knowledgeList = createList(remaining, "pink-500");

  return (
    <div className="grid lg:grid-cols-5 gid-cols-1 items-center">
      <motion.div variants={fadeIn("up", "spring", 0, 0.75)} className="col-span-2">
        <h2 className="clamped-text-2 text-tertiary">
          Toolbox
        </h2>
        <h3 className="text-[1.4rem] font-thin text-secondary mt-5 mb-1">Core</h3>
        <p className="break-words text-yellow-500 ">
          {coreList}
        </p>
        <h3 className="text-[1.4rem] font-thin text-secondary mt-5 mb-1">Knowledgeable</h3>
        <p className="break-words text-[#d7d0c8] ">
          {knowledgeList}
        </p>
      </motion.div>
      <motion.div variants={fadeIn("down", "spring", 0.35, 0.75)} className="aspect-square col-span-3">
        <Toolsphere />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Toolbox, "Toolbox", 0.8);