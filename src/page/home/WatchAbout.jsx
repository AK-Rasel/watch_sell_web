// src/pages/WatchAbout.js
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import gallery5 from "../../assets/Home/gallery5.jpg";
import gallery6 from "../../assets/Home/gallery6.jpg";
import gallery7 from "../../assets/Home/gallery7.jpg";
import Watchwhite from "../../assets/Home/Watchwhite.jpg";
import Watchwhite2 from "../../assets/Home/Watchwhite2.jpg";
import Watchwhite3 from "../../assets/Home/Watchwhite3.jpg";
import Watchwhite4 from "../../assets/Home/Watchwhite4.jpg";
import Watchwhite5 from "../../assets/Home/Watchwhite5.jpg";

import { useEffect, useState } from "react";
import { CiZoomIn } from "react-icons/ci";
import Modal from "../../components/Modal";

const watchVariety = [
  { watch: gallery5 },
  { watch: gallery6 },
  { watch: gallery7 },
  { watch: Watchwhite4 },
  { watch: Watchwhite5 },
];

const WatchAbout = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bgDiv = document.getElementById("bg-div");
      bgDiv.style.backgroundPosition = `0px ${-window.scrollY * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const toggleModal = (imageUrl = null) => {
    setShowModal(!showModal);
    setModalImage(imageUrl);
  };

  return (
    <section>
      <div
        id="bg-div"
        className="bg-[url('./assets/Home/AllEllipes.jpg')] w-full bg-cover bg-no-repeat bg-center bg-fixed"
      >
        <div className="container mx-auto px-11">
          {/* Header */}
          <div className="text-center md:w-[620px] mx-auto lg:pt-[200px] pt-24 ">
            <h3 className="text-sm font-semibold md:mb-5 mb-2 text-text_hover_color ">
              ABOUT OUR WATCHES
            </h3>
            <h2 className="xl:text-5xl lg:text-[2.75rem] md:text-4xl text-3xl leading-tight md:font-black font-extrabold text-secondary_background_color">
              <span className="text-primary_color">
                New <span className="text-secondary_color">,</span> Improved
              </span>{" "}
              Design
              <br /> and Performance
            </h2>
            <p className="md:text-lg text-base md:mt-10 mt-5 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae odales lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>
          {/* Carousels */}
          <div className="lg:mt-[120px] pb-[200px] relative">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={3}
              className="mySwiper"
            >
              {watchVariety.map((watchItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden mx-2 group">
                      <div className="relative z-10">
                        <img
                          className="group-hover:scale-110 transition-all duration-300"
                          src={watchItem.watch}
                          alt=""
                          onClick={() => toggleModal(watchItem.watch)}
                        />
                      </div>
                      <div
                        className="imageHover cursor-pointer"
                        onClick={() => toggleModal(watchItem.watch)}
                      ></div>

                      <button
                        onClick={() => toggleModal(watchItem.watch)}
                        className="zoomBtn"
                      >
                        <CiZoomIn className="text-3xl opacity-100" />
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <Modal
          show={showModal}
          onClose={() => toggleModal()}
          imageUrl={modalImage}
        />
      </div>
    </section>
  );
};

export default WatchAbout;
