import React from "react";
import Search from "./partials/Search";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full h-20 flex justify-around items-center">
      <FaHome className="text-3xl text-[#FFD60A]" />
      <Search />
      <div className="relative flex">
        <IoFastFood className="text-3xl text-[#FFD60A]" />
        <p className="absolute bg-white text-black font-semibold border-2 w-4 h-4 flex justify-center items-center rounded-full bottom-0 right-0">
          1
        </p>
      </div>
    </div>
  );
};

export default NavBar;
