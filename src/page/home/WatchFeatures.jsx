import React from "react";
import SideTitle from "../../components/SideTitle";
import mobileHero from "../../assets/Home/mobileHero2.jpg";
import { CiMicrophoneOn, CiWifiOn } from "react-icons/ci";
import FeaturesContact from "../../components/FeaturesContact";
import { SlScreenSmartphone } from "react-icons/sl";
import { FiWifi } from "react-icons/fi";

const WatchFeatures = () => {
  return (
    <div className="container mx-auto my-60">
      <div className="flex justify-start ">
        <div className="w-1/2 flex-1">
          <img src={mobileHero} alt="mobileHero" />
        </div>
        <div className="w-1/2 flex-1">
          {/* title */}
          <SideTitle subTitle={"MEET WITH OUR"} title={"Splendid Features"} />
          {/* Features */}
          <div className="flex flex-col space-y-20">
            {/* Voice Recognition */}
            <FeaturesContact
              icon={<CiMicrophoneOn className="text-4xl text-primary_color" />}
              title={"Voice Recognition"}
              docs={[
                "Lorem ipsum dolor sit amet,",
                "consectetur adipiscing elit. Mauris",
              ]}
            />
            {/* Connect with your phone */}
            <FeaturesContact
              icon={
                <SlScreenSmartphone className="text-3xl text-primary_color" />
              }
              title={"Connect with your phone"}
              docs={[
                "Lorem ipsum dolor sit amet,",
                "consectetur adipiscing elit. Mauris",
              ]}
            />
            {/* Any task at hand */}
            <FeaturesContact
              icon={
                <FiWifi className="rotate-45 text-3xl text-primary_color" />
              }
              title={"Any task at hand"}
              docs={[
                "Lorem ipsum dolor sit amet,",
                "consectetur adipiscing elit. Mauris",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchFeatures;
