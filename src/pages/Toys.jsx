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

  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(data.map(item => item.subCategory))];

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
  let filteredToys = term
    ? toys.filter(item => item.toyName.toLowerCase().includes(term))
    : toys;

  if (selectedCategory !== "all") {
    filteredToys = filteredToys.filter(
      item => item.subCategory === selectedCategory
    );
  }

  if (sortOption === "priceLow") filteredToys.sort((a, b) => a.price - b.price);
  else if (sortOption === "priceHigh") filteredToys.sort((a, b) => b.price - a.price);
  else if (sortOption === "qtyLow") filteredToys.sort((a, b) => a.availableQuantity - b.availableQuantity);
  else if (sortOption === "qtyHigh") filteredToys.sort((a, b) => b.availableQuantity - a.availableQuantity);

  return (
    <div className='max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-6 md:py-10'>
      <title>Toytopia - Toys</title>

      <div className='flex flex-col justify-center items-center mb-8'>
        <h1 className='text-3xl font-bold'>Our All Toys Collection</h1>
        <p className='text-gray-500 text-center'>
          Explore All Toys on the Shop developed by ToyTopia. We code for Millions.
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        {/* Category */}
        <div className="flex flex-col w-full md:w-85">
          <label className="text-gray-700 mb-1 font-medium">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="flex flex-col flex-1">
          <label className="text-gray-700 mb-1 font-medium">Search</label>
          <div className='flex items-center gap-2 border px-3 py-2 rounded-md bg-gray-100'>
            <CiSearch className='text-gray-500 text-xl' />
            <input
              value={search}
              onChange={handleSearch}
              type='search'
              placeholder='Search Toys...'
              className='bg-transparent outline-none w-full'
            />
          </div>
        </div>

        {/* Sort */}
        <div className="flex flex-col w-full md:w-85">
          <label className="text-gray-700 mb-1 font-medium">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
          >
            <option value="default">Default</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="qtyLow">Quantity: Low → High</option>
            <option value="qtyHigh">Quantity: High → Low</option>
          </select>
        </div>
      </div>

      {/* Toys Count */}
      <h2 className='text-lg text-gray-500 mb-4'>
        ({filteredToys.length}) Toys Found
      </h2>

      {/* Content */}
      {dataLoading ? (
        <div className='flex justify-center items-center min-h-[40vh]'>
          <Loader />
        </div>
      ) : searchLoading ? (
        <Loader />
      ) : filteredToys.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredToys.map(toy => (
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
