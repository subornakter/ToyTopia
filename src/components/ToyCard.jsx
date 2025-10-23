import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import ratings  from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const ToyCard = ({toy}) => {
  const { toyName, price, rating, toyId,pictureURL,availableQuantity, subCategory } = toy;
    return (
        <div>
                 <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
          <div className='flex justify-between border-b border-gray-100 bg-gray-50 p-2 pt-4 items-center'>
            <h1 className='text-2xl font-bold'>{toyName}</h1>
               <FaRegHeart size={20} className="text-pink-500 mr-2" />
            </div>          
  <figure className='h-65 overflow-hidden'>
    <img className='w-full object-cover'
      src={pictureURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-sm font-semibold">Category: <span className='text-gray-500'> {subCategory}</span></h2>
    <h2 className="text-sm font-semibold">Quantity: <span className='text-gray-500'>{availableQuantity}</span></h2>
    <div className="card-actions justify-between">
<div className='bg-[#F1F5E8] text-green-600 rounded-2xl p-2'>
         <p className='flex items-center gap-2'>Price: ${price}</p>
</div>
   <div className='bg-[#FFF0E1] text-orange-600 rounded-2xl p-2'>
      <p className='flex items-center gap-2'><img className='w-[20px] h-[20px]' src={ratings} alt="" />Rating: {rating}</p>
   </div>

    </div>
    <div className="card-actions justify-center mt-4">
      <Link to={`/toyDetails/${toyId}`}><button className='btn bg-[#d72050] text-xl text-white'>View Details</button></Link>
    </div>
    </div>
</div>
        </div>
    );
};

export default ToyCard;