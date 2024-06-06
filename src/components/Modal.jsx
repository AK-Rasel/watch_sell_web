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
    <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="relative z-40 w-full h-full flex items-center justify-center">
        <div
          className={`bg-white rounded-lg overflow-hidden transform transition-all w-full sm:max-w-lg ${
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
              <SwiperSlide key={index}>
                <img
                  className="w-full h-auto object-cover"
                  src={image.watch}
                  alt={`Slide ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-6 right-8 z-50 text-5xl text-white"
      >
        <IoIosCloseCircleOutline />
      </button>
      <button
        onClick={handlePrev}
        className="absolute md:bottom-auto bottom-8 md:top-1/2 md:-translate-y-1/2 left-4 z-50 p-2 border-2 border-white rounded-full text-2xl text-white"
      >
        <GrPrevious />
      </button>
      <button
        onClick={handleNext}
        className="absolute md:bottom-auto bottom-8 md:top-1/2 md:-translate-y-1/2 right-4 z-50 p-2 border-2 border-white rounded-full text-2xl text-white"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Modal;
