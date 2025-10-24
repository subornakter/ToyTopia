import React, { useEffect } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import icon from '../assets/icon-ratings.png';
import { toast } from 'react-toastify';

const ToyDetails = () => {
  const { toyId } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const toy = data.find((p) => p.toyId === Number(toyId));

  if (!toy) {
    return <p className="text-center mt-10 text-red-500">Toy not found!</p>;
  }

  const {
    toyName,
    sellerEmail,
    sellerName,
    price,
    rating,
    description,
    pictureURL,
    availableQuantity,
    subCategory
  } = toy;

  useEffect(() => {
    document.title = `Toy Details | ${toyName}`;
  }, [toyName]);

  const handleAddToCart = () => {
    const storedToys = JSON.parse(localStorage.getItem('myCart')) || [];

    const existing = storedToys.find((t) => t.id === toyId);
    let updatedToys;

    if (existing) {
      // Increase quantity if toy already exists
      updatedToys = storedToys.map((t) =>
        t.id === toyId ? { ...t, quantity: t.quantity + 1 } : t
      );
    } else {
      // Add new toy
      const newToy = {
        id: toyId,
        name: toyName,
        image: pictureURL,
        category: subCategory,
        price,
        quantity: 1
      };
      updatedToys = [...storedToys, newToy];
    }

    localStorage.setItem('myCart', JSON.stringify(updatedToys));
    toast.success(`${toyName} added to your cart!`);
    navigate('/store');
  };

  return (
    <div className="max-w-screen-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
      {/* Toy Info */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-11/12 md:w-3/4 mt-10">
        <div className="flex-shrink-0 bg-gray-50 p-10 rounded-md shadow-sm">
          <img src={pictureURL} alt={toyName} className="h-[300px] w-full object-contain mx-auto" />
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{toyName}</h2>
          <div className="border-t border-gray-300 my-3"></div>
          <p className="text-gray-600 font-medium">
            Category: <span className="text-[#3ba6bb] font-semibold">{subCategory}</span>
          </p>
          <p className="text-gray-600 font-medium">
            Sell By: <span className="text-[#3ba6bb] font-semibold">{sellerName}</span>
          </p>
          <p className="text-gray-600 font-medium">
            Seller Email: <span className="text-[#3ba6bb] font-semibold">{sellerEmail}</span>
          </p>
          <div className="border-t border-gray-300 my-3"></div>

          <div className="flex justify-between mt-8">
            <div className="flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-5 inline-block mr-1" src={icon} alt="star" />
                ))}
              </div>
              <h1 className="text-xl md:text-2xl font-bold">{rating}</h1>
            </div>

            <div className="flex-col items-center">
              <p className="text-gray-500 text-sm md:text-xl mr-2 md:mr-0">Price</p>
              <h1 className="text-xl md:text-2xl font-bold">${price}</h1>
            </div>

            <div className="flex-col items-center">
              <p className="text-gray-500 text-sm md:text-xl">Total Quantity</p>
              <h1 className="text-xl md:text-2xl font-bold">{availableQuantity}</h1>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold mb-2">Description</h1>
            <p className="text-gray-500">{description}</p>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn hover:bg-[#00D390] bg-[#26879b] text-white rounded-md p-3 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Try Now Form */}
      <div className="mt-12 max-w-lg mx-auto bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-[#2bb2d1] mb-6">Try Now Toy</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value.trim();
            const email = e.target.email.value.trim();
            if (!name || !email) {
              toast.error('Please fill in all fields');
              return;
            }
            toast.success(`Thank you ${name}! Your request has been received.`);
            e.target.reset();
          }}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1096B5] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Try Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;

