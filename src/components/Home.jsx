import React from "react";
import Overlay from "./Overlay";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function Home({ setindex, index, width }) {
  return (
    <div className="home opacity-0 w-full select-none hidden">
      {width > 768 && <Overlay setindex={setindex} index={index} />}
      <Section1 index={index} width={width}/>
      <Section2 index={index} width={width}/>
      <Section3 index={index} />
      <Section5 index={index} />
      {/* <Section4 index={index} /> */}
    </div>
  );
}

export default Home;
