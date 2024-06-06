import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import { CiZoomIn } from "react-icons/ci";
import Modal from "../../components/Modal";

import gallery5 from "../../assets/Home/gallery5.jpg";
import gallery6 from "../../assets/Home/gallery6.jpg";
import gallery7 from "../../assets/Home/gallery7.jpg";
import Watchwhite4 from "../../assets/Home/Watchwhite4.jpg";
import Watchwhite5 from "../../assets/Home/Watchwhite5.jpg";
import Watchwhite from "../../assets/Home/Watchwhite.jpg";

const watchVariety = [
  { watch: gallery5 },
  { watch: gallery6 },
  { watch: gallery7 },
  { watch: Watchwhite },
  { watch: Watchwhite4 },
  { watch: Watchwhite5 },
];

const WatchAbout = () => {
  const swiperRef = useRef(null);

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

  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModal = (images = [], index = 0) => {
    setShowModal(!showModal);
    setModalImages(images);
    setActiveIndex(index);
  };

  const handleBulletClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <section>
      <div
        id="bg-div"
        className="bgImage w-full relative bg-cover bg-no-repeat bg-center bg-fixed"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* text */}
          <div className="text-center md:w-[620px] mx-auto lg:pt-[200px] pt-24">
            <h3 className="text-sm font-semibold md:mb-5 mb-2 text-text_hover_color">
              ABOUT OUR WATCHES
            </h3>
            <h2 className="xl:text-5xl lg:text-[2.75rem] md:text-4xl text-3xl leading-tight md:font-black font-extrabold text-secondary_background_color">
              <span className="text-primary_color">
                New <span className="text-secondary_color">,</span> Improved
              </span>{" "}
              Design
              <br /> and Performance
            </h2>
            <p className="md:text-lg text-base md:my-10 my-5 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vitae odales lectus, non ultrices nisi. In varius, leo non
              gravida.
            </p>
          </div>
          {/* swiper */}
          <div className="lg:mt-[120px] pb-[200px] relative">
            <Swiper
              ref={swiperRef}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              watchSlidesProgress={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {watchVariety.map((watchItem, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden mx-2 group">
                    <div className="relative z-10">
                      <img
                        className="group-hover:scale-110 transition-all duration-300"
                        src={watchItem.watch}
                        alt=""
                        onClick={() => toggleModal(watchVariety, index)}
                      />
                    </div>
                    <div
                      className="imageHover cursor-pointer"
                      onClick={() => toggleModal(watchVariety, index)}
                    ></div>
                    <button
                      onClick={() => toggleModal(watchVariety, index)}
                      className="zoomBtn"
                    >
                      <CiZoomIn className="text-3xl opacity-100" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex lg:justify-start justify-center mt-8 gap-2">
              {watchVariety.map(
                (_, index) =>
                  index % 3 === 0 && (
                    <span
                      key={index}
                      className={`h-2 w-2  mx-1 rounded-full cursor-pointer ${
                        index === activeIndex
                          ? "bg-primary_color"
                          : "bg-primary_hover_color"
                      }`}
                      onClick={() => handleBulletClick(index)}
                    ></span>
                  )
              )}
            </div>
          </div>
        </div>
        <Modal
          show={showModal}
          onClose={() => toggleModal()}
          images={modalImages}
          initialIndex={activeIndex}
        />
      </div>
    </section>
  );
};

export default WatchAbout;
