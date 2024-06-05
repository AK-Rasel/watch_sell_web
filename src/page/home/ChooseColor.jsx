import React from "react";
import green from "../../assets/Home/GreenWatch.jpg";
import pupal2 from "../../assets/Home/prapal.jpg";
import yowall from "../../assets/Home/Yowall.jpg";
import Card from "../../components/Card";
const colorVerity = [
  {
    id: 1,
    img: green,
    band: "The Rolling Stones",
    colorName: "Red",
    price: 19.99,
  },
  {
    id: 2,
    img: pupal2,
    band: "The Beatles",
    colorName: "Blue",
    price: 24.99,
  },
  {
    id: 3,
    img: yowall,
    band: "Pink Floyd",
    colorName: "Black",
    price: 29.99,
  },
];

const ChooseColor = () => {
  return (
    <section className="bg-secondary_background_color">
      {/* container ----start */}
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center md:w-[620px] mx-auto py-24 ">
          <h3 className="text-sm font-semibold md:mb-5 mb-2 text-text_hover_color ">
            ADJUSTABLE STRAPS
          </h3>
          <h2 className="xl:text-5xl lg:text-[2.75rem] md:text-4xl text-3xl leading-tight md:font-black font-extrabold text-text_white">
            Choose the best <br /> color for your activity
          </h2>
        </div>
        {/* card */}
        <div className="flex justify-between items-center flex-grow flex-wrap">
          {colorVerity?.map((colorWatch) => {
            console.log(colorVerity.price);
            return (
              <Card
                key={colorWatch.id}
                img={colorWatch.img}
                band={colorWatch.band}
                colorName={colorWatch.colorName}
                price={colorWatch.price}
              />
            );
          })}
        </div>
        <div className="flex justify-center ">
          <button className="my-24  btn bg-secondary_background_color px-8 border-2 hover:border-primary_hover_color hover:duration-200 hover:transition-all text-white py-4 text-sm font-bold uppercase rounded-full ">
            Show More
          </button>
        </div>
      </div>
      {/* container----end */}
    </section>
  );
};

export default ChooseColor;
