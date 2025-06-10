import React from "react";

const CartProgress = ({
  whiteText,
  bgColor1,
  bgColor2,
  bgColor3,
  primaryLiteText,
  whiteText3,
  primaryLiteText3,
  whiteText2,
  primaryLiteText2,
}) => {
  //   const bgColor = "#294CFF";

  //   const whiteText = "text-text_white";
  //   const primaryLiteText = "text-primary_hover_color";
  return (
    <div className="  rounded-full my-16 bg-[#F6EFFF]">
      <div className="w-full flex justify-between  items-center text-center text-base font-bold">
        <h4
          className={`w-1/2 mx-auto text-center p-3 ${bgColor1} rounded-full ${whiteText} ${primaryLiteText}`}
        >
          View Cart
        </h4>
        <h4
          className={`w-1/2 mx-auto text-center p-3 ${bgColor2} rounded-full ${whiteText2} ${primaryLiteText2}`}
        >
          Checkout
        </h4>
        <h4
          className={`w-1/2 mx-auto text-center p-3 ${bgColor3} rounded-full ${whiteText3} ${primaryLiteText3}`}
        >
          Done
        </h4>
      </div>
    </div>
  );
};

export default CartProgress;
