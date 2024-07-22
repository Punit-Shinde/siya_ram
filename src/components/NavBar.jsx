import React from "react";
import Search from "./partials/Search";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import Logo from "../assets/image.png";

const NavBar = () => {
  return (
    <div className="w-full h-20 flex justify-around items-center">
      {/* <FaHome className="text-3xl text-[#FFD60A]" />
      <Search />
      <div className="relative flex">
        <IoFastFood className="text-3xl text-[#FFD60A]" />
        <p className="absolute bg-white text-black font-semibold border-2 w-4 h-4 flex justify-center items-center rounded-full bottom-0 right-0">
          1
        </p>
      </div> */}
      <div className="flex justify-center items-center gap-5 m-2">
          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <h3 className="flex flex-col">
            <span className="text-primary font-bold text-3xl">Siya Ram's</span>{" "}
            <span>
              Cafe <span className="text-primary">&</span> Fast Food
            </span>
          </h3>
        </div>

    </div>
  );
};

export default NavBar;
