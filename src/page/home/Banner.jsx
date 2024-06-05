import heroWatch from "../../assets/Home/WatchBanner.png";
import smallRing from "../../assets/Home/backgroundSmallEllipse.png";
import bigRing from "../../assets/Home/backgroundBiglEllipse.png";
import { useEffect, useState } from "react";

const Banner = () => {
  return (
    <section className="h-screen bg-secondary_color  overflow-hidden ">
      <div className="max-w-[1600px] mx-auto relative mt-6">
        <div className=" flex flex-col lg:flex-row justify-evenly items-center relative lg:pt-[89px] md:pt-[100px] mx-9 md:px-0 z-10">
          <div className="xl:w-2/3 lg:w-1/2 md:w-4/5 mx-auto w-full md:mt-0 mt-[200px]">
            {/* text */}
            <h1 className="font-bold xl:text-8xl  lg:text-6xl md:text-[5rem] md:mb-[40px] text-white text-5xl leading-[62px] md:leading-none mb-12">
              Lifestyle <br /> Smart
              <span className="text-primary_color"> Watch</span>
            </h1>
            <h3 className="xl:mt-20 lg:mt-10 text-white xl:text-lg lg:text-base text-base md:text-3xl uppercase font-semibold xl:mb-10 lg:mb-5 mb-4">
              technology of the future
            </h3>
            <p className="text-text_white md:text-lg md:mb-11 md:mt-9 text-sm mb-[50px] lg:w-[600px] md:w-[400px] w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* image */}
          <div className=" xl:w-2/3 lg:w-1/2 mx-auto  relative z-10">
            <img
              // className="slide-left-img lg:ml-56 lg:mt-4  md:w-[550px]"
              className="slide-left"
              src={heroWatch}
              alt="Watch"
            />
          </div>
        </div>
        {/* rings */}
        <div>
          {/* smallRing */}
          <img
            className="slide-right absolute lg:w-[600px] xl:-top-[300px] xl:-left-[450px] lg:-top-[200px] lg:-left-[570px] md:-top-[200px] md:-left-[540px] top-[100px] -left-[100px] w-44 "
            src={smallRing}
            alt="Ring"
          />
          {/* bigRing image behind heroWatch */}
          <img
            className="slide-left absolute xl:top-[200px] xl:-right-[800px]  xl:max-w-[2000px] lg:w-full  lg:top-[200px] lg:-right-[650px] md:top-[80px] md:-right-2/3 md:max-w-[900px] z-0  top-[255px] -right-2/3 max-w-[500px]"
            src={bigRing}
            alt="big Ring"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
