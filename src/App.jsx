import React, { useEffect, useState } from "react";
import "./App.css";
import CircleOverlay from "./components/CircleOverlay";
import Loader from "./components/Loader";
import gsap from "gsap";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
// hehe
function App() {
  const [width, setwidth] = useState(window.innerWidth);
  const [progress, setProgress] = useState(0);
  const [index, setindex] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (progress === 100) {
      const t1 = gsap.timeline();
      t1.to(".loaderOverlay", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: function () {
          gsap.set(".loaderOverlay", { display: "none" });
          gsap.set(".home", { display: "block" });
        },
      });
      t1.to(
        ".circle1",
        {
          left: "0%",
          top: "50%",
          duration: 1,
          ease: "power1.inOut",
        },
        1
      );
      t1.to(
        ".circle2",
        {
          left: "80%",
          top: "2%",
          duration: 1,
          ease: "power1.inOut",
        },
        1
      );
      t1.to(
        ".home",
        {
          opacity: 1,
          duration: 1,
          delay: 1,
        },
        1
      );
    }
  }, [progress]);
  useEffect(() => {
    window.innerWidth > 768 ? setindex(4) : setindex(0);
    function handelResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);
  return (
    <div className="bg-[#0F0E0E] w-[100%] mainContainer opacity-0 ">
      <div className="w-screen h-screen fixed top-0 left-0 pointer-events-none">
        <span className="circle1 absolute top-[15%] left-[34%]">
          <CircleOverlay index={index} />
        </span>
        <span className="circle2 absolute top-[50%] left-[134%]">
          <CircleOverlay index={index} />
        </span>
      </div>
      <Loader progress={progress} width={width} />
      <Home setindex={setindex} index={index} width={width} />
    </div>
  );
}

export default App;
