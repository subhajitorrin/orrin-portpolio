import React, { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TbBrandSuperhuman } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { MdAutorenew } from "react-icons/md";
import gsap from "gsap";

function Overlay({ setindex, index }) {
  const spinRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  function handelSpin() {
    if (!isAnimating && spinRef.current) {
      setIsAnimating(true);
      gsap.set(spinRef.current, { rotate: 0 });
      gsap.to(spinRef.current, {
        rotate: "360deg",
        duration: 0.7,
        ease: "power4.inOut",
        onComplete: () => setIsAnimating(false),
      });
      setTimeout(() => {
        setindex((prev) => (prev > 5 ? 0 : prev + 1));
      }, 350);
    }
  }
  const colorArr = [
    "#89f480",
    "#a2991f",
    "#d7651dcd",
    "#1fa2a0",
    "#5c1fa2",
    "#a21f74",
    "#a21f1f",
  ];
  return (
    <div className=" h-screen w-screen fixed  p-3 z-10 top-0 left-0 pointer-events-none">
      <div className="h-full w-full border-r border-[#404140] relative">
        <div className=" absolute w-full h-[40px] border-t border-b border-[#404140] flex justify-between items-center">
          <div className="pl-2 pr-2">
            <svg
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 25 25"
              id="scrutinizer-ci"
            >
              <path
                fill="#404140"
                d="M8.973 24c-2.478 0-5.031-.035-7.189-.098-.377-.012-.688-.302-.725-.677l-.056-.57c-.004-.049-.004-.098 0-.146.13-1.33.826-2.569 2.07-3.685.744-.657 1.61-1.135 2.578-1.422 1.161-.435 1.628-.435 6.093-.435l.253-.004c2.195-.033 3.187-.048 3.453-.08.038-.025.069-.051.097-.076.054-.135.071-.188.071-.573 0-.249.007-.385-.01-.479-.048-.044-.097-.092-.15-.138-.394-.108-2.503-.118-4.462-.118-3.479 0-4.028 0-4.476-.143-1.269-.275-2.413-.836-3.366-1.634-.925-.76-1.599-1.773-1.951-2.935-.336-1.538-.01-1.866.129-2.007.292-.289.308-.305 7.542-.277.018 0 .036.001.054.002 3.184.013 7.024.047 7.387.135.893.187 1.738.539 2.465 1.021 1.049.838 1.839 1.819 2.417 2.97C21.734 13.791 22 15.002 22 16.254c0 .898-.139 1.798-.403 2.602l-.011.037c-.622 1.861-1.892 3.413-3.584 4.4l-.305.151c-.027.016-.055.03-.083.043-.264.117-.539.21-.839.282l-.454.111c-.052.013-.105.02-.158.021C13.724 23.967 11.305 24 8.973 24zM2.528 22.422C4.513 22.473 6.772 22.5 8.973 22.5c2.293 0 4.671-.032 7.07-.096l.376-.092c.198-.048.371-.104.536-.174l.339-.167c1.331-.778 2.364-2.039 2.861-3.525l.726.188-.712-.235C20.385 17.741 20.5 17 20.5 16.254c0-1.033-.219-2.032-.652-2.97-.47-.935-1.125-1.749-1.935-2.398-.532-.352-1.198-.629-1.887-.775-.318-.039-3.075-.088-7.157-.104-.018 0-.036-.001-.054-.002-3.094-.015-5.24-.001-6.229.02.016.115.039.246.069.388.25.817.757 1.581 1.449 2.148.793.665 1.73 1.121 2.724 1.329.03.007.105.023.135.034C7.185 14 8.223 14 10.997 14c4.28 0 4.782.059 5.24.329.256.188.421.353.559.535.323.435.323.708.323 1.371 0 .622-.06.838-.187 1.15-.027.072-.103.231-.15.291-.167.211-.369.386-.599.52-.327.211-.327.211-4.162.269l-.265.004c-4.344 0-4.695.008-5.629.356-.805.24-1.481.612-2.056 1.121C3.198 20.729 2.679 21.561 2.528 22.422zM15.404 16.915c-.004.002-.008.004-.012.007C15.396 16.919 15.4 16.917 15.404 16.915zM7.004 8H2.006C1.903 8 1 7.964 1 6.705 1 5.823 1.454 4.21 2.45 2.749c1.185-1.738 2.784-2.695 4.502-2.695L14.51 0c.047 0 .095 0 .142 0 7.455 0 7.456.003 7.723.504l-.002.002c.212.405.133 1.051.014 1.559-.549 2.25-3.01 4.184-5.852 4.606C16.137 6.763 13 6.785 11.83 6.785c-.616.043-1.34.032-2.041.019-.638-.011-1.57-.027-1.935.051-.02.092-.048.256-.06.328C7.681 7.858 7.302 8 7.004 8zM2.51 6.5h3.896c.077-.284.199-.571.425-.787.025-.024.051-.046.079-.066.506-.365 1.343-.369 2.904-.343.669.013 1.362.022 1.965-.017 2.421-.002 4.242-.056 4.503-.095 2.258-.336 4.242-1.829 4.644-3.477.015-.066.028-.131.038-.192C20.089 1.5 18.101 1.5 14.516 1.5L6.957 1.554c-1.396 0-2.404.914-3.005 1.681C3.005 4.442 2.587 5.839 2.51 6.5z"
              />
            </svg>
          </div>
          <div className="">
            <h4 className="text-white relative left-5 text-[19px] monospace border-r-[1px] w-full whitespace-nowrap overflow-hidden  border-transparent ">
              subhajit
              <span className="font-bold " style={{ color: colorArr[index] }}>
                &lt;ghosh&gt;
              </span>
            </h4>
          </div>
          <div className=" flex gap-2 pr-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="icon"
              width="1.2rem"
              height="1.2rem"
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
              width="1.2rem"
              height="1.2rem"
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
                width="1.2rem"
                height="1.2rem"
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
        <div className="absolute bottom-0 w-full h-[40px] border-t border-b border-[#404140] flex justify-end items-center">
          <div
            onClick={handelSpin}
            className="text-white opacity-[.5] text-[12px] border px-[1rem] py-[2px] rounded-[10px] cursor-pointer pointer-events-auto flex gap-[5px]"
          >
            Theme{" "}
            <span
              ref={spinRef}
              style={{ pointerEvents: isAnimating ? "none" : "auto" }}
            >
              <MdAutorenew className="text-[18px]" />
            </span>
          </div>
          <div className="text-white opacity-[.5] flex gap-[1rem] pointer-events-auto px-[2rem]">
            <FaGithub className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
        <div className="absolute left-0 h-full w-[40px] border border-[#404140] text-white flex items-center flex-col justify-center gap-[2rem]">
          <FaHome className="cursor-pointer pointer-events-auto opacity-[.5]" />
          <TbBrandSuperhuman className="cursor-pointer pointer-events-auto opacity-[.5]" />
          <RiContactsLine className="cursor-pointer pointer-events-auto opacity-[.5]" />
          <GoMail className="cursor-pointer pointer-events-auto opacity-[.5]" />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
