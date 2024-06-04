// src/AnimatedComponent.js
import React from "react";

const AnimatedComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="path-to-your-image.jpg"
        alt="Animated"
        className="w-32 h-32 custom-animation"
      />
    </div>
  );
};

export default AnimatedComponent;
