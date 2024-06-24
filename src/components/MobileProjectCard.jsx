import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

function MobileProjectCard({ title, index, link, skills, img }) {
  return (
    <div className="w-[90%] h-[300px] border-[#404140] border rounded-[7px] px-[1rem] monospace flex flex-col justify-evenly">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="text-[#727272] text-[.8rem]">0{index + 1}</div>
          <div className="">
            <h4 className="text-[7vw] text-white">{title}</h4>
          </div>
          <div className="text-[#727272] text-[.8rem]">2024</div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-[10px] text-[#727272] text-[12px]">
            {skills.map((item, index) => {
              return (
                <div className="rounded-[20px] border-[#727272] border px-4 py-1">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between border-opacity-[.3] border-[#727272] border px-[5px] py-[5px] rounded-[5px]">
        <div className="w-[50%] flex items-center">
          <div className="w-full ">
            <img
              src={img}
              className="rounded-[5px] relative z-[0] opacity-[.8]"
            />
          </div>
        </div>
        <div className="border-l w-[48%] border-opacity-[.3] h-full border-[#727272]">
          <p className="text-[.8rem] text-[#ffffff] p-[5px] text-center opacity-[.5]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, similique omnis? Neque quas fugit facere cupiditate
            repellendus iste id voluptates!
          </p>
        </div>
      </div>
      <div className=" text-[#727272]  justify-center text-[.9rem] flex items-center">
        <span
          className="flex items-center gap-[5px]"
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          github <RiExternalLinkLine />
        </span>
      </div>
    </div>
  );
}

export default MobileProjectCard;
