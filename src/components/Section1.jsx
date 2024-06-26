import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";

function Section1({ index, width, section1Ref }) {
  const [isCopied, setIsCopied] = useState(false);
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

  function handleCopy() {
    setIsCopied(true);
    if (width <= 768) {
      const textArea = document.createElement("textarea");
      textArea.value = "npx orrin";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText("npx orrin");
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div
      ref={section1Ref}
      className="h-screen w-full flex items-center justify-center flex-col gap-5 select-none"
    >
      <div className="w-full h-[900px] absolute overflow-hidden flex z-[1] top-[-20%]">
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
        {width > 768 ? (
          <div className="flex items-center justify-center flex-col gap-5">
            <h2 className="text-[100px] text-white leading-[5.5rem] text-center monospace">
              Hi,I'm Subhajit,a <br />
              <span style={{ color: colorArr[index] }}>frontend</span> developer
            </h2>
            <p className="text-[#727272]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              doloribus corrupti rerum officiis aut. <br /> Sunt nostrum,
              pariatur, hic quis amet odio molestiae sit quos sed similique
              impedit ab incidunt rem.
            </p>
            <div
              onClick={handleCopy}
              className="monospace text-[17px] items-center opacity-[1] text-[white] rounded-[7px] px-[10px] py-[2px] flex gap-[10px] border border-[#404140] cursor-pointer"
            >
              <span style={{ color: colorArr[index] }}>npx</span> orrin{" "}
              <span>{isCopied ? <TbCopyCheck /> : <TbCopy />}</span>
            </div>
          </div>
        ) : (
          <div
            onClick={handleCopy}
            className="flex items-center justify-center flex-col gap-5"
          >
            <h2 className="text-[10vw] text-white leading-[100%] text-center monospace">
              Hi,I'm Subhajit,a <br />
              <span style={{ color: colorArr[index] }}>frontend</span> developer
            </h2>
            <p className="text-[#727272] text-center w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              doloribus corrupti rerum officiis aut.
            </p>
            <div className="monospace text-[17px] items-center opacity-[1] text-[white] rounded-[7px] px-[10px] py-[2px] flex gap-[10px] border border-[#404140] cursor-pointer">
              <span style={{ color: colorArr[index] }}>npx</span> orrin{" "}
              <span>{isCopied ? <TbCopyCheck /> : <TbCopy />}</span>
            </div>
          </div>
        )}
        <div
          style={{ bottom: width > 768 ? "5rem" : "1rem" }}
          className="absolute  h-[150px] text-white opacity-[.5]"
        >
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
