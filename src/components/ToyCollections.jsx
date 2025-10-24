import React from "react";

const ToyCollections = () => {
  const collections = [
    {
      name: "Playsets",
      img: "https://i.postimg.cc/Kzn5Dk5H/Isolation-Mode.png",
    },
    {
      name: "Control Toys",
      img: "https://i.postimg.cc/cJ1KbKZp/Isolation-Mode-1.png",
    },
    {
      name: "Educational Toys",
      img: "https://i.postimg.cc/XJCnH3GS/Isolation-Mode-2.png",
    },
    {
      name: "Eco-Friendly Toys",
      img: "https://i.postimg.cc/3NZ5VwKT/Isolation-Mode-3.png",
    },
    {
      name: "Stuffed Toys",
      img: "https://i.postimg.cc/8k4029RC/Group-53.png",
    },
  ];

  return (
    <div className="text-center my-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Find the Perfect Toy
      </h1>
      <p className="text-gray-500 mb-10">Our Collections</p>

      <div className="flex flex-wrap justify-center gap-8">
        {collections.map((toy, index) => (
          <div
            key={index}
            className="flex flex-col items-center  p-8 w-40 h-40 shadow-md hover:scale-105 transition-transform duration-300 relative"
          >
            <img
              src={toy.img}
              alt={toy.name}
              className="w-full h-auto mb-3 object-cover"
            />
            <h2 className="text-gray-700 font-semibold">{toy.name}</h2>
            <div className="absolute inset-0 -z-10">
              <div className="bg-blue-200 opacity-50 blur-2xl rounded-full w-36 h-36 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyCollections;
