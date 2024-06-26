import React, { useRef } from "react";
import Overlay from "./Overlay";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function Home({ setindex, index, width }) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  return (
    <div className="home opacity-0 w-full select-none hidden">
      {width > 768 && (
        <Overlay setindex={setindex} index={index} section1Ref={section1Ref} />
      )}
      <Section1 index={index} width={width} section1Ref={section1Ref} />
      <Section2 index={index} width={width} />
      <Section3 index={index} width={width} />
      <Section5 index={index} width={width} />
      <Section4 index={index} width={width} />
    </div>
  );
}

export default Home;
