import "swiper/css";
import { useRef } from "react";
import women from "../../assets/Home/tyler-nix-626668-unsplash.jpg";
import women1 from "../../assets/Home/tyler-nix-626668-unsplash2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";

const clintTestimonial = [
  {
    img: women,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed, fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna. ",
    name: "The Rolling Stones",
    rating: 4.8,
  },
  {
    img: women1,
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed, fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna. ",
    name: "The Beatles",
    rating: 4.8,
  },
];

function Testimonial() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bgImage2 bg-no-repeat h-full w-full">
      <div className="container mx-auto py-20">
        {/* Title */}
        <div className="text-center md:w-[620px] mx-auto py-24 ">
          <h2 className="xl:text-5xl lg:text-[2.75rem]  md:text-4xl text-3xl  md:font-black font-extrabold text-secondary_background_color ">
            What our <br /> customers say
          </h2>
        </div>
        {/* slider */}
        <div className="relative">
          <Swiper ref={swiperRef} loop className="mySwiper">
            {clintTestimonial.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center transition-opacity duration-700">
                  <img
                    className="rounded-full mb-10"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="text-center  mx-80">
                    <p className=" text-lg text-text_hover_color">
                      {testimonial.description}
                    </p>
                    <p className=" text-xl my-7 font-extrabold text-primary_color">
                      {testimonial.name}
                    </p>
                    <p className="text-sm sm:text-base text-text_hover_color md:text-lg lg:text-xl xl:text-2xl">
                      {testimonial.rating}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handlePrev}
            className="absolute top-3  left-[35%]   p-2 z-20"
          >
            <GrPrevious className="hover:text-white  text-4xl   text-primary_hover_color " />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-3  right-[35%]  p-2 z-20"
          >
            <GrNext className="hover:text-white  text-4xl   text-primary_hover_color " />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
