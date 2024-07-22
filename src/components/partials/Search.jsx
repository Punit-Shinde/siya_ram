import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="w-[50%] h-10 text-black flex justify-around items-center bg-white rounded-full px-3 text-lg">
      <input
        className="w-[80%] outline-none select-none"
        placeholder="Search..."
        type="text"
      />
      <FiSearch />
    </div>
  );
};

export default Search;
