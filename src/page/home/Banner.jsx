import heroWatch from "../../assets/Home/WatchBanner.png";
import smallRing from "../../assets/Home/backgroundSmallEllipse.png";
import bigRing from "../../assets/Home/backgroundBiglEllipse.png";

const Banner = () => {
  return (
    <section className=" bg-secondary_color  lg:max-h-none max-h-[90vh] overflow-hidden">
      <div className="md:w-full relative xl:w-[1440px] mx-auto md:mt-6 mt-36 px-7">
        <div className="flex  flex-col lg:flex-row  lg:px-14 xl:px-0 justify-end w-full items-center relative lg:pt-[89px] md:pt-[100px] z-10 text-center lg:text-start">
          {/* text */}
          <div className="lg:my-48 w-full slide-right">
            <h1 className="font-bold xl:text-8xl lg:text-6xl md:text-[5rem] md:mb-[40px] text-white text-5xl leading-[62px] md:leading-none mb-12">
              Lifestyle <br /> Smart{" "}
              <span className="text-primary_color">Watch</span>
            </h1>
            <h3 className="xl:mt-20 lg:mt-10 text-white xl:text-lg lg:text-base text-base md:text-3xl uppercase font-semibold xl:mb-10 lg:mb-5 mb-4">
              technology of the future
            </h3>
            <p className="text-text_white md:text-lg md:mb-11 md:mt-9 text-sm  mb-[50px]  w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* image */}
          <div className="w-full flex justify-end lg:justify-start relative xl:py-28">
            <img
              className="slide-left-img  xl:w-[700px] md:w-[400px]      w-[350px] "
              src={heroWatch}
              alt="Watch"
            />
          </div>
        </div>
        {/* rings */}
        <div>
          {/* smallRing */}
          <img
            className="slide-right absolute xl:w-[600px] xl:-top-[300px] xl:-left-[450px] lg:-top-[200px] lg:-left-[570px] md:-top-[300px] md:-left-[540px] top-[100px] -left-[100px] w-44"
            src={smallRing}
            alt="Ring"
          />
          {/* bigRing image behind heroWatch */}
          <img
            className="slide-left absolute xl:top-[200px] xl:-right-[800px] xl:max-w-[2000px] lg:w-full lg:top-[200px] lg:-right-[650px] md:top-[80px] md:-right-2/3 md:max-w-[900px] z-0 top-[255px] -right-2/3 max-w-[500px]"
            src={bigRing}
            alt="big Ring"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
