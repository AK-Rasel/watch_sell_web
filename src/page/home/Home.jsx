import React from "react";
import Banner from "./Banner";
import WatchAbout from "./WatchAbout";
import WatchFeatures from "./WatchFeatures";
import Experience from "./Experience";
import AnimatedComponent from "./AnimatedComponent";

const Home = () => {
  return (
    <section>
      <Banner />
      <WatchAbout />
      <WatchFeatures />
      {/* <AnimatedComponent /> */}
      <Experience />
    </section>
  );
};

export default Home;
