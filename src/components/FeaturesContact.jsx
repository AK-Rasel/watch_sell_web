import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";

const FeaturesContact = ({ icon, title, docs }) => {
  return (
    <div className="flex  justify-start">
      {/* icon */}
      <div className="w-[10%] mx-auto flex ">{icon}</div>
      {/* text */}
      <div className="w-[90%] mx-auto">
        <h3 className="text-base  font-extrabold text-secondary_background_color">
          {title}
        </h3>
        <p className="text-base text-[#8D8698] mt-3">
          {docs.map((doc) => {
            return (
              <>
                {doc} <br />
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default FeaturesContact;
