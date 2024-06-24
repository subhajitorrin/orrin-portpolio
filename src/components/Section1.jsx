import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
function Section1({ index }) {
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
    <div className=" h-screen w-full flex items-center justify-center flex-col gap-5 select-none ">
      <div className=" w-full h-[900px] absolute overflow-hidden flex  z-[1] top-[-20%]">
        <div className="infiniteScrollHz">
          <h1 className="text-[50rem] whitespace-nowrap text-[#10110F] lilita opacity-[.2]">
            subhajit
          </h1>
        </div>
        <div className="infiniteScrollHz">
          <h1 className="text-[50rem] whitespace-nowrap text-[#10110F] lilita opacity-[.2]">
            subhajit
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 z-[2]">
        <h2 className="text-[100px] text-white leading-[5.5rem] text-center monospace">
          Hi,i'm Subhajit,a <br />
          <span style={{ color: colorArr[index] }}>frontend</span> developer
        </h2>
        <p className="text-[#727272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          doloribus corrupti rerum officiis aut. <br /> Sunt nostrum, pariatur,
          hic quis amet odio molestiae sit quos sed similique impedit ab
          incidunt rem.
        </p>
        <div className="absolute bottom-[5rem] h-[150px]  text-white opacity-[.5]">
          <div className="mt-[-1px] arrow arrow1">
            <IoIosArrowDown className="text-[20px]" />
          </div>
          <div className="mt-[-1px] arrow arrow2">
            <IoIosArrowDown className="text-[20px]" />
          </div>
          <div className="mt-[-1px] arrow arrow3">
            <IoIosArrowDown className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
