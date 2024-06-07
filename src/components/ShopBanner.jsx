import React from "react";

const ShopBanner = () => {
  return (
    <div className=" container mx-auto">
      <h2 className="text-2xl font-bold">Shop</h2>
      {/* view route */}
      <h5 className="text-base font-medium flex lg:justify-end justify-center items-center text-text_hover_color ">
        Home <span className="text-xl mx-4"> &gt; </span> product
      </h5>
    </div>
  );
};

export default ShopBanner;
