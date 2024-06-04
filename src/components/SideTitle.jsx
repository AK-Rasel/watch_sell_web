import React from "react";

const SideTitle = ({ subTitle, title }) => {
  return (
    <div>
      <h3 className="text-sm font-bold my-4 text-text_hover_color">
        {subTitle}
      </h3>
      <h2 className="text-5xl font-black mt-4 mb-28 text-secondary_background_color">
        {title}
      </h2>
    </div>
  );
};

export default SideTitle;
