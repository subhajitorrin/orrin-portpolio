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
        <Overlay
          setindex={setindex}
          index={index}
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
          section5Ref={section5Ref}
        />
      )}
      <Section1 index={index} width={width} section1Ref={section1Ref} />
      <Section2 index={index} width={width} section2Ref={section2Ref} />
      <Section3 index={index} width={width} section3Ref={section3Ref} />
      <Section5 index={index} width={width} section5Ref={section5Ref} />
      <Section4 index={index} width={width} section4Ref={section4Ref} />
    </div>
  );
}

export default Home;
