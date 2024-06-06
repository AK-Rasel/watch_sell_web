import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ value, max }) => {
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = (value / max) * 100;
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      let start = 0;
      const duration = 1000; // duration of the animation in ms
      const frameDuration = 16; // roughly 60fps
      const totalFrames = duration / frameDuration;
      const increment = targetPercentage / totalFrames;

      const animate = () => {
        start += increment;
        if (start < targetPercentage) {
          setPercentage(start);
          requestAnimationFrame(animate);
        } else {
          setPercentage(targetPercentage);
        }
      };

      requestAnimationFrame(animate); // Start the animation
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, [targetPercentage]);

  return (
    <>
      <div className="text-base font-bold text-end mb-3 text-secondary_background_color">
        {Math.round(percentage) + "%"}
      </div>
      <div className="bg-primary_hover_color bg-opacity-15 rounded-full h-[1px] flex items-center">
        <div
          ref={progressBarRef}
          className="bg-primary_color h-[5px] rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
