import React from "react";
import SideTitle from "../../components/SideTitle";
import mobileHero from "../../assets/Home/mobileHero2.jpg";
import { CiMicrophoneOn, CiWifiOn } from "react-icons/ci";
import FeaturesContact from "../../components/FeaturesContact";
import { SlScreenSmartphone } from "react-icons/sl";
import { FiWifi } from "react-icons/fi";

const WatchFeatures = () => {
  return (
    <section className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
      <div className="flex lg:flex-row flex-col justify-center lg:justify-end items-center w-full gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 md:px-0 px-10 flex justify-center mb-4">
          <img
            src={mobileHero}
            alt="mobileHero"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 md:px-28 px-8 lg:px-0">
          {/* title */}
          <SideTitle subTitle="MEET WITH OUR" title="Splendid Features" />
          {/* Features */}
          <div className="flex flex-col space-y-10 mt-8 lg:mt-0">
            {/* Voice Recognition */}
            <FeaturesContact
              icon={<CiMicrophoneOn className="text-4xl text-primary_color" />}
              title="Voice Recognition"
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
              title="Connect with your phone"
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
              title="Any task at hand"
              docs={[
                "Lorem ipsum dolor sit amet,",
                "consectetur adipiscing elit. Mauris",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchFeatures;
