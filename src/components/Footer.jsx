import React from "react";
import Logo from "../assets/image.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full p-5">
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
        
        <h1 className="px-2 text-sm pt-2 border-t-2 border-primary">
          Design & developed by{" "}
          <span className="text-primary">Punit Shinde</span> contact for
          similiar websites or apps (9425421341)
        </h1>
      </div>
    </>
  );
};

export default Footer;
