import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";

const Modal = ({ show, onClose, images, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [fade, setFade] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentIndex, 0); // Move to the current index without transition
    }
  }, [currentIndex]);

  if (!show) {
    return null;
  }

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 200); // Duration of the fade transition
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 200); // Duration of the fade transition
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-75">
      <div
        onClick={onClose}
        className="w-screen h-screen relative z-40 flex items-center justify-center"
      >
        <div
          className={`bg-white rounded-lg overflow-hidden transform transition-all sm:max-w-lg sm:w-full ${
            fade ? "fade" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Swiper
            ref={swiperRef}
            initialSlide={initialIndex}
            pagination={{
              type: "fraction",
            }}
            effect={"fade"}
            modules={[Pagination, EffectFade]}
          >
            {images.map((image, index) => (
              <SwiperSlide className="z-50" key={index}>
                <img
                  className="bg-secondary_color"
                  src={image.watch}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* close btn */}
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse absolute top-6 right-8 z-50">
          <button onClick={onClose}>
            <IoIosCloseCircleOutline className="box-shadow-hover text-5xl text-white" />
          </button>
        </div>
      </div>
      {/* next and prev btn */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-50 bottom-1/2">
        <button
          onClick={handlePrev}
          className="border-2 border-white rounded-full text-white p-2"
        >
          <GrPrevious className="text-white text-2xl" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-50 bottom-1/2">
        <button
          onClick={handleNext}
          className="border-2 border-white rounded-full text-white p-2"
        >
          <GrNext className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
