
import React from 'react';

const SearchBox = () => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="bg-transparent text-white border border-white/40 px-4 py-2">
          Search
        </div>
        <input
          type="text"
          placeholder=""
          className="bg-transparent text-white border-t border-r border-b border-white/40 px-4 py-2 w-64 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBox;
