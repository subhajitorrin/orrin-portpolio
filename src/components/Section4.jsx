import React, { useEffect, useState } from "react";

function Section4() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className=" w-full flex items-end justify-center">
      <div className="py-[3rem] px-[10rem] flex-col gap-[4rem] flex items-center justify-center mb-[5rem] h-[450px] w-[80%] border border-[#404140] rounded-[10px]">
        <div className="w-full h-[60%] flex justify-between items-center">
          <div className="text-white text-[50px] w-[40%] leading-[90%] monospace">
            <p>Let's create something great together</p>
          </div>
          <div className="text-white h-full flex justify-end flex-col text-right gap-[1rem]">
            <p className="text-[40px] cursor-pointer monospace opacity-[.7] hover:opacity-[1] transition-all duration-300 ease-linear">
              → SEND ME AN EMAIL
            </p>
            <p className="text-[15px] opacity-[0.5] monospace">
              LOCAL TIME ► {formattedTime}
            </p>
          </div>
        </div>
        <div className="w-full border-t border-t-[#404140] h-[20%] flex justify-between items-center">
          <div className="">
            <div className="pl-2 pr-2 opacity-[.5]">
              <svg
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 25 25"
                id="scrutinizer-ci"
                className="cursor-pointer"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <path
                  fill="#ffffff"
                  d="M8.973 24c-2.478 0-5.031-.035-7.189-.098-.377-.012-.688-.302-.725-.677l-.056-.57c-.004-.049-.004-.098 0-.146.13-1.33.826-2.569 2.07-3.685.744-.657 1.61-1.135 2.578-1.422 1.161-.435 1.628-.435 6.093-.435l.253-.004c2.195-.033 3.187-.048 3.453-.08.038-.025.069-.051.097-.076.054-.135.071-.188.071-.573 0-.249.007-.385-.01-.479-.048-.044-.097-.092-.15-.138-.394-.108-2.503-.118-4.462-.118-3.479 0-4.028 0-4.476-.143-1.269-.275-2.413-.836-3.366-1.634-.925-.76-1.599-1.773-1.951-2.935-.336-1.538-.01-1.866.129-2.007.292-.289.308-.305 7.542-.277.018 0 .036.001.054.002 3.184.013 7.024.047 7.387.135.893.187 1.738.539 2.465 1.021 1.049.838 1.839 1.819 2.417 2.97C21.734 13.791 22 15.002 22 16.254c0 .898-.139 1.798-.403 2.602l-.011.037c-.622 1.861-1.892 3.413-3.584 4.4l-.305.151c-.027.016-.055.03-.083.043-.264.117-.539.21-.839.282l-.454.111c-.052.013-.105.02-.158.021C13.724 23.967 11.305 24 8.973 24zM2.528 22.422C4.513 22.473 6.772 22.5 8.973 22.5c2.293 0 4.671-.032 7.07-.096l.376-.092c.198-.048.371-.104.536-.174l.339-.167c1.331-.778 2.364-2.039 2.861-3.525l.726.188-.712-.235C20.385 17.741 20.5 17 20.5 16.254c0-1.033-.219-2.032-.652-2.97-.47-.935-1.125-1.749-1.935-2.398-.532-.352-1.198-.629-1.887-.775-.318-.039-3.075-.088-7.157-.104-.018 0-.036-.001-.054-.002-3.094-.015-5.24-.001-6.229.02.016.115.039.246.069.388.25.817.757 1.581 1.449 2.148.793.665 1.73 1.121 2.724 1.329.03.007.105.023.135.034C7.185 14 8.223 14 10.997 14c4.28 0 4.782.059 5.24.329.256.188.421.353.559.535.323.435.323.708.323 1.371 0 .622-.06.838-.187 1.15-.027.072-.103.231-.15.291-.167.211-.369.386-.599.52-.327.211-.327.211-4.162.269l-.265.004c-4.344 0-4.695.008-5.629.356-.805.24-1.481.612-2.056 1.121C3.198 20.729 2.679 21.561 2.528 22.422zM15.404 16.915c-.004.002-.008.004-.012.007C15.396 16.919 15.4 16.917 15.404 16.915zM7.004 8H2.006C1.903 8 1 7.964 1 6.705 1 5.823 1.454 4.21 2.45 2.749c1.185-1.738 2.784-2.695 4.502-2.695L14.51 0c.047 0 .095 0 .142 0 7.455 0 7.456.003 7.723.504l-.002.002c.212.405.133 1.051.014 1.559-.549 2.25-3.01 4.184-5.852 4.606C16.137 6.763 13 6.785 11.83 6.785c-.616.043-1.34.032-2.041.019-.638-.011-1.57-.027-1.935.051-.02.092-.048.256-.06.328C7.681 7.858 7.302 8 7.004 8zM2.51 6.5h3.896c.077-.284.199-.571.425-.787.025-.024.051-.046.079-.066.506-.365 1.343-.369 2.904-.343.669.013 1.362.022 1.965-.017 2.421-.002 4.242-.056 4.503-.095 2.258-.336 4.242-1.829 4.644-3.477.015-.066.028-.131.038-.192C20.089 1.5 18.101 1.5 14.516 1.5L6.957 1.554c-1.396 0-2.404.914-3.005 1.681C3.005 4.442 2.587 5.839 2.51 6.5z"
                />
              </svg>
            </div>
          </div>
          <div className="text-white flex gap-[4rem]">
            <p className="cursor-pointer transition-all duration-300 ease-linear opacity-[.5] hover:opacity-[1]">
              Linkedin
            </p>
            <p className="cursor-pointer transition-all duration-300 ease-linear opacity-[.5] hover:opacity-[1]">
              Github
            </p>
            <p className="cursor-pointer transition-all duration-300 ease-linear opacity-[.5] hover:opacity-[1]">
              Instagram
            </p>
            <p className="cursor-pointer transition-all duration-300 ease-linear opacity-[.5] hover:opacity-[1]">
              X
            </p>
          </div>
          <div className="">
            <p className="text-white opacity-[.3] text-[10px] ">
              Made by Subhajit Ghosh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
