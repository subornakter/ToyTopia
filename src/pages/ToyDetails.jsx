import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import icon from '../assets/icon-ratings.png'
const ToyDetails = () => {
    const {toyId} = useParams(); 
    const data = useLoaderData();
      const toy = data.find(p => p.toyId === Number(toyId));
      console.log(toy);
      const { toyName, sellerEmail,sellerName,price, rating,description, pictureURL,availableQuantity, subCategory } = toy;
    return (
         <div className='max-w-screen-9xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
      {/*  Info Section  */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-11/12 md:w-3/4 mt-10">
        <div className="flex-shrink-0 bg-gray-50 p-10 rounded-md shadow-sm">
          <img src={pictureURL} alt={toyName} className="h-[300px] w-full object-contain mx-auto" />
        </div>

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{toyName}</h2>
           <div className="border-t border-gray-300 my-3"></div>
            <p className="text-gray-600 font-medium">Category: <span className='text-[#3ba6bb] font-semibold'>{subCategory}</span></p>
          <p className="text-gray-600 font-medium">sell By: <span className='text-[#3ba6bb] font-semibold'>{sellerName}</span></p>
          <p className="text-gray-600 font-medium">seller Email: <span className='text-[#3ba6bb] font-semibold'>{sellerEmail}</span></p>
          <div className="border-t border-gray-300 my-3"></div>

          <div className="flex justify-between mt-8">
            <div className="flex-col items-center ">
              <div className='flex gap-1 mb-2'>
                <img className='w-5 inline-block mr-1' src={icon} alt="" />
            <img className='w-5 inline-block mr-1' src={icon} alt="" />
             <img className='w-5 inline-block mr-1' src={icon} alt="" />
        <img className='w-5 inline-block mr-1' src={icon} alt="" />
    <img className='w-5 inline-block mr-1' src={icon} alt="" />


              </div>
              <h1 className=" text-xl md:text-2xl font-bold">{rating}</h1>
            </div>
            <div className="flex-col items-center">
              
              <p className="text-gray-500 text-sm md:text-xl mr-2 md:mr-0">Price</p>
              <h1 className=" text-xl md:text-2xl font-bold">{price}M</h1>
            </div>
            
            <div className="flex-col items-center">
            
              <p className="text-gray-500 text-sm md:text-xl">Total Quantity</p>
              <h1 className=" text-xl md:text-2xl font-bold">{availableQuantity}K</h1>
            </div>
          </div>

          {/*  Description */}
      <div className="mt-8 ">
        <h1 className="text-2xl font-bold mb-2">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>

        
            <button
           
              className="btn hover:bg-[#00D390] bg-[#26879b] text-white rounded-md p-3"
            >
              Add to Cart
            </button>
        
        </div>
      </div>


     
    </div>
    );
};

export default ToyDetails;