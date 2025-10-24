import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jessica Miller",
    img: "https://i.pravatar.cc/100?img=1",
    text: "My daughter absolutely loves these toys! The quality is amazing and they really help her stay creative and engaged. ",
  },
  {
    id: 2,
    name: "John Smith",
    img: "https://i.pravatar.cc/100?img=2",
    text: "I was impressed by the fast delivery and safe packaging. My son hasn’t stopped playing since it arrived. Worth every penny!",
  },
  {
    id: 3,
    name: "Andrea Lopez",
    img: "https://i.pravatar.cc/100?img=3",
    text: "These toys are not just fun, they’re educational too! My twins are learning colors and shapes while playing — love that balance of fun and learning.",
  },
  {
    id: 4,
    name: "Michael Carter",
    img: "https://i.pravatar.cc/100?img=4",
    text: "Customer service was excellent! They responded quickly and helped me pick the right toy for my 5-year-old. Great experience overall.",
  },
  {
    id: 5,
    name: "Sophia Turner",
    img: "https://i.pravatar.cc/100?img=5",
    text: "The toys are adorable and super durable. My little one tends to drop things a lot, but these still look brand new after weeks of use!",
  },
];

const RatingSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Hear from Other Happy Parents
      </h2>
      <p className="text-gray-500 mb-8 md:mb-10 text-sm sm:text-base">Customer testimonials</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-10"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-pink-50 border border-pink-100 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-between h-full text-left hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex gap-1 mb-2 sm:mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">{`“${t.text}”`}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-pink-300"
                />
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{t.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RatingSection;

