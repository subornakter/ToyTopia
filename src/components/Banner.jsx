import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import balloon from '../assets/Balloon.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import ToyCollections from "./ToyCollections.jsx";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#e3f8fc] w-screen mx-auto rounded-lg">
        <div className="flex flex-col md:flex-row justify-around items-center px-4 md:px-10 pt-5 gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <img
              className="w-full max-w-xs mx-auto md:mx-0 h-40 md:h-20 object-contain"
              src="https://i.ibb.co.com/tMLyc3kg/Kids.png"
              alt=""
            />
            <h1 className="text-[#1096B5] mt-5 ml-0  text-3xl md:text-4xl font-bold">
              Play, learn, & grow!
            </h1>
            <p className="mt-2 text-gray-500 text-sm md:text-base">
              Buy all kinds of intellectual games, toys, puzzles in our online store and <br className="hidden md:block" />
              give your child the pleasure of love & entertainment.
            </p>
         <Link to="/toys">   <button className="mt-5 font-semibold flex gap-1 items-center bg-yellow-300 rounded-2xl p-2 mx-auto md:mx-0">
              Shop Now <FaArrowRight />
            </button></Link>
          </div>
          <div>
            <img
              className="w-full max-w-xs md:max-w-md h-64 md:h-80 object-contain mx-auto"
              src={balloon}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10 px-4 md:px-0">
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
              className="w-full h-45 md:h-120 object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://i.postimg.cc/t4BHqsMt/pic3.jpg"
              alt="Toy 2"
              className="w-full h-45 md:h-120 object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://i.postimg.cc/DwytM2w5/pic4.png"
              alt="Toy 3"
              className="w-full h-45 md:h-120 object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <ToyCollections />
    </div>
  );
};

export default Banner;
