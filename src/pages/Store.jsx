import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("myCart")) || [];
    setCartItems(items);
    setLoading(false);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("myCart", JSON.stringify(updated));
    toast.info("Item removed from cart");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
        <title>Toytopia - Store</title>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Shopping Cart</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Review your selected products before checkout. Manage or remove any item easily.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-3">
        <h2 className="text-lg font-semibold text-gray-700">({cartItems.length}) Items in Cart</h2>
        <button className="bg-gradient-to-r from-[#1096B5] to-[#5ad0e8] hover:bg-[#00b57a] text-white font-medium py-2 px-5 rounded-md transition-colors">
          Proceed to Checkout
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-5 mt-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-5 border border-gray-100"
            >
              <div className="flex-shrink-0">
                <img className="w-36 h-24 object-cover rounded-md" src={item.image} alt={item.name} />
              </div>

              <div className="flex-1 w-full md:ml-6 mt-3 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-1">{item.category}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="font-semibold text-[#00D390] text-lg">${item.price}</span>
                  <span className="text-gray-400">Qty: {item.quantity}</span>
                </div>
              </div>

              <div className="mt-4 md:mt-0">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-[#1096B5] hover:bg-[#5ccde7] text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;



