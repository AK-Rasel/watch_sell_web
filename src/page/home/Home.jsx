import React from "react";
import Banner from "./Banner";
import WatchAbout from "./WatchAbout";
import WatchFeatures from "./WatchFeatures";
import Experience from "./Experience";
import AnimatedComponent from "./AnimatedComponent";
import HowToWork from "./HowToWork";
import ChooseColor from "./ChooseColor";
import Testimonial from "./Testimonial";
import SocialFooter from "./SocialFooter";
import Footer from "../../components/Footer";

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
      <Footer />
    </section>
  );
};

export default Home;
