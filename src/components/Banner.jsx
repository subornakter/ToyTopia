import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import balloon from '../assets/Balloon.png'
import { FaArrowRight } from "react-icons/fa";

import ToyCollections from "./ToyCollections.jsx";
const Banner = () => {
  return (
   <div>
   <div className=" bg-[#e3f8fc] w-screen mx-auto h-100 rounded-lg">
    <div className="flex justify-around items-center px-10 pt-5">
      <div>
       <img className="w-full h-20" src="https://i.ibb.co.com/tMLyc3kg/Kids.png" alt="" />
        <h1 className="text-[#1096B5] mt-5 ml-3 text-4xl font-bold">Play, learn, & grow!
</h1>
<p className="ml-3 mt-2 text-gray-500">Buy all kinds of intellectual games, toys, puzzles in our store and <br /> give your child the pleasure of love & entertainment.</p>
 <button className="mt-5 font-semibold ml-3 flex gap-1 items-center bg-yellow-300 rounded-2xl p-2">Shop Now<FaArrowRight /></button>

      </div>
      <div>
         <img className="w-full h-80" src={balloon} alt="" />
      </div>
    </div>
   </div>
    
    <div className="w-full max-w-7xl mx-auto mt-10">
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

   <ToyCollections></ToyCollections>
   </div>
  );
};

export default Banner;
