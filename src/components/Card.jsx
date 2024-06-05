import React from "react";
import greenWatch from "../assets/Home/GreenWatch.jpg";
const Card = ({ img, band, colorName, price }) => {
  return (
    <div className="bg-secondary_color w-96">
      <div className="relative">
        <div className=" absolute z-20 top-12 w-full text-center">
          <h4 className="text-text_white text-sm">{band}</h4>
          <h2 className="text-cyan-500 font-bold text-4xl">{colorName}n</h2>
          <span className="text-text_white font-bold text-lg">
            {"$" + price}
          </span>
        </div>
        <img src={img} alt="greenWatch" />
      </div>
    </div>
  );
};

export default Card;
