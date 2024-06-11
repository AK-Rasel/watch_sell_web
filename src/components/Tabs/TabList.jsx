import React from "react";

const TabList = ({ children, activeIndex, setActiveIndex }) => {
  return (
    <div className="flex border-b-2 border-gray-300">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index),
        });
      })}
    </div>
  );
};
export default TabList;
