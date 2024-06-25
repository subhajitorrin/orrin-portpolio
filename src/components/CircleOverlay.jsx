import React from "react";

function CircleOverlay({ index }) {
  const colorArr = [
    "#385D34",
    "#a2991f",
    "#d7651dcd",
    "#1fa2a0",
    "#39a82d",
    "#5c1fa2",
    "#a21f74",
    "#a21f1f",
  ];
  return (
    <div
      className="w-[650px] h-[650px] rounded-full blur-[250px]"
      style={{ backgroundColor: colorArr[index] }}
    ></div>
  );
}

export default CircleOverlay;
