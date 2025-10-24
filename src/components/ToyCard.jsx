import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import icon  from '../assets/icon-ratings.png'
import { Link } from 'react-router';
const ToyCard = ({toy}) => {
  const { toyName, price, rating, toyId,pictureURL,availableQuantity, subCategory } = toy;
    return (
        <div>
                 <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
          <div className='flex justify-between border-b border-gray-100 bg-gray-50 p-2 pt-4 items-center'>
            <h1 className='text-xl font-bold'>{toyName}</h1>
               <FaRegHeart size={20} className="text-pink-500 mr-2" />
            </div>          
  <figure className='h-65 overflow-hidden'>
    <img className='w-full object-cover'
      src={pictureURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-sm font-semibold">Category: <span className='text-gray-500'> {subCategory}</span></h2>
    
    <div className='flex gap-1 mb-2'>
                   <img className='w-5 inline-block mr-1' src={icon} alt="" />
               <img className='w-5 inline-block mr-1' src={icon} alt="" />
                <img className='w-5 inline-block mr-1' src={icon} alt="" />
           <img className='w-5 inline-block mr-1' src={icon} alt="" />
       <img className='w-5 inline-block mr-1' src={icon} alt="" />
   
                <span className='font-bold'>{rating}</span>
                 </div>
    <div className="card-actions justify-between">
<div className='bg-[#F1F5E8] text-green-600 rounded-2xl p-2'>
         <p className='flex items-center gap-2'><span className='text-green-700 font-semibold'>Price:</span> ${price}</p>
</div>
   <div className='bg-[#FFF0E1] text-orange-600 rounded-2xl p-2'>
      <p className='flex items-center gap-2'><span className='text-orange-700 font-semibold'>Quantity:</span> {availableQuantity}</p>
   </div>
   
       
             
               
    </div>
    <div className="card-actions w-full justify-center mt-4">
      <Link to={`/toyDetails/${toyId}`}><button className='btn bg-gradient-to-r from-[#1096B5] to-[#5ad0e8]  text-xl text-white'>View Details</button></Link>
    </div>
    </div>
</div>
        </div>
    );
};

export default ToyCard;