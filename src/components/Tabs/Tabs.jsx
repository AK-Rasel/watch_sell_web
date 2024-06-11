import React, { useState } from "react";
import TabList from "./TabList";
import TabPanel from "./TabPanel";

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (child.type === TabList) {
          return React.cloneElement(child, { activeIndex, setActiveIndex });
        }
        if (child.type === TabPanel) {
          return index === activeIndex + 1 ? child : null;
        }
        return child;
      })}
    </div>
  );
};
export default Tabs;
