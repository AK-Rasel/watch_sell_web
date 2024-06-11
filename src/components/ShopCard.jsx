import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

const ShopCard = ({ product, handelCart }) => {
  const { _id: id, img, price, productInformation, colorName } = product;

  return (
    <div className=" flex flex-col gap-5">
      <Link to={`/product/${id}`}>
        <img className="w-full" src={img} alt="" />
      </Link>
      <div>
        <h3 className="text-lg   font-extrabold text-secondary_background_color">
          {colorName}
        </h3>
        <span className="text-base text-[#8D8698]">{productInformation}</span>
        <div className="flex items-center gap-5">
          <div className="w-full h-[1px] border "></div>
          <button
            onClick={() => handelCart(product)}
            className="w-16 h-12 flex  justify-center items-center bg-text_white rounded-full hover:bg-primary_color group cursor-pointer transition-all duration-500 ease-in-out"
          >
            <PiShoppingCart className="text-2xl text-text_hover_color group-hover:text-text_white cursor-pointer transition-all duration-500 ease-in-out" />
          </button>
        </div>
        <span className="text-lg font-bold text-secondary_background_color">
          £{price}
        </span>
      </div>
    </div>
  );
};

export default ShopCard;
