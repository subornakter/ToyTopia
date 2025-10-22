import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ToySlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
     <img
            src="https://i.postimg.cc/L5mp4j2Q/pic5.jpg"
            alt="Toy 1"
            className="w-full h-150 object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.postimg.cc/t4BHqsMt/pic3.jpg"
            alt="Toy 2"
            className="w-full h-150 object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.postimg.cc/DwytM2w5/pic4.png"
            alt="Toy 3"
            className="w-full h-150 object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ToySlider;
