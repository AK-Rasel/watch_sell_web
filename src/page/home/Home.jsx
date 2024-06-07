import React from "react";
import Banner from "./Banner";
import WatchAbout from "./WatchAbout";
import WatchFeatures from "./WatchFeatures";
import Experience from "./Experience";

import HowToWork from "./HowToWork";
import ChooseColor from "./ChooseColor";
import Testimonial from "./Testimonial";
import SocialFooter from "./SocialFooter";

const Home = () => {
  return (
    <section>
      <Banner />
      <WatchAbout />
      <WatchFeatures />
      {/* <AnimatedComponent /> */}
      <Experience />
      <HowToWork />
      <ChooseColor />
      <Testimonial />
      <SocialFooter />
    </section>
  );
};

export default Home;
