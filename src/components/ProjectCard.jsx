import gsap from "gsap";
import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

function ProjectCard({ title, skills, img, index, time, link }) {
  const projectCardImgRef = useRef(null);
  const projectCardLeft = useRef(null);
  const projectCounterRef = useRef(null);
  const projectArrowrRef = useRef(null);
  const projectYearRef = useRef(null);
  function handleEnter() {
    gsap.to(projectCardImgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
    gsap.to(projectCounterRef.current, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(projectCardLeft.current, {
      left: -50,
      duration: 0.3,
    });
    const t1 = gsap.timeline();
    t1.to(projectYearRef.current, {
      x: -30,
      duration: 0.3,
    });
    t1.to(
      projectArrowrRef.current,
      {
        opacity: 1,
        duration: 0.3,
      },
      0.1
    );
  }
  function handleLeave() {
    gsap.to(projectCardImgRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(projectCounterRef.current, {
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(projectCardLeft.current, {
      left: 0,
      duration: 0.3,
    });
    gsap.to(projectArrowrRef.current, {
      opacity: 0,
    });
    gsap.to(projectYearRef.current, {
      x: 0,
      duration: 0.3,
    });
  }
  function handelImgRotateEnter() {
    gsap.to(projectCardImgRef.current, {
      rotate: -5,
      scale: 1.1,
      duration: 0.3,
    });
  }
  function handelImgRotateLeave() {
    gsap.to(projectCardImgRef.current, {
      rotate: 0,
      scale: 1,
      duration: 0.3,
    });
  }
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="w-[54%] h-[250px] border-[#727272] border rounded-[10px] flex  px-[1rem] cursor-pointer"
    >
      <div
        className="w-[5%] h-full   text-[#727272] flex items-center "
        ref={projectCounterRef}
      >
        0{index + 1}
      </div>
      <div
        className="w-[40%] h-full  flex flex-col justify-center relative gap-2"
        ref={projectCardLeft}
      >
        <h4 className="text-[40px] text-white">{title}</h4>
        <div className="flex gap-[10px] text-[#727272] text-[13px]">
          {skills.map((item, index) => {
            return (
              <div className="rounded-[20px] border-[#727272] border px-4 py-1">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] h-full  flex justify-center relative left-[-40px]">
        <div
          onMouseEnter={handelImgRotateEnter}
          onMouseLeave={handelImgRotateLeave}
          ref={projectCardImgRef}
          className="flex items-center h-full w-[80%]  scale-[.5] opacity-0 relative top-[-10px]"
        >
          <img src={img} className="scale-[1] rounded-[10px]" />
        </div>
      </div>
      <div className="pr-4 relative w-[6%] h-full text-[#727272] flex items-center justify-end gap-2">
        <span className="absolute right-0 " ref={projectYearRef}>
          {time}
        </span>
        <div ref={projectArrowrRef} className="opacity-0 absolute right-0">
          <GoArrowUpRight
            style={{ fontSize: "1.3rem", position: "relative", top: "2px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
