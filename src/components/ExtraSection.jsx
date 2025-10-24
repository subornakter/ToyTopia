import React from 'react';

const ExtraSection = () => {
  return (
    <div className="flex  justify-center items-center max-w-6xl mx-auto w-full gap-5 mt-5">
      <div className="bg-[#b9e7f6] flex flex-col justify-center items-center rounded-lg p-10 w-100 text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://i.postimg.cc/pLG21w3T/Last-24-Hours.png"
          alt="Customer Care"
          className="w-20 mb-3"
        />
        <h1 className="text-[#12AEE0] font-bold text-xl">Customer Care</h1>
        <p className="text-gray-700">24h hour follow up</p>
      </div>

      <div className="bg-[#f8e9da] flex flex-col justify-center items-center rounded-lg p-10 w-100 text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://i.postimg.cc/8PwD78pX/Free-Shipping.png"
          alt="Free Ship"
          className="w-20 mb-3"
        />
        <h1 className="text-[#E87B16] font-bold text-xl">Free Ship</h1>
        <p className="text-gray-700">Free shipping for $150 and up</p>
      </div>

      <div className="bg-[#c6f9ca] flex flex-col justify-center items-center rounded-lg p-10 w-100 text-center shadow-md hover:shadow-lg transition">
        <img
          src="https://i.postimg.cc/sf4CLFhj/Get-Cash.png"
          alt="Return"
          className="w-20 mb-3"
        />
        <h1 className="text-[#06C825] font-bold text-xl">Return</h1>
        <p className="text-gray-700">Within 7 Days</p>
      </div>
    </div>
  );
};

export default ExtraSection;
