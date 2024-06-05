import React from "react";
import Banner from "./Banner";
import WatchAbout from "./WatchAbout";
import WatchFeatures from "./WatchFeatures";
import Experience from "./Experience";
import AnimatedComponent from "./AnimatedComponent";
import HowToWork from "./HowToWork";
import ChooseColor from "./ChooseColor";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <section className="h-[8000px]">
      <Banner />
      <WatchAbout />
      <WatchFeatures />
      {/* <AnimatedComponent /> */}
      <Experience />
      <HowToWork />
      <ChooseColor />
      <Testimonial />
    </section>
  );
};

export default Home;
