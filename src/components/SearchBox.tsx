
import React from 'react';

const SearchBox = () => {
  return (
    <div className="absolute left-0 bottom-32 md:bottom-24 px-4 md:px-8 w-full md:w-72">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white border border-white/40 px-4 py-2 w-full focus:outline-none focus:border-white"
        />
        <label className="absolute left-0 top-0 px-4 py-2 text-white/50 pointer-events-none">
          Search
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
