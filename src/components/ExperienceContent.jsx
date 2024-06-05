import React from "react";
import ProgressBar from "./ProgressBar";

const ExperienceContent = ({ value, title, docs }) => {
  return (
    <div className="w-full">
      {" "}
      <h3 className="text-base  font-extrabold text-secondary_background_color">
        {title}
      </h3>
      <p className="text-base text-[#8D8698] mt-3">
        {docs?.map((doc, index) => {
          return (
            <React.Fragment key={index}>
              {doc} <br />
            </React.Fragment>
          );
        })}
      </p>
      <ProgressBar value={value} max={100} />
    </div>
  );
};

export default ExperienceContent;
