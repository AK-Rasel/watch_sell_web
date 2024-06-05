import React, { useEffect } from "react";
import SideTitle from "../../components/SideTitle";
import VideoPlayer from "../../components/VideoPlayer";

const HowToWork = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bgDiv = document.getElementById("bg-div");
      bgDiv.style.backgroundPosition = `0px ${-window.scrollY * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-screen">
      <div className="bgImage w-full relative bg-cover bg-no-repeat bg-center bg-fixed">
        <div className="container mx-auto px-11 py-36">
          {/* text */}
          <div>
            <SideTitle
              subTitle={"HOW IT WORKS"}
              title={
                <>
                  <h2 className="pb-7 text-primary_color">
                    See for yourself.
                    {/* <span></span > <br /> */} <br />
                    <span className="text-secondary_background_color mt-10">
                      {" "}
                      Quick video introductionss
                    </span>
                  </h2>
                </>
              }
            />
            <p className="-mt-24 leading-loose text-lg text-secondary_background_color  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae odales <br /> lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>
          <div className="my-16">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
