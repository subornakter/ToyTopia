import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from "react-router";
import ToyCard from '../components/ToyCard';
import { Link } from 'react-router';
const Home = () => {
      const data = useLoaderData();
        const featuredProducts = data.slice(0, 6)
    return (
        <div className=''>
          <title>Toytopia - Home</title>
         <Banner></Banner>
        
           <div className='flex  flex-col items-center mt-10'>
                <h1 className='text-4xl font-bold'>Popular Toys</h1>
                <p className='text-gray-500 mt-2'>Explore All Trending toys on the Market developed by us</p>
            </div>
             <div className='max-w-screen-xl  mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-8 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
          {featuredProducts.map(toy => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
          <div className='flex justify-center items-center mb-5'>
              <Link className='btn text-white bg-gradient-to-r from-[#1096B5] to-[#5ad0e8]' to='/shop'>
        Show all
        </Link>
        </div>
        </div>
    );
};

export default Home;