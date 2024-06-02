import heroWatch from "../../assets/Home/WatchBanner.png";
import smallRing from "../../assets/Home/backgroundSmallEllipse.png";
import bigRing from "../../assets/Home/backgroundBiglEllipse.png";

const Banner = () => {
  return (
    <section className="h-screen bg-secondary_color  overflow-hidden ">
      <div className="container mx-auto relative">
        <div className=" flex flex-col lg:flex-row justify-between items-center  pt-[89px] ">
          <div className="w-1/2 mx-auto   ">
            {/* text */}
            <h1 className="font-bold text-8xl text-white">
              Lifestyle <br /> Smart
              <span className="text-primary_color">Watch</span>
            </h1>
            <h3 className="mt-20 text-white text-lg uppercase font-semibold mb-10">
              technology of the future
            </h3>
            <p className="text-text_white w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* image */}
          <div className="w-1/2 mx-auto  relative z-10">
            <img className="ml-56 mt-4 " src={heroWatch} alt="Watch" />
          </div>
        </div>
        <div>
          {/* smallRing */}
          <img
            className="absolute w-[600px] -top-[200px] -left-[600px] "
            src={smallRing}
            alt="Ring"
          />
          {/* bigRing image behind heroWatch */}
          <img
            className="absolute top-[100px] left-[800px]  w-[5000px]"
            src={bigRing}
            alt="big Ring"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
