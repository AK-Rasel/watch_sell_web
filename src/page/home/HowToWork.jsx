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
    <section>
      <div
        id="bg-div"
        className="bgImage w-full relative bg-cover bg-no-repeat bg-center bg-fixed"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-36">
          {/* text */}
          <div>
            <SideTitle
              subTitle="HOW IT WORKS"
              title={
                <h2 className="text-primary_color leading-tight text-3xl sm:text-4xl lg:text-5xl">
                  See for yourself.
                  <br />
                  <span className="text-secondary_background_color">
                    Quick video introductions
                  </span>
                </h2>
              }
            />
            <p className="lg:mt-8 mb-10 leading-loose text-base sm:text-lg lg:text-xl text-secondary_background_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae molestie lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>

          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
