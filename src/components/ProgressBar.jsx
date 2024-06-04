// ProgressBar.jsx
import React from "react";

const ProgressBar = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <>
      <div className="text-base font-bold text-end mb-3 text-secondary_background_color">
        {percentage + "%"}
      </div>
      <div className=" bg-primary_hover_color bg-opacity-15 rounded-full h-[1px] flex items-center">
        <div
          className="bg-primary_color h-[5px] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
