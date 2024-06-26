import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { RiFirebaseLine } from "react-icons/ri";
import gsaplogo from "../asset/gsap.webp";
import { FaPython } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

function Section5({ index, width }) {
  const colorArr = [
    "#89f480",
    "#c0b623",
    "#e36211cd",
    "#1cbcb9",
    "#39a82d",
    "#7116d8",
    "#bb1e84",
    "#a21f1f",
  ];
  const techList = [
    { icon: <FaReact />, text: "React" },
    { icon: <RiTailwindCssFill />, text: "Tailwind css" },
    { icon: <FaNode />, text: "Node" },
    { icon: <TbBrandVite />, text: "Vite" },
    { icon: <TbBrandJavascript />, text: "Javascript" },
    { icon: <FaGithub />, text: "Github" },
    { icon: <ImHtmlFive2 />, text: "HTML" },
    { icon: <FaCss3 />, text: "CSS3" },
    { icon: <RiFirebaseLine />, text: "Firebase" },
    { icon: <FaPython />, text: "Python" },
    { logo: gsaplogo, text: "GSAP" },
    { icon: <SiNetlify />, text: "Netlify" },
    { icon: <IoLogoVercel />, text: "Vercel" },
    { icon: <VscVscode />, text: "VsCode" },
    { icon: <SiPostman />, text: "Postman" },
  ];
  return (
    <div
      style={{ gap: width > 768 ? "10rem" : "3rem" }}
      className="h-screen  mb-[15rem] flex items-center justify-center flex-col "
    >
      <h4
        style={{ fontSize: width > 768 ? "70px" : "10vw" }}
        className=" text-white tracking-[-5px] monospace text-center leading-[85%]"
      >
        Some of the techs I like <br />{" "}
        <span style={{ color: colorArr[index] }}>to work with</span>
      </h4>
      {width > 768 ? (
        <div className="rounded-[5px] overflow-hidden text-[20px] text-white h-[400px] w-[60%] border border-[#404140] ">
          <div className="h-[10%] bg-[#0f0f0f] border-b-[#404140] border-b w-full flex justify-between items-center px-4 opacity-[0.7]">
            <p className=" text-[15px] font-[500]">techs</p>
            <div className=" flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="icon"
                width="1rem"
                height="1rem"
                data-v-d1e61456=""
              >
                <path
                  fill="#404140"
                  d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="icon"
                width="1rem"
                height="1rem"
                data-v-d1e61456=""
              >
                <path
                  fill="#404140"
                  d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"
                ></path>
              </svg>
              <span className="cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="icon"
                  width="1rem"
                  height="1rem"
                  data-v-d1e61456=""
                >
                  <path
                    fill="#404140"
                    d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="items-center h-[90%] bg-[#0f0f0f] opacity-[0.7] w-full text-[18px] p-4 monospace grid grid-cols-5">
            {techList.map((item, index) => {
              return item.icon ? (
                <div className="h-[80px] flex flex-col opacity-[.5]">
                  <div className="text-[3rem] flex justify-center">
                    {item.icon}
                  </div>
                  <p className="monospace text-center">{item.text}</p>
                </div>
              ) : (
                <div className="h-[80px] flex flex-col opacity-[.5]">
                  <div className="text-[3rem] flex justify-center ">
                    <img src={item.logo} className="invert-[1] h-[50px]" />
                  </div>
                  <p className="monospace text-center">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="rounded-[5px] overflow-hidden text-[20px] text-white  w-[90%] border border-[#404140] ">
          <div className="h-[7%] bg-[#0f0f0f] border-b-[#404140] border-b w-full flex justify-between items-center px-4 opacity-[0.7]">
            <p className=" text-[15px] font-[500]">techs</p>
            <div className=" flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="icon"
                width="1rem"
                height="1rem"
                data-v-d1e61456=""
              >
                <path
                  fill="#404140"
                  d="M2.67 8c0-.37.3-.67.66-.67h9.34a.67.67 0 1 1 0 1.34H3.33A.67.67 0 0 1 2.67 8"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="icon"
                width="1rem"
                height="1rem"
                data-v-d1e61456=""
              >
                <path
                  fill="#404140"
                  d="M8.2 4c-1.12 0-1.82-.05-2.56.33a3 3 0 0 0-1.31 1.3C3.95 6.39 4 7.09 4 8.2v7.6c0 1.12-.05 1.82.33 2.56a3 3 0 0 0 1.3 1.31c.75.38 1.45.33 2.57.33h7.6c1.12 0 1.82.05 2.56-.33a3 3 0 0 0 1.31-1.3c.38-.75.33-1.45.33-2.57V8.2c0-1.12.05-1.82-.33-2.56a3 3 0 0 0-1.3-1.31C17.61 3.95 16.91 4 15.8 4Zm0 2h7.6c1.12 0 1.54.05 1.65.1a1 1 0 0 1 .44.45c.06.11.11.53.11 1.65v7.6c0 1.12-.05 1.54-.1 1.65a1 1 0 0 1-.45.44c-.11.06-.53.11-1.65.11H8.2a6 6 0 0 1-1.65-.1 1 1 0 0 1-.44-.45A6 6 0 0 1 6 15.8V8.2c0-1.12.05-1.54.1-1.65a1 1 0 0 1 .45-.44C6.66 6.05 7.08 6 8.2 6"
                ></path>
              </svg>
              <span className="cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  class="icon"
                  width="1rem"
                  height="1rem"
                  data-v-d1e61456=""
                >
                  <path
                    fill="#404140"
                    d="M3.53 3.53a.67.67 0 0 1 .94 0L8 7.06l3.53-3.53a.67.67 0 1 1 .94.94L8.94 8l3.53 3.53a.67.67 0 1 1-.94.94L8 8.94l-3.53 3.53a.67.67 0 1 1-.94-.94L7.06 8 3.53 4.47a.67.67 0 0 1 0-.94"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="pb-[1.5rem] items-center h-[93%] bg-[#0f0f0f] opacity-[0.7] w-full text-[18px] p-4 monospace grid grid-cols-3">
            {techList.map((item, index) => {
              return item.icon ? (
                <div className="h-[80px] flex flex-col opacity-[.5]">
                  <div className="text-[2.5rem] flex justify-center">
                    {item.icon}
                  </div>
                  <p className="monospace text-center text-[1rem]">
                    {item.text}
                  </p>
                </div>
              ) : (
                <div className="h-[80px] flex flex-col opacity-[.5]">
                  <div className="flex justify-center ">
                    <img src={item.logo} className="invert-[1] h-[40px]" />
                  </div>
                  <p className="monospace text-center text-[1rem] ">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Section5;
