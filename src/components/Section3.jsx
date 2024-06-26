import React, { useEffect, useState } from "react";
import DragBox1 from "./DragBox1";
import DragBox2 from "./DragBox2";
import DragBox3 from "./DragBox3";
import DragBox4 from "./DragBox4";
import DragBox5 from "./DragBox5";
import MobileSection3Inner from "./MobileSection3Inner";

function Section3({ index, width, section3Ref }) {
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
  const [zindex, setzindex] = useState([1, 2, 3, 4, 5]);
  function setZ(cardIndex) {
    const currentMaxZ = Math.max(...zindex);
    let temp = [...zindex];
    console.log(temp);
    temp[cardIndex] = currentMaxZ + 1;
    setzindex(temp);
  }

  if (width > 768) {
    return (
      <div
        ref={section3Ref}
        className="flex items-center justify-center flex-col py-[100px] my-[100px] gap-[2rem]"
      >
        <h4 className="text-[70px] text-white tracking-[-5px] monospace">
          Discover <span style={{ color: colorArr[index] }}>me</span>
        </h4>
        <div
          id="dragContainer"
          className="h-[650px] w-[90%] relative overflow-hidden"
        >
          <DragBox1 zindex={zindex} setZ={setZ} />
          <DragBox2 zindex={zindex} setZ={setZ} />
          <DragBox3 zindex={zindex} setZ={setZ} />
          <DragBox4 zindex={zindex} setZ={setZ} />
          <DragBox5 zindex={zindex} setZ={setZ} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col py-[200px] gap-[2rem]">
        <h4
          style={{ fontSize: width > 768 ? "70px" : "10vw" }}
          className=" text-white tracking-[-5px] monospace"
        >
          Discover <span style={{ color: colorArr[index] }}>me</span>
        </h4>
        <div className="">
          <MobileSection3Inner />
        </div>
      </div>
    );
  }
}

export default Section3;
