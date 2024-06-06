import React from "react";
import SideTitle from "../../components/SideTitle";
import experienceHero from "../../assets/Home/experienceHero.jpg";
import ExperienceContent from "../../components/ExperienceContent";

const Experience = () => {
  return (
    <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
      <div className="flex lg:flex-row flex-col-reverse justify-between lg:justify-end items-center w-full gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 md:px-28 px-8 lg:px-0">
          {/* title */}
          <SideTitle subTitle="NOW UPGRADED FOR" title="Best Experience" />
          {/* content */}
          <div className="flex flex-col gap-16 mt-8 lg:mt-0">
            {/* 1 */}
            <ExperienceContent
              value={30}
              title="+ Increased storage"
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
            {/* 2 */}
            <ExperienceContent
              value={80}
              title="+ Battery life"
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
            {/* 3 */}
            <ExperienceContent
              value={60}
              title="+ Display surface"
              docs={[
                "Lorem ipsum dolor sit amet, con",
                "sectetur adipiscing elit. Mauris",
              ]}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center md:px-0 px-10">
          <img
            src={experienceHero}
            alt="experienceHero"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
