import React from "react";
import ProjectCard from "./ProjectCard";
import { FaAngleLeft } from "react-icons/fa6";
import p1 from "../asset/p1.jpg";
import p2 from "../asset/p2.jpg";
import p3 from "../asset/p3.jpg";

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
  const projectData = [
    {
      heading: "Ecommerce Store",
      skills: ["React", "Razorpay"],
      img: p1,
      time: "2024",
      link: "https://github.com/subhajitorrin/ecommerce.git",
    },
    {
      heading: "DSA Remainder",
      skills: ["React", "Firebase", "Python"],
      img: p2,
      time: "2024",
      link: "https://github.com/subhajitorrin/dsa-remainder.git",
    },
    {
      heading: "Chatapp",
      skills: ["React", "Firebase"],
      img: p3,
      time: "2024",
      link: "https://github.com/subhajitorrin/chatapp.git",
    },
  ];
  return (
    <div className=" w-full flex items-center flex-col gap-[1rem] py-[2rem]">
      <h4 className="text-[70px] text-white tracking-[-5px] monospace">
        Projects <span style={{ color: colorArr[index] }}>highlight</span>
      </h4>
      {projectData.map((item, index) => {
        return (
          <ProjectCard
            title={item.heading}
            skills={item.skills}
            img={item.img}
            index={index}
            time={item.time}
            link={item.link}
          />
        );
      })}
      {/* <div className="w-[54%] flex justify-center gap-[10rem]">
        <div className="cursor-pointer text-[#727272] rounded-full border border-[#727272] w-[40px] h-[40px] flex items-center justify-center">
          <FaAngleLeft />
        </div>
        <div className="cursor-pointer text-[#727272] rounded-full border border-[#727272] w-[40px] h-[40px] flex items-center justify-center">
          <span className="rotate-180">
            <FaAngleLeft />
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default Section2;
