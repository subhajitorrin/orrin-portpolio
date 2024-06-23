import React from "react";
import useDragger from "./useDragger";

function DragBox2({zindex,setZ}) {
  useDragger("dragBox2", "dragContainer");
  return (
    <div
    onMouseDown={()=>setZ(1)}
      id="dragBox2"
      style={{zIndex:zindex[1]}}
      className="rounded-[5px] overflow-hidden text-[20px] text-white h-[300px] w-[200px] absolute top-[300px] left-[500px] border border-[#404140] "
    >
      <div className="h-[12%] bg-[#0f0f0f] border-b-[#404140] border-b w-full flex justify-between items-center px-4 opacity-[0.7]">
        <p className=" text-[15px] font-[500]">web-dev</p>
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
      <div className="h-[88%] bg-[#0f0f0f] opacity-[0.5] w-full text-[18px] p-4 monospace">
        <p>- Html</p>
        <p>- Css</p>
        <p>- Javascript</p>
        <p>- Tailwind</p>
        <p>- React</p>
        <p>- Gsap</p>
        <p>- Locomotive</p>
      </div>
    </div>
  );
}

export default DragBox2;
