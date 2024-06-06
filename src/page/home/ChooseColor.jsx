import React from "react";
import green from "../../assets/Home/GreenWatch.jpg";
import pupal2 from "../../assets/Home/prapal.jpg";
import yowall from "../../assets/Home/Yowall.jpg";
import Card from "../../components/Card";
const colorVerity = [
  {
    id: 1,
    img: green,
    band: "WRIST BAND",
    colorName: "Mint Green",
    color: "#99FFEE",
    price: 19.99,
  },
  {
    id: 2,
    img: pupal2,
    band: "WRIST BAND",
    colorName: "Purple Berry ",
    color: "#CEA9FF",
    price: 24.99,
  },
  {
    id: 3,
    img: yowall,
    band: "WRIST BAND",
    colorName: "Golden Sunset",
    color: "#F3B560",
    price: 29.99,
  },
];

const ChooseColor = () => {
  return (
    <section className="bg-secondary_background_color">
      {/* container ----start */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title ---start*/}
        <div className="text-center md:w-[620px] mx-auto py-24">
          <h3 className="text-sm font-semibold md:mb-5 mb-2 text-text_hover_color">
            ADJUSTABLE STRAPS
          </h3>
          <h2 className="xl:text-5xl lg:text-[2.75rem] md:text-4xl text-3xl leading-tight md:font-black font-extrabold text-text_white">
            Choose the best <br /> color for your activity
          </h2>
        </div>
        {/* Title ---end*/}
        {/* card ---start*/}
        <div className="flex flex-row lg:flex-nowrap      flex-wrap justify-center items-center  gap-4">
          {colorVerity?.map((colorWatch) => (
            <Card
              key={colorWatch.id}
              img={colorWatch.img}
              band={colorWatch.band}
              colorName={colorWatch.colorName}
              price={colorWatch.price}
              color={colorWatch.color}
            />
          ))}
        </div>
        {/* card ---end*/}
        {/* show more---btn */}
        <div className="flex justify-center">
          <button className="my-24 btn bg-secondary_background_color px-8 border-2  hover:text-text_hover_color duration-500 transition-all ease-in-out text-white py-4 text-sm font-bold uppercase rounded-full">
            Show More
          </button>
        </div>
        {/* show more---end */}
      </div>
      {/* container----end */}
    </section>
  );
};

export default ChooseColor;
