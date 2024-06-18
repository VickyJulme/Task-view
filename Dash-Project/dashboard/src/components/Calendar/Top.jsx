// src/Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Top = () => {
  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded">
      <div className="flex items-center gap-2 rounded-md border ">
      <button className="px-4 py-2 rounded-md  hover:bg-indigo-600 text-black font-medium hover:text-white">List</button>
            <button className="px-4 py-2 rounded-md hover:bg-indigo-600 text-black font-medium hover:text-white ">Board</button>
            <button className="px-4 py-2 rounded-md hover:bg-indigo-600 text-black font-medium hover:text-white">Timeline</button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-4 pr-10 py-2 border rounded-full focus:outline-none font-normal"
        />
        <button
          onClick={handleSearchClick}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Top;
