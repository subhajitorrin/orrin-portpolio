import React from "react";
import ProjectCard from "./ProjectCard";
import { FaAngleLeft } from "react-icons/fa6";

function Section2({ index }) {
  const colorArr = [
    "#89f480",
    "#c0b623",
    "#e36211cd",
    "#1cbcb9",
    "#7116d8",
    "#bb1e84",
    "#a21f1f",
  ];
  return (
    <div className=" w-full flex items-center flex-col gap-[1rem] py-[2rem]">
      <h4 className="text-[70px] text-white tracking-[-5px] monospace">
        Projects <span style={{ color: colorArr[index] }}>highlight</span>
      </h4>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className="w-[54%] flex justify-center gap-[10rem]">
        <div className="cursor-pointer text-[#727272] rounded-full border border-[#727272] w-[40px] h-[40px] flex items-center justify-center">
          <FaAngleLeft />
        </div>
        <div className="cursor-pointer text-[#727272] rounded-full border border-[#727272] w-[40px] h-[40px] flex items-center justify-center">
          <span className="rotate-180">
            <FaAngleLeft />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section2;
