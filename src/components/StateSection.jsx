import React from "react";
import { motion } from "framer-motion";

export default function StateSection() {
  const stats = [
    { number: "1,268", label: "Number Of Toys" },
    { number: "56+", label: "Types Of Toys" },
    { number: "4,000", label: "Number Of Buyers" },
    { number: "360+", label: "Favorite Person" },
  ];

  return (
    <section
      className="relative max-w-7xl mx-auto bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/cSNndJsr/bg.webp")`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#34afed] text-3xl md:text-4xl font-bold mb-4"
        >
        Our Journey 
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#609bb8] max-w-2xl mx-auto mb-10 text-md md:text-base"
        >
          A remarkable journey of innovation, creativity, and joy — bringing smiles 
          to thousands of children around the world.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Circle */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span className="text-orange-500 text-xl md:text-2xl font-bold">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <p className="mt-3 text-[#609bb8] text-md font-bold md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
