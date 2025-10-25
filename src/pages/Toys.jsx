import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Loader from '../components/Loading';
import { CiSearch } from "react-icons/ci";
import ToyCard from '../components/ToyCard';

const Toys = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [toys, setToys] = useState([]);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setToys(data);
      setDataLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [data]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 200);
  };

  const term = search.trim().toLowerCase();
  const searchedToys = term
    ? toys.filter(item => item.toyName.toLowerCase().includes(term))
    : toys;

  return (
    <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-6 md:py-10'>
      <title>Toytopia - Toys</title>

      <div className='flex flex-col justify-center items-center mb-8'>
        <h1 className='text-3xl font-bold'>Our All Toys Collection</h1>
        <p className='text-gray-500 text-center'>
          Explore All Toys on the Shop developed by ToyTopia. We code for Millions.
        </p>
      </div>

      <div className='flex justify-between py-5 items-center flex-col md:flex-row gap-4'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-lg text-gray-500'>
            ({searchedToys.length}) Toys Found.
          </span>
        </h1>

        <label className='input flex items-center gap-2 border px-3 py-2 rounded-md bg-gray-100'>
          <CiSearch className='text-gray-500 text-xl' />
          <input
            value={search}
            onChange={handleSearch}
            type='search'
            placeholder='Search Toys...'
            className='bg-transparent outline-none w-full'
          />
        </label>
      </div>

      {dataLoading ? (
        <div className='flex justify-center items-center min-h-[40vh]'>
          <Loader />
        </div>
      ) : searchLoading ? (
        <Loader />
      ) : searchedToys.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex-1 mt-6">
          {searchedToys.map(toy => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <p className="text-2xl text-gray-600">No Toy Found</p>
        </div>
      )}
    </div>
  );
};

export default Toys;

