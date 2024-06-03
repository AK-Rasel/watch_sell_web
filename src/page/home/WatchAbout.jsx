import React from "react";

const WatchAbout = () => {
  return (
    <section className="container mx-auto px-11">
      <div className="text-center md:w-[620px] mx-auto lg:mt-[200px] mt-24 ">
        <h3 className="text-sm font-semibold md:mb-5 mb-2 text-text_hover_color ">
          ABOUT OUR WATCHES
        </h3>
        <h2 className="xl:text-5xl lg:text-[2.75rem] md:text-4xl text-3xl leading-tight md:font-black font-extrabold text-secondary_background_color">
          <span className="text-primary_color">
            New <span className="text-secondary_color">,</span> Improved
          </span>{" "}
          Design
          <br /> and Performance
        </h2>
        <p className="md:text-lg text-base md:mt-10 mt-5 text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          odales lectus, non ultrices nisi. In varius, leo non gravida.
        </p>
      </div>
    </section>
  );
};

export default WatchAbout;
