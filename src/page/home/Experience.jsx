import React from "react";
import SideTitle from "../../components/SideTitle";
import experienceHero from "../../assets/Home/experienceHero.jpg";
import ProgressBar from "../../components/ProgressBar";
import ExperienceContent from "../../components/ExperienceContent";

const Experience = () => {
  return (
    <div className="container mx-auto my-60">
      <div className="flex justify-between items-center w-full ">
        <div className="w-1/2">
          {/* title */}
          <SideTitle subTitle={"MEET WITH OUR"} title={"Splendid Features"} />
          {/* content */}
          <div className="flex flex-1 flex-col gap-16 ">
            {/* 1 */}
            <ExperienceContent
              value={30}
              title={"+ Increased storage"}
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
            {/* 2 */}
            <ExperienceContent
              value={80}
              title={"+ Battery life"}
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
            {/* 3 */}
            <ExperienceContent
              value={30}
              title={"+ Display surface"}
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <img src={experienceHero} alt="experienceHero" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
